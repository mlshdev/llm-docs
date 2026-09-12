> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessionroutedescription/outputs](https://developer.apple.com/documentation/avfaudio/avaudiosessionroutedescription/outputs)

# outputs (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of audio output port descriptions.

## Declaration

```swift
var outputs: [AVAudioSessionPortDescription] { get }
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [AVAudioSessionPortDescription](../avaudiosessionportdescription.md) objects representing the audio outputs associated with the current audio route for a session.

## See Also

### Getting the Input and Output Ports

- [inputs](inputs.md): An array of audio input port descriptions.

# outputs (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of audio output port descriptions.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVAudioSessionPortDescription *> * outputs;
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [AVAudioSessionPortDescription](../avaudiosessionportdescription.md) objects representing the audio outputs associated with the current audio route for a session.

## See Also

### Getting the Input and Output Ports

- [inputs](inputs.md): An array of audio input port descriptions.
