> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/maprect/equals](https://developer.apple.com/documentation/mapkitjs/maprect/equals)

# equals(anotherRect)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.0+

Compares whether two map rectangles are equal.

## Declaration

```
equals(anotherRect: MapRect): boolean;
```

## Parameters

- `anotherRect`: The map rectangle to use for comparison.

<a id="return-value"></a>

## Return Value

Returns `true` if a rectangle exactly matches `anotherRect`. Returns `false` if the origin point or size values are different.

## See Also

### Working with map rectangles

- [copy()](copy.md): Returns a copy of a map rectangle.
- [scale()](scale.md): Returns a scaled map rectangle for a map location.
- [toCoordinateRegion()](tocoordinateregion.md): Returns the region that corresponds to a map rectangle.
