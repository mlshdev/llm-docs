> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioapplication/isinputmuted](https://developer.apple.com/documentation/avfaudio/avaudioapplication/isinputmuted)

# isInputMuted (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 26.0+ · watchOS 10.0+

A Boolean value that indicates whether the app’s audio input is in a muted state.

## Declaration

```swift
var isInputMuted: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Set a new value for this property by calling the [setInputMuted(\_:)](setinputmuted%28__%29.md) method.

## See Also

### Managing audio input mute state

- [setInputMuted(\_:)](setinputmuted%28__%29.md): Sets a Boolean value that indicates whether the app’s audio input is in a muted state.
- [inputMuteStateChangeNotification](inputmutestatechangenotification.md): A notification the system posts when the app’s audio input mute state changes.
- [setInputMuteStateChangeHandler(\_:)](setinputmutestatechangehandler%28__%29.md): Sets a callback to handle changes to application-level audio muting states.

# inputMuted (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 26.0+ · watchOS 10.0+

A Boolean value that indicates whether the app’s audio input is in a muted state.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isInputMuted) BOOL inputMuted;
```

<a id="Discussion"></a>

## Discussion

Set a new value for this property by calling the [setInputMuted:error:](setinputmuted%28__%29.md) method.

## See Also

### Managing audio input mute state

- [setInputMuted:error:](setinputmuted%28__%29.md): Sets a Boolean value that indicates whether the app’s audio input is in a muted state.
- [AVAudioApplicationInputMuteStateChangeNotification](inputmutestatechangenotification.md): A notification the system posts when the app’s audio input mute state changes.
- [setInputMuteStateChangeHandler:error:](setinputmutestatechangehandler%28__%29.md): Sets a callback to handle changes to application-level audio muting states.
