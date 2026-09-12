> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklookaroundscenerequest/init(coordinate:)](https://developer.apple.com/documentation/mapkit/mklookaroundscenerequest/init(coordinate:))

# init(coordinate:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates a LookAround scene at the specified coordinates.

## Declaration

```swift
init(coordinate: CLLocationCoordinate2D)
```

## Parameters

- `coordinate`: A [CLLocationCoordinate2D](../../corelocation/cllocationcoordinate2d.md) coordinate that indicates the location for the LookAround scene.

## See Also

### Creating a LookAround scene

- [init(mapItem:)](init%28mapitem_%29.md): Creates a LookAround scene with the location described by the specified map item.

# initWithCoordinate: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates a LookAround scene at the specified coordinates.

## Declaration

```objectivec
- (instancetype) initWithCoordinate:(CLLocationCoordinate2D) coordinate;
```

## Parameters

- `coordinate`: A [CLLocationCoordinate2D](../../corelocation/cllocationcoordinate2d.md) coordinate that indicates the location for the LookAround scene.

## See Also

### Creating a LookAround scene

- [initWithMapItem:](init%28mapitem_%29.md): Creates a LookAround scene with the location described by the specified map item.
