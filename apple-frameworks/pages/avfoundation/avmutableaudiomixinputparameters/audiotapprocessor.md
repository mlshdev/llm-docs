> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutableaudiomixinputparameters/audiotapprocessor](https://developer.apple.com/documentation/avfoundation/avmutableaudiomixinputparameters/audiotapprocessor)

# audioTapProcessor (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The audio processing tap associated with the track.

## Declaration

```swift
var audioTapProcessor: MTAudioProcessingTap? { get set }
```

<a id="Discussion"></a>

## Discussion

You can use this property to associate an audio tap with the audio track. You can use the audio tap to access the audio data before it is played, read, or exported.

# audioTapProcessor (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The audio processing tap associated with the track.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) MTAudioProcessingTapRef audioTapProcessor;
```

<a id="Discussion"></a>

## Discussion

You can use this property to associate an audio tap with the audio track. You can use the audio tap to access the audio data before it is played, read, or exported.
