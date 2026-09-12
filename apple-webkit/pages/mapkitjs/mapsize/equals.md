> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapsize/equals](https://developer.apple.com/documentation/mapkitjs/mapsize/equals)

# equals(anotherSize)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.0+

Compares the sizes of two maps and indicates whether they’re of equal value.

## Declaration

```
equals(anotherSize: MapSize): boolean;
```

## Parameters

- `anotherSize`: The map size to use for comparison.

<a id="return-value"></a>

## Return Value

Returns `true` if the `width` and `height` values of a map size exactly match the corresponding values of `anotherSize`. Returns `false` if the values aren’t an exact match.

## See Also

### Copying and comparing map sizes

- [copy()](copy.md): Returns a copy of the map size object.
