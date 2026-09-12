> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unusernotificationcenter/removealldeliverednotifications()](https://developer.apple.com/documentation/usernotifications/unusernotificationcenter/removealldeliverednotifications())

# removeAllDeliveredNotifications() (Swift)

**Framework:** User Notifications  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

Removes all of your app’s delivered notifications from Notification Center.

## Declaration

```swift
func removeAllDeliveredNotifications()
```

<a id="Discussion"></a>

## Discussion

Use this method to remove all of your app’s delivered notifications from Notification Center. The method executes asynchronously, returning immediately and removing the identifiers on a background thread. This method does not affect any notification requests that are scheduled, but have not yet been delivered.

## See Also

### Removing delivered notifications

- [getDeliveredNotifications(completionHandler:)](getdeliverednotifications%28completionhandler_%29.md): Fetches all of your app’s delivered notifications that are still present in Notification Center.
- [removeDeliveredNotifications(withIdentifiers:)](removedeliverednotifications%28withidentifiers_%29.md): Removes your app’s notifications from Notification Center that match the specified identifiers.

# removeAllDeliveredNotifications (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

Removes all of your app’s delivered notifications from Notification Center.

## Declaration

```objectivec
- (void) removeAllDeliveredNotifications;
```

<a id="Discussion"></a>

## Discussion

Use this method to remove all of your app’s delivered notifications from Notification Center. The method executes asynchronously, returning immediately and removing the identifiers on a background thread. This method does not affect any notification requests that are scheduled, but have not yet been delivered.

## See Also

### Removing delivered notifications

- [getDeliveredNotificationsWithCompletionHandler:](getdeliverednotifications%28completionhandler_%29.md): Fetches all of your app’s delivered notifications that are still present in Notification Center.
- [removeDeliveredNotificationsWithIdentifiers:](removedeliverednotifications%28withidentifiers_%29.md): Removes your app’s notifications from Notification Center that match the specified identifiers.
