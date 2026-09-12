> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioapplication/setinputmutestatechangehandler(_:)](https://developer.apple.com/documentation/avfaudio/avaudioapplication/setinputmutestatechangehandler(_:))

# setInputMuteStateChangeHandler(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Sets a callback to handle changes to application-level audio muting states.

## Declaration

```swift
func setInputMuteStateChangeHandler(_ inputMuteHandler: ((Bool) -> Bool)?) throws
```

## Parameters

- `inputMuteHandler`: A callback that the system invokes when the input mute state changes. If the callback receives a [true](https://developer.apple.com/documentation/swift/true) value, mute all input audio samples until the next time the system calls the handler. Return a value of [true](https://developer.apple.com/documentation/swift/true) if you muted input successfully, or in exceptional cases, return [false](https://developer.apple.com/documentation/swift/false) to indicate the mute action fails.

<a id="Discussion"></a>

## Discussion

Use this method to set a closure to handle your macOS app’s input muting logic. The system calls thie closure when the input mute state changes, either due to setting the [isInputMuted](isinputmuted.md) state, or due to a Bluetooth audio accessory gesture (certain AirPods / Beats headphones) changing the mute state.

Since the input mute handling logic should happen a single place, subsequent calls to this method overwrite any previously registered block with the one you provide. You can specify a `nil` to cancel the callback.

> **Note**

>  This method is available in macOS only. On other platforms, the system handles muting logic internally. Perform your input muting logic within this closure, and perform your user interface updates within the handler for [inputMuteStateChangeNotification](inputmutestatechangenotification.md).

## See Also

### Managing audio input mute state

- [isInputMuted](isinputmuted.md): A Boolean value that indicates whether the app’s audio input is in a muted state.
- [setInputMuted(\_:)](setinputmuted%28__%29.md): Sets a Boolean value that indicates whether the app’s audio input is in a muted state.
- [inputMuteStateChangeNotification](inputmutestatechangenotification.md): A notification the system posts when the app’s audio input mute state changes.

# setInputMuteStateChangeHandler:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Sets a callback to handle changes to application-level audio muting states.

## Declaration

```objectivec
- (BOOL) setInputMuteStateChangeHandler:(BOOL (^)(BOOL inputShouldBeMuted)) inputMuteHandler error:(NSError **) outError;
```

## Parameters

- `inputMuteHandler`: A callback that the system invokes when the input mute state changes. If the callback receives a [true](https://developer.apple.com/documentation/swift/true) value, mute all input audio samples until the next time the system calls the handler. Return a value of [true](https://developer.apple.com/documentation/swift/true) if you muted input successfully, or in exceptional cases, return [false](https://developer.apple.com/documentation/swift/false) to indicate the mute action fails.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to set a closure to handle your macOS app’s input muting logic. The system calls thie closure when the input mute state changes, either due to setting the [inputMuted](isinputmuted.md) state, or due to a Bluetooth audio accessory gesture (certain AirPods / Beats headphones) changing the mute state.

Since the input mute handling logic should happen a single place, subsequent calls to this method overwrite any previously registered block with the one you provide. You can specify a `nil` to cancel the callback.

> **Note**

>  This method is available in macOS only. On other platforms, the system handles muting logic internally. Perform your input muting logic within this closure, and perform your user interface updates within the handler for [AVAudioApplicationInputMuteStateChangeNotification](inputmutestatechangenotification.md).

## See Also

### Managing audio input mute state

- [inputMuted](isinputmuted.md): A Boolean value that indicates whether the app’s audio input is in a muted state.
- [setInputMuted:error:](setinputmuted%28__%29.md): Sets a Boolean value that indicates whether the app’s audio input is in a muted state.
- [AVAudioApplicationInputMuteStateChangeNotification](inputmutestatechangenotification.md): A notification the system posts when the app’s audio input mute state changes.
