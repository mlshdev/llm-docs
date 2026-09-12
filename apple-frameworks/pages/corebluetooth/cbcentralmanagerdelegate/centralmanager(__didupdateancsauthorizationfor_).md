> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentralmanagerdelegate/centralmanager(_:didupdateancsauthorizationfor:)](https://developer.apple.com/documentation/corebluetooth/cbcentralmanagerdelegate/centralmanager(_:didupdateancsauthorizationfor:))

# centralManager(\_:didUpdateANCSAuthorizationFor:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate the authorization status changed for a ANCS-requiring connected peripheral.

## Declaration

```swift
optional func centralManager(_ central: CBCentralManager, didUpdateANCSAuthorizationFor peripheral: CBPeripheral)
```

## Parameters

- `central`: The central manager providing this information.
- `peripheral`: The [CBPeripheral](../cbperipheral.md) that caused the event.

# centralManager:didUpdateANCSAuthorizationForPeripheral: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate the authorization status changed for a ANCS-requiring connected peripheral.

## Declaration

```objectivec
- (void) centralManager:(CBCentralManager *) central didUpdateANCSAuthorizationForPeripheral:(CBPeripheral *) peripheral;
```

## Parameters

- `central`: The central manager providing this information.
- `peripheral`: The [CBPeripheral](../cbperipheral.md) that caused the event.
