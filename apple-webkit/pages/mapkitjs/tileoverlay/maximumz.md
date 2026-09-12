> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/tileoverlay/maximumz](https://developer.apple.com/documentation/mapkitjs/tileoverlay/maximumz)

# maximumZ

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

The maximum zoom level for a tile overlay.

## Declaration

```
get maximumZ(): number | null;
set maximumZ(maximumZ: number | null);
```

<a id="Discussion"></a>

## Discussion

The `maximumZ` value defaults to the maximum zoom level of MapKit JS tiles. The zoom level can go higher and expands the map’s zoom range, if necessary. MapKit JS requests the overlay tiles when the map is below or at this zoom level.

The default value is `null`.

## See Also

### Setting overlay appearance

- [opacity](opacity.md): A number that indicates a tile’s opacity.
- [minimumZ](minimumz.md): The minimum zoom level for a tile overlay.
