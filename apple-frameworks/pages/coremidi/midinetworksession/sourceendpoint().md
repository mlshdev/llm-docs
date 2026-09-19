> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremidi/midinetworksession/sourceendpoint()

# sourceEndpoint() (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Returns the session’s source endpoint.

## Declaration

```swift
func sourceEndpoint() -> MIDIEndpointRef
```

<a id="return-value"></a>

## Return Value

The source endpoint.

## See Also

### Inspecting a Sessions

- [localName](localname.md): The name of this session’s entity.
- [networkName](networkname.md): The name with which this session advertises itself over Bonjour.
- [networkPort](networkport.md): The session’s UDP port.
- [destinationEndpoint()](destinationendpoint%28%29.md): Returns the session’s destination endpoint.

# sourceEndpoint (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Returns the session’s source endpoint.

## Declaration

```objectivec
- (MIDIEndpointRef) sourceEndpoint;
```

<a id="return-value"></a>

## Return Value

The source endpoint.

## See Also

### Inspecting a Sessions

- [localName](localname.md): The name of this session’s entity.
- [networkName](networkname.md): The name with which this session advertises itself over Bonjour.
- [networkPort](networkport.md): The session’s UDP port.
- [destinationEndpoint](destinationendpoint%28%29.md): Returns the session’s destination endpoint.
