> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/monoaudiostatusdidchangenotification](https://developer.apple.com/documentation/uikit/uiaccessibility/monoaudiostatusdidchangenotification)

# monoAudioStatusDidChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that UIKit posts when system audio changes from stereo to mono.

## Declaration

```swift
nonisolated static let monoAudioStatusDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

This notification doesn’t include a parameter. Observe this notification using the default notification center.

## See Also

### Audio and speech

- [speakScreenStatusDidChangeNotification](speakscreenstatusdidchangenotification.md): A notification that UIKit posts when the system’s Speak Screen setting changes.
- [speakSelectionStatusDidChangeNotification](speakselectionstatusdidchangenotification.md): A notification that UIKit posts when the system’s Speak Selection setting changes.
- [hearingDevicePairedEarDidChangeNotification](hearingdevicepairedeardidchangenotification.md): A notification that UIKit posts when there’s a change to the currently paired hearing devices.

# UIAccessibilityMonoAudioStatusDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that UIKit posts when system audio changes from stereo to mono.

## Declaration

```objectivec
extern NSNotificationName const UIAccessibilityMonoAudioStatusDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

This notification doesn’t include a parameter. Observe this notification using the default notification center.

## See Also

### Audio and speech

- [UIAccessibilitySpeakScreenStatusDidChangeNotification](speakscreenstatusdidchangenotification.md): A notification that UIKit posts when the system’s Speak Screen setting changes.
- [UIAccessibilitySpeakSelectionStatusDidChangeNotification](speakselectionstatusdidchangenotification.md): A notification that UIKit posts when the system’s Speak Selection setting changes.
- [UIAccessibilityHearingDevicePairedEarDidChangeNotification](hearingdevicepairedeardidchangenotification.md): A notification that UIKit posts when there’s a change to the currently paired hearing devices.
