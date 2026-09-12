> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbattrequest](https://developer.apple.com/documentation/corebluetooth/cbattrequest)

# CBATTRequest (Swift)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A request that uses the Attribute Protocol (ATT).

## Declaration

```swift
class CBATTRequest
```

<a id="overview"></a>

## Overview

The [CBATTRequest](cbattrequest.md) class represents Attribute Protocol (ATT) read and write requests from remote central devices (represented by [CBCentral](cbcentral.md) objects). Remote centrals use these ATT requests to read and write characteristic values on local peripherals (represented by [CBPeripheralManager](cbperipheralmanager.md) objects). Local peripherals, on the other hand, use the properties of [CBATTRequest](cbattrequest.md) objects to respond to the read and write requests appropriately, using the [respond(to:withResult:)](cbperipheralmanager/respond%28to_withresult_%29.md) method of the [CBPeripheralManager](cbperipheralmanager.md) class.

## Topics

### Requesting to Read and Write Characteristic Values

- [central](cbattrequest/central.md): The remote central device that originated the request.
- [characteristic](cbattrequest/characteristic.md): The characteristic to read or write the value of.
- [value](cbattrequest/value.md): The data that the central reads from or writes to the peripheral.
- [offset](cbattrequest/offset.md): The zero-based index of the first byte for the read or write request.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Supporting Types

- [CBManager](cbmanager.md): The abstract base class that manages central and peripheral objects.
- [CBPeer](cbpeer.md): An object that represents a remote device.
- [CBUUID](cbuuid.md): A universally unique identifier, as defined by Bluetooth standards.

# CBATTRequest (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A request that uses the Attribute Protocol (ATT).

## Declaration

```objectivec
@interface CBATTRequest : NSObject
```

<a id="overview"></a>

## Overview

The [CBATTRequest](cbattrequest.md) class represents Attribute Protocol (ATT) read and write requests from remote central devices (represented by [CBCentral](cbcentral.md) objects). Remote centrals use these ATT requests to read and write characteristic values on local peripherals (represented by [CBPeripheralManager](cbperipheralmanager.md) objects). Local peripherals, on the other hand, use the properties of [CBATTRequest](cbattrequest.md) objects to respond to the read and write requests appropriately, using the [respondToRequest:withResult:](cbperipheralmanager/respond%28to_withresult_%29.md) method of the [CBPeripheralManager](cbperipheralmanager.md) class.

## Topics

### Requesting to Read and Write Characteristic Values

- [central](cbattrequest/central.md): The remote central device that originated the request.
- [characteristic](cbattrequest/characteristic.md): The characteristic to read or write the value of.
- [value](cbattrequest/value.md): The data that the central reads from or writes to the peripheral.
- [offset](cbattrequest/offset.md): The zero-based index of the first byte for the read or write request.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Supporting Types

- [CBManager](cbmanager.md): The abstract base class that manages central and peripheral objects.
- [CBPeer](cbpeer.md): An object that represents a remote device.
- [CBUUID](cbuuid.md): A universally unique identifier, as defined by Bluetooth standards.
