> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mkmapitemdetailviewcontroller/init(mapitem:displaysmap:)

# init(mapItem:displaysMap:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Create a map item detail view controller

## Declaration

```swift
init(mapItem: MKMapItem?, displaysMap: Bool)
```

## Parameters

- `mapItem`: The map item to display, or `nil` to indicate the item is loading.
- `displaysMap`: Specify `true` to display an inline map with the place information. Specify `false` only if the application is already displaying a map view elsewhere.

## See Also

### Creating a map item detail view controller

- [init(mapItem:)](init%28mapitem_%29.md): Create a map item detail view controller.

# initWithMapItem:displaysMap: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Create a map item detail view controller

## Declaration

```objectivec
- (instancetype) initWithMapItem:(MKMapItem *) mapItem displaysMap:(BOOL) displaysMap;
```

## Parameters

- `mapItem`: The map item to display, or `nil` to indicate the item is loading.
- `displaysMap`: Specify `true` to display an inline map with the place information. Specify `false` only if the application is already displaying a map view elsewhere.

## See Also

### Creating a map item detail view controller

- [initWithMapItem:](init%28mapitem_%29.md): Create a map item detail view controller.
