> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/geotoolbox/placedescriptor/init(representations:commonname:supportingrepresentations:)](https://developer.apple.com/documentation/geotoolbox/placedescriptor/init(representations:commonname:supportingrepresentations:))

# init(representations:commonName:supportingRepresentations:)

**Framework:** GeoToolbox  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a place descriptor, suitable for use when searching or retrieving rich data about a place.

## Declaration

```swift
init(representations: [PlaceDescriptor.PlaceRepresentation], commonName: String?, supportingRepresentations: [PlaceDescriptor.SupportingPlaceRepresentation] = [])
```

## Parameters

- `representations`: A list of ways to reference the place using common mapping concepts.
- `commonName`: Publicly known name of the area or place of interest, such as “City Hall”, “Times Square”, or “The New York Public Library”.
- `supportingRepresentations`: List of ways to represent a place that are proprietary or non-uniform, such as a dictionary of mapping service identifiers and their related place identifiers.

<a id="Discussion"></a>

## Discussion

The `representations` property needs to have at least one member. Sort arrays with original or most accurate representations first.

## See Also

### Creating a place descriptor

- [init(item:)](init%28item_%29.md): Creates a place descriptor from a map item.
