> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbmanagerstate](https://developer.apple.com/documentation/corebluetooth/cbmanagerstate)

# CBManagerState (Swift)

**Framework:** Core Bluetooth  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The possible states of a Core Bluetooth manager.

## Declaration

```swift
enum CBManagerState
```

## Topics

### Manager States

- [CBManagerState.poweredOff](cbmanagerstate/poweredoff.md): A state that indicates Bluetooth is currently powered off.
- [CBManagerState.poweredOn](cbmanagerstate/poweredon.md): A state that indicates Bluetooth is currently powered on and available to use.
- [CBManagerState.resetting](cbmanagerstate/resetting.md): A state that indicates the connection with the system service was momentarily lost.
- [CBManagerState.unauthorized](cbmanagerstate/unauthorized.md): A state that indicates the application isn’t authorized to use the Bluetooth low energy role.
- [CBManagerState.unknown](cbmanagerstate/unknown.md): The manager’s state is unknown.
- [CBManagerState.unsupported](cbmanagerstate/unsupported.md): A state that indicates this device doesn’t support the Bluetooth low energy central or client role.

### Initializers

- [init(rawValue:)](cbmanagerstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the Manager’s Properties

- [state](cbmanager/state.md): The current state of the manager.

# CBManagerState (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The possible states of a Core Bluetooth manager.

## Declaration

```objectivec
enum CBManagerState : NSInteger;
```

## Topics

### Manager States

- [CBManagerStatePoweredOff](cbmanagerstate/poweredoff.md): A state that indicates Bluetooth is currently powered off.
- [CBManagerStatePoweredOn](cbmanagerstate/poweredon.md): A state that indicates Bluetooth is currently powered on and available to use.
- [CBManagerStateResetting](cbmanagerstate/resetting.md): A state that indicates the connection with the system service was momentarily lost.
- [CBManagerStateUnauthorized](cbmanagerstate/unauthorized.md): A state that indicates the application isn’t authorized to use the Bluetooth low energy role.
- [CBManagerStateUnknown](cbmanagerstate/unknown.md): The manager’s state is unknown.
- [CBManagerStateUnsupported](cbmanagerstate/unsupported.md): A state that indicates this device doesn’t support the Bluetooth low energy central or client role.

## See Also

### Accessing the Manager’s Properties

- [state](cbmanager/state.md): The current state of the manager.
