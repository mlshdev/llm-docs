> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiosession/mutestatekey

# muteStateKey (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Keys for [outputMuteStateChangeNotification](outputmutestatechangenotification.md) Value is `NSNumber` type with boolean value 0 for unmuted or value 1 for muted (samples zeroed out)

## Declaration

```swift
class let muteStateKey: String
```

## See Also

### Configuring audio muting

- [isOutputMuted](isoutputmuted.md): A Boolean value that indicates whether audio output is in a muted state.
- [setOutputMuted(\_:)](setoutputmuted%28__%29.md): Sets a Boolean value to inform the system to mute the session’s output audio. The default value is false (unmuted).
- [outputMuteStateChangeNotification](outputmutestatechangenotification.md): Notification sent to registered listeners when session’s output mute state changes.
- [userIntentToUnmuteOutputNotification](userintenttounmuteoutputnotification.md): Notification sent to registered listeners when the application’s output is muted and user hints to unmute.
- [userIntentToUnmuteOutputNotification](userintenttounmuteoutputnotification.md): Notification sent to registered listeners when the application’s output is muted and user hints to unmute.

# AVAudioSessionMuteStateKey (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Keys for [AVAudioSessionOutputMuteStateChangeNotification](outputmutestatechangenotification.md) Value is `NSNumber` type with boolean value 0 for unmuted or value 1 for muted (samples zeroed out)

## Declaration

```objectivec
extern NSString * const AVAudioSessionMuteStateKey;
```

## See Also

### Configuring audio muting

- [outputMuted](isoutputmuted.md): A Boolean value that indicates whether audio output is in a muted state.
- [setOutputMuted:error:](setoutputmuted%28__%29.md): Sets a Boolean value to inform the system to mute the session’s output audio. The default value is false (unmuted).
- [AVAudioSessionOutputMuteStateChangeNotification](outputmutestatechangenotification.md): Notification sent to registered listeners when session’s output mute state changes.
- [AVAudioSessionUserIntentToUnmuteOutputNotification](userintenttounmuteoutputnotification.md): Notification sent to registered listeners when the application’s output is muted and user hints to unmute.
- [AVAudioSessionUserIntentToUnmuteOutputNotification](userintenttounmuteoutputnotification.md): Notification sent to registered listeners when the application’s output is muted and user hints to unmute.
