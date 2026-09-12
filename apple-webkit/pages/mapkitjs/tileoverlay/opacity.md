> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/tileoverlay/opacity](https://developer.apple.com/documentation/mapkitjs/tileoverlay/opacity)

# opacity

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

A number that indicates a tile’s opacity.

## Declaration

```
get opacity(): number;
set opacity(opacity: number);
```

<a id="Discussion"></a>

## Discussion

Opacity can be a decimal value ranging from `0` to `1`, inclusive:

- An opacity value of `0` indicates tiles aren’t visible.
- An opacity value of `1` indicates tiles are completely opaque. A tile overlay with an opacity of `1` can still have an alpha channel and allow underlying overlays or the default tiles to show through.

The default value is `1`.

## See Also

### Setting overlay appearance

- [maximumZ](maximumz.md): The maximum zoom level for a tile overlay.
- [minimumZ](minimumz.md): The minimum zoom level for a tile overlay.
