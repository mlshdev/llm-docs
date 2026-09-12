> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/annotationcalloutdelegate/calloutelementforannotation](https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/calloutelementforannotation)

# calloutElementForAnnotation(annotation)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Method  
**Availability:** MapKit JS 5.0+

Returns an element representing a custom callout.

## Declaration

```
calloutElementForAnnotation?(annotation: Annotation): HTMLElement;
```

## Parameters

- `annotation`: The annotation for the callout.

<a id="return-value"></a>

## Return Value

This method returns a DOM element to use as the callout element in place of the standard callout bubble. This callout element populates with the information to display, including the information from the annotation.

<a id="Discussion"></a>

## Discussion

If you don’t prevent the callout from appearing, MapKit JS calls this method on the annotation’s callout delegate (if the delegate is an object and its [calloutElementForAnnotation()](calloutelementforannotation.md) property is a function) with the annotation as a parameter.

## See Also

### Providing elements

- [calloutContentForAnnotation()](calloutcontentforannotation.md): Returns custom content for the callout bubble.
- [calloutLeftAccessoryForAnnotation()](calloutleftaccessoryforannotation.md): Returns an element to use as a custom accessory on the left side of the callout content area.
- [calloutRightAccessoryForAnnotation()](calloutrightaccessoryforannotation.md): Returns an element to use as a custom accessory on the right side of the callout content area.
