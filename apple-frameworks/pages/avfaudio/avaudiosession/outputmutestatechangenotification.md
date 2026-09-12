> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/outputmutestatechangenotification](https://developer.apple.com/documentation/avfaudio/avaudiosession/outputmutestatechangenotification)

# outputMuteStateChangeNotification (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Notification sent to registered listeners when session’s output mute state changes.

## Declaration

```swift
class let outputMuteStateChangeNotification: NSNotification.Name
```

<a id="discussion"></a>

## Discussion

The userInfo dictionary will contain the updated output mute value as accessed by [muteStateKey](mutestatekey.md)

## See Also

### Configuring audio muting

- [isOutputMuted](isoutputmuted.md): A Boolean value that indicates whether audio output is in a muted state.
- [setOutputMuted(\_:)](setoutputmuted%28__%29.md): Sets a Boolean value to inform the system to mute the session’s output audio. The default value is false (unmuted).
- [muteStateKey](mutestatekey.md): Keys for [outputMuteStateChangeNotification](outputmutestatechangenotification.md) Value is `NSNumber` type with boolean value 0 for unmuted or value 1 for muted (samples zeroed out)
- [userIntentToUnmuteOutputNotification](userintenttounmuteoutputnotification.md): Notification sent to registered listeners when the application’s output is muted and user hints to unmute.
- [userIntentToUnmuteOutputNotification](userintenttounmuteoutputnotification.md): Notification sent to registered listeners when the application’s output is muted and user hints to unmute.
- [muteStateKey](mutestatekey.md): Keys for [outputMuteStateChangeNotification](outputmutestatechangenotification.md) Value is `NSNumber` type with boolean value 0 for unmuted or value 1 for muted (samples zeroed out)

# AVAudioSessionOutputMuteStateChangeNotification (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Notification sent to registered listeners when session’s output mute state changes.

## Declaration

```objectivec
extern NSNotificationName const AVAudioSessionOutputMuteStateChangeNotification;
```

<a id="discussion"></a>

## Discussion

The userInfo dictionary will contain the updated output mute value as accessed by [AVAudioSessionMuteStateKey](mutestatekey.md)

## See Also

### Configuring audio muting

- [outputMuted](isoutputmuted.md): A Boolean value that indicates whether audio output is in a muted state.
- [setOutputMuted:error:](setoutputmuted%28__%29.md): Sets a Boolean value to inform the system to mute the session’s output audio. The default value is false (unmuted).
- [AVAudioSessionMuteStateKey](mutestatekey.md): Keys for [AVAudioSessionOutputMuteStateChangeNotification](outputmutestatechangenotification.md) Value is `NSNumber` type with boolean value 0 for unmuted or value 1 for muted (samples zeroed out)
- [AVAudioSessionUserIntentToUnmuteOutputNotification](userintenttounmuteoutputnotification.md): Notification sent to registered listeners when the application’s output is muted and user hints to unmute.
- [AVAudioSessionUserIntentToUnmuteOutputNotification](userintenttounmuteoutputnotification.md): Notification sent to registered listeners when the application’s output is muted and user hints to unmute.
- [AVAudioSessionMuteStateKey](mutestatekey.md): Keys for [AVAudioSessionOutputMuteStateChangeNotification](outputmutestatechangenotification.md) Value is `NSNumber` type with boolean value 0 for unmuted or value 1 for muted (samples zeroed out)
