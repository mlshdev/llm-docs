> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapitemannotation/init(mapitem:)](https://developer.apple.com/documentation/mapkit/mkmapitemannotation/init(mapitem:))

# init(mapItem:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Creates a map item annotation

## Declaration

```swift
init?(mapItem: MKMapItem)
```

## Parameters

- `mapItem`: The map item this annotation will represent

<a id="Discussion"></a>

## Discussion

If the map item does not have valid coordinate data, the result will be nil.

# initWithMapItem: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Creates a map item annotation

## Declaration

```objectivec
- (instancetype) initWithMapItem:(MKMapItem *) mapItem;
```

## Parameters

- `mapItem`: The map item this annotation will represent

<a id="Discussion"></a>

## Discussion

If the map item does not have valid coordinate data, the result will be nil.
