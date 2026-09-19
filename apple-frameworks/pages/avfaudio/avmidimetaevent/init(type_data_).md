> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avmidimetaevent/init(type:data:)

# init(type:data:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates an event with a MIDI meta event type and data.

## Declaration

```swift
init(type: AVMIDIMetaEvent.EventType, data: Data)
```

## Parameters

- `type`: The meta event type.
- `data`: The data that contains the contents of the meta event.

# initWithType:data: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates an event with a MIDI meta event type and data.

## Declaration

```objectivec
- (instancetype) initWithType:(AVMIDIMetaEventType) type data:(NSData *) data;
```

## Parameters

- `type`: The meta event type.
- `data`: The data that contains the contents of the meta event.
