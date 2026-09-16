> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkitjs/placedetail/place

# place

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.78.1+

The place that the place detail displays.

## Declaration

```
get place(): Place | null;
set place(value: Place | null);
```

<a id="Discussion"></a>

## Discussion

if this property is `null`, the place detail renders in a collapsed state and doesn’t show any information.

## See Also

### Working with place detail settings

- [colorScheme](colorscheme.md): The color scheme when displaying a place detail.
- [displaysMap](displaysmap.md): A Boolean value that indicates whether to display the map in the place detail.
- [element](element.md): The place detail’s DOM element.
- [ColorSchemes](colorschemes.md): Deprecated. A static property that allows you to access the Look Around color scheme enumeration.
