> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/geotoolbox](https://developer.apple.com/documentation/geotoolbox)

# GeoToolbox

**Framework:** GeoToolbox  
**Kind:** Framework  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Determine place descriptor information for map coordinates.

<a id="overview"></a>

## Overview

Use `GeoToolbox` to create `PlaceDescriptor` structures for use across Maps technologies and third-party mapping systems.

## Topics

### Getting rich information about a place

- [PlaceDescriptor](geotoolbox/placedescriptor.md): A structure that contains identifying information about a place that a mapping service may use to attempt to find rich place information such as phone numbers, websites, and so on.

### Creating a place descriptor

- [init(item:)](geotoolbox/placedescriptor/init%28item_%29.md): Creates a place descriptor from a map item.
- [init(representations:commonName:supportingRepresentations:)](geotoolbox/placedescriptor/init%28representations_commonname_supportingrepresentations_%29.md): Creates a place descriptor, suitable for use when searching or retrieving rich data about a place.

### Values that describe places and mapping service providers

- [PlaceDescriptor.PlaceRepresentation](geotoolbox/placedescriptor/placerepresentation.md): Values that represent a physical place, suitable for use when searching or retrieving rich data.
- [PlaceDescriptor.SupportingPlaceRepresentation](geotoolbox/placedescriptor/supportingplacerepresentation.md): Values that describe the representation of a physical place using proprietary attributes, such as an alphanumeric location identifier from a mapping service provider.
