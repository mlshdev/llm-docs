> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/setactiveoptions/notifyothersondeactivation](https://developer.apple.com/documentation/avfaudio/avaudiosession/setactiveoptions/notifyothersondeactivation)

# notifyOthersOnDeactivation (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

An option that indicates that the system should notify other apps that you’ve deactivated your app’s audio session.

## Declaration

```swift
static var notifyOthersOnDeactivation: AVAudioSession.SetActiveOptions { get }
```

<a id="Discussion"></a>

## Discussion

When passed in the `options` parameter of the [setActive(\_:options:)](../setactive%28__options_%29.md) instance method, this option indicates that when your audio session deactivates, other audio sessions that had been interrupted by your session can return to their active state.

Only use this option when deactivating your audio session; that is, when you pass a value of [false](https://developer.apple.com/documentation/swift/false) to the [setActive(\_:options:)](../setactive%28__options_%29.md) instance method.

## See Also

### Getting Standard  Options

- [AVAudioSessionSetActiveFlags_NotifyOthersOnDeactivation](../../avaudiosessionsetactiveflags_notifyothersondeactivation.md): Deprecated. A flag that indicates that when your audio session deactivates, any audio sessions that your audio session interrupted can reactivate themselves.

# AVAudioSessionSetActiveOptionNotifyOthersOnDeactivation (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An option that indicates that the system should notify other apps that you’ve deactivated your app’s audio session.

## Declaration

```objectivec
AVAudioSessionSetActiveOptionNotifyOthersOnDeactivation
```

<a id="Discussion"></a>

## Discussion

When passed in the `options` parameter of the [setActive:withOptions:error:](../setactive%28__options_%29.md) instance method, this option indicates that when your audio session deactivates, other audio sessions that had been interrupted by your session can return to their active state.

Only use this option when deactivating your audio session; that is, when you pass a value of [false](https://developer.apple.com/documentation/swift/false) to the [setActive:withOptions:error:](../setactive%28__options_%29.md) instance method.

## See Also

### Getting Standard  Options

- [AVAudioSessionSetActiveFlags_NotifyOthersOnDeactivation](../../avaudiosessionsetactiveflags_notifyothersondeactivation.md): Deprecated. A flag that indicates that when your audio session deactivates, any audio sessions that your audio session interrupted can reactivate themselves.
