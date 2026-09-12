> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/geocoderresponse](https://developer.apple.com/documentation/mapkitjs/geocoderresponse)

# GeocoderResponse

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface  
**Availability:** MapKit JS 5.0+

The response from a geocoder lookup or reverse lookup.

## Declaration

```
interface GeocoderResponse
```

## Mentioned In

- [MapKit JS 5](mapkit-js-5.md)

<a id="overview"></a>

## Overview

The `data` parameter of the [lookup()](geocoder/lookup.md) or [reverseLookup()](geocoder/reverselookup.md) callback function contains the geocoder response. MapKit JS parses the `data` object from the geocoder JSON response, which contains an array of [Place](place.md) objects.

If there’s no response, [results](geocoderresponse/results.md) is an empty array.

## Topics

### Response

- [results](geocoderresponse/results.md): An array of places that returns from a geocoder lookup or reverse lookup.

## See Also

### Getting geocoder results

- [lookup()](geocoder/lookup.md): Converts an address to geographic coordinates.
- [GeocoderLookupOptions](geocoderlookupoptions.md): Options that constrain geocoder lookup results to a specific area or a specific language.
- [reverseLookup()](geocoder/reverselookup.md): Converts a geographic coordinate to an address.
- [GeocoderReverseLookupOptions](geocoderreverselookupoptions.md): An option that constrains reverse lookup results to a specific language.
