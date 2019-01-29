// title      : Pocket door track stabilizer
// author     : Levi Baber
// license    : MIT License
// revision   : 20180831-1
// tags       : pocket,door,track
// file       : pocket_track.jscad

function main () {
  return union(
    difference(
      pocket(),
      door()
    ),
    stabilizer()
  )
}

function door() {
    var door = cube({size: [64.5, 44.5, 44.5]})
    door = translate([0,2,5], door)
    return door
}

function pocket() {
    var pocket = cube({size: [64.5, 48.5, 20]})
    return pocket
}

function stabilizer(){
    var stabilizer = cube({size:[20, 78.5, 4]})
    stabilizer = translate([0,-15,0], stabilizer)

    stabilizer = union(
        stabilizer,
        temp_corner([0,63.5,0]),
        temp_corner([64.5, 48.5, 0]),
        temp_corner([64.5, 0, 0]),
        temp_corner([0, -15, 0])
        )


    return stabilizer
}

function temp_corner(location){
    var corner = cylinder({r:5, h: 0.1})
    corner = translate(location, corner)
    return corner
}
