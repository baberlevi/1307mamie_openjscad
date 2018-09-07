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
    door = translate([0,3,5], door)
    return door
}

function pocket() {
    var pocket = cube({size: [64.5, 50.5, 20]})
    return pocket
}

function stabilizer(){
    var stabilizer = cube({size:[20, 80.5, 5]})
    stabilizer = translate([0,-15,0], stabilizer)
    return stabilizer
}
