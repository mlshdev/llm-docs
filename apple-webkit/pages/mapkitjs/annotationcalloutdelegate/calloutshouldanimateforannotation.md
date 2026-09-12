> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/annotationcalloutdelegate/calloutshouldanimateforannotation](https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/calloutshouldanimateforannotation)

# calloutShouldAnimateForAnnotation(annotation)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Method  
**Availability:** MapKit JS 5.0+

Determines whether the callout animates.

## Declaration

```
calloutShouldAnimateForAnnotation?(annotation: Annotation): boolean;
```

## Parameters

- `annotation`: The annotation for the callout.

<a id="return-value"></a>

## Return Value

This method returns a Boolean value that determines if the callout should be animated.

<a id="Discussion"></a>

## Discussion

This method determines whether an appearance annotation should run. The animation runs if the value is `true`.

## See Also

### Customizing callout appearance

- [calloutAnchorOffsetForAnnotation()](calloutanchoroffsetforannotation.md): Returns a point determining the callout’s anchor offset.
- [calloutShouldAppearForAnnotation()](calloutshouldappearforannotation.md): Determines whether the callout appears for an annotation.
- [calloutAppearanceAnimationForAnnotation()](calloutappearanceanimationforannotation.md): Returns a CSS animation to use when the callout appears.
