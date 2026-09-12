> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/geotoolbox/placedescriptor/init(item:)](https://developer.apple.com/documentation/geotoolbox/placedescriptor/init(item:))

# init(item:)

**Framework:** GeoToolbox  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a place descriptor from a map item.

## Declaration

```swift
init?(item: MKMapItem)
```

## Parameters

- `item`: An `MKMapItem`.

<a id="Discussion"></a>

## Discussion

Use this method to create a `PlaceDescriptor` from an existing `MKMapItem` as shown here.

```swift

    guard let descriptor = PlaceDescriptor(item: selectedSearchResult) else {
        return
    }
```

Note that it’s possible for this initialization to fail if the system can’t resolve the provided map item.

## See Also

### Creating a place descriptor

- [init(representations:commonName:supportingRepresentations:)](init%28representations_commonname_supportingrepresentations_%29.md): Creates a place descriptor, suitable for use when searching or retrieving rich data about a place.
