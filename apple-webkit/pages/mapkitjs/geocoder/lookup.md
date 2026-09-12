> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/geocoder/lookup](https://developer.apple.com/documentation/mapkitjs/geocoder/lookup)

# lookup(place, options)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.0+

Converts an address to geographic coordinates.

## Declaration

```
lookup(
    place: string,
    options?: GeocoderLookupOptions,
): Promise<GeocoderResponse>;
```

## Parameters

- `place`: A case-insensitive string MapKit JS converts to geographic coordinates, such as: “`San Francisco City Hall`”, “`San Francisco City Hall, San Francisco`”, “`San Francisco City Hall, San Francisco, CA USA`”. Delimiter characters are optional.
- `options`: Options that constrain geocoder lookup results to a specific area or a specific language. See [GeocoderLookupOptions](../geocoderlookupoptions.md).

<a id="return-value"></a>

## Return Value

A promise that resolves with a [GeocoderResponse](../geocoderresponse.md) on success, or rejects with an `Error` on failure.

<a id="Discussion"></a>

## Discussion

Geocoding converts a human-readable address to latitude and longitude coordinates. You can use [Geocoder](../geocoder.md) to look up coordinates for a city, landmark, or address.

The resolved [GeocoderResponse](../geocoderresponse.md) contains an array of places named [results](../geocoderresponse/results.md). Each place in [results](../geocoderresponse/results.md) has a [coordinate](../place/coordinate.md) property and a [formattedAddress](../place/formattedaddress.md) property. [results](../geocoderresponse/results.md) is an empty array if there isn’t a match.

Pass an `AbortSignal` from an `AbortController` to the [signal](../geocoderlookupoptions/signal.md) option to allow the controller to cancel a pending request. When the controller aborts, the promise it returns rejects with a `DOMException` whose `name` is `"AbortError"`.

## See Also

### Getting geocoder results

- [GeocoderLookupOptions](../geocoderlookupoptions.md): Options that constrain geocoder lookup results to a specific area or a specific language.
- [reverseLookup()](reverselookup.md): Converts a geographic coordinate to an address.
- [GeocoderReverseLookupOptions](../geocoderreverselookupoptions.md): An option that constrains reverse lookup results to a specific language.
- [GeocoderResponse](../geocoderresponse.md): The response from a geocoder lookup or reverse lookup.
