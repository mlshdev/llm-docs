> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbpeer](https://developer.apple.com/documentation/corebluetooth/cbpeer)

# CBPeer (Swift)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that represents a remote device.

## Declaration

```swift
class CBPeer
```

<a id="overview"></a>

## Overview

The [CBPeer](cbpeer.md) class is an abstract base class that defines common behavior for objects representing remote devices. You typically don’t create instances of either [CBPeer](cbpeer.md) or its concrete subclasses. Instead, the system creates them for you during the process of peer discovery.

Your app takes the role of either a central (by creating an instance of [CBCentralManager](cbcentralmanager.md)) or a peripheral (by creating an instance of [CBPeripheralManager](cbperipheralmanager.md)), and interacts through the manager with remote devices in the opposite role. During the process of peer discovery, where a central device scans for peripherals advertising services, the system creates objects from the concrete subclasses of [CBPeer](cbpeer.md) to represent discovered remote devices. The concrete subclasses of [CBPeer](cbpeer.md) are [CBPeripheral](cbperipheral.md) and [CBCentral](cbcentral.md).

## Topics

### Identifying a Peer

- [identifier](cbpeer/identifier.md): The UUID associated with the peer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CBCentral](cbcentral.md)
- [CBPeripheral](cbperipheral.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Supporting Types

- [CBManager](cbmanager.md): The abstract base class that manages central and peripheral objects.
- [CBATTRequest](cbattrequest.md): A request that uses the Attribute Protocol (ATT).
- [CBUUID](cbuuid.md): A universally unique identifier, as defined by Bluetooth standards.

# CBPeer (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that represents a remote device.

## Declaration

```objectivec
@interface CBPeer : NSObject
```

<a id="overview"></a>

## Overview

The [CBPeer](cbpeer.md) class is an abstract base class that defines common behavior for objects representing remote devices. You typically don’t create instances of either [CBPeer](cbpeer.md) or its concrete subclasses. Instead, the system creates them for you during the process of peer discovery.

Your app takes the role of either a central (by creating an instance of [CBCentralManager](cbcentralmanager.md)) or a peripheral (by creating an instance of [CBPeripheralManager](cbperipheralmanager.md)), and interacts through the manager with remote devices in the opposite role. During the process of peer discovery, where a central device scans for peripherals advertising services, the system creates objects from the concrete subclasses of [CBPeer](cbpeer.md) to represent discovered remote devices. The concrete subclasses of [CBPeer](cbpeer.md) are [CBPeripheral](cbperipheral.md) and [CBCentral](cbcentral.md).

## Topics

### Identifying a Peer

- [identifier](cbpeer/identifier.md): The UUID associated with the peer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CBCentral](cbcentral.md)
- [CBPeripheral](cbperipheral.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Supporting Types

- [CBManager](cbmanager.md): The abstract base class that manages central and peripheral objects.
- [CBATTRequest](cbattrequest.md): A request that uses the Attribute Protocol (ATT).
- [CBUUID](cbuuid.md): A universally unique identifier, as defined by Bluetooth standards.
