> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheral/setnotifyvalue(_:for:)](https://developer.apple.com/documentation/corebluetooth/cbperipheral/setnotifyvalue(_:for:))

# setNotifyValue(\_:for:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets notifications or indications for the value of a specified characteristic.

## Declaration

```swift
func setNotifyValue(_ enabled: Bool, for characteristic: CBCharacteristic)
```

## Parameters

- `enabled`: A Boolean value that indicates whether to receive notifications or indications whenever the characteristic’s value changes. [true](https://developer.apple.com/documentation/swift/true) if you want to enable notifications or indications for the characteristic’s value. [false](https://developer.apple.com/documentation/swift/false) if you don’t want to receive notifications or indications whenever the characteristic’s value changes.
- `characteristic`: The specified characteristic.

<a id="Discussion"></a>

## Discussion

When you enable notifications for the characteristic’s value, the peripheral calls the [peripheral(\_:didUpdateNotificationStateFor:error:)](../cbperipheraldelegate/peripheral%28__didupdatenotificationstatefor_error_%29.md) method of its delegate object to indicate if the action succeeded. If successful, the peripheral then calls the [peripheral(\_:didUpdateValueFor:error:)](../cbperipheraldelegate/peripheral%28__didupdatevaluefor_error_%29-1xyna.md) method of its delegate object whenever the characteristic value changes. Because the peripheral chooses when it sends an update, your app should prepare to handle them as long as notifications or indications remain enabled. If the specified characteristic’s configuration allows both notifications and indications, calling this method enables notifications only. You can disable notifications and indications for a characteristic’s value by calling this method with the `enabled` parameter set to [false](https://developer.apple.com/documentation/swift/false).

## Topics

### Related Documentation

- [CBConnectPeripheralOptionNotifyOnNotificationKey](../cbconnectperipheraloptionnotifyonnotificationkey.md): A Boolean value that specifies whether the system should display an alert for any notification sent by a peripheral.

# setNotifyValue:forCharacteristic: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets notifications or indications for the value of a specified characteristic.

## Declaration

```objectivec
- (void) setNotifyValue:(BOOL) enabled forCharacteristic:(CBCharacteristic *) characteristic;
```

## Parameters

- `enabled`: A Boolean value that indicates whether to receive notifications or indications whenever the characteristic’s value changes. [true](https://developer.apple.com/documentation/swift/true) if you want to enable notifications or indications for the characteristic’s value. [false](https://developer.apple.com/documentation/swift/false) if you don’t want to receive notifications or indications whenever the characteristic’s value changes.
- `characteristic`: The specified characteristic.

<a id="Discussion"></a>

## Discussion

When you enable notifications for the characteristic’s value, the peripheral calls the [peripheral:didUpdateNotificationStateForCharacteristic:error:](../cbperipheraldelegate/peripheral%28__didupdatenotificationstatefor_error_%29.md) method of its delegate object to indicate if the action succeeded. If successful, the peripheral then calls the [peripheral:didUpdateValueForCharacteristic:error:](../cbperipheraldelegate/peripheral%28__didupdatevaluefor_error_%29-1xyna.md) method of its delegate object whenever the characteristic value changes. Because the peripheral chooses when it sends an update, your app should prepare to handle them as long as notifications or indications remain enabled. If the specified characteristic’s configuration allows both notifications and indications, calling this method enables notifications only. You can disable notifications and indications for a characteristic’s value by calling this method with the `enabled` parameter set to [false](https://developer.apple.com/documentation/swift/false).

## Topics

### Related Documentation

- [CBConnectPeripheralOptionNotifyOnNotificationKey](../cbconnectperipheraloptionnotifyonnotificationkey.md): A Boolean value that specifies whether the system should display an alert for any notification sent by a peripheral.
