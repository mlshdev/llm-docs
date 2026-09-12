> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/placelookup/getplace2](https://developer.apple.com/documentation/mapkitjs/placelookup/getplace2)

# getPlace(id, callback, options)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.78.1+ (deprecated in 6.0)

Obtains a place using its identifier.

> Instead of passing in a callback, handle the returned promise instead. See [getPlace()](getplace.md).

## Declaration

```
getPlace(
    id: string,
    callback: (error: Error | null, result: Place | null) => void,
    options?: PlaceLookupOptions,
): Promise<Place>;
```

## Parameters

- `id`: The Place ID that refers to the [Place](../place.md) object to fetch.
- `callback`: A callback function that is invoked with `error` and `data` parameters.
- `options`: Options that can overwrite the same options set on the property or that you supplied to the [PlaceLookup](../placelookup.md) constructor. See [PlaceLookupOptions](../placelookupoptions.md).

<a id="return-value"></a>

## Return Value

A promise that resolves with a [Place](../place.md) on success.

<a id="Discussion"></a>

## Discussion

For information about Places, see [Identifying unique locations with Place IDs](https://developer.apple.com/documentation/mapkit/identifying-unique-locations-with-place-ids).
