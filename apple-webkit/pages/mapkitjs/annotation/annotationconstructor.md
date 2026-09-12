> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/annotation/annotationconstructor](https://developer.apple.com/documentation/mapkitjs/annotation/annotationconstructor)

# new Annotation(location, factory, options)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Constructor  
**Availability:** MapKit JS 5.0+

Creates a new annotation given its location and initialization options.

## Declaration

```
constructor(
    location: CoordinateData | Place | SearchAutocompleteResult,
    factory: (
        location?: Coordinate,
        options?: AnnotationConstructorOptions,
    ) => HTMLElement,
    options?: AnnotationConstructorOptions,
);
```

## Parameters

- `location`: The coordinate where the annotation appears.
- `factory`: A factory function that returns a DOM element that represents the annotation.
- `options`: A hash of properties MapKit JS uses to initialize the annotation.

<a id="return-value"></a>

## Return Value

A [Annotation](../annotation.md) instance.

<a id="Discussion"></a>

## Discussion

The `factory` function returns a DOM element to represent the annotation. It can be a single element or a containing element with subelements. MapKit JS calls this function with the following two arguments:

- `coordinate` ([Coordinate](../coordinate.md)) — The annotation’s coordinate.
- `options` ([AnnotationConstructorOptions](../annotationconstructoroptions.md)) — You can use options you pass to the annotation constructor to add context to the custom annotation.

The `options` include `title` and `subtitle`, which appear in a callout if they’re present.

## See Also

### Creating an annotation

- [AnnotationConstructorOptions](../annotationconstructoroptions.md): An object that contains options for creating annotation features.
