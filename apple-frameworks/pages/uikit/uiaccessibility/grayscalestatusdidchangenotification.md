> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/grayscalestatusdidchangenotification](https://developer.apple.com/documentation/uikit/uiaccessibility/grayscalestatusdidchangenotification)

# grayscaleStatusDidChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that UIKit posts when the system’s Grayscale setting changes.

## Declaration

```swift
nonisolated static let grayscaleStatusDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

This notification doesn’t include a parameter. Observe this notification using the default notification center.

## See Also

### Colors

- [darkerSystemColorsStatusDidChangeNotification](darkersystemcolorsstatusdidchangenotification.md): A notification that UIKit posts when the system’s Increase Contrast setting changes.
- [invertColorsStatusDidChangeNotification](invertcolorsstatusdidchangenotification.md): A notification that UIKit posts when the settings for inverted colors change.

# UIAccessibilityGrayscaleStatusDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that UIKit posts when the system’s Grayscale setting changes.

## Declaration

```objectivec
extern NSNotificationName const UIAccessibilityGrayscaleStatusDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

This notification doesn’t include a parameter. Observe this notification using the default notification center.

## See Also

### Colors

- [UIAccessibilityDarkerSystemColorsStatusDidChangeNotification](darkersystemcolorsstatusdidchangenotification.md): A notification that UIKit posts when the system’s Increase Contrast setting changes.
- [UIAccessibilityInvertColorsStatusDidChangeNotification](invertcolorsstatusdidchangenotification.md): A notification that UIKit posts when the settings for inverted colors change.
