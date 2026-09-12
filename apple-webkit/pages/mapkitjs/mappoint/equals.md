> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mappoint/equals](https://developer.apple.com/documentation/mapkitjs/mappoint/equals)

# equals(anotherPoint)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.0+

Indicates whether two map points are equal.

## Declaration

```
equals(anotherPoint: MapPoint): boolean;
```

## Parameters

- `anotherPoint`: A map location to use for comparison.

<a id="return-value"></a>

## Return Value

Returns `true` if the `x` and `y` values of the map point exactly match the corresponding values of `anotherPoint`. Returns `false` if the values aren’t an exact match.

## See Also

### Working with map points

- [copy()](copy.md): Returns a copy of the location.
- [toCoordinate()](tocoordinate.md): Converts a map point into a coordinate with latitude and longitude.
