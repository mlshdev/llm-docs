> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/accessibilitysettings](https://developer.apple.com/documentation/accessibility/accessibilitysettings)

# AccessibilitySettings

**Framework:** Accessibility  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A structure for working with accessibility system settings.

## Declaration

```swift
struct AccessibilitySettings
```

## Topics

### Opening the Settings app

- [openSettings(for:)](accessibilitysettings/opensettings%28for_%29.md): Opens the Settings app to a specific section of Accessibility settings.
- [AccessibilitySettings.Feature](accessibilitysettings/feature.md): Constants that describe specific Accessibility settings in the Settings app.

### Pausing animated images

- [Animated images](animated-images.md): Pause animations in animated images in your app when people turn off the Animated Images setting.
- [animatedImagesEnabled](accessibilitysettings/animatedimagesenabled.md): A Boolean value that indicates whether the system setting for playing animated images is on.
- [animatedImagesEnabledDidChangeNotification](accessibilitysettings/animatedimagesenableddidchangenotification.md): A notification that posts when the system setting for playing animated images changes.

### Customizing vertical text layout

- [Horizontal text](horizontal-text.md): Lay out vertical text horizontally in your app when people turn on the Prefer Horizontal Text setting.
- [prefersHorizontalTextLayout](accessibilitysettings/prefershorizontaltextlayout.md): A Boolean value that indicates whether the system setting to prefer horizontal text for languages that support both vertical and horizontal text layout is on.
- [prefersHorizontalTextLayoutDidChangeNotification](accessibilitysettings/prefershorizontaltextlayoutdidchangenotification.md): A notification that posts when the system setting to prefer horizontal text for languages that support both vertical and horizontal text layout changes.

### Supporting head-anchored content

- [prefersHeadAnchorAlternative](accessibilitysettings/prefersheadanchoralternative.md): A Boolean value that indicates the person’s preference for content that follows their head position.
- [prefersHeadAnchorAlternativeDidChangeNotification](accessibilitysettings/prefersheadanchoralternativedidchangenotification.md): A notification that posts when the system setting for head-anchored content changes.

### Reducing animation for text insertion indicators

- [prefersNonBlinkingTextInsertionIndicator](accessibilitysettings/prefersnonblinkingtextinsertionindicator.md): A Boolean value that indicates whether the system setting to prefer a nonblinking cursor in editable text fields is on.
- [prefersNonBlinkingTextInsertionIndicatorDidChangeNotification](accessibilitysettings/prefersnonblinkingtextinsertionindicatordidchangenotification.md): A notification that posts when the system setting to prefer a nonblinking cursor in editable text fields changes.

### Checking if Assistive Access is running

- [isAssistiveAccessEnabled](accessibilitysettings/isassistiveaccessenabled.md): A Boolean value that indicates whether Assistive Access is running.

### Creating an accessibility settings structure

- [init()](accessibilitysettings/init%28%29.md)

### Structures

- [AccessibilitySettings.ApplicationAccessibilityEnabledDidChangeMessage](accessibilitysettings/applicationaccessibilityenableddidchangemessage.md): A type- and concurrency-safe `NotificationCenter` message posted when the value of [isApplicationAccessibilityEnabled](accessibilitysettings/isapplicationaccessibilityenabled.md) changes.

### Type Properties

- [applicationAccessibilityEnabledDidChangeNotification](accessibilitysettings/applicationaccessibilityenableddidchangenotification.md): Posted when the value returned by `AXApplicationAccessibilityEnabled()` changes.
- [isApplicationAccessibilityEnabled](accessibilitysettings/isapplicationaccessibilityenabled.md): Returns whether application accessibility is currently enabled for this process.
- [isReduceHighlightingEffectsEnabled](accessibilitysettings/isreducehighlightingeffectsenabled.md)
- [prefersActionSliderAlternative](accessibilitysettings/prefersactionslideralternative.md)
- [prefersActionSliderAlternativeDidChangeNotification](accessibilitysettings/prefersactionslideralternativedidchangenotification.md)
- [reduceHighlightingEffectsEnabledDidChangeNotification](accessibilitysettings/reducehighlightingeffectsenableddidchangenotification.md)
- [showBordersEnabled](accessibilitysettings/showbordersenabled.md)
- [showBordersEnabledStatusDidChangeNotification](accessibilitysettings/showbordersenabledstatusdidchangenotification.md)

### Type Methods

- [canOpenSettings(for:)](accessibilitysettings/canopensettings%28for_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
