> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessionsetactiveflags_notifyothersondeactivation](https://developer.apple.com/documentation/avfaudio/avaudiosessionsetactiveflags_notifyothersondeactivation)

# AVAudioSessionSetActiveFlags_NotifyOthersOnDeactivation (Swift)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ (deprecated in 6.0) · iPadOS 4.0+ (deprecated in 6.0) · Mac Catalyst 4.0+ (deprecated in 6.0) · visionOS 1.0+ (deprecated in 1.0)

A flag that indicates that when your audio session deactivates, any audio sessions that your audio session interrupted can reactivate themselves.

> Use the constants in [AVAudioSession.SetActiveOptions](avaudiosession/setactiveoptions.md) instead.

## Declaration

```swift
var AVAudioSessionSetActiveFlags_NotifyOthersOnDeactivation: Int { get }
```

<a id="Discussion"></a>

## Discussion

This flag works when passed in the `flags` parameter of the [setActive(\_:withFlags:)](avaudiosession/setactive%28__withflags_%29.md) instance method. You use this flag only when deactivating your audio session.

## See Also

### Getting Standard  Options

- [notifyOthersOnDeactivation](avaudiosession/setactiveoptions/notifyothersondeactivation.md): An option that indicates that the system should notify other apps that you’ve deactivated your app’s audio session.

# AVAudioSessionSetActiveFlags_NotifyOthersOnDeactivation (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ (deprecated in 6.0) · iPadOS 4.0+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

A flag that indicates that when your audio session deactivates, any audio sessions that your audio session interrupted can reactivate themselves.

> Use the constants in [AVAudioSessionSetActiveOptions](avaudiosession/setactiveoptions.md) instead.

## Declaration

```objectivec
AVAudioSessionSetActiveFlags_NotifyOthersOnDeactivation
```

<a id="Discussion"></a>

## Discussion

This flag works when passed in the `flags` parameter of the [setActive:withFlags:error:](avaudiosession/setactive%28__withflags_%29.md) instance method. You use this flag only when deactivating your audio session.

## See Also

### Getting Standard  Options

- [AVAudioSessionSetActiveOptionNotifyOthersOnDeactivation](avaudiosession/setactiveoptions/notifyothersondeactivation.md): An option that indicates that the system should notify other apps that you’ve deactivated your app’s audio session.
