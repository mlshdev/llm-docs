> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioapplication/mutestatekey](https://developer.apple.com/documentation/avfaudio/avaudioapplication/mutestatekey)

# muteStateKey (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 26.0+ · watchOS 10.0+

A user information key to determine the app’s audio mute state.

## Declaration

```swift
class let muteStateKey: String
```

<a id="Discussion"></a>

## Discussion

Use this key to retrieve the app’s mute state from an [inputMuteStateChangeNotification](inputmutestatechangenotification.md).

# AVAudioApplicationMuteStateKey (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 26.0+ · watchOS 10.0+

A user information key to determine the app’s audio mute state.

## Declaration

```objectivec
extern NSString * const AVAudioApplicationMuteStateKey;
```

<a id="Discussion"></a>

## Discussion

Use this key to retrieve the app’s mute state from an [AVAudioApplicationInputMuteStateChangeNotification](inputmutestatechangenotification.md).
