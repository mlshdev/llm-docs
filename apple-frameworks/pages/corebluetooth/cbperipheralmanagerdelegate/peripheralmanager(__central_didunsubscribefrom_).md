> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanagerdelegate/peripheralmanager(_:central:didunsubscribefrom:)](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanagerdelegate/peripheralmanager(_:central:didunsubscribefrom:))

# peripheralManager(\_:central:didUnsubscribeFrom:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that a remote central device unsubscribed from a characteristic’s value.

## Declaration

```swift
optional func peripheralManager(_ peripheral: CBPeripheralManager, central: CBCentral, didUnsubscribeFrom characteristic: CBCharacteristic)
```

## Parameters

- `peripheral`: The peripheral manager connected to the remote central.
- `central`: The remote central device that subscribed to the characteristic’s value.
- `characteristic`: The characteristic unsubscribed from.

<a id="Discussion"></a>

## Discussion

Core Bluetooth calls this method when a remote central device unsubscribes from the value of one of the local peripheral’s characteristics, by disabling notifications or indications on the characteristic’s value. When called, stop sending the subscribed central updates of updates to the characteristic’s value.

## See Also

### Monitoring Subscriptions to Characteristic Values

- [peripheralManager(\_:central:didSubscribeTo:)](peripheralmanager%28__central_didsubscribeto_%29.md): Tells the delegate that a remote central device subscribed to a characteristic’s value.
- [peripheralManagerIsReady(toUpdateSubscribers:)](peripheralmanagerisready%28toupdatesubscribers_%29.md): Tells the delegate that a local peripheral device is ready to send characteristic value updates.

# peripheralManager:central:didUnsubscribeFromCharacteristic: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that a remote central device unsubscribed from a characteristic’s value.

## Declaration

```objectivec
- (void) peripheralManager:(CBPeripheralManager *) peripheral central:(CBCentral *) central didUnsubscribeFromCharacteristic:(CBCharacteristic *) characteristic;
```

## Parameters

- `peripheral`: The peripheral manager connected to the remote central.
- `central`: The remote central device that subscribed to the characteristic’s value.
- `characteristic`: The characteristic unsubscribed from.

<a id="Discussion"></a>

## Discussion

Core Bluetooth calls this method when a remote central device unsubscribes from the value of one of the local peripheral’s characteristics, by disabling notifications or indications on the characteristic’s value. When called, stop sending the subscribed central updates of updates to the characteristic’s value.

## See Also

### Monitoring Subscriptions to Characteristic Values

- [peripheralManager:central:didSubscribeToCharacteristic:](peripheralmanager%28__central_didsubscribeto_%29.md): Tells the delegate that a remote central device subscribed to a characteristic’s value.
- [peripheralManagerIsReadyToUpdateSubscribers:](peripheralmanagerisready%28toupdatesubscribers_%29.md): Tells the delegate that a local peripheral device is ready to send characteristic value updates.
