> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/interruptionoptions/shouldresume](https://developer.apple.com/documentation/avfaudio/avaudiosession/interruptionoptions/shouldresume)

# shouldResume (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 6.0+ (deprecated in 27.0) · iPadOS 6.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

An option that indicates the interruption by another audio session has ended and the app can resume its audio session.

> Use AVAudioSessionResumptionRecommendationNotification instead

## Declaration

```swift
static var shouldResume: AVAudioSession.InterruptionOptions { get }
```

<a id="Discussion"></a>

## Discussion

If the interruption type is [AVAudioSession.InterruptionType.ended](../interruptiontype/ended.md), check for this value in the [AVAudioSessionInterruptionOptionKey](../../avaudiosessioninterruptionoptionkey.md) key in the `userInfo` dictionary of the [interruptionNotification](../interruptionnotification.md) notification. It serves as a hint that it’s appropriate for your app to resume audio playback without waiting for user input.

Apps that don’t require user input to begin audio playback (such as games) can ignore this flag and resume playback when an interruption ends.

# AVAudioSessionInterruptionOptionShouldResume (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 6.0+ (deprecated in 27.0) · iPadOS 6.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

An option that indicates the interruption by another audio session has ended and the app can resume its audio session.

> Use AVAudioSessionResumptionRecommendationNotification instead

## Declaration

```objectivec
AVAudioSessionInterruptionOptionShouldResume
```

<a id="Discussion"></a>

## Discussion

If the interruption type is [AVAudioSessionInterruptionTypeEnded](../interruptiontype/ended.md), check for this value in the [AVAudioSessionInterruptionOptionKey](../../avaudiosessioninterruptionoptionkey.md) key in the `userInfo` dictionary of the [AVAudioSessionInterruptionNotification](../interruptionnotification.md) notification. It serves as a hint that it’s appropriate for your app to resume audio playback without waiting for user input.

Apps that don’t require user input to begin audio playback (such as games) can ignore this flag and resume playback when an interruption ends.
