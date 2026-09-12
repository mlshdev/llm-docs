> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapfeatureannotation/fetchplace](https://developer.apple.com/documentation/mapkitjs/mapfeatureannotation/fetchplace)

# fetchPlace(callback)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.74.1+ (deprecated in 6.0)

Fetches the place object associated with the map feature.

> Use the [PlaceLookup](../placelookup.md) [getPlace()](../placelookup/getplace1.md) method instead.

## Declaration

```
fetchPlace(
    callback: (error: Error | null, result: Place | null) => void,
): Promise<Place | null>;
```

## Parameters

- `callback`: Required. The framework invokes the callback function with two arguments, `error` and `data,` on success or failure:

  - error — Contains an error code and a message that describes the error.
  - data — A data object that contains an array with one [Place](../place.md) object associated with the map feature, or an empty array if the server can’t return the specified place.

## Mentioned In

- [MapKit JS 6](../mapkit-js-6.md)
