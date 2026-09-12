> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midinetworksession/connectionpolicy](https://developer.apple.com/documentation/coremidi/midinetworksession/connectionpolicy)

# connectionPolicy (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The policy that determines who can connect to this session.

## Declaration

```swift
var connectionPolicy: MIDINetworkConnectionPolicy { get set }
```

## Topics

### Connection Policies

- [MIDINetworkConnectionPolicy](../midinetworkconnectionpolicy.md)

## See Also

### Configuring a Session

- [default()](default%28%29.md): Returns the default singleton session.
- [isEnabled](isenabled.md): A Boolean value that determines whether the session is enabled.

# connectionPolicy (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The policy that determines who can connect to this session.

## Declaration

```objectivec
@property (nonatomic) MIDINetworkConnectionPolicy connectionPolicy;
```

## Topics

### Connection Policies

- [MIDINetworkConnectionPolicy](../midinetworkconnectionpolicy.md)

## See Also

### Configuring a Session

- [defaultSession](default%28%29.md): Returns the default singleton session.
- [enabled](isenabled.md): A Boolean value that determines whether the session is enabled.
