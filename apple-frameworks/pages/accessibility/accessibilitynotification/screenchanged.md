> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/accessibilitynotification/screenchanged](https://developer.apple.com/documentation/accessibility/accessibilitynotification/screenchanged)

# AccessibilityNotification.ScreenChanged

**Framework:** Accessibility  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A notification that an app posts when a new view appears that occupies a major portion of the screen.

## Declaration

```swift
struct ScreenChanged
```

<a id="overview"></a>

## Overview

Optionally, include a parameter that contains the accessibility element for VoiceOver to move to after processing the notification.

## Topics

### Creating a screen change notification

- [init(\_:)](screenchanged/init%28__%29.md): Creates a screen change notification.

## See Also

### Notifications

- [AccessibilityNotification.Announcement](announcement.md): A notification that an app posts when it needs to convey an announcement to an assistive app.
- [AccessibilityNotification.LayoutChanged](layoutchanged.md): A notification that an app posts when the layout of a screen changes.
- [AccessibilityNotification.PageScrolled](pagescrolled.md): A notification that an app posts when a scroll action completes.
