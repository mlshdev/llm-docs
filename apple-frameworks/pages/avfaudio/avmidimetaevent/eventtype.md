> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmidimetaevent/eventtype](https://developer.apple.com/documentation/avfaudio/avmidimetaevent/eventtype)

# AVMIDIMetaEvent.EventType (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Constants that represent the types of meta events.

## Declaration

```swift
enum EventType
```

## Topics

### Event Types

- [AVMIDIMetaEvent.EventType.copyright](eventtype/copyright.md): An event type that represents a copyright.
- [AVMIDIMetaEvent.EventType.cuePoint](eventtype/cuepoint.md): An event type that represents a cue point.
- [AVMIDIMetaEvent.EventType.endOfTrack](eventtype/endoftrack.md): An event type that represents the end of the track.
- [AVMIDIMetaEvent.EventType.instrument](eventtype/instrument.md): An event type that represents an instrument.
- [AVMIDIMetaEvent.EventType.keySignature](eventtype/keysignature.md): An event type that represents a key signature.
- [AVMIDIMetaEvent.EventType.lyric](eventtype/lyric.md): An event type that represents a lyric.
- [AVMIDIMetaEvent.EventType.marker](eventtype/marker.md): An event type that represents a marker.
- [AVMIDIMetaEvent.EventType.midiChannel](eventtype/midichannel.md): An event type that represents a MIDI channel.
- [AVMIDIMetaEvent.EventType.midiPort](eventtype/midiport.md): An event type that represents a MIDI port.
- [AVMIDIMetaEvent.EventType.proprietaryEvent](eventtype/proprietaryevent.md): An event type that represents a proprietary event.
- [AVMIDIMetaEvent.EventType.sequenceNumber](eventtype/sequencenumber.md): An event type that represents a sequence number.
- [AVMIDIMetaEvent.EventType.smpteOffset](eventtype/smpteoffset.md): An event type that represents a SMPTE time offset.
- [AVMIDIMetaEvent.EventType.tempo](eventtype/tempo.md): An event type that represents a tempo.
- [AVMIDIMetaEvent.EventType.text](eventtype/text.md): An event type that represents text.
- [AVMIDIMetaEvent.EventType.timeSignature](eventtype/timesignature.md): An event type that represents a time signature.
- [AVMIDIMetaEvent.EventType.trackName](eventtype/trackname.md): An event type that represents a track name.

### Initializers

- [init(rawValue:)](eventtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Meta Event Type

- [type](type.md): The type of meta event.

# AVMIDIMetaEventType (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Constants that represent the types of meta events.

## Declaration

```objectivec
enum AVMIDIMetaEventType : NSInteger;
```

## Topics

### Event Types

- [AVMIDIMetaEventTypeCopyright](eventtype/copyright.md): An event type that represents a copyright.
- [AVMIDIMetaEventTypeCuePoint](eventtype/cuepoint.md): An event type that represents a cue point.
- [AVMIDIMetaEventTypeEndOfTrack](eventtype/endoftrack.md): An event type that represents the end of the track.
- [AVMIDIMetaEventTypeInstrument](eventtype/instrument.md): An event type that represents an instrument.
- [AVMIDIMetaEventTypeKeySignature](eventtype/keysignature.md): An event type that represents a key signature.
- [AVMIDIMetaEventTypeLyric](eventtype/lyric.md): An event type that represents a lyric.
- [AVMIDIMetaEventTypeMarker](eventtype/marker.md): An event type that represents a marker.
- [AVMIDIMetaEventTypeMidiChannel](eventtype/midichannel.md): An event type that represents a MIDI channel.
- [AVMIDIMetaEventTypeMidiPort](eventtype/midiport.md): An event type that represents a MIDI port.
- [AVMIDIMetaEventTypeProprietaryEvent](eventtype/proprietaryevent.md): An event type that represents a proprietary event.
- [AVMIDIMetaEventTypeSequenceNumber](eventtype/sequencenumber.md): An event type that represents a sequence number.
- [AVMIDIMetaEventTypeSmpteOffset](eventtype/smpteoffset.md): An event type that represents a SMPTE time offset.
- [AVMIDIMetaEventTypeTempo](eventtype/tempo.md): An event type that represents a tempo.
- [AVMIDIMetaEventTypeText](eventtype/text.md): An event type that represents text.
- [AVMIDIMetaEventTypeTimeSignature](eventtype/timesignature.md): An event type that represents a time signature.
- [AVMIDIMetaEventTypeTrackName](eventtype/trackname.md): An event type that represents a track name.

## See Also

### Getting the Meta Event Type

- [type](type.md): The type of meta event.
