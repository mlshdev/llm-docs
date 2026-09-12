> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcharacteristicproperties/indicateencryptionrequired](https://developer.apple.com/documentation/corebluetooth/cbcharacteristicproperties/indicateencryptionrequired)

# indicateEncryptionRequired (Swift)

**Framework:** Core Bluetooth  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A property that indicates only trusted devices can enable indications of the characteristic’s value.

## Declaration

```swift
static var indicateEncryptionRequired: CBCharacteristicProperties { get }
```

## See Also

### Characteristic Properties

- [broadcast](broadcast.md): A property that indicates the characteristic can broadcast its value using a characteristic configuration descriptor.
- [read](read.md): A property that indicates a peripheral can read the characteristic’s value.
- [writeWithoutResponse](writewithoutresponse.md): A property that indicates a peripheral can write the characteristic’s value, without a response to indicate that the write succeeded.
- [write](write.md): A property that indicates a peripheral can write the characteristic’s value, with a response to indicate that the write succeeded.
- [notify](notify.md): A property that indicates the peripheral permits notifications of the characteristic’s value, without a response from the central to indicate receipt of the notification.
- [indicate](indicate.md): A property that indicates the peripheral permits notifications of the characteristic’s value, with a response from the central to indicate receipt of the notification.
- [authenticatedSignedWrites](authenticatedsignedwrites.md): A property that indicates the perhipheral allows signed writes of the characteristic’s value, without a response to indicate the write succeeded.
- [extendedProperties](extendedproperties.md): A property that indicates the characteristic defines additional properties in the extended properties descriptor.
- [notifyEncryptionRequired](notifyencryptionrequired.md): A property that indicates that only trusted devices can enable notifications of the characteristic’s value.

# CBCharacteristicPropertyIndicateEncryptionRequired (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Enumeration Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A property that indicates only trusted devices can enable indications of the characteristic’s value.

## Declaration

```objectivec
CBCharacteristicPropertyIndicateEncryptionRequired
```

## See Also

### Characteristic Properties

- [CBCharacteristicPropertyBroadcast](broadcast.md): A property that indicates the characteristic can broadcast its value using a characteristic configuration descriptor.
- [CBCharacteristicPropertyRead](read.md): A property that indicates a peripheral can read the characteristic’s value.
- [CBCharacteristicPropertyWriteWithoutResponse](writewithoutresponse.md): A property that indicates a peripheral can write the characteristic’s value, without a response to indicate that the write succeeded.
- [CBCharacteristicPropertyWrite](write.md): A property that indicates a peripheral can write the characteristic’s value, with a response to indicate that the write succeeded.
- [CBCharacteristicPropertyNotify](notify.md): A property that indicates the peripheral permits notifications of the characteristic’s value, without a response from the central to indicate receipt of the notification.
- [CBCharacteristicPropertyIndicate](indicate.md): A property that indicates the peripheral permits notifications of the characteristic’s value, with a response from the central to indicate receipt of the notification.
- [CBCharacteristicPropertyAuthenticatedSignedWrites](authenticatedsignedwrites.md): A property that indicates the perhipheral allows signed writes of the characteristic’s value, without a response to indicate the write succeeded.
- [CBCharacteristicPropertyExtendedProperties](extendedproperties.md): A property that indicates the characteristic defines additional properties in the extended properties descriptor.
- [CBCharacteristicPropertyNotifyEncryptionRequired](notifyencryptionrequired.md): A property that indicates that only trusted devices can enable notifications of the characteristic’s value.
