> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbmutableservice](https://developer.apple.com/documentation/corebluetooth/cbmutableservice)

# CBMutableService (Swift)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A service with writeable property values.

## Declaration

```swift
class CBMutableService
```

<a id="overview"></a>

## Overview

The [CBMutableService](cbmutableservice.md) class adds write access to all of the properties in the [CBService](cbservice.md) class it inherits from. You use this class to create a service or an included service on a local peripheral device (represented by a [CBPeripheralManager](cbperipheralmanager.md) object). After creating a service, you can add it to the peripheral’s local database using the [add(\_:)](cbperipheralmanager/add%28__%29.md) method of the [CBPeripheralManager](cbperipheralmanager.md) class. After you add a service to the peripheral’s local database, Core Bluetooth caches the service and you can no longer make changes to it.

## Topics

### Creating a Mutable Service

- [init(type:primary:)](cbmutableservice/init%28type_primary_%29.md): Creates a newly initialized mutable service specified by UUID and service type.

### Managing a Mutable Service

- [characteristics](cbmutableservice/characteristics.md): A list of characteristics of a service.
- [includedServices](cbmutableservice/includedservices.md): A list of included services.

## Relationships

### Inherits From

- [CBService](cbservice.md)

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
- [CBCharacteristic](cbcharacteristic.md): A characteristic of a remote peripheral’s service.
- [CBMutableCharacteristic](cbmutablecharacteristic.md): A characteristic of a local peripheral’s service.
- [CBDescriptor](cbdescriptor.md): An object that provides further information about a remote peripheral’s characteristic.
- [CBMutableDescriptor](cbmutabledescriptor.md): An object that provides additional information about a local peripheral’s characteristic.

# CBMutableService (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A service with writeable property values.

## Declaration

```objectivec
@interface CBMutableService : CBService
```

<a id="overview"></a>

## Overview

The [CBMutableService](cbmutableservice.md) class adds write access to all of the properties in the [CBService](cbservice.md) class it inherits from. You use this class to create a service or an included service on a local peripheral device (represented by a [CBPeripheralManager](cbperipheralmanager.md) object). After creating a service, you can add it to the peripheral’s local database using the [addService:](cbperipheralmanager/add%28__%29.md) method of the [CBPeripheralManager](cbperipheralmanager.md) class. After you add a service to the peripheral’s local database, Core Bluetooth caches the service and you can no longer make changes to it.

## Topics

### Creating a Mutable Service

- [initWithType:primary:](cbmutableservice/init%28type_primary_%29.md): Creates a newly initialized mutable service specified by UUID and service type.

### Managing a Mutable Service

- [characteristics](cbmutableservice/characteristics.md): A list of characteristics of a service.
- [includedServices](cbmutableservice/includedservices.md): A list of included services.

## Relationships

### Inherits From

- [CBService](cbservice.md)

## See Also

### Services

- [CBService](cbservice.md): A collection of data and associated behaviors that accomplish a function or feature of a device.
- [CBCharacteristic](cbcharacteristic.md): A characteristic of a remote peripheral’s service.
- [CBMutableCharacteristic](cbmutablecharacteristic.md): A characteristic of a local peripheral’s service.
- [CBDescriptor](cbdescriptor.md): An object that provides further information about a remote peripheral’s characteristic.
- [CBMutableDescriptor](cbmutabledescriptor.md): An object that provides additional information about a local peripheral’s characteristic.
