> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcharacteristicproperties](https://developer.apple.com/documentation/corebluetooth/cbcharacteristicproperties)

# CBCharacteristicProperties (Swift)

**Framework:** Core Bluetooth  
**Kind:** Structure  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Values that represent the possible properties of a characteristic.

## Declaration

```swift
struct CBCharacteristicProperties
```

<a id="overview"></a>

## Overview

Since you can combine characteristic properties, a characteristic may have multiple property values set.

## Topics

### Creating a Characteristic Properties Instance

- [init(rawValue:)](cbcharacteristicproperties/init%28rawvalue_%29.md): Creates a characteristic properties instance from the given raw value.

### Characteristic Properties

- [broadcast](cbcharacteristicproperties/broadcast.md): A property that indicates the characteristic can broadcast its value using a characteristic configuration descriptor.
- [read](cbcharacteristicproperties/read.md): A property that indicates a peripheral can read the characteristic’s value.
- [writeWithoutResponse](cbcharacteristicproperties/writewithoutresponse.md): A property that indicates a peripheral can write the characteristic’s value, without a response to indicate that the write succeeded.
- [write](cbcharacteristicproperties/write.md): A property that indicates a peripheral can write the characteristic’s value, with a response to indicate that the write succeeded.
- [notify](cbcharacteristicproperties/notify.md): A property that indicates the peripheral permits notifications of the characteristic’s value, without a response from the central to indicate receipt of the notification.
- [indicate](cbcharacteristicproperties/indicate.md): A property that indicates the peripheral permits notifications of the characteristic’s value, with a response from the central to indicate receipt of the notification.
- [authenticatedSignedWrites](cbcharacteristicproperties/authenticatedsignedwrites.md): A property that indicates the perhipheral allows signed writes of the characteristic’s value, without a response to indicate the write succeeded.
- [extendedProperties](cbcharacteristicproperties/extendedproperties.md): A property that indicates the characteristic defines additional properties in the extended properties descriptor.
- [notifyEncryptionRequired](cbcharacteristicproperties/notifyencryptionrequired.md): A property that indicates that only trusted devices can enable notifications of the characteristic’s value.
- [indicateEncryptionRequired](cbcharacteristicproperties/indicateencryptionrequired.md): A property that indicates only trusted devices can enable indications of the characteristic’s value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Accessing Characteristic Data

- [value](cbcharacteristic/value.md): The value of the characteristic.
- [descriptors](cbcharacteristic/descriptors.md): A list of the descriptors discovered in this characteristic.
- [properties](cbcharacteristic/properties.md): The properties of the characteristic.
- [isNotifying](cbcharacteristic/isnotifying.md): A Boolean value that indicates whether the characteristic is currently notifying a subscribed central of its value.
- [isBroadcasted](cbcharacteristic/isbroadcasted.md): Deprecated. A Boolean value that indicates whether the characteristic the service broadcasts this characteristic.

# CBCharacteristicProperties (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Values that represent the possible properties of a characteristic.

## Declaration

```objectivec
enum CBCharacteristicProperties : NSUInteger;
```

<a id="overview"></a>

## Overview

Since you can combine characteristic properties, a characteristic may have multiple property values set.

## Topics

### Characteristic Properties

- [CBCharacteristicPropertyBroadcast](cbcharacteristicproperties/broadcast.md): A property that indicates the characteristic can broadcast its value using a characteristic configuration descriptor.
- [CBCharacteristicPropertyRead](cbcharacteristicproperties/read.md): A property that indicates a peripheral can read the characteristic’s value.
- [CBCharacteristicPropertyWriteWithoutResponse](cbcharacteristicproperties/writewithoutresponse.md): A property that indicates a peripheral can write the characteristic’s value, without a response to indicate that the write succeeded.
- [CBCharacteristicPropertyWrite](cbcharacteristicproperties/write.md): A property that indicates a peripheral can write the characteristic’s value, with a response to indicate that the write succeeded.
- [CBCharacteristicPropertyNotify](cbcharacteristicproperties/notify.md): A property that indicates the peripheral permits notifications of the characteristic’s value, without a response from the central to indicate receipt of the notification.
- [CBCharacteristicPropertyIndicate](cbcharacteristicproperties/indicate.md): A property that indicates the peripheral permits notifications of the characteristic’s value, with a response from the central to indicate receipt of the notification.
- [CBCharacteristicPropertyAuthenticatedSignedWrites](cbcharacteristicproperties/authenticatedsignedwrites.md): A property that indicates the perhipheral allows signed writes of the characteristic’s value, without a response to indicate the write succeeded.
- [CBCharacteristicPropertyExtendedProperties](cbcharacteristicproperties/extendedproperties.md): A property that indicates the characteristic defines additional properties in the extended properties descriptor.
- [CBCharacteristicPropertyNotifyEncryptionRequired](cbcharacteristicproperties/notifyencryptionrequired.md): A property that indicates that only trusted devices can enable notifications of the characteristic’s value.
- [CBCharacteristicPropertyIndicateEncryptionRequired](cbcharacteristicproperties/indicateencryptionrequired.md): A property that indicates only trusted devices can enable indications of the characteristic’s value.

## See Also

### Accessing Characteristic Data

- [value](cbcharacteristic/value.md): The value of the characteristic.
- [descriptors](cbcharacteristic/descriptors.md): A list of the descriptors discovered in this characteristic.
- [properties](cbcharacteristic/properties.md): The properties of the characteristic.
- [isNotifying](cbcharacteristic/isnotifying.md): A Boolean value that indicates whether the characteristic is currently notifying a subscribed central of its value.
- [isBroadcasted](cbcharacteristic/isbroadcasted.md): Deprecated. A Boolean value that indicates whether the characteristic the service broadcasts this characteristic.
