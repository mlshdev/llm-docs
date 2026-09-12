> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmappanelitem/init(routechoice:handler:)](https://developer.apple.com/documentation/carplay/cpmappanelitem/init(routechoice:handler:))

# init(routeChoice:handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a map template item wrapping a @c CPRouteChoice.

## Declaration

```swift
init(routeChoice: CPRouteChoice, handler: ((CPMapPanelItem, @escaping () -> Void) -> Void)? = nil)
```

# initWithRouteChoice:handler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a map template item wrapping a @c CPRouteChoice.

## Declaration

```objectivec
- (instancetype) initWithRouteChoice:(CPRouteChoice *) routeChoice handler:(void (^)(CPMapPanelItem *item, dispatch_block_t completionBlock)) handler;
```
