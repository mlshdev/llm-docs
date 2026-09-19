> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmappanelitem/init(maptemplatewaypoint:image:handler:)

# init(mapTemplateWaypoint:image:handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a map panel item with waypoint information.

## Declaration

```swift
init(mapTemplateWaypoint: CPMapTemplateWaypoint, image: UIImage?, handler: ((CPMapPanelItem, @escaping () -> Void) -> Void)? = nil)
```

## Parameters

- `mapTemplateWaypoint`: The waypoint information.
- `image`: An image to display for the waypoint.
- `handler`: A closure you use to respond when someone taps or selects the item. The closure takes the map panel item as a parameter and returns no value. Specify `nil` if you don’t want to respond to interactions with the item.

<a id="return-value"></a>

## Return Value

A map panel item initialized with waypoint details.

<a id="discussion"></a>

## Discussion

For this type of item, the map panel displays the waypoint name, address, and any available route details.

# initWithMapTemplateWaypoint:image:handler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a map panel item with waypoint information.

## Declaration

```objectivec
- (instancetype) initWithMapTemplateWaypoint:(CPMapTemplateWaypoint *) mapTemplateWaypoint image:(UIImage *) image handler:(void (^)(CPMapPanelItem *item, dispatch_block_t completionBlock)) handler;
```

## Parameters

- `mapTemplateWaypoint`: The waypoint information.
- `image`: An image to display for the waypoint.
- `handler`: A closure you use to respond when someone taps or selects the item. The closure takes the map panel item as a parameter and returns no value. Specify `nil` if you don’t want to respond to interactions with the item.

<a id="return-value"></a>

## Return Value

A map panel item initialized with waypoint details.

<a id="discussion"></a>

## Discussion

For this type of item, the map panel displays the waypoint name, address, and any available route details.
