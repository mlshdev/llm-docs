> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/markerannotationconstructoroptions/titlevisibility](https://developer.apple.com/documentation/mapkitjs/markerannotationconstructoroptions/titlevisibility)

# titleVisibility

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.0+

A value that determines the behavior of the title’s visibility.

## Declaration

```
titleVisibility?: FeatureVisibility;
```

<a id="Discussion"></a>

## Discussion

The title visibility controls the title that renders below the balloon part of the marker. The default value is [Adaptive](../featurevisibility/adaptive.md).

For adaptive visibility, the title is always visible in the normal state, by default. When the user selects the marker, the title is visible unless the marker’s selected state requires a callout.

## See Also

### Setting marker annotation properties

- [color](color.md): The background color of the balloon.
- [glyphColor](glyphcolor.md): The fill color of the glyph.
- [glyphText](glyphtext.md): The text to display in the marker balloon.
- [glyphImage](glyphimage.md): The image to display in the marker balloon.
- [selectedGlyphImage](selectedglyphimage.md): The image to display in the balloon when the user selects the marker.
- [subtitleVisibility](subtitlevisibility.md): A value that determines the behavior of the subtitle’s visibility.
