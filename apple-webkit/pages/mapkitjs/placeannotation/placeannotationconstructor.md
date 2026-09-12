> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/placeannotation/placeannotationconstructor](https://developer.apple.com/documentation/mapkitjs/placeannotation/placeannotationconstructor)

# new PlaceAnnotation(coordinate, options)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Constructor  
**Availability:** MapKit JS 5.78.1+

Creates a new place annotation.

## Declaration

```
constructor(
    coordinate: CoordinateData | Place | SearchAutocompleteResult,
    options?: MarkerAnnotationConstructorOptions,
);
```

<a id="Discussion"></a>

## Discussion

You’re required to provide a [Place](../place.md) object, either by passing it as the first argument or setting [place](../annotationconstructoroptions/place.md). If you don’t provide the required object, the call throws an error.
