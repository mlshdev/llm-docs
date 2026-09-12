> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanagerstate/resetting](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanagerstate/resetting)

# CBPeripheralManagerState.resetting (Swift)

**Framework:** Core Bluetooth  
**Kind:** Case  
**Availability:** iOS 6.0+ (deprecated in 10.0) · iPadOS 6.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 3.0)

A manager state that indicates the connection with the system service was momentarily lost.

> Use CBManagerState instead

## Declaration

```swift
case resetting
```

<a id="Discussion"></a>

## Discussion

When the manager is in this state, an update is imminent.

## See Also

### Constants

- [CBPeripheralManagerState.unknown](unknown.md): Deprecated. A manager state that indicates the current state of the peripheral manager is unknown.
- [CBPeripheralManagerState.unsupported](unsupported.md): Deprecated. A manager state that indicates the platform doesn’t support the Bluetooth low energy peripheral/server role.
- [CBPeripheralManagerState.unauthorized](unauthorized.md): Deprecated. A manager state that indicates the app isn’t authorized to use the Bluetooth low energy peripheral/server role.
- [CBPeripheralManagerState.poweredOff](poweredoff.md): Deprecated. A manager state that indicates Bluetooth is currently powered off.
- [CBPeripheralManagerState.poweredOn](poweredon.md): Deprecated. A manager state that indicates Bluetooth is currently powered on and is available to use.

# CBPeripheralManagerStateResetting (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Enumeration Case  
**Availability:** iOS 6.0+ (deprecated in 10.0) · iPadOS 6.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 3.0)

A manager state that indicates the connection with the system service was momentarily lost.

> Use CBManagerState instead

## Declaration

```objectivec
CBPeripheralManagerStateResetting
```

<a id="Discussion"></a>

## Discussion

When the manager is in this state, an update is imminent.

## See Also

### Constants

- [CBPeripheralManagerStateUnknown](unknown.md): Deprecated. A manager state that indicates the current state of the peripheral manager is unknown.
- [CBPeripheralManagerStateUnsupported](unsupported.md): Deprecated. A manager state that indicates the platform doesn’t support the Bluetooth low energy peripheral/server role.
- [CBPeripheralManagerStateUnauthorized](unauthorized.md): Deprecated. A manager state that indicates the app isn’t authorized to use the Bluetooth low energy peripheral/server role.
- [CBPeripheralManagerStatePoweredOff](poweredoff.md): Deprecated. A manager state that indicates Bluetooth is currently powered off.
- [CBPeripheralManagerStatePoweredOn](poweredon.md): Deprecated. A manager state that indicates Bluetooth is currently powered on and is available to use.
