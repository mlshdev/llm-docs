> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbmutablecharacteristic](https://developer.apple.com/documentation/corebluetooth/cbmutablecharacteristic)

# CBMutableCharacteristic (Swift)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A characteristic of a local peripheral’s service.

## Declaration

```swift
class CBMutableCharacteristic
```

<a id="overview"></a>

## Overview

[CBMutableCharacteristic](cbmutablecharacteristic.md) objects represent the characteristics of a local peripheral’s service. This class adds write access to many of the properties in the [CBCharacteristic](cbcharacteristic.md) class, which it inherits from.

You use this class to create a characteristic and to set its properties and permissions as desired. After you create and add a characteristic to a local service, you can publish it (and the service) to the peripheral’s local database with the [add(\_:)](cbperipheralmanager/add%28__%29.md) method of the [CBPeripheralManager](cbperipheralmanager.md) class. After you publish a characteristic, Core Bluetooth caches the characteristic and you can’t make changes to it.

## Topics

### Creating a Mutable Characteristic

- [init(type:properties:value:permissions:)](cbmutablecharacteristic/init%28type_properties_value_permissions_%29.md): Creates a mutable characteristic with specified permissions, properties, and value.

### Managing a Mutable Characteristic

- [value](cbmutablecharacteristic/value.md): The value of the characteristic.
- [descriptors](cbmutablecharacteristic/descriptors.md): An array of the characteristic’s descriptors.
- [properties](cbmutablecharacteristic/properties.md): The properties of the characteristic.
- [permissions](cbmutablecharacteristic/permissions.md): The permissions of the characteristic value.
- [CBAttributePermissions](cbattributepermissions.md): Values that represent the read, write, and encryption permissions for a characteristic’s value.
- [subscribedCentrals](cbmutablecharacteristic/subscribedcentrals.md): A list of centrals that are currently subscribed to the characteristic’s value.

## Relationships

### Inherits From

- [CBCharacteristic](cbcharacteristic.md)

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
- [CBDescriptor](cbdescriptor.md): An object that provides further information about a remote peripheral’s characteristic.
- [CBMutableDescriptor](cbmutabledescriptor.md): An object that provides additional information about a local peripheral’s characteristic.

# CBMutableCharacteristic (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A characteristic of a local peripheral’s service.

## Declaration

```objectivec
@interface CBMutableCharacteristic : CBCharacteristic
```

<a id="overview"></a>

## Overview

[CBMutableCharacteristic](cbmutablecharacteristic.md) objects represent the characteristics of a local peripheral’s service. This class adds write access to many of the properties in the [CBCharacteristic](cbcharacteristic.md) class, which it inherits from.

You use this class to create a characteristic and to set its properties and permissions as desired. After you create and add a characteristic to a local service, you can publish it (and the service) to the peripheral’s local database with the [addService:](cbperipheralmanager/add%28__%29.md) method of the [CBPeripheralManager](cbperipheralmanager.md) class. After you publish a characteristic, Core Bluetooth caches the characteristic and you can’t make changes to it.

## Topics

### Creating a Mutable Characteristic

- [initWithType:properties:value:permissions:](cbmutablecharacteristic/init%28type_properties_value_permissions_%29.md): Creates a mutable characteristic with specified permissions, properties, and value.

### Managing a Mutable Characteristic

- [value](cbmutablecharacteristic/value.md): The value of the characteristic.
- [descriptors](cbmutablecharacteristic/descriptors.md): An array of the characteristic’s descriptors.
- [properties](cbmutablecharacteristic/properties.md): The properties of the characteristic.
- [permissions](cbmutablecharacteristic/permissions.md): The permissions of the characteristic value.
- [CBAttributePermissions](cbattributepermissions.md): Values that represent the read, write, and encryption permissions for a characteristic’s value.
- [subscribedCentrals](cbmutablecharacteristic/subscribedcentrals.md): A list of centrals that are currently subscribed to the characteristic’s value.

## Relationships

### Inherits From

- [CBCharacteristic](cbcharacteristic.md)

## See Also

### Services

- [CBService](cbservice.md): A collection of data and associated behaviors that accomplish a function or feature of a device.
- [CBMutableService](cbmutableservice.md): A service with writeable property values.
- [CBCharacteristic](cbcharacteristic.md): A characteristic of a remote peripheral’s service.
- [CBDescriptor](cbdescriptor.md): An object that provides further information about a remote peripheral’s characteristic.
- [CBMutableDescriptor](cbmutabledescriptor.md): An object that provides additional information about a local peripheral’s characteristic.
