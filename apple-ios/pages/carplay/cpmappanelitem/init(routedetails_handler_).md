> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmappanelitem/init(routedetails:handler:)](https://developer.apple.com/documentation/carplay/cpmappanelitem/init(routedetails:handler:))

# init(routeDetails:handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a map template item wrapping an array of @c CPRouteDetail objects.

## Declaration

```swift
init(routeDetails: [CPRouteDetail], handler: ((CPMapPanelItem, @escaping () -> Void) -> Void)? = nil)
```

# initWithRouteDetails:handler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a map template item wrapping an array of @c CPRouteDetail objects.

## Declaration

```objectivec
- (instancetype) initWithRouteDetails:(NSArray<CPRouteDetail *> *) routeDetails handler:(void (^)(CPMapPanelItem *item, dispatch_block_t completionBlock)) handler;
```
