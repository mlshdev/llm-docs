> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmappanelitem/init(trip:handler:)

# init(trip:handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a map panel item with trip-related details.

## Declaration

```swift
init(trip: CPTrip, handler: ((CPMapPanelItem, @escaping () -> Void) -> Void)? = nil)
```

## Parameters

- `trip`: The trip object that contains the origin, destination, and route information.
- `handler`: A closure you use to respond when someone taps or selects the item. The closure takes the map panel item as a parameter and returns no value. Specify `nil` if you don’t want to respond to interactions with the item.

<a id="return-value"></a>

## Return Value

A map panel item initialized with trip information.

<a id="discussion"></a>

## Discussion

For this type of item, the map panel shows journey’s destination point, its origin point, and the number of available route choices. This item type doesn’t show details about the individual route choice.

# initWithTrip:handler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a map panel item with trip-related details.

## Declaration

```objectivec
- (instancetype) initWithTrip:(CPTrip *) trip handler:(void (^)(CPMapPanelItem *item, dispatch_block_t completionBlock)) handler;
```

## Parameters

- `trip`: The trip object that contains the origin, destination, and route information.
- `handler`: A closure you use to respond when someone taps or selects the item. The closure takes the map panel item as a parameter and returns no value. Specify `nil` if you don’t want to respond to interactions with the item.

<a id="return-value"></a>

## Return Value

A map panel item initialized with trip information.

<a id="discussion"></a>

## Discussion

For this type of item, the map panel shows journey’s destination point, its origin point, and the number of available route choices. This item type doesn’t show details about the individual route choice.
