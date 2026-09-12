> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/annotationcalloutdelegate/calloutshouldappearforannotation](https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/calloutshouldappearforannotation)

# calloutShouldAppearForAnnotation(annotation)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Method  
**Availability:** MapKit JS 5.0+

Determines whether the callout appears for an annotation.

## Declaration

```
calloutShouldAppearForAnnotation?(annotation: Annotation): boolean;
```

## Parameters

- `annotation`: The annotation for the callout.

<a id="return-value"></a>

## Return Value

The method returns a Boolean value, where a value of `false` prevents the callout from appearing.

<a id="Discussion"></a>

## Discussion

When the user selects an annotation, MapKit JS calls this method on the annotation’s callout delegate (if the delegate is an object and its [calloutShouldAppearForAnnotation()](calloutshouldappearforannotation.md) property is a function) with the annotation as a parameter.

## See Also

### Customizing callout appearance

- [calloutAnchorOffsetForAnnotation()](calloutanchoroffsetforannotation.md): Returns a point determining the callout’s anchor offset.
- [calloutShouldAnimateForAnnotation()](calloutshouldanimateforannotation.md): Determines whether the callout animates.
- [calloutAppearanceAnimationForAnnotation()](calloutappearanceanimationforannotation.md): Returns a CSS animation to use when the callout appears.
