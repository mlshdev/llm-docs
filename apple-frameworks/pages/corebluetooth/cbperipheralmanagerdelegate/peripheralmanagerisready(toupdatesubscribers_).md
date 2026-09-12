> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanagerdelegate/peripheralmanagerisready(toupdatesubscribers:)](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanagerdelegate/peripheralmanagerisready(toupdatesubscribers:))

# peripheralManagerIsReady(toUpdateSubscribers:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that a local peripheral device is ready to send characteristic value updates.

## Declaration

```swift
optional func peripheralManagerIsReady(toUpdateSubscribers peripheral: CBPeripheralManager)
```

## Parameters

- `peripheral`: The peripheral manager that sends characteristic value updates.

<a id="Discussion"></a>

## Discussion

When a call to the [updateValue(\_:for:onSubscribedCentrals:)](../cbperipheralmanager/updatevalue%28__for_onsubscribedcentrals_%29.md) method fails because the underlying queue used to transmit the updated characteristic value is full, Core Bluetooth calls the [peripheralManagerIsReady(toUpdateSubscribers:)](peripheralmanagerisready%28toupdatesubscribers_%29.md) method when more space in the transmit queue becomes available. You can then implement this delegate method to resend the value.

## See Also

### Monitoring Subscriptions to Characteristic Values

- [peripheralManager(\_:central:didSubscribeTo:)](peripheralmanager%28__central_didsubscribeto_%29.md): Tells the delegate that a remote central device subscribed to a characteristic’s value.
- [peripheralManager(\_:central:didUnsubscribeFrom:)](peripheralmanager%28__central_didunsubscribefrom_%29.md): Tells the delegate that a remote central device unsubscribed from a characteristic’s value.

# peripheralManagerIsReadyToUpdateSubscribers: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that a local peripheral device is ready to send characteristic value updates.

## Declaration

```objectivec
- (void) peripheralManagerIsReadyToUpdateSubscribers:(CBPeripheralManager *) peripheral;
```

## Parameters

- `peripheral`: The peripheral manager that sends characteristic value updates.

<a id="Discussion"></a>

## Discussion

When a call to the [updateValue:forCharacteristic:onSubscribedCentrals:](../cbperipheralmanager/updatevalue%28__for_onsubscribedcentrals_%29.md) method fails because the underlying queue used to transmit the updated characteristic value is full, Core Bluetooth calls the [peripheralManagerIsReadyToUpdateSubscribers:](peripheralmanagerisready%28toupdatesubscribers_%29.md) method when more space in the transmit queue becomes available. You can then implement this delegate method to resend the value.

## See Also

### Monitoring Subscriptions to Characteristic Values

- [peripheralManager:central:didSubscribeToCharacteristic:](peripheralmanager%28__central_didsubscribeto_%29.md): Tells the delegate that a remote central device subscribed to a characteristic’s value.
- [peripheralManager:central:didUnsubscribeFromCharacteristic:](peripheralmanager%28__central_didunsubscribefrom_%29.md): Tells the delegate that a remote central device unsubscribed from a characteristic’s value.
