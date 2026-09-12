> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/annotation/padding](https://developer.apple.com/documentation/mapkitjs/annotation/padding)

# padding

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.16+

Spacing to add around the annotation when showing items.

## Declaration

```
get padding(): Padding;
set padding(value: PaddingData);
```

<a id="Discussion"></a>

## Discussion

Padding prevents any items from touching the edges of the map. Set `padding` to a [Padding](../padding.md) object (the default is no padding on all sides).

## See Also

### Getting and setting annotation appearance

- [coordinate](coordinate.md): The annotation’s coordinate.
- [anchorOffset](anchoroffset.md): An offset that changes the annotation’s default anchor point.
- [appearanceAnimation](appearanceanimation.md): A CSS animation that runs when the annotation appears on the map.
- [displayPriority](displaypriority-data.property.md): A numeric hint that the map uses to prioritize how it displays annotations.
- [size](size.md): The desired dimensions of the annotation, in CSS pixels.
- [visible](visible.md): A Boolean value that determines whether the annotation is visible or hidden.
