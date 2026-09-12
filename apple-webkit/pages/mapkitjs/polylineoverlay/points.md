> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/polylineoverlay/points](https://developer.apple.com/documentation/mapkitjs/polylineoverlay/points)

# points

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

An array of coordinate points that define the polyline overlay’s shape.

## Declaration

```
get points(): Coordinate[];
set points(points: Coordinate[]);
```

<a id="Discussion"></a>

## Discussion

MapKit JS defines the points in the polyline as an array of [Coordinate](../coordinate.md) points. A copy of the overlay’s array returns on read, so changing the array’s elements has no effect on the overlay. To change the overlay’s points, assign a new array. MapKit JS doesn’t draw a polyline with fewer than two points on the map.
