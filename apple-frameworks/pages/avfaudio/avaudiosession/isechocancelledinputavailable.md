> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/isechocancelledinputavailable](https://developer.apple.com/documentation/avfaudio/avaudiosession/isechocancelledinputavailable)

# isEchoCancelledInputAvailable (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.2+

A Boolean value that indicates whether the built-in microphone and speaker route supports echo cancellation.

## Declaration

```swift
var isEchoCancelledInputAvailable: Bool { get }
```

<a id="discussion"></a>

## Discussion

This value is `true` if the device supports echo cancellation and the app uses the [playAndRecord](category-swift.struct/playandrecord.md) category and [default](mode-swift.struct/default.md) mode.

## See Also

### Configuring echo cancellation

- [isEchoCancelledInputEnabled](isechocancelledinputenabled.md): A Boolean value that indicates whether an echo-canceled input is in an enabled state.
- [setPrefersEchoCancelledInput(\_:)](setprefersechocancelledinput%28__%29.md): Sets a preference to enable echo-canceled input on supported hardware.
- [prefersEchoCancelledInput](prefersechocancelledinput.md): A Boolean value that indicates the audio session’s preference for using an echo-canceled input.

# isEchoCancelledInputAvailable (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.2+

A Boolean value that indicates whether the built-in microphone and speaker route supports echo cancellation.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isEchoCancelledInputAvailable;
```

<a id="discussion"></a>

## Discussion

This value is `true` if the device supports echo cancellation and the app uses the [AVAudioSessionCategoryPlayAndRecord](category-swift.struct/playandrecord.md) category and [AVAudioSessionModeDefault](mode-swift.struct/default.md) mode.

## See Also

### Configuring echo cancellation

- [isEchoCancelledInputEnabled](isechocancelledinputenabled.md): A Boolean value that indicates whether an echo-canceled input is in an enabled state.
- [setPrefersEchoCancelledInput:error:](setprefersechocancelledinput%28__%29.md): Sets a preference to enable echo-canceled input on supported hardware.
- [prefersEchoCancelledInput](prefersechocancelledinput.md): A Boolean value that indicates the audio session’s preference for using an echo-canceled input.
