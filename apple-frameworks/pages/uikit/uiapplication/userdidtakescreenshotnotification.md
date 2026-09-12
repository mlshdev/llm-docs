> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/userdidtakescreenshotnotification](https://developer.apple.com/documentation/uikit/uiapplication/userdidtakescreenshotnotification)

# userDidTakeScreenshotNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that posts when a person takes a screenshot on the device.

## Declaration

```swift
nonisolated class let userDidTakeScreenshotNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

This notification doesn’t contain a `userInfo` dictionary. This notification posts after the screenshot is taken.

# UIApplicationUserDidTakeScreenshotNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that posts when a person takes a screenshot on the device.

## Declaration

```objectivec
extern NSNotificationName const UIApplicationUserDidTakeScreenshotNotification;
```

<a id="Discussion"></a>

## Discussion

This notification doesn’t contain a `userInfo` dictionary. This notification posts after the screenshot is taken.
