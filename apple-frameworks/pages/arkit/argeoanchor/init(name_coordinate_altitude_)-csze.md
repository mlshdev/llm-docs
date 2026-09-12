> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeoanchor/init(name:coordinate:altitude:)-csze](https://developer.apple.com/documentation/arkit/argeoanchor/init(name:coordinate:altitude:)-csze)

# init(name:coordinate:altitude:)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Initializes a named location anchor with the given coordinates and altitude.

## Declaration

```swift
@nonobjc convenience init(name: String, coordinate: CLLocationCoordinate2D, altitude: CLLocationDistance? = nil)
```

## Parameters

- `name`: Name of the anchor.
- `coordinate`: Lattitude and longitude of the anchor’s geographic location.
- `altitude`: Vertical distance, in meters, between this anchor and sea level.

## See Also

### Creating a Geo Anchor

- [init(coordinate:altitude:)](init%28coordinate_altitude_%29.md): Initializes a location anchor with the given coordinate and altitude.
- [init(name:coordinate:altitude:)](init%28name_coordinate_altitude_%29-8sbh4.md): Initializes a named location anchor with the given coordinates and altitude.
