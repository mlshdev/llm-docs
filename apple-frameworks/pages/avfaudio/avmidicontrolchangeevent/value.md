> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avmidicontrolchangeevent/value

# value (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The value of the control change event.

## Declaration

```swift
var value: UInt32 { get }
```

## See Also

### Inspecting a Control Change Event

- [messageType](messagetype-swift.property.md): The type of control change message.
- [AVMIDIControlChangeEvent.MessageType](messagetype-swift.enum.md): Constants that represents control change event types.

# value (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The value of the control change event.

## Declaration

```objectivec
@property (readonly) UInt32 value;
```

## See Also

### Inspecting a Control Change Event

- [messageType](messagetype-swift.property.md): The type of control change message.
- [AVMIDIControlChangeMessageType](messagetype-swift.enum.md): Constants that represents control change event types.
