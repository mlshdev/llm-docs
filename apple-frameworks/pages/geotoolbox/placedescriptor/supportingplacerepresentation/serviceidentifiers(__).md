> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/geotoolbox/placedescriptor/supportingplacerepresentation/serviceidentifiers(_:)](https://developer.apple.com/documentation/geotoolbox/placedescriptor/supportingplacerepresentation/serviceidentifiers(_:))

# PlaceDescriptor.SupportingPlaceRepresentation.serviceIdentifiers(\_:)

**Framework:** GeoToolbox  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Identifiers that represent a place for different mapping service providers

## Declaration

```swift
case serviceIdentifiers([String : String])
```

<a id="Discussion"></a>

## Discussion

A service identifier is a [Dictionary](https://developer.apple.com/documentation/swift/dictionary) that maps a bundle IDs (key) and a unique identifiers (value) that represent a mapping between a specific service provider and their specific identifier for a place. For example, the dictionary entry `[com.apple.maps: IBE1F65094A7A13B1]` maps a service provider to a unique ID — here `com.apple.maps`, which represents Apple Maps, and the place ID, `IBE1F65094A7A13B1`, a string that represents the San Francisco Ferry Building, in San Francisco, California.

You can use Apple Maps service identifiers, or those from other mapping services to enable GeoToolbox to attempt to resolve rich data for the specified place or a specified use case, such as a street address, or the coordinate of a physical location.
