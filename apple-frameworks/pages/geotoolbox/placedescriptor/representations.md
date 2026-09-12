> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/geotoolbox/placedescriptor/representations](https://developer.apple.com/documentation/geotoolbox/placedescriptor/representations)

# representations

**Framework:** GeoToolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An array of representations of the place using common mapping concepts.

## Declaration

```swift
let representations: [PlaceDescriptor.PlaceRepresentation]
```

<a id="Discussion"></a>

## Discussion

When searching or fetching a place from a mapping service provider, the order of the list can be a hint of usefulness for a specific purpose. Representations that most closely match the original data source come first.

For example a hike tracking app may include a `.coordinate` first, even if an approximate `.address` is available. A contacts app may put `.address` first, even if the service provider fetched a `.coordinate` for display on a Map.

## See Also

### Getting the attributes of a place descriptor

- [commonName](commonname.md): Publicly known name of the area or place of interest.
- [address](address.md): A full address, that one could use in postal or administrative scenarios.
- [coordinate](coordinate.md): The latitude and longitude for a place.
- [supportingRepresentations](supportingrepresentations.md): An array of proprietary or non-uniform representations of the place, such as representations you can use with other mapping services.
- [serviceIdentifier(for:)](serviceidentifier%28for_%29.md): Retrieves the identifier for the specified service provider, if available.
