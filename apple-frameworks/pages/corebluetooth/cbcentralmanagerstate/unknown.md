> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentralmanagerstate/unknown](https://developer.apple.com/documentation/corebluetooth/cbcentralmanagerstate/unknown)

# CBCentralManagerState.unknown (Swift)

**Framework:** Core Bluetooth  
**Kind:** Case  
**Availability:** iOS 5.0+ (deprecated in 10.0) · iPadOS 5.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 3.0)

The manager’s state is unknown.

> Use CBManagerState instead

## Declaration

```swift
case unknown
```

<a id="Discussion"></a>

## Discussion

This is a temporary state. Once Core Bluetooth initializes or resets, it updates the state value.

## See Also

### Constants

- [CBCentralManagerState.poweredOff](poweredoff.md): Deprecated. A state that indicates Bluetooth is currently powered off.
- [CBCentralManagerState.poweredOn](poweredon.md): Deprecated. A state that indicates Bluetooth is currently powered on and available to use.
- [CBCentralManagerState.resetting](resetting.md): Deprecated. A state that indicates the connection with the system service was momentarily lost.
- [CBCentralManagerState.unauthorized](unauthorized.md): Deprecated. A state that indicates the application isn’t authorized to use the Bluetooth low energy role.
- [CBCentralManagerState.unsupported](unsupported.md): Deprecated. A state that indicates this device doesn’t support the Bluetooth low energy central or client role.

# CBCentralManagerStateUnknown (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Enumeration Case  
**Availability:** iOS 5.0+ (deprecated in 10.0) · iPadOS 5.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 3.0)

The manager’s state is unknown.

> Use CBManagerState instead

## Declaration

```objectivec
CBCentralManagerStateUnknown
```

<a id="Discussion"></a>

## Discussion

This is a temporary state. Once Core Bluetooth initializes or resets, it updates the state value.

## See Also

### Constants

- [CBCentralManagerStatePoweredOff](poweredoff.md): Deprecated. A state that indicates Bluetooth is currently powered off.
- [CBCentralManagerStatePoweredOn](poweredon.md): Deprecated. A state that indicates Bluetooth is currently powered on and available to use.
- [CBCentralManagerStateResetting](resetting.md): Deprecated. A state that indicates the connection with the system service was momentarily lost.
- [CBCentralManagerStateUnauthorized](unauthorized.md): Deprecated. A state that indicates the application isn’t authorized to use the Bluetooth low energy role.
- [CBCentralManagerStateUnsupported](unsupported.md): Deprecated. A state that indicates this device doesn’t support the Bluetooth low energy central or client role.
