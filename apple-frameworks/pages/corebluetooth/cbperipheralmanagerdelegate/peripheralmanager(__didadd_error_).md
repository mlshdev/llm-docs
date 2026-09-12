> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanagerdelegate/peripheralmanager(_:didadd:error:)](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanagerdelegate/peripheralmanager(_:didadd:error:))

# peripheralManager(\_:didAdd:error:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate the peripheral manager published a service to the local GATT database.

## Declaration

```swift
optional func peripheralManager(_ peripheral: CBPeripheralManager, didAdd service: CBService, error: (any Error)?)
```

## Parameters

- `peripheral`: The peripheral manager adding the service.
- `service`: The service added to the local GATT database.
- `error`: The reason the call failed, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

Core Bluetooth invokes this method when your app calls the [add(\_:)](../cbperipheralmanager/add%28__%29.md) method to publish a service to the local peripheral’s GATT database. If the service published successfully to the local database, the `error` parameter is `nil`. If unsuccessful, the `error` parameter provides the cause of the failure.

# peripheralManager:didAddService:error: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate the peripheral manager published a service to the local GATT database.

## Declaration

```objectivec
- (void) peripheralManager:(CBPeripheralManager *) peripheral didAddService:(CBService *) service error:(NSError *) error;
```

## Parameters

- `peripheral`: The peripheral manager adding the service.
- `service`: The service added to the local GATT database.
- `error`: The reason the call failed, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

Core Bluetooth invokes this method when your app calls the [addService:](../cbperipheralmanager/add%28__%29.md) method to publish a service to the local peripheral’s GATT database. If the service published successfully to the local database, the `error` parameter is `nil`. If unsuccessful, the `error` parameter provides the cause of the failure.
