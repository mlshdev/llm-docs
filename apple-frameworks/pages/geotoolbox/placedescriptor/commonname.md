> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/geotoolbox/placedescriptor/commonname](https://developer.apple.com/documentation/geotoolbox/placedescriptor/commonname)

# commonName

**Framework:** GeoToolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Publicly known name of the area or place of interest.

## Declaration

```swift
let commonName: String?
```

<a id="Discussion"></a>

## Discussion

Locations that don’t have a public name (such a private residence) should be `nil`.

## See Also

### Getting the attributes of a place descriptor

- [address](address.md): A full address, that one could use in postal or administrative scenarios.
- [coordinate](coordinate.md): The latitude and longitude for a place.
- [representations](representations.md): An array of representations of the place using common mapping concepts.
- [supportingRepresentations](supportingrepresentations.md): An array of proprietary or non-uniform representations of the place, such as representations you can use with other mapping services.
- [serviceIdentifier(for:)](serviceidentifier%28for_%29.md): Retrieves the identifier for the specified service provider, if available.
