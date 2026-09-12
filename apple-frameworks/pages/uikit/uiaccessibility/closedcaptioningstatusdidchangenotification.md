> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/closedcaptioningstatusdidchangenotification](https://developer.apple.com/documentation/uikit/uiaccessibility/closedcaptioningstatusdidchangenotification)

# closedCaptioningStatusDidChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that UIKit posts when the setting for Closed Captions + SDH changes.

## Declaration

```swift
nonisolated static let closedCaptioningStatusDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

This notification doesn’t include a parameter. Observe this notification using the default notification center.

## See Also

### Text

- [boldTextStatusDidChangeNotification](boldtextstatusdidchangenotification.md): A notification that UIKit posts when the system’s Bold Text setting changes.

# UIAccessibilityClosedCaptioningStatusDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that UIKit posts when the setting for Closed Captions + SDH changes.

## Declaration

```objectivec
extern NSNotificationName const UIAccessibilityClosedCaptioningStatusDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

This notification doesn’t include a parameter. Observe this notification using the default notification center.

## See Also

### Text

- [UIAccessibilityBoldTextStatusDidChangeNotification](boldtextstatusdidchangenotification.md): A notification that UIKit posts when the system’s Bold Text setting changes.
