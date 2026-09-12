> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/isechocancelledinputenabled](https://developer.apple.com/documentation/avfaudio/avaudiosession/isechocancelledinputenabled)

# isEchoCancelledInputEnabled (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+

A Boolean value that indicates whether an echo-canceled input is in an enabled state.

## Declaration

```swift
var isEchoCancelledInputEnabled: Bool { get }
```

<a id="discussion"></a>

## Discussion

For more information about echo cancellation, see [setPrefersEchoCancelledInput(\_:)](setprefersechocancelledinput%28__%29.md).

## See Also

### Configuring echo cancellation

- [isEchoCancelledInputAvailable](isechocancelledinputavailable.md): A Boolean value that indicates whether the built-in microphone and speaker route supports echo cancellation.
- [setPrefersEchoCancelledInput(\_:)](setprefersechocancelledinput%28__%29.md): Sets a preference to enable echo-canceled input on supported hardware.
- [prefersEchoCancelledInput](prefersechocancelledinput.md): A Boolean value that indicates the audio session’s preference for using an echo-canceled input.

# isEchoCancelledInputEnabled (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+

A Boolean value that indicates whether an echo-canceled input is in an enabled state.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isEchoCancelledInputEnabled;
```

<a id="discussion"></a>

## Discussion

For more information about echo cancellation, see [setPrefersEchoCancelledInput:error:](setprefersechocancelledinput%28__%29.md).

## See Also

### Configuring echo cancellation

- [isEchoCancelledInputAvailable](isechocancelledinputavailable.md): A Boolean value that indicates whether the built-in microphone and speaker route supports echo cancellation.
- [setPrefersEchoCancelledInput:error:](setprefersechocancelledinput%28__%29.md): Sets a preference to enable echo-canceled input on supported hardware.
- [prefersEchoCancelledInput](prefersechocancelledinput.md): A Boolean value that indicates the audio session’s preference for using an echo-canceled input.
