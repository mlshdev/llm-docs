> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/coordinateregion/tomaprect](https://developer.apple.com/documentation/mapkitjs/coordinateregion/tomaprect)

# toMapRect()

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.0+ (deprecated in 6.0)

Returns the map rectangle that corresponds to the calling coordinate region.

> This conversion is mathematically imprecise. Use [MapRect](../maprect.md) directly to avoid inaccuracies.

## Declaration

```
toMapRect(): MapRect;
```

<a id="return-value"></a>

## Return Value

A [MapRect](../maprect.md) that corresponds to the calling [CoordinateRegion](../coordinateregion.md).

## Mentioned In

- [MapKit JS 6](../mapkit-js-6.md)
- [Migrating from Version 5 to Version 6](../migrating-from-version-5-to-version-6.md)

## See Also

### Comparing, copying, and converting regions

- [copy()](copy.md): Returns a copy of the calling coordinate region.
- [equals()](equals.md): Returns a Boolean value indicating whether two regions are equal.
- [toBoundingRegion()](toboundingregion.md): Returns the bounding region that corresponds to the specified coordinate region.
