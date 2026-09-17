> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkitjs/coordinate/equals

# equals(anotherCoordinate)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.0+

Returns a Boolean value indicating whether two coordinates are equal.

## Declaration

```
equals(anotherCoordinate: CoordinateData): boolean;
```

## Parameters

- `anotherCoordinate`: The coordinate to compare.

<a id="return-value"></a>

## Return Value

`true` if the coordinate specified by `anotherCoordinate` equals this coordinate; otherwise, `false`.

## See Also

### Comparing, copying, and converting coordinates

- [copy()](copy.md): Returns a copy of the coordinate.
- [toMapPoint()](tomappoint.md): Returns the map point that corresponds to the coordinate.
- [toUnwrappedMapPoint()](tounwrappedmappoint.md): Returns the unwrapped map point that corresponds to the coordinate.
