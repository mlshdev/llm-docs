> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfusernotificationcallback](https://developer.apple.com/documentation/corefoundation/cfusernotificationcallback)

# CFUserNotificationCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback invoked when an asynchronous user notification dialog is dismissed.

## Declaration

```swift
typealias CFUserNotificationCallBack = (CFUserNotification?, CFOptionFlags) -> Void
```

## Parameters

- `userNotification`: The user notification that was dismissed.
- `responseFlags`: On return, contains flags identifying how the notification was dismissed, the state of any checkboxes, and the selected item of the pop-up menu. See [CFUserNotificationReceiveResponse(\_:\_:\_:)](cfusernotificationreceiveresponse%28______%29.md) for details.

# CFUserNotificationCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback invoked when an asynchronous user notification dialog is dismissed.

## Declaration

```objectivec
typedef void (*)(struct __CFUserNotification *, unsigned long) CFUserNotificationCallBack;
```

## Parameters

- `userNotification`: The user notification that was dismissed.
- `responseFlags`: On return, contains flags identifying how the notification was dismissed, the state of any checkboxes, and the selected item of the pop-up menu. See [CFUserNotificationReceiveResponse](cfusernotificationreceiveresponse%28______%29.md) for details.
