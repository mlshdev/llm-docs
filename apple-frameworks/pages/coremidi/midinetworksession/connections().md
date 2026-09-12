> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midinetworksession/connections()](https://developer.apple.com/documentation/coremidi/midinetworksession/connections())

# connections() (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Returns the session’s set of MIDI network connections.

## Declaration

```swift
func connections() -> Set<MIDINetworkConnection>
```

<a id="return-value"></a>

## Return Value

The set of connections.

## See Also

### Managing Connections

- [addConnection(\_:)](addconnection%28__%29.md): Adds a new connection to this session.
- [removeConnection(\_:)](removeconnection%28__%29.md): Removes a connection from this session.

# connections (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Returns the session’s set of MIDI network connections.

## Declaration

```objectivec
- (NSSet<MIDINetworkConnection *> *) connections;
```

<a id="return-value"></a>

## Return Value

The set of connections.

## See Also

### Managing Connections

- [addConnection:](addconnection%28__%29.md): Adds a new connection to this session.
- [removeConnection:](removeconnection%28__%29.md): Removes a connection from this session.
