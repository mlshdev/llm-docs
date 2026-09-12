> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanagerstate](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanagerstate)

# CBPeripheralManagerState (Swift)

**Framework:** Core Bluetooth  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ (deprecated in 10.0) · iPadOS 6.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 3.0)

Values that represent the current state of the peripheral manager.

> Use [CBManagerState](cbmanagerstate.md) instead.

## Declaration

```swift
enum CBPeripheralManagerState
```

## Topics

### Constants

- [CBPeripheralManagerState.unknown](cbperipheralmanagerstate/unknown.md): Deprecated. A manager state that indicates the current state of the peripheral manager is unknown.
- [CBPeripheralManagerState.resetting](cbperipheralmanagerstate/resetting.md): Deprecated. A manager state that indicates the connection with the system service was momentarily lost.
- [CBPeripheralManagerState.unsupported](cbperipheralmanagerstate/unsupported.md): Deprecated. A manager state that indicates the platform doesn’t support the Bluetooth low energy peripheral/server role.
- [CBPeripheralManagerState.unauthorized](cbperipheralmanagerstate/unauthorized.md): Deprecated. A manager state that indicates the app isn’t authorized to use the Bluetooth low energy peripheral/server role.
- [CBPeripheralManagerState.poweredOff](cbperipheralmanagerstate/poweredoff.md): Deprecated. A manager state that indicates Bluetooth is currently powered off.
- [CBPeripheralManagerState.poweredOn](cbperipheralmanagerstate/poweredon.md): Deprecated. A manager state that indicates Bluetooth is currently powered on and is available to use.

### Initializers

- [init(rawValue:)](cbperipheralmanagerstate/init%28rawvalue_%29.md): Deprecated.

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

- [CBCentralManagerState](cbcentralmanagerstate.md): Deprecated. Values that represent the current state of a central manager object.
- [Deprecated Constants](deprecated-constants.md): This document describes the constants found in the Core Bluetooth framework.

# CBPeripheralManagerState (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ (deprecated in 10.0) · iPadOS 6.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 3.0)

Values that represent the current state of the peripheral manager.

> Use [CBManagerState](cbmanagerstate.md) instead.

## Declaration

```objectivec
enum CBPeripheralManagerState : NSInteger;
```

## Topics

### Constants

- [CBPeripheralManagerStateUnknown](cbperipheralmanagerstate/unknown.md): Deprecated. A manager state that indicates the current state of the peripheral manager is unknown.
- [CBPeripheralManagerStateResetting](cbperipheralmanagerstate/resetting.md): Deprecated. A manager state that indicates the connection with the system service was momentarily lost.
- [CBPeripheralManagerStateUnsupported](cbperipheralmanagerstate/unsupported.md): Deprecated. A manager state that indicates the platform doesn’t support the Bluetooth low energy peripheral/server role.
- [CBPeripheralManagerStateUnauthorized](cbperipheralmanagerstate/unauthorized.md): Deprecated. A manager state that indicates the app isn’t authorized to use the Bluetooth low energy peripheral/server role.
- [CBPeripheralManagerStatePoweredOff](cbperipheralmanagerstate/poweredoff.md): Deprecated. A manager state that indicates Bluetooth is currently powered off.
- [CBPeripheralManagerStatePoweredOn](cbperipheralmanagerstate/poweredon.md): Deprecated. A manager state that indicates Bluetooth is currently powered on and is available to use.

## See Also

### Deprecated

- [CBCentralManagerState](cbcentralmanagerstate.md): Deprecated. Values that represent the current state of a central manager object.
- [Deprecated Constants](deprecated-constants.md): This document describes the constants found in the Core Bluetooth framework.
