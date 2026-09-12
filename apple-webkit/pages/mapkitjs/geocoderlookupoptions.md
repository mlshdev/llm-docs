> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/geocoderlookupoptions](https://developer.apple.com/documentation/mapkitjs/geocoderlookupoptions)

# GeocoderLookupOptions

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface  
**Availability:** MapKit JS 5.0+

Options that constrain geocoder lookup results to a specific area or a specific language.

## Declaration

```
interface GeocoderLookupOptions
```

<a id="overview"></a>

## Overview

Configure [GeocoderLookupOptions](geocoderlookupoptions.md) when performing a [lookup()](geocoder/lookup.md) to constrain geocoder results to a specific area or return results in a specific language.

## Topics

### Options

- [coordinate](geocoderlookupoptions/coordinate.md): Coordinates for constraining the lookup results.
- [language](geocoderlookupoptions/language.md): The language to use when displaying the lookup results.
- [limitToCountries](geocoderlookupoptions/limittocountries.md): A list of countries for constraining the lookup results.
- [region](geocoderlookupoptions/region.md): A region for constraining lookup results.
- [signal](geocoderlookupoptions/signal.md): A signal object allowing you to cancel the request.

## See Also

### Getting geocoder results

- [lookup()](geocoder/lookup.md): Converts an address to geographic coordinates.
- [reverseLookup()](geocoder/reverselookup.md): Converts a geographic coordinate to an address.
- [GeocoderReverseLookupOptions](geocoderreverselookupoptions.md): An option that constrains reverse lookup results to a specific language.
- [GeocoderResponse](geocoderresponse.md): The response from a geocoder lookup or reverse lookup.
