> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/annotationcalloutdelegate/calloutappearanceanimationforannotation](https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/calloutappearanceanimationforannotation)

# calloutAppearanceAnimationForAnnotation(annotation)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Method  
**Availability:** MapKit JS 5.0+

Returns a CSS animation to use when the callout appears.

## Declaration

```
calloutAppearanceAnimationForAnnotation?(annotation: Annotation): string;
```

## Parameters

- `annotation`: The annotation for the callout.

<a id="return-value"></a>

## Return Value

This method returns a string that describes the CSS animation to use for the callout appearance, just like the [appearanceAnimation](../annotation/appearanceanimation.md) property of [Annotation](../annotation.md).

<a id="Discussion"></a>

## Discussion

To animate a callout, MapKit JS calls this method on the annotation’s callout delegate with the annotation as a parameter. A standard callout (with or without custom content) uses a default animation if the callout doesn’t provide the appearance animation.

A callout that uses a custom element can animate only if it provides the appearance animation. The default animation doesn’t apply to callouts with custom elements.

## See Also

### Customizing callout appearance

- [calloutAnchorOffsetForAnnotation()](calloutanchoroffsetforannotation.md): Returns a point determining the callout’s anchor offset.
- [calloutShouldAppearForAnnotation()](calloutshouldappearforannotation.md): Determines whether the callout appears for an annotation.
- [calloutShouldAnimateForAnnotation()](calloutshouldanimateforannotation.md): Determines whether the callout animates.
