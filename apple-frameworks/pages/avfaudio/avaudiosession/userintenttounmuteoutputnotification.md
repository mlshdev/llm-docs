> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/userintenttounmuteoutputnotification](https://developer.apple.com/documentation/avfaudio/avaudiosession/userintenttounmuteoutputnotification)

# userIntentToUnmuteOutputNotification (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Notification sent to registered listeners when the application’s output is muted and user hints to unmute.

## Declaration

```swift
class let userIntentToUnmuteOutputNotification: NSNotification.Name
```

## See Also

### Configuring audio muting

- [isOutputMuted](isoutputmuted.md): A Boolean value that indicates whether audio output is in a muted state.
- [setOutputMuted(\_:)](setoutputmuted%28__%29.md): Sets a Boolean value to inform the system to mute the session’s output audio. The default value is false (unmuted).
- [outputMuteStateChangeNotification](outputmutestatechangenotification.md): Notification sent to registered listeners when session’s output mute state changes.
- [muteStateKey](mutestatekey.md): Keys for [outputMuteStateChangeNotification](outputmutestatechangenotification.md) Value is `NSNumber` type with boolean value 0 for unmuted or value 1 for muted (samples zeroed out)
- [muteStateKey](mutestatekey.md): Keys for [outputMuteStateChangeNotification](outputmutestatechangenotification.md) Value is `NSNumber` type with boolean value 0 for unmuted or value 1 for muted (samples zeroed out)

# AVAudioSessionUserIntentToUnmuteOutputNotification (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Notification sent to registered listeners when the application’s output is muted and user hints to unmute.

## Declaration

```objectivec
extern NSNotificationName const AVAudioSessionUserIntentToUnmuteOutputNotification;
```

## See Also

### Configuring audio muting

- [outputMuted](isoutputmuted.md): A Boolean value that indicates whether audio output is in a muted state.
- [setOutputMuted:error:](setoutputmuted%28__%29.md): Sets a Boolean value to inform the system to mute the session’s output audio. The default value is false (unmuted).
- [AVAudioSessionOutputMuteStateChangeNotification](outputmutestatechangenotification.md): Notification sent to registered listeners when session’s output mute state changes.
- [AVAudioSessionMuteStateKey](mutestatekey.md): Keys for [AVAudioSessionOutputMuteStateChangeNotification](outputmutestatechangenotification.md) Value is `NSNumber` type with boolean value 0 for unmuted or value 1 for muted (samples zeroed out)
- [AVAudioSessionMuteStateKey](mutestatekey.md): Keys for [AVAudioSessionOutputMuteStateChangeNotification](outputmutestatechangenotification.md) Value is `NSNumber` type with boolean value 0 for unmuted or value 1 for muted (samples zeroed out)
