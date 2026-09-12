> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcharacteristicproperties/extendedproperties](https://developer.apple.com/documentation/corebluetooth/cbcharacteristicproperties/extendedproperties)

# extendedProperties (Swift)

**Framework:** Core Bluetooth  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A property that indicates the characteristic defines additional properties in the extended properties descriptor.

## Declaration

```swift
static var extendedProperties: CBCharacteristicProperties { get }
```

<a id="Discussion"></a>

## Discussion

This property is only available for a remote peripheral’s service’s characteristic. You can’t use this property with a local characteristic, that is, a [CBMutableCharacteristic](../cbmutablecharacteristic.md) that you publish using the [add(\_:)](../cbperipheralmanager/add%28__%29.md) method of the [CBPeripheralManager](../cbperipheralmanager.md) class.

## See Also

### Characteristic Properties

- [broadcast](broadcast.md): A property that indicates the characteristic can broadcast its value using a characteristic configuration descriptor.
- [read](read.md): A property that indicates a peripheral can read the characteristic’s value.
- [writeWithoutResponse](writewithoutresponse.md): A property that indicates a peripheral can write the characteristic’s value, without a response to indicate that the write succeeded.
- [write](write.md): A property that indicates a peripheral can write the characteristic’s value, with a response to indicate that the write succeeded.
- [notify](notify.md): A property that indicates the peripheral permits notifications of the characteristic’s value, without a response from the central to indicate receipt of the notification.
- [indicate](indicate.md): A property that indicates the peripheral permits notifications of the characteristic’s value, with a response from the central to indicate receipt of the notification.
- [authenticatedSignedWrites](authenticatedsignedwrites.md): A property that indicates the perhipheral allows signed writes of the characteristic’s value, without a response to indicate the write succeeded.
- [notifyEncryptionRequired](notifyencryptionrequired.md): A property that indicates that only trusted devices can enable notifications of the characteristic’s value.
- [indicateEncryptionRequired](indicateencryptionrequired.md): A property that indicates only trusted devices can enable indications of the characteristic’s value.

# CBCharacteristicPropertyExtendedProperties (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Enumeration Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A property that indicates the characteristic defines additional properties in the extended properties descriptor.

## Declaration

```objectivec
CBCharacteristicPropertyExtendedProperties
```

<a id="Discussion"></a>

## Discussion

This property is only available for a remote peripheral’s service’s characteristic. You can’t use this property with a local characteristic, that is, a [CBMutableCharacteristic](../cbmutablecharacteristic.md) that you publish using the [addService:](../cbperipheralmanager/add%28__%29.md) method of the [CBPeripheralManager](../cbperipheralmanager.md) class.

## See Also

### Characteristic Properties

- [CBCharacteristicPropertyBroadcast](broadcast.md): A property that indicates the characteristic can broadcast its value using a characteristic configuration descriptor.
- [CBCharacteristicPropertyRead](read.md): A property that indicates a peripheral can read the characteristic’s value.
- [CBCharacteristicPropertyWriteWithoutResponse](writewithoutresponse.md): A property that indicates a peripheral can write the characteristic’s value, without a response to indicate that the write succeeded.
- [CBCharacteristicPropertyWrite](write.md): A property that indicates a peripheral can write the characteristic’s value, with a response to indicate that the write succeeded.
- [CBCharacteristicPropertyNotify](notify.md): A property that indicates the peripheral permits notifications of the characteristic’s value, without a response from the central to indicate receipt of the notification.
- [CBCharacteristicPropertyIndicate](indicate.md): A property that indicates the peripheral permits notifications of the characteristic’s value, with a response from the central to indicate receipt of the notification.
- [CBCharacteristicPropertyAuthenticatedSignedWrites](authenticatedsignedwrites.md): A property that indicates the perhipheral allows signed writes of the characteristic’s value, without a response to indicate the write succeeded.
- [CBCharacteristicPropertyNotifyEncryptionRequired](notifyencryptionrequired.md): A property that indicates that only trusted devices can enable notifications of the characteristic’s value.
- [CBCharacteristicPropertyIndicateEncryptionRequired](indicateencryptionrequired.md): A property that indicates only trusted devices can enable indications of the characteristic’s value.
