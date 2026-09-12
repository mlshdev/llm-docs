> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentralmanagerstate](https://developer.apple.com/documentation/corebluetooth/cbcentralmanagerstate)

# CBCentralManagerState (Swift)

**Framework:** Core Bluetooth  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ (deprecated in 10.0) · iPadOS 5.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 3.0)

Values that represent the current state of a central manager object.

> Use [CBManagerState](cbmanagerstate.md) instead.

## Declaration

```swift
enum CBCentralManagerState
```

## Topics

### Constants

- [CBCentralManagerState.poweredOff](cbcentralmanagerstate/poweredoff.md): Deprecated. A state that indicates Bluetooth is currently powered off.
- [CBCentralManagerState.poweredOn](cbcentralmanagerstate/poweredon.md): Deprecated. A state that indicates Bluetooth is currently powered on and available to use.
- [CBCentralManagerState.resetting](cbcentralmanagerstate/resetting.md): Deprecated. A state that indicates the connection with the system service was momentarily lost.
- [CBCentralManagerState.unauthorized](cbcentralmanagerstate/unauthorized.md): Deprecated. A state that indicates the application isn’t authorized to use the Bluetooth low energy role.
- [CBCentralManagerState.unknown](cbcentralmanagerstate/unknown.md): Deprecated. The manager’s state is unknown.
- [CBCentralManagerState.unsupported](cbcentralmanagerstate/unsupported.md): Deprecated. A state that indicates this device doesn’t support the Bluetooth low energy central or client role.

### Initializers

- [init(rawValue:)](cbcentralmanagerstate/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Deprecated

- [CBPeripheralManagerState](cbperipheralmanagerstate.md): Deprecated. Values that represent the current state of the peripheral manager.
- [Deprecated Constants](deprecated-constants.md): This document describes the constants found in the Core Bluetooth framework.

# CBCentralManagerState (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ (deprecated in 10.0) · iPadOS 5.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 3.0)

Values that represent the current state of a central manager object.

> Use [CBManagerState](cbmanagerstate.md) instead.

## Declaration

```objectivec
enum CBCentralManagerState : NSInteger;
```

## Topics

### Constants

- [CBCentralManagerStatePoweredOff](cbcentralmanagerstate/poweredoff.md): Deprecated. A state that indicates Bluetooth is currently powered off.
- [CBCentralManagerStatePoweredOn](cbcentralmanagerstate/poweredon.md): Deprecated. A state that indicates Bluetooth is currently powered on and available to use.
- [CBCentralManagerStateResetting](cbcentralmanagerstate/resetting.md): Deprecated. A state that indicates the connection with the system service was momentarily lost.
- [CBCentralManagerStateUnauthorized](cbcentralmanagerstate/unauthorized.md): Deprecated. A state that indicates the application isn’t authorized to use the Bluetooth low energy role.
- [CBCentralManagerStateUnknown](cbcentralmanagerstate/unknown.md): Deprecated. The manager’s state is unknown.
- [CBCentralManagerStateUnsupported](cbcentralmanagerstate/unsupported.md): Deprecated. A state that indicates this device doesn’t support the Bluetooth low energy central or client role.

## See Also

### Deprecated

- [CBPeripheralManagerState](cbperipheralmanagerstate.md): Deprecated. Values that represent the current state of the peripheral manager.
- [Deprecated Constants](deprecated-constants.md): This document describes the constants found in the Core Bluetooth framework.
