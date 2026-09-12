> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekstructuredlocation/init(mapitem:)](https://developer.apple.com/documentation/eventkit/ekstructuredlocation/init(mapitem:))

# init(mapItem:) (Swift)

**Framework:** EventKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Creates a new structured location with the specified map item.

## Declaration

```swift
convenience init(mapItem: MKMapItem)
```

## Parameters

- `mapItem`: The [MKMapItem](../../mapkit/mkmapitem.md) object that represents the location.

## See Also

### Creating Structured Locations

- [init(title:)](init%28title_%29.md): Creates a new structured location with the specified title.

# locationWithMapItem: (Objective-C)

**Framework:** EventKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Creates a new structured location with the specified map item.

## Declaration

```objectivec
+ (instancetype) locationWithMapItem:(MKMapItem *) mapItem;
```

## Parameters

- `mapItem`: The [MKMapItem](../../mapkit/mkmapitem.md) object that represents the location.

## See Also

### Creating Structured Locations

- [locationWithTitle:](init%28title_%29.md): Creates a new structured location with the specified title.
