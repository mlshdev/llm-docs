> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmusictrack/destinationmidiendpoint](https://developer.apple.com/documentation/avfaudio/avmusictrack/destinationmidiendpoint)

# destinationMIDIEndpoint (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The MIDI endpoint you specify as the track’s target.

## Declaration

```swift
var destinationMIDIEndpoint: MIDIEndpointRef { get set }
```

<a id="Discussion"></a>

## Discussion

This property and a [destinationAudioUnit](destinationaudiounit.md) are mutually exclusive. Setting this property removes the track’s reference to an [AVAudioUnit](../avaudiounit.md) destination. When playing, the track sends events to the MIDI endpoint. For more information, see [MIDIDestinationCreate(\_:\_:\_:\_:\_:)](../../coremidi/mididestinationcreate%28__________%29.md). You can’t change the endpoint while the track’s sequence is in a playing state.

## See Also

### Configuring the Track Destinations

- [destinationAudioUnit](destinationaudiounit.md): The audio unit that receives the track’s events.

# destinationMIDIEndpoint (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The MIDI endpoint you specify as the track’s target.

## Declaration

```objectivec
@property (nonatomic) MIDIEndpointRef destinationMIDIEndpoint;
```

<a id="Discussion"></a>

## Discussion

This property and a [destinationAudioUnit](destinationaudiounit.md) are mutually exclusive. Setting this property removes the track’s reference to an [AVAudioUnit](../avaudiounit.md) destination. When playing, the track sends events to the MIDI endpoint. For more information, see [MIDIDestinationCreate](../../coremidi/mididestinationcreate%28__________%29.md). You can’t change the endpoint while the track’s sequence is in a playing state.

## See Also

### Configuring the Track Destinations

- [destinationAudioUnit](destinationaudiounit.md): The audio unit that receives the track’s events.
