> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midinetworksession/networkname](https://developer.apple.com/documentation/coremidi/midinetworksession/networkname)

# networkName (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The name with which this session advertises itself over Bonjour.

## Declaration

```swift
var networkName: String { get }
```

## See Also

### Inspecting a Sessions

- [localName](localname.md): The name of this session’s entity.
- [networkPort](networkport.md): The session’s UDP port.
- [sourceEndpoint()](sourceendpoint%28%29.md): Returns the session’s source endpoint.
- [destinationEndpoint()](destinationendpoint%28%29.md): Returns the session’s destination endpoint.

# networkName (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The name with which this session advertises itself over Bonjour.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * networkName;
```

## See Also

### Inspecting a Sessions

- [localName](localname.md): The name of this session’s entity.
- [networkPort](networkport.md): The session’s UDP port.
- [sourceEndpoint](sourceendpoint%28%29.md): Returns the session’s source endpoint.
- [destinationEndpoint](destinationendpoint%28%29.md): Returns the session’s destination endpoint.
