> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcharacteristicproperties/read](https://developer.apple.com/documentation/corebluetooth/cbcharacteristicproperties/read)

# read (Swift)

**Framework:** Core Bluetooth  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A property that indicates a peripheral can read the characteristic’s value.

## Declaration

```swift
static var read: CBCharacteristicProperties { get }
```

<a id="Discussion"></a>

## Discussion

Use the [readValue(for:)](../cbperipheral/readvalue%28for_%29-6u2kr.md) method of the [CBPeripheral](../cbperipheral.md) class to read the value of a characteristic.

## See Also

### Characteristic Properties

- [broadcast](broadcast.md): A property that indicates the characteristic can broadcast its value using a characteristic configuration descriptor.
- [writeWithoutResponse](writewithoutresponse.md): A property that indicates a peripheral can write the characteristic’s value, without a response to indicate that the write succeeded.
- [write](write.md): A property that indicates a peripheral can write the characteristic’s value, with a response to indicate that the write succeeded.
- [notify](notify.md): A property that indicates the peripheral permits notifications of the characteristic’s value, without a response from the central to indicate receipt of the notification.
- [indicate](indicate.md): A property that indicates the peripheral permits notifications of the characteristic’s value, with a response from the central to indicate receipt of the notification.
- [authenticatedSignedWrites](authenticatedsignedwrites.md): A property that indicates the perhipheral allows signed writes of the characteristic’s value, without a response to indicate the write succeeded.
- [extendedProperties](extendedproperties.md): A property that indicates the characteristic defines additional properties in the extended properties descriptor.
- [notifyEncryptionRequired](notifyencryptionrequired.md): A property that indicates that only trusted devices can enable notifications of the characteristic’s value.
- [indicateEncryptionRequired](indicateencryptionrequired.md): A property that indicates only trusted devices can enable indications of the characteristic’s value.

# CBCharacteristicPropertyRead (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Enumeration Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A property that indicates a peripheral can read the characteristic’s value.

## Declaration

```objectivec
CBCharacteristicPropertyRead
```

<a id="Discussion"></a>

## Discussion

Use the [readValueForCharacteristic:](../cbperipheral/readvalue%28for_%29-6u2kr.md) method of the [CBPeripheral](../cbperipheral.md) class to read the value of a characteristic.

## See Also

### Characteristic Properties

- [CBCharacteristicPropertyBroadcast](broadcast.md): A property that indicates the characteristic can broadcast its value using a characteristic configuration descriptor.
- [CBCharacteristicPropertyWriteWithoutResponse](writewithoutresponse.md): A property that indicates a peripheral can write the characteristic’s value, without a response to indicate that the write succeeded.
- [CBCharacteristicPropertyWrite](write.md): A property that indicates a peripheral can write the characteristic’s value, with a response to indicate that the write succeeded.
- [CBCharacteristicPropertyNotify](notify.md): A property that indicates the peripheral permits notifications of the characteristic’s value, without a response from the central to indicate receipt of the notification.
- [CBCharacteristicPropertyIndicate](indicate.md): A property that indicates the peripheral permits notifications of the characteristic’s value, with a response from the central to indicate receipt of the notification.
- [CBCharacteristicPropertyAuthenticatedSignedWrites](authenticatedsignedwrites.md): A property that indicates the perhipheral allows signed writes of the characteristic’s value, without a response to indicate the write succeeded.
- [CBCharacteristicPropertyExtendedProperties](extendedproperties.md): A property that indicates the characteristic defines additional properties in the extended properties descriptor.
- [CBCharacteristicPropertyNotifyEncryptionRequired](notifyencryptionrequired.md): A property that indicates that only trusted devices can enable notifications of the characteristic’s value.
- [CBCharacteristicPropertyIndicateEncryptionRequired](indicateencryptionrequired.md): A property that indicates only trusted devices can enable indications of the characteristic’s value.
