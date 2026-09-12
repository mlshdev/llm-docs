> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbservice](https://developer.apple.com/documentation/corebluetooth/cbservice)

# CBService (Swift)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A collection of data and associated behaviors that accomplish a function or feature of a device.

## Declaration

```swift
class CBService
```

<a id="overview"></a>

## Overview

[CBService](cbservice.md) objects represent services of a remote peripheral. Services are either primary or secondary and may contain multiple characteristics or included services (references to other services).

## Topics

### Identifying a Service

- [peripheral](cbservice/peripheral.md): The peripheral to which this service belongs.
- [isPrimary](cbservice/isprimary.md): A Boolean value that indicates whether the type of service is primary or secondary.

### Accessing Service Data

- [characteristics](cbservice/characteristics.md): A list of characteristics discovered in this service.
- [includedServices](cbservice/includedservices.md): A list of included services discovered in this service.

## Relationships

### Inherits From

- [CBAttribute](cbattribute.md)

### Inherited By

- [CBMutableService](cbmutableservice.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Services

- [CBMutableService](cbmutableservice.md): A service with writeable property values.
- [CBCharacteristic](cbcharacteristic.md): A characteristic of a remote peripheral’s service.
- [CBMutableCharacteristic](cbmutablecharacteristic.md): A characteristic of a local peripheral’s service.
- [CBDescriptor](cbdescriptor.md): An object that provides further information about a remote peripheral’s characteristic.
- [CBMutableDescriptor](cbmutabledescriptor.md): An object that provides additional information about a local peripheral’s characteristic.

# CBService (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A collection of data and associated behaviors that accomplish a function or feature of a device.

## Declaration

```objectivec
@interface CBService : CBAttribute
```

<a id="overview"></a>

## Overview

[CBService](cbservice.md) objects represent services of a remote peripheral. Services are either primary or secondary and may contain multiple characteristics or included services (references to other services).

## Topics

### Identifying a Service

- [peripheral](cbservice/peripheral.md): The peripheral to which this service belongs.
- [isPrimary](cbservice/isprimary.md): A Boolean value that indicates whether the type of service is primary or secondary.

### Accessing Service Data

- [characteristics](cbservice/characteristics.md): A list of characteristics discovered in this service.
- [includedServices](cbservice/includedservices.md): A list of included services discovered in this service.

## Relationships

### Inherits From

- [CBAttribute](cbattribute.md)

### Inherited By

- [CBMutableService](cbmutableservice.md)

## See Also

### Services

- [CBMutableService](cbmutableservice.md): A service with writeable property values.
- [CBCharacteristic](cbcharacteristic.md): A characteristic of a remote peripheral’s service.
- [CBMutableCharacteristic](cbmutablecharacteristic.md): A characteristic of a local peripheral’s service.
- [CBDescriptor](cbdescriptor.md): An object that provides further information about a remote peripheral’s characteristic.
- [CBMutableDescriptor](cbmutabledescriptor.md): An object that provides additional information about a local peripheral’s characteristic.
