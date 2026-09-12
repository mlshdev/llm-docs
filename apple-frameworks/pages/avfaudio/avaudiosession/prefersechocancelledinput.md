> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/prefersechocancelledinput](https://developer.apple.com/documentation/avfaudio/avaudiosession/prefersechocancelledinput)

# prefersEchoCancelledInput (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+

A Boolean value that indicates the audio session’s preference for using an echo-canceled input.

## Declaration

```swift
var prefersEchoCancelledInput: Bool { get }
```

## See Also

### Configuring echo cancellation

- [isEchoCancelledInputAvailable](isechocancelledinputavailable.md): A Boolean value that indicates whether the built-in microphone and speaker route supports echo cancellation.
- [isEchoCancelledInputEnabled](isechocancelledinputenabled.md): A Boolean value that indicates whether an echo-canceled input is in an enabled state.
- [setPrefersEchoCancelledInput(\_:)](setprefersechocancelledinput%28__%29.md): Sets a preference to enable echo-canceled input on supported hardware.

# prefersEchoCancelledInput (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+

A Boolean value that indicates the audio session’s preference for using an echo-canceled input.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL prefersEchoCancelledInput;
```

## See Also

### Configuring echo cancellation

- [isEchoCancelledInputAvailable](isechocancelledinputavailable.md): A Boolean value that indicates whether the built-in microphone and speaker route supports echo cancellation.
- [isEchoCancelledInputEnabled](isechocancelledinputenabled.md): A Boolean value that indicates whether an echo-canceled input is in an enabled state.
- [setPrefersEchoCancelledInput:error:](setprefersechocancelledinput%28__%29.md): Sets a preference to enable echo-canceled input on supported hardware.
