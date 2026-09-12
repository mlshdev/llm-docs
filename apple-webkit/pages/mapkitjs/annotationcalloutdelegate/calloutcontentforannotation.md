> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/annotationcalloutdelegate/calloutcontentforannotation](https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/calloutcontentforannotation)

# calloutContentForAnnotation(annotation)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Method  
**Availability:** MapKit JS 5.0+

Returns custom content for the callout bubble.

## Declaration

```
calloutContentForAnnotation?(annotation: Annotation): HTMLElement;
```

## Parameters

- `annotation`: The annotation for the callout.

<a id="return-value"></a>

## Return Value

The method returns a DOM element, MapKit JS adds as a subelement of the callout bubble.

<a id="Discussion"></a>

## Discussion

You can use this method to provide custom content inside the callout bubble without replacing the whole element, as in [calloutElementForAnnotation()](calloutelementforannotation.md).

When MapKit JS creates a callout for a selected annotation and the annotation’s callout delegate has no [calloutElementForAnnotation()](calloutelementforannotation.md) method, the framework calls [calloutContentForAnnotation()](calloutcontentforannotation.md) method instead — if it’s defined — on the delegate with the annotation as a parameter.

## See Also

### Providing elements

- [calloutElementForAnnotation()](calloutelementforannotation.md): Returns an element representing a custom callout.
- [calloutLeftAccessoryForAnnotation()](calloutleftaccessoryforannotation.md): Returns an element to use as a custom accessory on the left side of the callout content area.
- [calloutRightAccessoryForAnnotation()](calloutrightaccessoryforannotation.md): Returns an element to use as a custom accessory on the right side of the callout content area.
