> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/annotation/anchoroffset](https://developer.apple.com/documentation/mapkitjs/annotation/anchoroffset)

# anchorOffset

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

An offset that changes the annotation’s default anchor point.

## Declaration

```
get anchorOffset(): DOMPoint;
set anchorOffset(value: DOMPoint);
```

<a id="Discussion"></a>

## Discussion

By default, the annotation’s anchor point is the bottom center of the element.

The default anchor point works well for pin marker annotations. To choose a different anchor point, provide an offset from this point. Positive x-values move the element to the left, and positive y-values move the element up. For example, to indicate the center of a circular annotation as the anchor point, use an offset of `DOMPoint(0, -height / 2)`, where `height` is the height of the element.

## See Also

### Getting and setting annotation appearance

- [coordinate](coordinate.md): The annotation’s coordinate.
- [appearanceAnimation](appearanceanimation.md): A CSS animation that runs when the annotation appears on the map.
- [displayPriority](displaypriority-data.property.md): A numeric hint that the map uses to prioritize how it displays annotations.
- [padding](padding.md): Spacing to add around the annotation when showing items.
- [size](size.md): The desired dimensions of the annotation, in CSS pixels.
- [visible](visible.md): A Boolean value that determines whether the annotation is visible or hidden.
