> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmusictrack/destinationaudiounit](https://developer.apple.com/documentation/avfaudio/avmusictrack/destinationaudiounit)

# destinationAudioUnit (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The audio unit that receives the track’s events.

## Declaration

```swift
var destinationAudioUnit: AVAudioUnit? { get set }
```

<a id="Discussion"></a>

## Discussion

This property and a [destinationMIDIEndpoint](destinationmidiendpoint.md) are mutually exclusive. You must attach the audio to an audio engine to receive events. The track must be part of the [AVAudioSequencer](../avaudiosequencer.md) you associate with the same engine. When playing, the track sends it’s events to that [AVAudioUnit](../avaudiounit.md). You can’t change the destination audio unit while the track’s sequence is in a playing state.

## See Also

### Configuring the Track Destinations

- [destinationMIDIEndpoint](destinationmidiendpoint.md): The MIDI endpoint you specify as the track’s target.

# destinationAudioUnit (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The audio unit that receives the track’s events.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) AVAudioUnit * destinationAudioUnit;
```

<a id="Discussion"></a>

## Discussion

This property and a [destinationMIDIEndpoint](destinationmidiendpoint.md) are mutually exclusive. You must attach the audio to an audio engine to receive events. The track must be part of the [AVAudioSequencer](../avaudiosequencer.md) you associate with the same engine. When playing, the track sends it’s events to that [AVAudioUnit](../avaudiounit.md). You can’t change the destination audio unit while the track’s sequence is in a playing state.

## See Also

### Configuring the Track Destinations

- [destinationMIDIEndpoint](destinationmidiendpoint.md): The MIDI endpoint you specify as the track’s target.
