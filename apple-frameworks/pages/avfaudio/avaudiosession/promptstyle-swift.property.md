> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/promptstyle-swift.property](https://developer.apple.com/documentation/avfaudio/avaudiosession/promptstyle-swift.property)

# promptStyle (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A hint to audio sessions that use voice prompt mode to alter the type of prompts they issue in response to other system audio, such as Siri and phone calls.

## Declaration

```swift
var promptStyle: AVAudioSession.PromptStyle { get }
```

<a id="Discussion"></a>

## Discussion

Apps that issue voice prompts should observe changes in the prompt style and modify their prompts in response. This property is key-value observable.

## See Also

### Inspecting the audio prompt style

- [AVAudioSession.PromptStyle](promptstyle-swift.enum.md): Constants that indicate the prompt style to use.

# promptStyle (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A hint to audio sessions that use voice prompt mode to alter the type of prompts they issue in response to other system audio, such as Siri and phone calls.

## Declaration

```objectivec
@property (readonly) AVAudioSessionPromptStyle promptStyle;
```

<a id="Discussion"></a>

## Discussion

Apps that issue voice prompts should observe changes in the prompt style and modify their prompts in response. This property is key-value observable.

## See Also

### Inspecting the audio prompt style

- [AVAudioSessionPromptStyle](promptstyle-swift.enum.md): Constants that indicate the prompt style to use.
