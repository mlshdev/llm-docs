> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/geotoolbox/placedescriptor/supportingrepresentations](https://developer.apple.com/documentation/geotoolbox/placedescriptor/supportingrepresentations)

# supportingRepresentations

**Framework:** GeoToolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An array of proprietary or non-uniform representations of the place, such as representations you can use with other mapping services.

## Declaration

```swift
let supportingRepresentations: [PlaceDescriptor.SupportingPlaceRepresentation]
```

<a id="Discussion"></a>

## Discussion

This is an array of possible mapping service providers you can use in place of, or in addition to MapKit’s representations.

## See Also

### Getting the attributes of a place descriptor

- [commonName](commonname.md): Publicly known name of the area or place of interest.
- [address](address.md): A full address, that one could use in postal or administrative scenarios.
- [coordinate](coordinate.md): The latitude and longitude for a place.
- [representations](representations.md): An array of representations of the place using common mapping concepts.
- [serviceIdentifier(for:)](serviceidentifier%28for_%29.md): Retrieves the identifier for the specified service provider, if available.
