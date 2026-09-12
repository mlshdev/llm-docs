> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbmutabledescriptor](https://developer.apple.com/documentation/corebluetooth/cbmutabledescriptor)

# CBMutableDescriptor (Swift)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that provides additional information about a local peripheral’s characteristic.

## Declaration

```swift
class CBMutableDescriptor
```

<a id="overview"></a>

## Overview

You use the [CBMutableDescriptor](cbmutabledescriptor.md) class to create a local characteristic descriptor. After you create a descriptor and associate it with a local characteristic, you can publish it to the peripheral’s local database using the [add(\_:)](cbperipheralmanager/add%28__%29.md) method of the [CBPeripheralManager](cbperipheralmanager.md) class. This also publishes the characteristic and local service to which the descriptor belongs. After you publish a local descriptor, Core Bluetooth caches the descriptor and you can no longer make changes to it.

[CBUUID](cbuuid.md) details predefined descriptor types and their corresponding value types. That said, only two of these are currently supported when creating local, mutable descriptors: the characteristic user description descriptor and the characteristic format descriptor. [CBUUID](cbuuid.md) declares these as the constants [CBUUIDCharacteristicUserDescriptionString](cbuuidcharacteristicuserdescriptionstring.md) and [CBUUIDCharacteristicFormatString](cbuuidcharacteristicformatstring.md), respectively. The system automatically creates the extended properties descriptor and the client configuration descriptor, depending on the properties of the characteristic to which the descriptor belongs.

## Topics

### Creating a Mutable Descriptor

- [init(type:value:)](cbmutabledescriptor/init%28type_value_%29.md): Creates a mutable descriptor with a specified value.

## Relationships

### Inherits From

- [CBDescriptor](cbdescriptor.md)

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
- [CBDescriptor](cbdescriptor.md): An object that provides further information about a remote peripheral’s characteristic.

# CBMutableDescriptor (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that provides additional information about a local peripheral’s characteristic.

## Declaration

```objectivec
@interface CBMutableDescriptor : CBDescriptor
```

<a id="overview"></a>

## Overview

You use the [CBMutableDescriptor](cbmutabledescriptor.md) class to create a local characteristic descriptor. After you create a descriptor and associate it with a local characteristic, you can publish it to the peripheral’s local database using the [addService:](cbperipheralmanager/add%28__%29.md) method of the [CBPeripheralManager](cbperipheralmanager.md) class. This also publishes the characteristic and local service to which the descriptor belongs. After you publish a local descriptor, Core Bluetooth caches the descriptor and you can no longer make changes to it.

[CBUUID](cbuuid.md) details predefined descriptor types and their corresponding value types. That said, only two of these are currently supported when creating local, mutable descriptors: the characteristic user description descriptor and the characteristic format descriptor. [CBUUID](cbuuid.md) declares these as the constants [CBUUIDCharacteristicUserDescriptionString](cbuuidcharacteristicuserdescriptionstring.md) and [CBUUIDCharacteristicFormatString](cbuuidcharacteristicformatstring.md), respectively. The system automatically creates the extended properties descriptor and the client configuration descriptor, depending on the properties of the characteristic to which the descriptor belongs.

## Topics

### Creating a Mutable Descriptor

- [initWithType:value:](cbmutabledescriptor/init%28type_value_%29.md): Creates a mutable descriptor with a specified value.

## Relationships

### Inherits From

- [CBDescriptor](cbdescriptor.md)

## See Also

### Services

- [CBService](cbservice.md): A collection of data and associated behaviors that accomplish a function or feature of a device.
- [CBMutableService](cbmutableservice.md): A service with writeable property values.
- [CBCharacteristic](cbcharacteristic.md): A characteristic of a remote peripheral’s service.
- [CBMutableCharacteristic](cbmutablecharacteristic.md): A characteristic of a local peripheral’s service.
- [CBDescriptor](cbdescriptor.md): An object that provides further information about a remote peripheral’s characteristic.
