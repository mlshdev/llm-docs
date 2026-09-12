> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmappanelitem/init(chargingstationconnection:handler:)](https://developer.apple.com/documentation/carplay/cpmappanelitem/init(chargingstationconnection:handler:))

# init(chargingStationConnection:handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a map template item wrapping a @c CPChargingStationConnection.

## Declaration

```swift
init(chargingStationConnection: CPChargingStationConnection, handler: ((CPMapPanelItem, @escaping () -> Void) -> Void)? = nil)
```

# initWithChargingStationConnection:handler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a map template item wrapping a @c CPChargingStationConnection.

## Declaration

```objectivec
- (instancetype) initWithChargingStationConnection:(CPChargingStationConnection *) chargingStationConnection handler:(void (^)(CPMapPanelItem *item, dispatch_block_t completionBlock)) handler;
```
