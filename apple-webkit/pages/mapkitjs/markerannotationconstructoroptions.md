> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/markerannotationconstructoroptions](https://developer.apple.com/documentation/mapkitjs/markerannotationconstructoroptions)

# MarkerAnnotationConstructorOptions

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface  
**Availability:** MapKit JS 5.0+

An object containing the options that create a marker annotation.

## Declaration

```
interface MarkerAnnotationConstructorOptions
    extends AnnotationConstructorOptions
```

## Topics

### Setting marker annotation properties

- [color](markerannotationconstructoroptions/color.md): The background color of the balloon.
- [glyphColor](markerannotationconstructoroptions/glyphcolor.md): The fill color of the glyph.
- [glyphText](markerannotationconstructoroptions/glyphtext.md): The text to display in the marker balloon.
- [glyphImage](markerannotationconstructoroptions/glyphimage.md): The image to display in the marker balloon.
- [selectedGlyphImage](markerannotationconstructoroptions/selectedglyphimage.md): The image to display in the balloon when the user selects the marker.
- [subtitleVisibility](markerannotationconstructoroptions/subtitlevisibility.md): A value that determines the behavior of the subtitle’s visibility.
- [titleVisibility](markerannotationconstructoroptions/titlevisibility.md): A value that determines the behavior of the title’s visibility.

## Relationships

### Inherits From

- [AnnotationConstructorOptions](annotationconstructoroptions.md)

## See Also

### Creating a marker annotation

- [MarkerAnnotation()](markerannotation/markerannotationconstructor.md): Creates a marker annotation at the coordinate location with provided options.
