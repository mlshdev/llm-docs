> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midinetworksession/networkport](https://developer.apple.com/documentation/coremidi/midinetworksession/networkport)

# networkPort (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The session’s UDP port.

## Declaration

```swift
var networkPort: Int { get }
```

## See Also

### Inspecting a Sessions

- [localName](localname.md): The name of this session’s entity.
- [networkName](networkname.md): The name with which this session advertises itself over Bonjour.
- [sourceEndpoint()](sourceendpoint%28%29.md): Returns the session’s source endpoint.
- [destinationEndpoint()](destinationendpoint%28%29.md): Returns the session’s destination endpoint.

# networkPort (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The session’s UDP port.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger networkPort;
```

## See Also

### Inspecting a Sessions

- [localName](localname.md): The name of this session’s entity.
- [networkName](networkname.md): The name with which this session advertises itself over Bonjour.
- [sourceEndpoint](sourceendpoint%28%29.md): Returns the session’s source endpoint.
- [destinationEndpoint](destinationendpoint%28%29.md): Returns the session’s destination endpoint.
