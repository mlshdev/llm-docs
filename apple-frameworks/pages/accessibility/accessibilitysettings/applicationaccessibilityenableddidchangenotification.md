> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessibility/accessibilitysettings/applicationaccessibilityenableddidchangenotification

# applicationAccessibilityEnabledDidChangeNotification (Swift)

**Framework:** Accessibility  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Posted when the value returned by `AXApplicationAccessibilityEnabled()` changes.

## Declaration

```swift
static let applicationAccessibilityEnabledDidChangeNotification: NSNotification.Name
```

<a id="discussion"></a>

## Discussion

Posted on the main thread. The notification’s `object` is `nil` and its `userInfo` dictionary is empty — clients should re-read `AXApplicationAccessibilityEnabled()` when handling the notification.

# AXApplicationAccessibilityEnabledDidChangeNotification (Objective-C)

**Framework:** Accessibility  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Posted when the value returned by `AXApplicationAccessibilityEnabled()` changes.

## Declaration

```objectivec
extern NSNotificationName const AXApplicationAccessibilityEnabledDidChangeNotification;
```

<a id="discussion"></a>

## Discussion

Posted on the main thread. The notification’s `object` is `nil` and its `userInfo` dictionary is empty — clients should re-read `AXApplicationAccessibilityEnabled()` when handling the notification.
