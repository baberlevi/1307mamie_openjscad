// title      : Master bath outlet cover
// author     : Levi Baber
// license    : MIT License
// revision   : 20180831-1
// tags       : outlet
// file       : mirror_outlet_cover.jscad

function main () {
  return difference(
      cover(),
      union(
        outlet([0,32,0]),
        outlet([0,-8,0])
      )
  )
}

function outlet(location) {
    var outlet = difference(
        cylinder({r: 16.75, h: 10}),
        difference(
            cube({size: [20, 38.25, 10], center: [true, true, false]}),
            cube({size: [20, 28.25, 10], center: [true, true, false]})
        )
    )
    outlet = translate(location, outlet)
    return outlet
}

function cover(){
    var cover = difference(
    cube({size: [93, 160, 5], radius: 0.75, round: true}),
    cube({size: [87, 154, 3]}).translate([3,3,2])
    )
    cover = translate([-46.5, -80, 0], cover)
    return cover
}
