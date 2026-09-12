> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/speakscreenstatusdidchangenotification](https://developer.apple.com/documentation/uikit/uiaccessibility/speakscreenstatusdidchangenotification)

# speakScreenStatusDidChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that UIKit posts when the system’s Speak Screen setting changes.

## Declaration

```swift
nonisolated static let speakScreenStatusDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

This notification doesn’t include a parameter. Observe this notification using the default notification center.

## See Also

### Audio and speech

- [monoAudioStatusDidChangeNotification](monoaudiostatusdidchangenotification.md): A notification that UIKit posts when system audio changes from stereo to mono.
- [speakSelectionStatusDidChangeNotification](speakselectionstatusdidchangenotification.md): A notification that UIKit posts when the system’s Speak Selection setting changes.
- [hearingDevicePairedEarDidChangeNotification](hearingdevicepairedeardidchangenotification.md): A notification that UIKit posts when there’s a change to the currently paired hearing devices.

# UIAccessibilitySpeakScreenStatusDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that UIKit posts when the system’s Speak Screen setting changes.

## Declaration

```objectivec
extern NSNotificationName const UIAccessibilitySpeakScreenStatusDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

This notification doesn’t include a parameter. Observe this notification using the default notification center.

## See Also

### Audio and speech

- [UIAccessibilityMonoAudioStatusDidChangeNotification](monoaudiostatusdidchangenotification.md): A notification that UIKit posts when system audio changes from stereo to mono.
- [UIAccessibilitySpeakSelectionStatusDidChangeNotification](speakselectionstatusdidchangenotification.md): A notification that UIKit posts when the system’s Speak Selection setting changes.
- [UIAccessibilityHearingDevicePairedEarDidChangeNotification](hearingdevicepairedeardidchangenotification.md): A notification that UIKit posts when there’s a change to the currently paired hearing devices.
