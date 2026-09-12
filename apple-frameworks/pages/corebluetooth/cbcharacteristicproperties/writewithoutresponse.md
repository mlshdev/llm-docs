> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcharacteristicproperties/writewithoutresponse](https://developer.apple.com/documentation/corebluetooth/cbcharacteristicproperties/writewithoutresponse)

# writeWithoutResponse (Swift)

**Framework:** Core Bluetooth  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A property that indicates a peripheral can write the characteristic’s value, without a response to indicate that the write succeeded.

## Declaration

```swift
static var writeWithoutResponse: CBCharacteristicProperties { get }
```

<a id="Discussion"></a>

## Discussion

Use the [writeValue(\_:for:type:)](../cbperipheral/writevalue%28__for_type_%29.md) method of the [CBPeripheral](../cbperipheral.md) class to write to a characteristic’s value, using the [CBCharacteristicWriteType.withoutResponse](../cbcharacteristicwritetype/withoutresponse.md) constant as the parameter for `type`. If a characteristic has this property set, it doesn’t return an error to the central when it fails to write the characteristic’s value.

## See Also

### Characteristic Properties

- [broadcast](broadcast.md): A property that indicates the characteristic can broadcast its value using a characteristic configuration descriptor.
- [read](read.md): A property that indicates a peripheral can read the characteristic’s value.
- [write](write.md): A property that indicates a peripheral can write the characteristic’s value, with a response to indicate that the write succeeded.
- [notify](notify.md): A property that indicates the peripheral permits notifications of the characteristic’s value, without a response from the central to indicate receipt of the notification.
- [indicate](indicate.md): A property that indicates the peripheral permits notifications of the characteristic’s value, with a response from the central to indicate receipt of the notification.
- [authenticatedSignedWrites](authenticatedsignedwrites.md): A property that indicates the perhipheral allows signed writes of the characteristic’s value, without a response to indicate the write succeeded.
- [extendedProperties](extendedproperties.md): A property that indicates the characteristic defines additional properties in the extended properties descriptor.
- [notifyEncryptionRequired](notifyencryptionrequired.md): A property that indicates that only trusted devices can enable notifications of the characteristic’s value.
- [indicateEncryptionRequired](indicateencryptionrequired.md): A property that indicates only trusted devices can enable indications of the characteristic’s value.

# CBCharacteristicPropertyWriteWithoutResponse (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Enumeration Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A property that indicates a peripheral can write the characteristic’s value, without a response to indicate that the write succeeded.

## Declaration

```objectivec
CBCharacteristicPropertyWriteWithoutResponse
```

<a id="Discussion"></a>

## Discussion

Use the [writeValue:forCharacteristic:type:](../cbperipheral/writevalue%28__for_type_%29.md) method of the [CBPeripheral](../cbperipheral.md) class to write to a characteristic’s value, using the [CBCharacteristicWriteWithoutResponse](../cbcharacteristicwritetype/withoutresponse.md) constant as the parameter for `type`. If a characteristic has this property set, it doesn’t return an error to the central when it fails to write the characteristic’s value.

## See Also

### Characteristic Properties

- [CBCharacteristicPropertyBroadcast](broadcast.md): A property that indicates the characteristic can broadcast its value using a characteristic configuration descriptor.
- [CBCharacteristicPropertyRead](read.md): A property that indicates a peripheral can read the characteristic’s value.
- [CBCharacteristicPropertyWrite](write.md): A property that indicates a peripheral can write the characteristic’s value, with a response to indicate that the write succeeded.
- [CBCharacteristicPropertyNotify](notify.md): A property that indicates the peripheral permits notifications of the characteristic’s value, without a response from the central to indicate receipt of the notification.
- [CBCharacteristicPropertyIndicate](indicate.md): A property that indicates the peripheral permits notifications of the characteristic’s value, with a response from the central to indicate receipt of the notification.
- [CBCharacteristicPropertyAuthenticatedSignedWrites](authenticatedsignedwrites.md): A property that indicates the perhipheral allows signed writes of the characteristic’s value, without a response to indicate the write succeeded.
- [CBCharacteristicPropertyExtendedProperties](extendedproperties.md): A property that indicates the characteristic defines additional properties in the extended properties descriptor.
- [CBCharacteristicPropertyNotifyEncryptionRequired](notifyencryptionrequired.md): A property that indicates that only trusted devices can enable notifications of the characteristic’s value.
- [CBCharacteristicPropertyIndicateEncryptionRequired](indicateencryptionrequired.md): A property that indicates only trusted devices can enable indications of the characteristic’s value.
