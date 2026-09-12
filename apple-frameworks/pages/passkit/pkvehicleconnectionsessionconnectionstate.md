> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkvehicleconnectionsessionconnectionstate](https://developer.apple.com/documentation/passkit/pkvehicleconnectionsessionconnectionstate)

# PKVehicleConnectionSessionConnectionState (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS · visionOS 1.0+ · watchOS 8.5+

## Declaration

```swift
enum PKVehicleConnectionSessionConnectionState
```

## Topics

### Enumeration Cases

- [PKVehicleConnectionSessionConnectionState.connected](pkvehicleconnectionsessionconnectionstate/connected.md)
- [PKVehicleConnectionSessionConnectionState.connecting](pkvehicleconnectionsessionconnectionstate/connecting.md)
- [PKVehicleConnectionSessionConnectionState.disconnected](pkvehicleconnectionsessionconnectionstate/disconnected.md)
- [PKVehicleConnectionSessionConnectionState.failedToConnect](pkvehicleconnectionsessionconnectionstate/failedtoconnect.md)

### Initializers

- [init(rawValue:)](pkvehicleconnectionsessionconnectionstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Digital car keys

- [PKAddCarKeyPassConfiguration](pkaddcarkeypassconfiguration.md): A specialized configuration object that PassKit uses when it creates a digital car key.
- [PKVehicleConnectionSession](pkvehicleconnectionsession.md)
- [PKVehicleConnectionDelegate](pkvehicleconnectiondelegate.md)

# PKVehicleConnectionSessionConnectionState (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

## Declaration

```objectivec
enum PKVehicleConnectionSessionConnectionState : NSInteger;
```

## Topics

### Enumeration Cases

- [PKVehicleConnectionSessionConnectionStateConnected](pkvehicleconnectionsessionconnectionstate/connected.md)
- [PKVehicleConnectionSessionConnectionStateConnecting](pkvehicleconnectionsessionconnectionstate/connecting.md)
- [PKVehicleConnectionSessionConnectionStateDisconnected](pkvehicleconnectionsessionconnectionstate/disconnected.md)
- [PKVehicleConnectionSessionConnectionStateFailedToConnect](pkvehicleconnectionsessionconnectionstate/failedtoconnect.md)

## See Also

### Digital car keys

- [PKAddCarKeyPassConfiguration](pkaddcarkeypassconfiguration.md): A specialized configuration object that PassKit uses when it creates a digital car key.
- [PKVehicleConnectionSession](pkvehicleconnectionsession.md)
- [PKVehicleConnectionDelegate](pkvehicleconnectiondelegate.md)
