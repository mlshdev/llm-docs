> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midinetworksession/localname](https://developer.apple.com/documentation/coremidi/midinetworksession/localname)

# localName (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The name of this session’s entity.

## Declaration

```swift
var localName: String { get }
```

<a id="Discussion"></a>

## Discussion

The session’s endpoints inherit this value.

## See Also

### Inspecting a Sessions

- [networkName](networkname.md): The name with which this session advertises itself over Bonjour.
- [networkPort](networkport.md): The session’s UDP port.
- [sourceEndpoint()](sourceendpoint%28%29.md): Returns the session’s source endpoint.
- [destinationEndpoint()](destinationendpoint%28%29.md): Returns the session’s destination endpoint.

# localName (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The name of this session’s entity.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * localName;
```

<a id="Discussion"></a>

## Discussion

The session’s endpoints inherit this value.

## See Also

### Inspecting a Sessions

- [networkName](networkname.md): The name with which this session advertises itself over Bonjour.
- [networkPort](networkport.md): The session’s UDP port.
- [sourceEndpoint](sourceendpoint%28%29.md): Returns the session’s source endpoint.
- [destinationEndpoint](destinationendpoint%28%29.md): Returns the session’s destination endpoint.
