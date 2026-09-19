> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/argeoanchor/init(coordinate:altitude:)

# init(coordinate:altitude:)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Initializes a location anchor with the given coordinate and altitude.

## Declaration

```swift
@nonobjc convenience init(coordinate: CLLocationCoordinate2D, altitude: CLLocationDistance? = nil)
```

## Parameters

- `coordinate`: Lattitude and longitude of the anchor’s geographic location.
- `altitude`: Vertical distance, in meters, between this anchor and sea level.

## See Also

### Creating a Geo Anchor

- [init(name:coordinate:altitude:)](init%28name_coordinate_altitude_%29-8sbh4.md): Initializes a named location anchor with the given coordinates and altitude.
- [init(name:coordinate:altitude:)](init%28name_coordinate_altitude_%29-csze.md): Initializes a named location anchor with the given coordinates and altitude.
