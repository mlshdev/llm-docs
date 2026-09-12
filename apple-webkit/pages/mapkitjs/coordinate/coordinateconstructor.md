> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/coordinate/coordinateconstructor](https://developer.apple.com/documentation/mapkitjs/coordinate/coordinateconstructor)

# new Coordinate(latitude, longitude)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Constructor  
**Availability:** MapKit JS 5.0+

Creates a coordinate object with the specified latitude and longitude.

## Declaration

```
constructor(latitude?: number, longitude?: number);
```

## Parameters

- `latitude`: The latitude in degrees.
- `longitude`: The longitude in degrees.

<a id="Discussion"></a>

## Discussion

Create a new `mapkit.Coordinate` like this:

```javascript
const coordinate = new mapkit.Coordinate(37.415, -122.048333);	// latitude, longitude
coordinate.equals(otherCoordinate) // Returns true if otherCoordinate is at the same position (within a small margin of error).
```

## See Also

### Creating a coordinate

- [CoordinateData](../coordinatedata.md): A plain object representation of a coordinate.
