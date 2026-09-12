> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbmanager](https://developer.apple.com/documentation/corebluetooth/cbmanager)

# CBManager (Swift)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The abstract base class that manages central and peripheral objects.

## Declaration

```swift
class CBManager
```

## Topics

### Accessing the Manager’s Properties

- [state](cbmanager/state.md): The current state of the manager.
- [CBManagerState](cbmanagerstate.md): The possible states of a Core Bluetooth manager.

### Determining Authorization State

- [authorization](cbmanager/authorization-swift.type.property.md): The current authorization status for using Bluetooth.
- [CBManagerAuthorization](cbmanagerauthorization.md): The current authorization state of a Core Bluetooth manager.

### Deprecated Properties

- [authorization](cbmanager/authorization-swift.property.md): Deprecated. The current authorization status for using Bluetooth.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CBCentralManager](cbcentralmanager.md)
- [CBPeripheralManager](cbperipheralmanager.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Supporting Types

- [CBATTRequest](cbattrequest.md): A request that uses the Attribute Protocol (ATT).
- [CBPeer](cbpeer.md): An object that represents a remote device.
- [CBUUID](cbuuid.md): A universally unique identifier, as defined by Bluetooth standards.

# CBManager (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The abstract base class that manages central and peripheral objects.

## Declaration

```objectivec
@interface CBManager : NSObject
```

## Topics

### Accessing the Manager’s Properties

- [state](cbmanager/state.md): The current state of the manager.
- [CBManagerState](cbmanagerstate.md): The possible states of a Core Bluetooth manager.

### Determining Authorization State

- [authorization](cbmanager/authorization-swift.type.property.md): The current authorization status for using Bluetooth.
- [CBManagerAuthorization](cbmanagerauthorization.md): The current authorization state of a Core Bluetooth manager.

### Deprecated Properties

- [authorization](cbmanager/authorization-swift.property.md): Deprecated. The current authorization status for using Bluetooth.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CBCentralManager](cbcentralmanager.md)
- [CBPeripheralManager](cbperipheralmanager.md)

## See Also

### Supporting Types

- [CBATTRequest](cbattrequest.md): A request that uses the Attribute Protocol (ATT).
- [CBPeer](cbpeer.md): An object that represents a remote device.
- [CBUUID](cbuuid.md): A universally unique identifier, as defined by Bluetooth standards.
