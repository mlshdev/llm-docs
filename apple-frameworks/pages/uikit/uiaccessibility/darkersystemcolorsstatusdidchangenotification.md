> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/darkersystemcolorsstatusdidchangenotification](https://developer.apple.com/documentation/uikit/uiaccessibility/darkersystemcolorsstatusdidchangenotification)

# darkerSystemColorsStatusDidChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that UIKit posts when the system’s Increase Contrast setting changes.

## Declaration

```swift
nonisolated static let darkerSystemColorsStatusDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

This notification doesn’t include a parameter. Observe this notification using the default notification center.

## See Also

### Colors

- [grayscaleStatusDidChangeNotification](grayscalestatusdidchangenotification.md): A notification that UIKit posts when the system’s Grayscale setting changes.
- [invertColorsStatusDidChangeNotification](invertcolorsstatusdidchangenotification.md): A notification that UIKit posts when the settings for inverted colors change.

# UIAccessibilityDarkerSystemColorsStatusDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that UIKit posts when the system’s Increase Contrast setting changes.

## Declaration

```objectivec
extern NSNotificationName const UIAccessibilityDarkerSystemColorsStatusDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

This notification doesn’t include a parameter. Observe this notification using the default notification center.

## See Also

### Colors

- [UIAccessibilityGrayscaleStatusDidChangeNotification](grayscalestatusdidchangenotification.md): A notification that UIKit posts when the system’s Grayscale setting changes.
- [UIAccessibilityInvertColorsStatusDidChangeNotification](invertcolorsstatusdidchangenotification.md): A notification that UIKit posts when the settings for inverted colors change.
