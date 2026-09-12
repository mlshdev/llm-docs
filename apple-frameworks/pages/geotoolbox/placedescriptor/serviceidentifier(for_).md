> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/geotoolbox/placedescriptor/serviceidentifier(for:)](https://developer.apple.com/documentation/geotoolbox/placedescriptor/serviceidentifier(for:))

# serviceIdentifier(for:)

**Framework:** GeoToolbox  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Retrieves the identifier for the specified service provider, if available.

## Declaration

```swift
func serviceIdentifier(for serviceProvider: String) -> String?
```

## Parameters

- `serviceProvider`: A string that represents the identifier of the service provider to search for.

## See Also

### Getting the attributes of a place descriptor

- [commonName](commonname.md): Publicly known name of the area or place of interest.
- [address](address.md): A full address, that one could use in postal or administrative scenarios.
- [coordinate](coordinate.md): The latitude and longitude for a place.
- [representations](representations.md): An array of representations of the place using common mapping concepts.
- [supportingRepresentations](supportingrepresentations.md): An array of proprietary or non-uniform representations of the place, such as representations you can use with other mapping services.
