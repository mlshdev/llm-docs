> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiosessionbegininterruption](https://developer.apple.com/documentation/audiotoolbox/kaudiosessionbegininterruption)

# kAudioSessionBeginInterruption (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Your app’s audio session has just been interrupted, such as by a phone call.

> Deprecated in iOS 7.0.

## Declaration

```swift
var kAudioSessionBeginInterruption: Int { get }
```

## See Also

### Constants

- [kAudioSessionEndInterruption](kaudiosessionendinterruption.md): The interruption to your app’s audio session has just ended. In the case where a user confirms the interruption, such as answering a phone call, your app will not receive this constant.

# kAudioSessionBeginInterruption (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Your app’s audio session has just been interrupted, such as by a phone call.

> Deprecated in iOS 7.0.

## Declaration

```objectivec
kAudioSessionBeginInterruption
```

## See Also

### Constants

- [kAudioSessionEndInterruption](kaudiosessionendinterruption.md): The interruption to your app’s audio session has just ended. In the case where a user confirms the interruption, such as answering a phone call, your app will not receive this constant.
