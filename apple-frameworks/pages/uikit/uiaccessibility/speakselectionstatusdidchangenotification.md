> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/speakselectionstatusdidchangenotification](https://developer.apple.com/documentation/uikit/uiaccessibility/speakselectionstatusdidchangenotification)

# speakSelectionStatusDidChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that UIKit posts when the system’s Speak Selection setting changes.

## Declaration

```swift
nonisolated static let speakSelectionStatusDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

This notification doesn’t include a parameter. Observe this notification using the default notification center.

## See Also

### Audio and speech

- [monoAudioStatusDidChangeNotification](monoaudiostatusdidchangenotification.md): A notification that UIKit posts when system audio changes from stereo to mono.
- [speakScreenStatusDidChangeNotification](speakscreenstatusdidchangenotification.md): A notification that UIKit posts when the system’s Speak Screen setting changes.
- [hearingDevicePairedEarDidChangeNotification](hearingdevicepairedeardidchangenotification.md): A notification that UIKit posts when there’s a change to the currently paired hearing devices.

# UIAccessibilitySpeakSelectionStatusDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that UIKit posts when the system’s Speak Selection setting changes.

## Declaration

```objectivec
extern NSNotificationName const UIAccessibilitySpeakSelectionStatusDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

This notification doesn’t include a parameter. Observe this notification using the default notification center.

## See Also

### Audio and speech

- [UIAccessibilityMonoAudioStatusDidChangeNotification](monoaudiostatusdidchangenotification.md): A notification that UIKit posts when system audio changes from stereo to mono.
- [UIAccessibilitySpeakScreenStatusDidChangeNotification](speakscreenstatusdidchangenotification.md): A notification that UIKit posts when the system’s Speak Screen setting changes.
- [UIAccessibilityHearingDevicePairedEarDidChangeNotification](hearingdevicepairedeardidchangenotification.md): A notification that UIKit posts when there’s a change to the currently paired hearing devices.
