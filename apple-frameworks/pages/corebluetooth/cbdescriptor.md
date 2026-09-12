> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbdescriptor](https://developer.apple.com/documentation/corebluetooth/cbdescriptor)

# CBDescriptor (Swift)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that provides further information about a remote peripheral’s characteristic.

## Declaration

```swift
class CBDescriptor
```

<a id="overview"></a>

## Overview

[CBDescriptor](cbdescriptor.md) and its subclass [CBMutableDescriptor](cbmutabledescriptor.md) represent a descriptor of a peripheral’s characteristic. In partcular, [CBDescriptor](cbdescriptor.md) objects represent the descriptors of a remote peripheral’s characteristic. Descriptors provide further information about a characteristic’s value. For example, they may describe the value in human-readable form and describe how to format the value for presentation purposes. Characteristic descriptors also indicate whether a characteristic’s value indicates or notifies a client (a central) when the value of the characteristic changes.

[CBUUID](cbuuid.md) details six predefined descriptors and their corresponding value types. [CBDescriptor](cbdescriptor.md) lists the predefined descriptors and the [CBUUID](cbuuid.md) constants that represent them.

| Descriptor type | Descriptor constant |
| --- | --- |
| Characteristic extended properties | [CBUUIDCharacteristicExtendedPropertiesString](cbuuidcharacteristicextendedpropertiesstring.md) |
| Characteristic user description | [CBUUIDCharacteristicUserDescriptionString](cbuuidcharacteristicuserdescriptionstring.md) |
| Client characteristic configuration | [CBUUIDClientCharacteristicConfigurationString](cbuuidclientcharacteristicconfigurationstring.md) |
| Server characteristic configuration | [CBUUIDServerCharacteristicConfigurationString](cbuuidservercharacteristicconfigurationstring.md) |
| Characteristic format | [CBUUIDCharacteristicFormatString](cbuuidcharacteristicformatstring.md) |
| Characteristic aggregate format | [CBUUIDCharacteristicAggregateFormatString](cbuuidcharacteristicaggregateformatstring.md) |

## Topics

### Identifying a Descriptor

- [characteristic](cbdescriptor/characteristic.md): The characteristic to which this descriptor belongs.

### Accessing Descriptor Data

- [value](cbdescriptor/value.md): The value of the descriptor.

## Relationships

### Inherits From

- [CBAttribute](cbattribute.md)

### Inherited By

- [CBMutableDescriptor](cbmutabledescriptor.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Services

- [CBService](cbservice.md): A collection of data and associated behaviors that accomplish a function or feature of a device.
- [CBMutableService](cbmutableservice.md): A service with writeable property values.
- [CBCharacteristic](cbcharacteristic.md): A characteristic of a remote peripheral’s service.
- [CBMutableCharacteristic](cbmutablecharacteristic.md): A characteristic of a local peripheral’s service.
- [CBMutableDescriptor](cbmutabledescriptor.md): An object that provides additional information about a local peripheral’s characteristic.

# CBDescriptor (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that provides further information about a remote peripheral’s characteristic.

## Declaration

```objectivec
@interface CBDescriptor : CBAttribute
```

<a id="overview"></a>

## Overview

[CBDescriptor](cbdescriptor.md) and its subclass [CBMutableDescriptor](cbmutabledescriptor.md) represent a descriptor of a peripheral’s characteristic. In partcular, [CBDescriptor](cbdescriptor.md) objects represent the descriptors of a remote peripheral’s characteristic. Descriptors provide further information about a characteristic’s value. For example, they may describe the value in human-readable form and describe how to format the value for presentation purposes. Characteristic descriptors also indicate whether a characteristic’s value indicates or notifies a client (a central) when the value of the characteristic changes.

[CBUUID](cbuuid.md) details six predefined descriptors and their corresponding value types. [CBDescriptor](cbdescriptor.md) lists the predefined descriptors and the [CBUUID](cbuuid.md) constants that represent them.

| Descriptor type | Descriptor constant |
| --- | --- |
| Characteristic extended properties | [CBUUIDCharacteristicExtendedPropertiesString](cbuuidcharacteristicextendedpropertiesstring.md) |
| Characteristic user description | [CBUUIDCharacteristicUserDescriptionString](cbuuidcharacteristicuserdescriptionstring.md) |
| Client characteristic configuration | [CBUUIDClientCharacteristicConfigurationString](cbuuidclientcharacteristicconfigurationstring.md) |
| Server characteristic configuration | [CBUUIDServerCharacteristicConfigurationString](cbuuidservercharacteristicconfigurationstring.md) |
| Characteristic format | [CBUUIDCharacteristicFormatString](cbuuidcharacteristicformatstring.md) |
| Characteristic aggregate format | [CBUUIDCharacteristicAggregateFormatString](cbuuidcharacteristicaggregateformatstring.md) |

## Topics

### Identifying a Descriptor

- [characteristic](cbdescriptor/characteristic.md): The characteristic to which this descriptor belongs.

### Accessing Descriptor Data

- [value](cbdescriptor/value.md): The value of the descriptor.

## Relationships

### Inherits From

- [CBAttribute](cbattribute.md)

### Inherited By

- [CBMutableDescriptor](cbmutabledescriptor.md)

## See Also

### Services

- [CBService](cbservice.md): A collection of data and associated behaviors that accomplish a function or feature of a device.
- [CBMutableService](cbmutableservice.md): A service with writeable property values.
- [CBCharacteristic](cbcharacteristic.md): A characteristic of a remote peripheral’s service.
- [CBMutableCharacteristic](cbmutablecharacteristic.md): A characteristic of a local peripheral’s service.
- [CBMutableDescriptor](cbmutabledescriptor.md): An object that provides additional information about a local peripheral’s characteristic.
