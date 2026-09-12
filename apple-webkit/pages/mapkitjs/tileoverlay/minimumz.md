> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/tileoverlay/minimumz](https://developer.apple.com/documentation/mapkitjs/tileoverlay/minimumz)

# minimumZ

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

The minimum zoom level for a tile overlay.

## Declaration

```
get minimumZ(): number | null;
set minimumZ(minimumZ: number | null);
```

<a id="Discussion"></a>

## Discussion

By default, the minimum zoom level for a tile overlay is the same as the minimum zoom level for MapKit JS built-in tiles. MapKit JS requests the overlay tiles when the map is above or at this zoom level.

The default value is `null`.

## See Also

### Setting overlay appearance

- [opacity](opacity.md): A number that indicates a tile’s opacity.
- [maximumZ](maximumz.md): The maximum zoom level for a tile overlay.
