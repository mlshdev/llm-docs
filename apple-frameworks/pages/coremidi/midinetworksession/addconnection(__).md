> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midinetworksession/addconnection(_:)](https://developer.apple.com/documentation/coremidi/midinetworksession/addconnection(_:))

# addConnection(\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Adds a new connection to this session.

## Declaration

```swift
func addConnection(_ connection: MIDINetworkConnection) -> Bool
```

## Parameters

- `connection`: The connection to add.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the session successfully added the connection, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Connections

- [connections()](connections%28%29.md): Returns the session’s set of MIDI network connections.
- [removeConnection(\_:)](removeconnection%28__%29.md): Removes a connection from this session.

# addConnection: (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Adds a new connection to this session.

## Declaration

```objectivec
- (BOOL) addConnection:(MIDINetworkConnection *) connection;
```

## Parameters

- `connection`: The connection to add.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the session successfully added the connection, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Connections

- [connections](connections%28%29.md): Returns the session’s set of MIDI network connections.
- [removeConnection:](removeconnection%28__%29.md): Removes a connection from this session.
