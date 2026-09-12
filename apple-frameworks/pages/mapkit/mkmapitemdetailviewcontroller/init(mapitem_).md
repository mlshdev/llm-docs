> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapitemdetailviewcontroller/init(mapitem:)](https://developer.apple.com/documentation/mapkit/mkmapitemdetailviewcontroller/init(mapitem:))

# init(mapItem:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Create a map item detail view controller.

## Declaration

```swift
init(mapItem: MKMapItem?)
```

## Parameters

- `mapItem`: The map item to display, or `nil` to indicate the item is loading.

<a id="Discussion"></a>

## Discussion

Displays an inline map with the place data.

## See Also

### Creating a map item detail view controller

- [init(mapItem:displaysMap:)](init%28mapitem_displaysmap_%29.md): Create a map item detail view controller

# initWithMapItem: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Create a map item detail view controller.

## Declaration

```objectivec
- (instancetype) initWithMapItem:(MKMapItem *) mapItem;
```

## Parameters

- `mapItem`: The map item to display, or `nil` to indicate the item is loading.

<a id="Discussion"></a>

## Discussion

Displays an inline map with the place data.

## See Also

### Creating a map item detail view controller

- [initWithMapItem:displaysMap:](init%28mapitem_displaysmap_%29.md): Create a map item detail view controller
