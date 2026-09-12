> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/placelookup/getplace1](https://developer.apple.com/documentation/mapkitjs/placelookup/getplace1)

# getPlace(annotation, options)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 6.0+

Obtains the place associated with a map feature annotation.

## Declaration

```
getPlace(
    annotation: MapFeatureAnnotation,
    options?: PlaceLookupOptions,
): Promise<Place>;
```

## Parameters

- `annotation`: The [MapFeatureAnnotation](../mapfeatureannotation.md) to look up.
- `options`: Options that can overwrite the same options set on the property or that you supplied to the [PlaceLookup](../placelookup.md) constructor. See [PlaceLookupOptions](../placelookupoptions.md).

<a id="return-value"></a>

## Return Value

A promise that resolves with a [Place](../place.md) on success, or rejects with an `Error` on failure.

<a id="Discussion"></a>

## Discussion

Use this method to retrieve the full [Place](../place.md) information for a [MapFeatureAnnotation](../mapfeatureannotation.md) that a person selects on the map.

Pass an `AbortSignal` from an `AbortController` to the [signal](../placelookupoptions/signal.md) option to allow the controller to cancel a pending request. When the controller aborts, the returned promise rejects with a `DOMException` whose `name` is `"AbortError"`.

## See Also

### Getting a place

- [getPlace()](getplace.md): Obtains a place using its identifier.
- [PlaceLookupOptions](../placelookupoptions.md): Options for place lookup requests.
