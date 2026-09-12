> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/geocoder](https://developer.apple.com/documentation/mapkitjs/geocoder)

# Geocoder

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.0+

A geocoder that converts human-readable addresses to geographic coordinates, and vice versa.

## Declaration

```
class Geocoder extends Service
```

## Mentioned In

- [MapKit JS 5](mapkit-js-5.md)

<a id="overview"></a>

## Overview

When using MapKit JS to show Apple Maps on a website, the geocoder handles forward and reverse geocoding. Because the framework performs geocoding on the server, the geocoder requires a network connection and handles calls asynchronously.

Provide context to the geocoder to get the most relevant results. The geocoder can obtain context from these sources:

- **The user’s location in the browser’s Geolocation API.** The geocoder assigns higher relevancy to results near the user’s location. Asking for the user’s location requires the user’s permission. If you enable this option, the browser asks the user for permission (some browsers remember this setting for a day). MapKit JS disables this option by default.
- **Lookup options.** Your website can provide context in the geocoder lookup options as a coordinate or region. For example, if a user types *Brisbane* into a map text field and the web page invokes the geocoder without context, the geocoder returns the major city in Australia. If, however, the map displays San Francisco and its environs, a geocoding request with this region as context returns the nearby city of Brisbane instead.
- **The user’s IP address.** Of the three forms of context, this is the least accurate, but the only one certain to be present. The user’s IP address is a granular IP location that the system doesn’t log or store.

## Topics

### Creating a geocoder object

- [Geocoder()](geocoder/geocoderconstructor.md): Creates a geocoder object and sets optional language and user location properties.
- [ServiceConstructorOptions](serviceconstructoroptions.md): Common options you provide when you create a service object.
- [getsUserLocation](service/getsuserlocation.md): A Boolean value that indicates whether the request returns results near a person’s location.
- [language](service/language.md): A language ID that determines the language to use for displaying addresses.

### Getting geocoder results

- [lookup()](geocoder/lookup.md): Converts an address to geographic coordinates.
- [GeocoderLookupOptions](geocoderlookupoptions.md): Options that constrain geocoder lookup results to a specific area or a specific language.
- [reverseLookup()](geocoder/reverselookup.md): Converts a geographic coordinate to an address.
- [GeocoderReverseLookupOptions](geocoderreverselookupoptions.md): An option that constrains reverse lookup results to a specific language.
- [GeocoderResponse](geocoderresponse.md): The response from a geocoder lookup or reverse lookup.

### Canceling a geocoder request

- [cancel()](service/cancel.md): Deprecated. Cancels a request using the provided request promise.

### Deprecated

- [lookup()](geocoder/lookup1.md): Deprecated. Converts an address to geographic coordinates.
- [reverseLookup()](geocoder/reverselookup1.md): Deprecated. Converts a geographic coordinate to an address.

## Relationships

### Inherits From

- [Service](service.md)
