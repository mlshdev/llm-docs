> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/coordinateregion/coordinateregionconstructor](https://developer.apple.com/documentation/mapkitjs/coordinateregion/coordinateregionconstructor)

# new CoordinateRegion(center, span)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Constructor  
**Availability:** MapKit JS 5.0+

A rectangular geographic region that centers around a latitude and longitude coordinate.

## Declaration

```
constructor(center?: CoordinateData, span?: CoordinateSpanData);
```

## Parameters

- `center`: A [Coordinate](../coordinate.md) that’s the center point of the region.
- `span`: A [CoordinateSpan](../coordinatespan.md) that represents the amount of map to display. The span also defines the current zoom level that the map object uses.

<a id="Discussion"></a>

## Discussion

Create a coordinate region by passing a center coordinate and span to the constructor.

```javascript
const coordinate = new mapkit.Coordinate(37.415, -122.048333); // latitude, longitude
const span = new mapkit.CoordinateSpan(.016, .016); // latitude delta, longitude delta
const region = new mapkit.CoordinateRegion(coordinate, span);
```

## See Also

### Creating a coordinate region

- [CoordinateRegionData](../coordinateregiondata.md): A plain object representation of a coordinate region.
