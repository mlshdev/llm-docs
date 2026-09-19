> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiaccessibility/invertcolorsstatusdidchangenotification

# invertColorsStatusDidChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that UIKit posts when the settings for inverted colors change.

## Declaration

```swift
nonisolated static let invertColorsStatusDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

This notification doesn’t include a parameter. Observe this notification using the default notification center.

Use the [isInvertColorsEnabled](isinvertcolorsenabled.md) function to determine whether the settings for inverted colors are in an enabled state.

## See Also

### Colors

- [darkerSystemColorsStatusDidChangeNotification](darkersystemcolorsstatusdidchangenotification.md): A notification that UIKit posts when the system’s Increase Contrast setting changes.
- [grayscaleStatusDidChangeNotification](grayscalestatusdidchangenotification.md): A notification that UIKit posts when the system’s Grayscale setting changes.

# UIAccessibilityInvertColorsStatusDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that UIKit posts when the settings for inverted colors change.

## Declaration

```objectivec
extern NSNotificationName const UIAccessibilityInvertColorsStatusDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

This notification doesn’t include a parameter. Observe this notification using the default notification center.

Use the [UIAccessibilityIsInvertColorsEnabled](isinvertcolorsenabled.md) function to determine whether the settings for inverted colors are in an enabled state.

## See Also

### Colors

- [UIAccessibilityDarkerSystemColorsStatusDidChangeNotification](darkersystemcolorsstatusdidchangenotification.md): A notification that UIKit posts when the system’s Increase Contrast setting changes.
- [UIAccessibilityGrayscaleStatusDidChangeNotification](grayscalestatusdidchangenotification.md): A notification that UIKit posts when the system’s Grayscale setting changes.
