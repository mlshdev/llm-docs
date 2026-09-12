> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/markerannotation/markerannotationconstructor](https://developer.apple.com/documentation/mapkitjs/markerannotation/markerannotationconstructor)

# new MarkerAnnotation(location, options)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Constructor  
**Availability:** MapKit JS 5.0+

Creates a marker annotation at the coordinate location with provided options.

## Declaration

```
constructor(
    location: CoordinateData | Place | SearchAutocompleteResult,
    options?: MarkerAnnotationConstructorOptions,
);
```

## Parameters

- `location`: The coordinate where the annotation appears.
- `options`: A hash of properties to create the annotation with.

## See Also

### Creating a marker annotation

- [MarkerAnnotationConstructorOptions](../markerannotationconstructoroptions.md): An object containing the options that create a marker annotation.
