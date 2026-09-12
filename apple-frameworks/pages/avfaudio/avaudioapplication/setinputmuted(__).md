> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioapplication/setinputmuted(_:)](https://developer.apple.com/documentation/avfaudio/avaudioapplication/setinputmuted(_:))

# setInputMuted(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 26.0+ · watchOS 10.0+

Sets a Boolean value that indicates whether the app’s audio input is in a muted state.

## Declaration

```swift
func setInputMuted(_ muted: Bool) throws
```

## Parameters

- `muted`: A Boolean value that indicates the new mute state.

<a id="Discussion"></a>

## Discussion

In platforms that use [AVAudioSession](../avaudiosession.md), setting the value to [true](https://developer.apple.com/documentation/swift/true) mutes all sources of audio input in the app. In macOS, the system instead invokes the callback that you register by calling [setInputMuteStateChangeHandler(\_:)](setinputmutestatechangehandler%28__%29.md) to handle input muting.

> **Note**

>  This setting is specific to your app and doesn’t affect hardware mute state.

## See Also

### Managing audio input mute state

- [isInputMuted](isinputmuted.md): A Boolean value that indicates whether the app’s audio input is in a muted state.
- [inputMuteStateChangeNotification](inputmutestatechangenotification.md): A notification the system posts when the app’s audio input mute state changes.
- [setInputMuteStateChangeHandler(\_:)](setinputmutestatechangehandler%28__%29.md): Sets a callback to handle changes to application-level audio muting states.

# setInputMuted:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 26.0+ · watchOS 10.0+

Sets a Boolean value that indicates whether the app’s audio input is in a muted state.

## Declaration

```objectivec
- (BOOL) setInputMuted:(BOOL) muted error:(NSError **) outError;
```

## Parameters

- `muted`: A Boolean value that indicates the new mute state.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="Discussion"></a>

## Discussion

In platforms that use [AVAudioSession](../avaudiosession.md), setting the value to [true](https://developer.apple.com/documentation/swift/true) mutes all sources of audio input in the app. In macOS, the system instead invokes the callback that you register by calling [setInputMuteStateChangeHandler:error:](setinputmutestatechangehandler%28__%29.md) to handle input muting.

> **Note**

>  This setting is specific to your app and doesn’t affect hardware mute state.

## See Also

### Managing audio input mute state

- [inputMuted](isinputmuted.md): A Boolean value that indicates whether the app’s audio input is in a muted state.
- [AVAudioApplicationInputMuteStateChangeNotification](inputmutestatechangenotification.md): A notification the system posts when the app’s audio input mute state changes.
- [setInputMuteStateChangeHandler:error:](setinputmutestatechangehandler%28__%29.md): Sets a callback to handle changes to application-level audio muting states.
