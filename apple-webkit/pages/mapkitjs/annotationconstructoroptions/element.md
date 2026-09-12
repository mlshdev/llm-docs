> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/annotationconstructoroptions/element](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/element)

# element

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.0+

Sets the element of the annotation.

## Declaration

```
element?: HTMLElement;
```

<a id="Discussion"></a>

## Discussion

The framework ignores the element option in the constructor. If present, it generates a warning.

The framework creates the DOM element encapsulating the annotation automatically.
