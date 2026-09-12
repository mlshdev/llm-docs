> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmappanelitem/init(trip:handler:)](https://developer.apple.com/documentation/carplay/cpmappanelitem/init(trip:handler:))

# init(trip:handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a map template item wrapping a @c CPTrip.

## Declaration

```swift
init(trip: CPTrip, handler: ((CPMapPanelItem, @escaping () -> Void) -> Void)? = nil)
```

# initWithTrip:handler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a map template item wrapping a @c CPTrip.

## Declaration

```objectivec
- (instancetype) initWithTrip:(CPTrip *) trip handler:(void (^)(CPMapPanelItem *item, dispatch_block_t completionBlock)) handler;
```
