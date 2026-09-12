> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/coordinatespan/coordinatespanconstructor](https://developer.apple.com/documentation/mapkitjs/coordinatespan/coordinatespanconstructor)

# new CoordinateSpan(latitudeDelta, longitudeDelta)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Constructor  
**Availability:** MapKit JS 5.0+

Creates a new coordinate span object with the specified latitude and longitude deltas.

## Declaration

```
constructor(latitudeDelta?: number, longitudeDelta?: number);
```

## Parameters

- `latitudeDelta`: The amount of north-to-south distance (in degrees) to display for the map region. Unlike longitudinal distances, which vary based on the latitude, one degree of latitude is always approximately 111 km (69 mi.).
- `longitudeDelta`: The amount of east-to-west distance (in degrees) to display for the map region. The number of kilometers (or miles) that a longitude range spans varies based on the latitude. For example, one degree of longitude spans a distance of approximately 111 km (69 miles mi.) at the equator, approximately 88 km (or 55mi.) at 37º north latitude (the latitude of San Francisco), and shrinks to 0 km (0 mi.) at the poles.

<a id="Discussion"></a>

## Discussion

The latitude and longitude delta parameters need to be positive numbers. MapKit JS treats negative numbers as zero.

```javascript
const span = new mapkit.CoordinateSpan(.016, .016); // The initializer requires parameters in the order of latitude delta, longitude delta.
```

## See Also

### Creating a coordinate span

- [CoordinateSpanData](../coordinatespandata.md): A plain object representation of a coordinate span.
