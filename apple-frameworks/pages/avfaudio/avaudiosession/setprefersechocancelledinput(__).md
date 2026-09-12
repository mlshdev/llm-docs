> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/setprefersechocancelledinput(_:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/setprefersechocancelledinput(_:))

# setPrefersEchoCancelledInput(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+

Sets a preference to enable echo-canceled input on supported hardware.

## Declaration

```swift
func setPrefersEchoCancelledInput(_ value: Bool) throws
```

## Parameters

- `value`: A Boolean value that indicates the preference to set.

<a id="Discussion"></a>

## Discussion

Apps may want to record the built-in microphone’s input while also playing audio with the built-in speaker. Enabling echo-canceled input is useful when the app needs the input signal to be clear of any echoes from the audio playing out of the built-in speaker.

Audio sessions using Apple’s voice processing APIs don’t need this option because the system automatically applies echo cancellation to these routes. The voice processing solution is tuned for voice signals, unlike this option, which is tuned for better capture of a wider range of audio signals in the presence of built-in speaker echo.

This option is valid only when used with [playAndRecord](category-swift.struct/playandrecord.md) category and [default](mode-swift.struct/default.md) mode, and is only available on certain 2024 or later iPhone models. Query the [isEchoCancelledInputAvailable](isechocancelledinputavailable.md) property to determine whether a device supports this setting. Other recording sessions might be interrupted if this option is not compatible with sessions that are already recording.

After an audio session goes active, you can query the [isEchoCancelledInputEnabled](isechocancelledinputenabled.md) property to test whether the system honored the setting.

> **Note**

> The input’s enabled state may change if the audio route changes to one that doesn’t support echo cancellation, such as switching to a headset.

## See Also

### Configuring echo cancellation

- [isEchoCancelledInputAvailable](isechocancelledinputavailable.md): A Boolean value that indicates whether the built-in microphone and speaker route supports echo cancellation.
- [isEchoCancelledInputEnabled](isechocancelledinputenabled.md): A Boolean value that indicates whether an echo-canceled input is in an enabled state.
- [prefersEchoCancelledInput](prefersechocancelledinput.md): A Boolean value that indicates the audio session’s preference for using an echo-canceled input.

# setPrefersEchoCancelledInput:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+

Sets a preference to enable echo-canceled input on supported hardware.

## Declaration

```objectivec
- (BOOL) setPrefersEchoCancelledInput:(BOOL) value error:(NSError **) error;
```

## Parameters

- `value`: A Boolean value that indicates the preference to set.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="Discussion"></a>

## Discussion

Apps may want to record the built-in microphone’s input while also playing audio with the built-in speaker. Enabling echo-canceled input is useful when the app needs the input signal to be clear of any echoes from the audio playing out of the built-in speaker.

Audio sessions using Apple’s voice processing APIs don’t need this option because the system automatically applies echo cancellation to these routes. The voice processing solution is tuned for voice signals, unlike this option, which is tuned for better capture of a wider range of audio signals in the presence of built-in speaker echo.

This option is valid only when used with [AVAudioSessionCategoryPlayAndRecord](category-swift.struct/playandrecord.md) category and [AVAudioSessionModeDefault](mode-swift.struct/default.md) mode, and is only available on certain 2024 or later iPhone models. Query the [isEchoCancelledInputAvailable](isechocancelledinputavailable.md) property to determine whether a device supports this setting. Other recording sessions might be interrupted if this option is not compatible with sessions that are already recording.

After an audio session goes active, you can query the [isEchoCancelledInputEnabled](isechocancelledinputenabled.md) property to test whether the system honored the setting.

> **Note**

> The input’s enabled state may change if the audio route changes to one that doesn’t support echo cancellation, such as switching to a headset.

## See Also

### Configuring echo cancellation

- [isEchoCancelledInputAvailable](isechocancelledinputavailable.md): A Boolean value that indicates whether the built-in microphone and speaker route supports echo cancellation.
- [isEchoCancelledInputEnabled](isechocancelledinputenabled.md): A Boolean value that indicates whether an echo-canceled input is in an enabled state.
- [prefersEchoCancelledInput](prefersechocancelledinput.md): A Boolean value that indicates the audio session’s preference for using an echo-canceled input.
