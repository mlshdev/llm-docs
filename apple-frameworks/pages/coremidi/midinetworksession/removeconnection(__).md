> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midinetworksession/removeconnection(_:)](https://developer.apple.com/documentation/coremidi/midinetworksession/removeconnection(_:))

# removeConnection(\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Removes a connection from this session.

## Declaration

```swift
func removeConnection(_ connection: MIDINetworkConnection) -> Bool
```

## Parameters

- `connection`: The connection to remove.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the session successfully removed the connection, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Connections

- [connections()](connections%28%29.md): Returns the session’s set of MIDI network connections.
- [addConnection(\_:)](addconnection%28__%29.md): Adds a new connection to this session.

# removeConnection: (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Removes a connection from this session.

## Declaration

```objectivec
- (BOOL) removeConnection:(MIDINetworkConnection *) connection;
```

## Parameters

- `connection`: The connection to remove.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the session successfully removed the connection, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Connections

- [connections](connections%28%29.md): Returns the session’s set of MIDI network connections.
- [addConnection:](addconnection%28__%29.md): Adds a new connection to this session.
