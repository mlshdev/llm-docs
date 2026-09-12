> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/accessibilitynotification/pagescrolled](https://developer.apple.com/documentation/accessibility/accessibilitynotification/pagescrolled)

# AccessibilityNotification.PageScrolled

**Framework:** Accessibility  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A notification that an app posts when a scroll action completes.

## Declaration

```swift
struct PageScrolled
```

<a id="overview"></a>

## Overview

Include an announcement value, such as [String](https://developer.apple.com/documentation/swift/string) or [AttributedString](../../foundation/attributedstring.md), for an assistive app to announce. When an assistive app repeatedly receives the same scroll position value, it indicates to the user that scrolling can’t continue due to a border or boundary.

## Topics

### Creating a page scroll notification

- [init(\_:)](pagescrolled/init%28__%29-28520.md): Creates a page scroll notification with a string.
- [init(\_:)](pagescrolled/init%28__%29-39fee.md): Creates a page scroll notification with an attributed string value.
- [init(\_:)](pagescrolled/init%28__%29-2lkx.md): Creates a page scroll notification with an attributed string object.

## See Also

### Notifications

- [AccessibilityNotification.Announcement](announcement.md): A notification that an app posts when it needs to convey an announcement to an assistive app.
- [AccessibilityNotification.LayoutChanged](layoutchanged.md): A notification that an app posts when the layout of a screen changes.
- [AccessibilityNotification.ScreenChanged](screenchanged.md): A notification that an app posts when a new view appears that occupies a major portion of the screen.
