> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/geocoderreverselookupoptions](https://developer.apple.com/documentation/mapkitjs/geocoderreverselookupoptions)

# GeocoderReverseLookupOptions

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface  
**Availability:** MapKit JS 5.0+

An option that constrains reverse lookup results to a specific language.

## Declaration

```
interface GeocoderReverseLookupOptions
```

<a id="overview"></a>

## Overview

Configure [GeocoderReverseLookupOptions](geocoderreverselookupoptions.md) when performing a reverse lookup to constrain geocoder results to return results in a specific language.

## Topics

### Options

- [language](geocoderreverselookupoptions/language.md): The language to use when displaying the reverse lookup results.
- [signal](geocoderreverselookupoptions/signal.md): A signal object allowing you to cancel the request.

## See Also

### Getting geocoder results

- [lookup()](geocoder/lookup.md): Converts an address to geographic coordinates.
- [GeocoderLookupOptions](geocoderlookupoptions.md): Options that constrain geocoder lookup results to a specific area or a specific language.
- [reverseLookup()](geocoder/reverselookup.md): Converts a geographic coordinate to an address.
- [GeocoderResponse](geocoderresponse.md): The response from a geocoder lookup or reverse lookup.
