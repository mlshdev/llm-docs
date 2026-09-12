> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/placelookup/getplace](https://developer.apple.com/documentation/mapkitjs/placelookup/getplace)

# getPlace(id, options)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.78.1+

Obtains a place using its identifier.

## Declaration

```
getPlace(id: string, options?: PlaceLookupOptions): Promise<Place>;
```

## Parameters

- `id`: The Place ID that refers to the [Place](../place.md) object to fetch.
- `options`: Options that can overwrite the same options set on the property or that you supplied to the [PlaceLookup](../placelookup.md) constructor. See [PlaceLookupOptions](../placelookupoptions.md).

<a id="return-value"></a>

## Return Value

A promise that resolves with a [Place](../place.md) on success, or rejects with an `Error` on failure.

## Mentioned In

- [MapKit JS 6](../mapkit-js-6.md)
- [Migrating from Version 5 to Version 6](../migrating-from-version-5-to-version-6.md)

<a id="Discussion"></a>

## Discussion

For information about Places, see [Identifying unique locations with Place IDs](https://developer.apple.com/documentation/mapkit/identifying-unique-locations-with-place-ids).

Pass an `AbortSignal` from an `AbortController` to the [signal](../placelookupoptions/signal.md) option to allow the controller to cancel a pending request. When the controller aborts, the promise it returns rejects with a `DOMException` whose `name` is `"AbortError"`.

## See Also

### Getting a place

- [getPlace()](getplace1.md): Obtains the place associated with a map feature annotation.
- [PlaceLookupOptions](../placelookupoptions.md): Options for place lookup requests.
