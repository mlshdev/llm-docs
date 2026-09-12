> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeoanchor/init(name:coordinate:altitude:)-8sbh4](https://developer.apple.com/documentation/arkit/argeoanchor/init(name:coordinate:altitude:)-8sbh4)

# init(name:coordinate:altitude:) (Swift)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Initializes a named location anchor with the given coordinates and altitude.

## Declaration

```swift
init(name: String, coordinate: CLLocationCoordinate2D, altitude: CLLocationDistance)
```

## Parameters

- `name`: Name of the anchor.
- `coordinate`: Lattitude and longitude of the anchor’s geographic location.
- `altitude`: Vertical distance, in meters, between this anchor and sea level.

## See Also

### Creating a Geo Anchor

- [init(coordinate:altitude:)](init%28coordinate_altitude_%29.md): Initializes a location anchor with the given coordinate and altitude.
- [init(name:coordinate:altitude:)](init%28name_coordinate_altitude_%29-csze.md): Initializes a named location anchor with the given coordinates and altitude.

# initWithName:coordinate:altitude: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Initializes a named location anchor with the given coordinates and altitude.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name coordinate:(CLLocationCoordinate2D) coordinate altitude:(CLLocationDistance) altitude;
```

## Parameters

- `name`: Name of the anchor.
- `coordinate`: Lattitude and longitude of the anchor’s geographic location.
- `altitude`: Vertical distance, in meters, between this anchor and sea level.

## See Also

### Creating a Geo Anchor

- [initWithCoordinate:](initwithcoordinate_.md): Initializes a new location anchor with the given coordinates.
- [initWithCoordinate:altitude:](initwithcoordinate_altitude_.md): Initializes a location anchor with the given coordinate and altitude.
- [initWithName:coordinate:](initwithname_coordinate_.md): Initializes a named location anchor with the given coordinates.
