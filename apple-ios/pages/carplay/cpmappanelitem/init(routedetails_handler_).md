> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmappanelitem/init(routedetails:handler:)

# init(routeDetails:handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a map panel item with route details.

## Declaration

```swift
init(routeDetails: [CPRouteDetail], handler: ((CPMapPanelItem, @escaping () -> Void) -> Void)? = nil)
```

## Parameters

- `routeDetails`: The route detail that helps someone make an informed decision about their journey.
- `handler`: A closure you use to respond when someone taps or selects the item. The closure takes the map panel item as a parameter and returns no value. Specify `nil` if you don’t want to respond to interactions with the item.

<a id="return-value"></a>

## Return Value

A map panel item initialized with route details.

<a id="discussion"></a>

## Discussion

For this type of item, the map panel displays up to four route details per item.

# initWithRouteDetails:handler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a map panel item with route details.

## Declaration

```objectivec
- (instancetype) initWithRouteDetails:(NSArray<CPRouteDetail *> *) routeDetails handler:(void (^)(CPMapPanelItem *item, dispatch_block_t completionBlock)) handler;
```

## Parameters

- `routeDetails`: The route detail that helps someone make an informed decision about their journey.
- `handler`: A closure you use to respond when someone taps or selects the item. The closure takes the map panel item as a parameter and returns no value. Specify `nil` if you don’t want to respond to interactions with the item.

<a id="return-value"></a>

## Return Value

A map panel item initialized with route details.

<a id="discussion"></a>

## Discussion

For this type of item, the map panel displays up to four route details per item.
