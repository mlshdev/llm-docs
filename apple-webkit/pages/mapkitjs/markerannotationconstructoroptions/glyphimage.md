> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/markerannotationconstructoroptions/glyphimage](https://developer.apple.com/documentation/mapkitjs/markerannotationconstructoroptions/glyphimage)

# glyphImage

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.0+

The image to display in the marker balloon.

## Declaration

```
glyphImage?:
    | ImageDelegate
    | ImageHashObject
    | ImageSource
    | Promise<ImageSource>
    | null;
```

## Mentioned In

- [MapKit JS 5](../mapkit-js-5.md)

<a id="Discussion"></a>

## Discussion

The glyph image value can be an object literal containing absolute or relative URLs to standard, 2x, and 3x Retina display assets, an [ImageDelegate](../imagedelegate.md), an [ImageSource](../imagesource.md) such as an `HTMLCanvasElement` or `ImageBitmap`, or a `Promise` that resolves to an [ImageSource](../imagesource.md). The framework requires at least one image at 20 x 20 pixels.

MapKit JS uses the default glyph image of a pin if you set [glyphImage](glyphimage.md) to `null` or `undefined`. If you specify both a [glyphImage](glyphimage.md) and [glyphText](glyphtext.md), the framework ignores the glyph image and displays the glyph text.

## See Also

### Setting marker annotation properties

- [color](color.md): The background color of the balloon.
- [glyphColor](glyphcolor.md): The fill color of the glyph.
- [glyphText](glyphtext.md): The text to display in the marker balloon.
- [selectedGlyphImage](selectedglyphimage.md): The image to display in the balloon when the user selects the marker.
- [subtitleVisibility](subtitlevisibility.md): A value that determines the behavior of the subtitle’s visibility.
- [titleVisibility](titlevisibility.md): A value that determines the behavior of the title’s visibility.
