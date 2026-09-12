> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcharacteristic](https://developer.apple.com/documentation/corebluetooth/cbcharacteristic)

# CBCharacteristic (Swift)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A characteristic of a remote peripheral’s service.

## Declaration

```swift
class CBCharacteristic
```

<a id="overview"></a>

## Overview

[CBCharacteristic](cbcharacteristic.md) and its subclass [CBMutableCharacteristic](cbmutablecharacteristic.md) represent further information about a peripheral’s service. In particular, [CBCharacteristic](cbcharacteristic.md) objects represent the characteristics of a remote peripheral’s service. A characteristic contains a single value and any number of descriptors describing that value. The properties of a characteristic determine how you can use a characteristic’s value, and how you access the descriptors.

## Topics

### Identifying a Characteristic

- [service](cbcharacteristic/service.md): The service to which this characteristic belongs.

### Accessing Characteristic Data

- [value](cbcharacteristic/value.md): The value of the characteristic.
- [descriptors](cbcharacteristic/descriptors.md): A list of the descriptors discovered in this characteristic.
- [properties](cbcharacteristic/properties.md): The properties of the characteristic.
- [CBCharacteristicProperties](cbcharacteristicproperties.md): Values that represent the possible properties of a characteristic.
- [isNotifying](cbcharacteristic/isnotifying.md): A Boolean value that indicates whether the characteristic is currently notifying a subscribed central of its value.
- [isBroadcasted](cbcharacteristic/isbroadcasted.md): Deprecated. A Boolean value that indicates whether the characteristic the service broadcasts this characteristic.

## Relationships

### Inherits From

- [CBAttribute](cbattribute.md)

### Inherited By

- [CBMutableCharacteristic](cbmutablecharacteristic.md)

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
- [CBMutableCharacteristic](cbmutablecharacteristic.md): A characteristic of a local peripheral’s service.
- [CBDescriptor](cbdescriptor.md): An object that provides further information about a remote peripheral’s characteristic.
- [CBMutableDescriptor](cbmutabledescriptor.md): An object that provides additional information about a local peripheral’s characteristic.

# CBCharacteristic (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A characteristic of a remote peripheral’s service.

## Declaration

```objectivec
@interface CBCharacteristic : CBAttribute
```

<a id="overview"></a>

## Overview

[CBCharacteristic](cbcharacteristic.md) and its subclass [CBMutableCharacteristic](cbmutablecharacteristic.md) represent further information about a peripheral’s service. In particular, [CBCharacteristic](cbcharacteristic.md) objects represent the characteristics of a remote peripheral’s service. A characteristic contains a single value and any number of descriptors describing that value. The properties of a characteristic determine how you can use a characteristic’s value, and how you access the descriptors.

## Topics

### Identifying a Characteristic

- [service](cbcharacteristic/service.md): The service to which this characteristic belongs.

### Accessing Characteristic Data

- [value](cbcharacteristic/value.md): The value of the characteristic.
- [descriptors](cbcharacteristic/descriptors.md): A list of the descriptors discovered in this characteristic.
- [properties](cbcharacteristic/properties.md): The properties of the characteristic.
- [CBCharacteristicProperties](cbcharacteristicproperties.md): Values that represent the possible properties of a characteristic.
- [isNotifying](cbcharacteristic/isnotifying.md): A Boolean value that indicates whether the characteristic is currently notifying a subscribed central of its value.
- [isBroadcasted](cbcharacteristic/isbroadcasted.md): Deprecated. A Boolean value that indicates whether the characteristic the service broadcasts this characteristic.

## Relationships

### Inherits From

- [CBAttribute](cbattribute.md)

### Inherited By

- [CBMutableCharacteristic](cbmutablecharacteristic.md)

## See Also

### Services

- [CBService](cbservice.md): A collection of data and associated behaviors that accomplish a function or feature of a device.
- [CBMutableService](cbmutableservice.md): A service with writeable property values.
- [CBMutableCharacteristic](cbmutablecharacteristic.md): A characteristic of a local peripheral’s service.
- [CBDescriptor](cbdescriptor.md): An object that provides further information about a remote peripheral’s characteristic.
- [CBMutableDescriptor](cbmutabledescriptor.md): An object that provides additional information about a local peripheral’s characteristic.
