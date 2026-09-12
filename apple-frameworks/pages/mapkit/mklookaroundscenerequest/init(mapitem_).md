> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklookaroundscenerequest/init(mapitem:)](https://developer.apple.com/documentation/mapkit/mklookaroundscenerequest/init(mapitem:))

# init(mapItem:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates a LookAround scene with the location described by the specified map item.

## Declaration

```swift
init(mapItem: MKMapItem)
```

## Parameters

- `mapItem`: An [MKMapItem](../mkmapitem.md) that describes the location for the LookAround scene.

## See Also

### Creating a LookAround scene

- [init(coordinate:)](init%28coordinate_%29.md): Creates a LookAround scene at the specified coordinates.

# initWithMapItem: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates a LookAround scene with the location described by the specified map item.

## Declaration

```objectivec
- (instancetype) initWithMapItem:(MKMapItem *) mapItem;
```

## Parameters

- `mapItem`: An [MKMapItem](../mkmapitem.md) that describes the location for the LookAround scene.

## See Also

### Creating a LookAround scene

- [initWithCoordinate:](init%28coordinate_%29.md): Creates a LookAround scene at the specified coordinates.
