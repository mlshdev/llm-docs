> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/boldtextstatusdidchangenotification](https://developer.apple.com/documentation/uikit/uiaccessibility/boldtextstatusdidchangenotification)

# boldTextStatusDidChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that UIKit posts when the system’s Bold Text setting changes.

## Declaration

```swift
nonisolated static let boldTextStatusDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

This notification doesn’t include a parameter. Observe this notification using the default notification center.

## See Also

### Text

- [closedCaptioningStatusDidChangeNotification](closedcaptioningstatusdidchangenotification.md): A notification that UIKit posts when the setting for Closed Captions + SDH changes.

# UIAccessibilityBoldTextStatusDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that UIKit posts when the system’s Bold Text setting changes.

## Declaration

```objectivec
extern NSNotificationName const UIAccessibilityBoldTextStatusDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

This notification doesn’t include a parameter. Observe this notification using the default notification center.

## See Also

### Text

- [UIAccessibilityClosedCaptioningStatusDidChangeNotification](closedcaptioningstatusdidchangenotification.md): A notification that UIKit posts when the setting for Closed Captions + SDH changes.
