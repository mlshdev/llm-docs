> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/placeselectionaccessorystyle](https://developer.apple.com/documentation/mapkitjs/placeselectionaccessorystyle)

# PlaceSelectionAccessoryStyle

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Enumeration  
**Availability:** MapKit JS 5.78.1+

The set of styles for configuring how a place selection accessory appears.

## Declaration

```
const PlaceSelectionAccessoryStyle: Readonly<{
    readonly Automatic: "automatic";
    readonly Callout: "callout";
    readonly FullCallout: "fullCallout";
    readonly CompactCallout: "compactCallout";
    readonly OpenInMaps: "openInMaps";
}>
type PlaceSelectionAccessoryStyle =
    (typeof PlaceSelectionAccessoryStyle)[keyof typeof PlaceSelectionAccessoryStyle];
```

## Topics

### Style values

- [Automatic](placeselectionaccessorystyle/automatic.md): A style that MapKit automatically chooses based on the size of the map view.
- [Callout](placeselectionaccessorystyle/callout.md): A style that selects between a full and compact presentation based on the map’s size.
- [CompactCallout](placeselectionaccessorystyle/compactcallout.md): A style that displays a compact, space-saving presentation.
- [FullCallout](placeselectionaccessorystyle/fullcallout.md): A style that displays a rich, detailed presentation.
- [OpenInMaps](placeselectionaccessorystyle/openinmaps.md): A style that displays a caption to open in Maps.

## See Also

### Working with styles

- [style](placeselectionaccessory/style.md): The visual appearance of the place selection accessory.
