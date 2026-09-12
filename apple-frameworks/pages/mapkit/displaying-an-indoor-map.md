> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/displaying-an-indoor-map](https://developer.apple.com/documentation/mapkit/displaying-an-indoor-map)

# Displaying an Indoor Map

**Interface languages:** Swift, Objective-C

**Framework:** MapKit  
**Kind:** Sample Code  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · Xcode 16.0+

Use the Indoor Mapping Data Format (IMDF) to show an indoor map with custom overlays and points of interest.

<a id="Overview"></a>

## Overview

The sample app demonstrates decoding, rendering, and styling of a small subset of the IMDF feature types and their properties. Use these examples to create your own indoor map with a style that’s consistent with your app’s design. You’ll need to handle feature categories that are specific to your venue, and configure the map style using your own colors, icons, and level picker.

> **Note**

> This sample code project is associated with WWDC 2019 session [241: Adding Indoor Maps to your App and Website](https://developer.apple.com/wwdc19/241).

## See Also

### Geographical features

- [MKGeoJSONDecoder](mkgeojsondecoder.md): An object that decodes GeoJSON objects into MapKit types.
- [MKGeoJSONFeature](mkgeojsonfeature.md): The decoded representation of a GeoJSON feature.
- [MKGeoJSONObject](mkgeojsonobject.md): Objects that the GeoJSON decoder can return.
