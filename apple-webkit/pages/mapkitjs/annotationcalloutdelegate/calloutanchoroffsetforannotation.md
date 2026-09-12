> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/annotationcalloutdelegate/calloutanchoroffsetforannotation](https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/calloutanchoroffsetforannotation)

# calloutAnchorOffsetForAnnotation(annotation, size)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Method  
**Availability:** MapKit JS 5.0+

Returns a point determining the callout’s anchor offset.

## Declaration

```
calloutAnchorOffsetForAnnotation?(
    annotation: Annotation,
    size: Size,
): DOMPoint;
```

## Parameters

- `annotation`: The annotation for the callout.
- `size`: The width and height of the callout element, which MapKit JS determines.

<a id="return-value"></a>

## Return Value

The method returns a `DOMPoint` that you set as the callout’s `anchorOffset` property.

<a id="Discussion"></a>

## Discussion

MapKit JS calls this method after [calloutElementForAnnotation()](calloutelementforannotation.md) on the annotation’s callout delegate with `annotation` and `size` as parameters. The `size` parameter represents the size of the callout element, which MapKit JS determines. It’s an object with two number properties, `width` and `height`, and you can use them to compute the anchor offset.

Two offset values affect the position of the callout element:

- The [calloutOffset](../annotation/calloutoffset.md) property of the annotation, which is the offset of the callout element relative to the annotation element.
- The anchor offset, which is the offset of the callout relative to the annotation’s [calloutOffset](../annotation/calloutoffset.md).

The default value for the callout’s `anchorOffset` is `(0, 0)`, which means that the bottom center of the callout coincides with the callout offset of the selected annotation.

To choose a different offset, provide a `DOMPoint` where positive x-values move the element to the left, and positive y-values move the element up.

## See Also

### Customizing callout appearance

- [calloutShouldAppearForAnnotation()](calloutshouldappearforannotation.md): Determines whether the callout appears for an annotation.
- [calloutShouldAnimateForAnnotation()](calloutshouldanimateforannotation.md): Determines whether the callout animates.
- [calloutAppearanceAnimationForAnnotation()](calloutappearanceanimationforannotation.md): Returns a CSS animation to use when the callout appears.
