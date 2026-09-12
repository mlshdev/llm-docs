> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unusernotificationcenter/removeallpendingnotificationrequests()](https://developer.apple.com/documentation/usernotifications/unusernotificationcenter/removeallpendingnotificationrequests())

# removeAllPendingNotificationRequests() (Swift)

**Framework:** User Notifications  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Removes all of your app’s pending local notifications.

## Declaration

```swift
func removeAllPendingNotificationRequests()
```

<a id="Discussion"></a>

## Discussion

This method executes asynchronously, removing all pending notification requests on a secondary thread.

```swift
let center = UNUserNotificationCenter.current()
center.removeAllPendingNotificationRequests()
```

## See Also

### Scheduling notifications

- [add(\_:withCompletionHandler:)](add%28__withcompletionhandler_%29.md): Schedules the delivery of a local notification.
- [getPendingNotificationRequests(completionHandler:)](getpendingnotificationrequests%28completionhandler_%29.md): Fetches all of your app’s local notifications that are pending delivery.
- [removePendingNotificationRequests(withIdentifiers:)](removependingnotificationrequests%28withidentifiers_%29.md): Removes your app’s local notifications that are pending and match the specified identifiers.

# removeAllPendingNotificationRequests (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Removes all of your app’s pending local notifications.

## Declaration

```objectivec
- (void) removeAllPendingNotificationRequests;
```

<a id="Discussion"></a>

## Discussion

This method executes asynchronously, removing all pending notification requests on a secondary thread.

```swift
let center = UNUserNotificationCenter.current()
center.removeAllPendingNotificationRequests()
```

## See Also

### Scheduling notifications

- [addNotificationRequest:withCompletionHandler:](add%28__withcompletionhandler_%29.md): Schedules the delivery of a local notification.
- [getPendingNotificationRequestsWithCompletionHandler:](getpendingnotificationrequests%28completionhandler_%29.md): Fetches all of your app’s local notifications that are pending delivery.
- [removePendingNotificationRequestsWithIdentifiers:](removependingnotificationrequests%28withidentifiers_%29.md): Removes your app’s local notifications that are pending and match the specified identifiers.
