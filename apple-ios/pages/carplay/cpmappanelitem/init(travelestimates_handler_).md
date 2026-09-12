> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmappanelitem/init(travelestimates:handler:)](https://developer.apple.com/documentation/carplay/cpmappanelitem/init(travelestimates:handler:))

# init(travelEstimates:handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a map template item wrapping a @c CPTravelEstimates.

## Declaration

```swift
init(travelEstimates: CPTravelEstimates, handler: ((CPMapPanelItem, @escaping () -> Void) -> Void)? = nil)
```

# initWithTravelEstimates:handler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a map template item wrapping a @c CPTravelEstimates.

## Declaration

```objectivec
- (instancetype) initWithTravelEstimates:(CPTravelEstimates *) travelEstimates handler:(void (^)(CPMapPanelItem *item, dispatch_block_t completionBlock)) handler;
```
