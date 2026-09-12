> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/placeannotation/glyphimage](https://developer.apple.com/documentation/mapkitjs/placeannotation/glyphimage)

# glyphImage

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.74+

The glyph image for the place.

## Declaration

```
get glyphImage(): MapFeatureAnnotationGlyphImage | null;
```

<a id="Discussion"></a>

## Discussion

Not all places have a glyph image. When a place does, this property returns a [MapFeatureAnnotationGlyphImage](../mapfeatureannotationglyphimage.md) object that allows you to access the glyph image. You can’t set the glyph image property of the place annotation.

## See Also

### Annotation properties

- [title](../mapfeatureannotation/title.md): The title of the feature.
- [featureType](../mapfeatureannotation/featuretype.md): A value that describes the type of place the feature represents.
- [pointOfInterestCategory](../mapfeatureannotation/pointofinterestcategory.md): The point-of-interest category of the feature.
- [color](color.md): The color of the place.
- [selectedGlyphImage](selectedglyphimage.md): The selected glyph image for the place.
