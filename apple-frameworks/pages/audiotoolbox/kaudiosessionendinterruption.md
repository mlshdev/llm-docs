> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiosessionendinterruption](https://developer.apple.com/documentation/audiotoolbox/kaudiosessionendinterruption)

# kAudioSessionEndInterruption (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

The interruption to your app’s audio session has just ended. In the case where a user confirms the interruption, such as answering a phone call, your app will not receive this constant.

## Declaration

```swift
var kAudioSessionEndInterruption: Int { get }
```

## See Also

### Constants

- [kAudioSessionBeginInterruption](kaudiosessionbegininterruption.md): Deprecated. Your app’s audio session has just been interrupted, such as by a phone call.

# kAudioSessionEndInterruption (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

The interruption to your app’s audio session has just ended. In the case where a user confirms the interruption, such as answering a phone call, your app will not receive this constant.

## Declaration

```objectivec
kAudioSessionEndInterruption
```

## See Also

### Constants

- [kAudioSessionBeginInterruption](kaudiosessionbegininterruption.md): Deprecated. Your app’s audio session has just been interrupted, such as by a phone call.
