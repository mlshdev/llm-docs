> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/isoutputmuted](https://developer.apple.com/documentation/avfaudio/avaudiosession/isoutputmuted)

# isOutputMuted (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A Boolean value that indicates whether audio output is in a muted state.

## Declaration

```swift
var isOutputMuted: Bool { get }
```

## See Also

### Configuring audio muting

- [setOutputMuted(\_:)](setoutputmuted%28__%29.md): Sets a Boolean value to inform the system to mute the session’s output audio. The default value is false (unmuted).
- [outputMuteStateChangeNotification](outputmutestatechangenotification.md): Notification sent to registered listeners when session’s output mute state changes.
- [muteStateKey](mutestatekey.md): Keys for [outputMuteStateChangeNotification](outputmutestatechangenotification.md) Value is `NSNumber` type with boolean value 0 for unmuted or value 1 for muted (samples zeroed out)
- [userIntentToUnmuteOutputNotification](userintenttounmuteoutputnotification.md): Notification sent to registered listeners when the application’s output is muted and user hints to unmute.
- [userIntentToUnmuteOutputNotification](userintenttounmuteoutputnotification.md): Notification sent to registered listeners when the application’s output is muted and user hints to unmute.
- [muteStateKey](mutestatekey.md): Keys for [outputMuteStateChangeNotification](outputmutestatechangenotification.md) Value is `NSNumber` type with boolean value 0 for unmuted or value 1 for muted (samples zeroed out)

# outputMuted (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A Boolean value that indicates whether audio output is in a muted state.

## Declaration

```objectivec
@property (readonly, getter=isOutputMuted) BOOL outputMuted;
```

## See Also

### Configuring audio muting

- [setOutputMuted:error:](setoutputmuted%28__%29.md): Sets a Boolean value to inform the system to mute the session’s output audio. The default value is false (unmuted).
- [AVAudioSessionOutputMuteStateChangeNotification](outputmutestatechangenotification.md): Notification sent to registered listeners when session’s output mute state changes.
- [AVAudioSessionMuteStateKey](mutestatekey.md): Keys for [AVAudioSessionOutputMuteStateChangeNotification](outputmutestatechangenotification.md) Value is `NSNumber` type with boolean value 0 for unmuted or value 1 for muted (samples zeroed out)
- [AVAudioSessionUserIntentToUnmuteOutputNotification](userintenttounmuteoutputnotification.md): Notification sent to registered listeners when the application’s output is muted and user hints to unmute.
- [AVAudioSessionUserIntentToUnmuteOutputNotification](userintenttounmuteoutputnotification.md): Notification sent to registered listeners when the application’s output is muted and user hints to unmute.
- [AVAudioSessionMuteStateKey](mutestatekey.md): Keys for [AVAudioSessionOutputMuteStateChangeNotification](outputmutestatechangenotification.md) Value is `NSNumber` type with boolean value 0 for unmuted or value 1 for muted (samples zeroed out)
