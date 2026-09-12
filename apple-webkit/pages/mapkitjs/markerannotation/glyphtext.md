> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/markerannotation/glyphtext](https://developer.apple.com/documentation/mapkitjs/markerannotation/glyphtext)

# glyphText

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

The text to display in the marker balloon.

## Declaration

```
get glyphText(): string | null;
set glyphText(value: string | null);
```

<a id="Discussion"></a>

## Discussion

This property is the text to display in the balloon instead of displaying a glyph image. The default value is `null`. There’s a limited amount of space available for displaying glyph text. Specify no more than two or three characters.

If you specify both a [glyphImage](glyphimage.md) and [glyphText](glyphtext.md), MapKit JS ignores the glyph image, and displays the glyph text.

## See Also

### Setting the glyph image and text

- [glyphImage](glyphimage.md): The image to display in the marker balloon.
- [selectedGlyphImage](selectedglyphimage.md): The image to display in the marker balloon when the user selects the marker.
