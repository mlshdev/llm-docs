> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapshowitemsoptions/minimumspan](https://developer.apple.com/documentation/mapkitjs/mapshowitemsoptions/minimumspan)

# minimumSpan

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.0+

The minimum longitudinal and latitudinal span the map displays.

## Declaration

```
minimumSpan?: CoordinateSpanData;
```

<a id="Discussion"></a>

## Discussion

Set this value to ensure that [showItems()](../map/showitems.md) sets a map region no smaller than the minimum span specified.

## See Also

### Show item options

- [animate](animate.md): A Boolean value that determines whether the map animates as the map region changes to show the items.
- [padding](padding.md): Spacing that the framework adds around the computed map region when showing items.
- [cameraDistance](cameradistance.md): The distance from the center of the map to the camera, when showing the items.
