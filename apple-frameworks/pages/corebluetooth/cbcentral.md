> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentral](https://developer.apple.com/documentation/corebluetooth/cbcentral)

# CBCentral (Swift)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A remote device connected to a local app, which is acting as a peripheral.

## Declaration

```swift
class CBCentral
```

<a id="overview"></a>

## Overview

The [CBCentral](cbcentral.md) class represents remote central devices (or *centrals*) that have connected to an app implementing the peripheral role on a local device. Remote centrals use universally unique identifiers (UUIDs), represented by [NSUUID](../foundation/nsuuid.md) objects, to identify themselves.

## Topics

### Identifying a Remote Central

- [maximumUpdateValueLength](cbcentral/maximumupdatevaluelength.md): The maximum amount of data, in bytes, that the central can receive in a single notification or indication.

## Relationships

### Inherits From

- [CBPeer](cbpeer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Centrals

- [CBCentralManager](cbcentralmanager.md): An object that scans for, discovers, connects to, and manages peripherals.
- [CBCentralManagerDelegate](cbcentralmanagerdelegate.md): A protocol that provides updates for the discovery and management of peripheral devices.

# CBCentral (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A remote device connected to a local app, which is acting as a peripheral.

## Declaration

```objectivec
@interface CBCentral : CBPeer
```

<a id="overview"></a>

## Overview

The [CBCentral](cbcentral.md) class represents remote central devices (or *centrals*) that have connected to an app implementing the peripheral role on a local device. Remote centrals use universally unique identifiers (UUIDs), represented by [NSUUID](../foundation/nsuuid.md) objects, to identify themselves.

## Topics

### Identifying a Remote Central

- [maximumUpdateValueLength](cbcentral/maximumupdatevaluelength.md): The maximum amount of data, in bytes, that the central can receive in a single notification or indication.

## Relationships

### Inherits From

- [CBPeer](cbpeer.md)

## See Also

### Centrals

- [CBCentralManager](cbcentralmanager.md): An object that scans for, discovers, connects to, and manages peripherals.
- [CBCentralManagerDelegate](cbcentralmanagerdelegate.md): A protocol that provides updates for the discovery and management of peripheral devices.
