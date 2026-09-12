> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/geocoder/reverselookup](https://developer.apple.com/documentation/mapkitjs/geocoder/reverselookup)

# reverseLookup(coordinate, options)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.0+

Converts a geographic coordinate to an address.

## Declaration

```
reverseLookup(
    coordinate: Coordinate,
    options?: GeocoderReverseLookupOptions,
): Promise<GeocoderResponse>;
```

## Parameters

- `coordinate`: The coordinate to convert to a human-readable address. For example, `new` \`\`Coordinate\`\`\`(37.779268, -122.419248)\`, which represents San Francisco City Hall.
- `options`: An option that constrains reverse lookup results to a specific language. See [GeocoderReverseLookupOptions](../geocoderreverselookupoptions.md).

<a id="return-value"></a>

## Return Value

A promise that resolves with a [GeocoderResponse](../geocoderresponse.md) on success, or rejects with an `Error` on failure.

<a id="Discussion"></a>

## Discussion

Reverse geocoding converts geographic coordinates to the nearest human-readable address.

The resolved [GeocoderResponse](../geocoderresponse.md) contains an array of places named [results](../geocoderresponse/results.md). Each place in [results](../geocoderresponse/results.md) has a [coordinate](../place/coordinate.md) property and a [formattedAddress](../place/formattedaddress.md) property. [results](../geocoderresponse/results.md) is an empty array if there isn’t a match.

Pass an `AbortSignal` from an `AbortController` to the [signal](../geocoderreverselookupoptions/signal.md) option to allow the controller to cancel a pending request. When the controller aborts, the promise it returns rejects with a `DOMException` whose `name` is `"AbortError"`.

## Topics

- [GeocoderReverseLookupOptions](../geocoderreverselookupoptions.md): An option that constrains reverse lookup results to a specific language.

## See Also

### Getting geocoder results

- [lookup()](lookup.md): Converts an address to geographic coordinates.
- [GeocoderLookupOptions](../geocoderlookupoptions.md): Options that constrain geocoder lookup results to a specific area or a specific language.
- [GeocoderReverseLookupOptions](../geocoderreverselookupoptions.md): An option that constrains reverse lookup results to a specific language.
- [GeocoderResponse](../geocoderresponse.md): The response from a geocoder lookup or reverse lookup.
