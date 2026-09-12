> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbconnectionevent](https://developer.apple.com/documentation/corebluetooth/cbconnectionevent)

# CBConnectionEvent (Swift)

**Framework:** Core Bluetooth  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A change to the connection state of a peer.

## Declaration

```swift
enum CBConnectionEvent
```

## Topics

### Events

- [CBConnectionEvent.peerConnected](cbconnectionevent/peerconnected.md): The peer has connected to the local device.
- [CBConnectionEvent.peerDisconnected](cbconnectionevent/peerdisconnected.md): The peer has disconnected from the local device.

### Initializers

- [init(rawValue:)](cbconnectionevent/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Receiving Connection Events

- [registerForConnectionEvents(options:)](cbcentralmanager/registerforconnectionevents%28options_%29.md): Register for an event notification when the central manager makes a connection matching the given options.
- [Peripheral Connection Options](peripheral-connection-options.md): Keys used to pass options when connecting to a peripheral.
- [CBConnectionEventMatchingOption](cbconnectioneventmatchingoption.md): A set of options to use when registering for connection events.

# CBConnectionEvent (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A change to the connection state of a peer.

## Declaration

```objectivec
enum CBConnectionEvent : NSInteger;
```

## Topics

### Events

- [CBConnectionEventPeerConnected](cbconnectionevent/peerconnected.md): The peer has connected to the local device.
- [CBConnectionEventPeerDisconnected](cbconnectionevent/peerdisconnected.md): The peer has disconnected from the local device.

## See Also

### Receiving Connection Events

- [registerForConnectionEventsWithOptions:](cbcentralmanager/registerforconnectionevents%28options_%29.md): Register for an event notification when the central manager makes a connection matching the given options.
- [Peripheral Connection Options](peripheral-connection-options.md): Keys used to pass options when connecting to a peripheral.
- [CBConnectionEventMatchingOption](cbconnectioneventmatchingoption.md): A set of options to use when registering for connection events.
