> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbmanagerstate/unknown](https://developer.apple.com/documentation/corebluetooth/cbmanagerstate/unknown)

# CBManagerState.unknown (Swift)

**Framework:** Core Bluetooth  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The manager’s state is unknown.

## Declaration

```swift
case unknown
```

<a id="Discussion"></a>

## Discussion

This is a temporary state. After Core Bluetooth initializes or resets, it updates the state value.

## See Also

### Manager States

- [CBManagerState.poweredOff](poweredoff.md): A state that indicates Bluetooth is currently powered off.
- [CBManagerState.poweredOn](poweredon.md): A state that indicates Bluetooth is currently powered on and available to use.
- [CBManagerState.resetting](resetting.md): A state that indicates the connection with the system service was momentarily lost.
- [CBManagerState.unauthorized](unauthorized.md): A state that indicates the application isn’t authorized to use the Bluetooth low energy role.
- [CBManagerState.unsupported](unsupported.md): A state that indicates this device doesn’t support the Bluetooth low energy central or client role.

# CBManagerStateUnknown (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The manager’s state is unknown.

## Declaration

```objectivec
CBManagerStateUnknown
```

<a id="Discussion"></a>

## Discussion

This is a temporary state. After Core Bluetooth initializes or resets, it updates the state value.

## See Also

### Manager States

- [CBManagerStatePoweredOff](poweredoff.md): A state that indicates Bluetooth is currently powered off.
- [CBManagerStatePoweredOn](poweredon.md): A state that indicates Bluetooth is currently powered on and available to use.
- [CBManagerStateResetting](resetting.md): A state that indicates the connection with the system service was momentarily lost.
- [CBManagerStateUnauthorized](unauthorized.md): A state that indicates the application isn’t authorized to use the Bluetooth low energy role.
- [CBManagerStateUnsupported](unsupported.md): A state that indicates this device doesn’t support the Bluetooth low energy central or client role.
