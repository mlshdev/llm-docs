> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbattribute](https://developer.apple.com/documentation/corebluetooth/cbattribute)

# CBAttribute (Swift)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A representation of common aspects of services offered by a peripheral.

## Declaration

```swift
class CBAttribute
```

<a id="overview"></a>

## Overview

Concrete subclasses of [CBAttribute](cbattribute.md) (and their mutable counterparts) represent the services a peripheral offers, the characteristics of those services, and the descriptors attached to those characteristics. The concrete subclasses are:

- [CBService](cbservice.md)
- [CBCharacteristic](cbcharacteristic.md)
- [CBDescriptor](cbdescriptor.md)

## Topics

### Identifying an Attribute

- [uuid](cbattribute/uuid.md): The Bluetooth-specific UUID of the attribute.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CBCharacteristic](cbcharacteristic.md)
- [CBDescriptor](cbdescriptor.md)
- [CBService](cbservice.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Peripherals

- [CBPeripheral](cbperipheral.md): A remote peripheral device.
- [CBPeripheralDelegate](cbperipheraldelegate.md): A protocol that provides updates on the use of a peripheral’s services.
- [CBPeripheralManager](cbperipheralmanager.md): An object that manages and advertises peripheral services exposed by this app.
- [CBPeripheralManagerDelegate](cbperipheralmanagerdelegate.md): A protocol that provides updates for local peripheral state and interactions with remote central devices.
- [CBAttributePermissions](cbattributepermissions.md): Values that represent the read, write, and encryption permissions for a characteristic’s value.

# CBAttribute (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A representation of common aspects of services offered by a peripheral.

## Declaration

```objectivec
@interface CBAttribute : NSObject
```

<a id="overview"></a>

## Overview

Concrete subclasses of [CBAttribute](cbattribute.md) (and their mutable counterparts) represent the services a peripheral offers, the characteristics of those services, and the descriptors attached to those characteristics. The concrete subclasses are:

- [CBService](cbservice.md)
- [CBCharacteristic](cbcharacteristic.md)
- [CBDescriptor](cbdescriptor.md)

## Topics

### Identifying an Attribute

- [UUID](cbattribute/uuid.md): The Bluetooth-specific UUID of the attribute.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CBCharacteristic](cbcharacteristic.md)
- [CBDescriptor](cbdescriptor.md)
- [CBService](cbservice.md)

## See Also

### Peripherals

- [CBPeripheral](cbperipheral.md): A remote peripheral device.
- [CBPeripheralDelegate](cbperipheraldelegate.md): A protocol that provides updates on the use of a peripheral’s services.
- [CBPeripheralManager](cbperipheralmanager.md): An object that manages and advertises peripheral services exposed by this app.
- [CBPeripheralManagerDelegate](cbperipheralmanagerdelegate.md): A protocol that provides updates for local peripheral state and interactions with remote central devices.
- [CBAttributePermissions](cbattributepermissions.md): Values that represent the read, write, and encryption permissions for a characteristic’s value.
