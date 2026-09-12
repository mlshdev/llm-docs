> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/annotationcalloutdelegate/calloutrightaccessoryforannotation](https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/calloutrightaccessoryforannotation)

# calloutRightAccessoryForAnnotation(annotation)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Method  
**Availability:** MapKit JS 5.0+

Returns an element to use as a custom accessory on the right side of the callout content area.

## Declaration

```
calloutRightAccessoryForAnnotation?(annotation: Annotation): HTMLElement;
```

## Parameters

- `annotation`: The annotation for the callout.

<a id="return-value"></a>

## Return Value

This method returns a DOM element to display as the right accessory.

<a id="Discussion"></a>

## Discussion

You can use this method to provide a custom accessory to the right side of the callout content area. It works similarly to [calloutLeftAccessoryForAnnotation()](calloutleftaccessoryforannotation.md).

## See Also

### Providing elements

- [calloutContentForAnnotation()](calloutcontentforannotation.md): Returns custom content for the callout bubble.
- [calloutElementForAnnotation()](calloutelementforannotation.md): Returns an element representing a custom callout.
- [calloutLeftAccessoryForAnnotation()](calloutleftaccessoryforannotation.md): Returns an element to use as a custom accessory on the left side of the callout content area.
