> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentralmanagerstate/resetting](https://developer.apple.com/documentation/corebluetooth/cbcentralmanagerstate/resetting)

# CBCentralManagerState.resetting (Swift)

**Framework:** Core Bluetooth  
**Kind:** Case  
**Availability:** iOS 5.0+ (deprecated in 10.0) · iPadOS 5.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 3.0)

A state that indicates the connection with the system service was momentarily lost.

> Use CBManagerState instead

## Declaration

```swift
case resetting
```

<a id="Discussion"></a>

## Discussion

This state indicates that Bluetooth is trying to reconnect. Once it does, Core Bluetooth updates the state value.

## See Also

### Constants

- [CBCentralManagerState.poweredOff](poweredoff.md): Deprecated. A state that indicates Bluetooth is currently powered off.
- [CBCentralManagerState.poweredOn](poweredon.md): Deprecated. A state that indicates Bluetooth is currently powered on and available to use.
- [CBCentralManagerState.unauthorized](unauthorized.md): Deprecated. A state that indicates the application isn’t authorized to use the Bluetooth low energy role.
- [CBCentralManagerState.unknown](unknown.md): Deprecated. The manager’s state is unknown.
- [CBCentralManagerState.unsupported](unsupported.md): Deprecated. A state that indicates this device doesn’t support the Bluetooth low energy central or client role.

# CBCentralManagerStateResetting (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Enumeration Case  
**Availability:** iOS 5.0+ (deprecated in 10.0) · iPadOS 5.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 3.0)

A state that indicates the connection with the system service was momentarily lost.

> Use CBManagerState instead

## Declaration

```objectivec
CBCentralManagerStateResetting
```

<a id="Discussion"></a>

## Discussion

This state indicates that Bluetooth is trying to reconnect. Once it does, Core Bluetooth updates the state value.

## See Also

### Constants

- [CBCentralManagerStatePoweredOff](poweredoff.md): Deprecated. A state that indicates Bluetooth is currently powered off.
- [CBCentralManagerStatePoweredOn](poweredon.md): Deprecated. A state that indicates Bluetooth is currently powered on and available to use.
- [CBCentralManagerStateUnauthorized](unauthorized.md): Deprecated. A state that indicates the application isn’t authorized to use the Bluetooth low energy role.
- [CBCentralManagerStateUnknown](unknown.md): Deprecated. The manager’s state is unknown.
- [CBCentralManagerStateUnsupported](unsupported.md): Deprecated. A state that indicates this device doesn’t support the Bluetooth low energy central or client role.
