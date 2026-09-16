> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkitjs/coordinateregion/center

# center

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

The center point of the region.

## Declaration

```
get center(): Coordinate;
set center(coordinate: CoordinateData);
```

<a id="Discussion"></a>

## Discussion

Create a [Coordinate](../coordinate.md) with a latitude and longitude pair:

```javascript
const center = new mapkit.Coordinate(37.415, -122.048333); // latitude, longitude
```

## See Also

### Defining the region

- [span](span.md): The horizontal and vertical span representing the amount of map to display.
