> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmappanelitem/init(routechoice:handler:)

# init(routeChoice:handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a map panel item with one of the route choices available for a trip.

## Declaration

```swift
init(routeChoice: CPRouteChoice, handler: ((CPMapPanelItem, @escaping () -> Void) -> Void)? = nil)
```

## Parameters

- `routeChoice`: A route choice for an upcoming trip.
- `handler`: A closure you use to respond when someone taps or selects the item. The closure takes the map panel item as a parameter and returns no value. Specify `nil` if you don’t want to respond to interactions with the item.

<a id="return-value"></a>

## Return Value

A map panel item initialized with a route choice.

<a id="discussion"></a>

## Discussion

For this type of item, the map panel displays the relevant route choice summaries.

# initWithRouteChoice:handler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a map panel item with one of the route choices available for a trip.

## Declaration

```objectivec
- (instancetype) initWithRouteChoice:(CPRouteChoice *) routeChoice handler:(void (^)(CPMapPanelItem *item, dispatch_block_t completionBlock)) handler;
```

## Parameters

- `routeChoice`: A route choice for an upcoming trip.
- `handler`: A closure you use to respond when someone taps or selects the item. The closure takes the map panel item as a parameter and returns no value. Specify `nil` if you don’t want to respond to interactions with the item.

<a id="return-value"></a>

## Return Value

A map panel item initialized with a route choice.

<a id="discussion"></a>

## Discussion

For this type of item, the map panel displays the relevant route choice summaries.
