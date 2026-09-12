> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiosessionsetactiveflag_notifyothersondeactivation](https://developer.apple.com/documentation/audiotoolbox/kaudiosessionsetactiveflag_notifyothersondeactivation)

# kAudioSessionSetActiveFlag_NotifyOthersOnDeactivation (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Indicates that when your audio session deactivates, other audio sessions that had been interrupted by your session can return to their active state.

> Deprecated in iOS 7.0.

## Declaration

```swift
var kAudioSessionSetActiveFlag_NotifyOthersOnDeactivation: Int { get }
```

<a id="Discussion"></a>

## Discussion

Used only when deactivating your audio session.

# kAudioSessionSetActiveFlag_NotifyOthersOnDeactivation (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Indicates that when your audio session deactivates, other audio sessions that had been interrupted by your session can return to their active state.

> Deprecated in iOS 7.0.

## Declaration

```objectivec
kAudioSessionSetActiveFlag_NotifyOthersOnDeactivation
```

<a id="Discussion"></a>

## Discussion

Used only when deactivating your audio session.
