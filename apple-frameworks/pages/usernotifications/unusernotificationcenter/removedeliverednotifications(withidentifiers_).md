> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unusernotificationcenter/removedeliverednotifications(withidentifiers:)](https://developer.apple.com/documentation/usernotifications/unusernotificationcenter/removedeliverednotifications(withidentifiers:))

# removeDeliveredNotifications(withIdentifiers:) (Swift)

**Framework:** User Notifications  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

Removes your app’s notifications from Notification Center that match the specified identifiers.

## Declaration

```swift
func removeDeliveredNotifications(withIdentifiers identifiers: [String])
```

## Parameters

- `identifiers`: An array of [NSString](../../foundation/nsstring.md) objects, each of which corresponds to a value in the [identifier](../unnotificationrequest/identifier.md) property of a [UNNotificationRequest](../unnotificationrequest.md) object. This method ignores the identifiers of requests whose notifications are not currently displayed in Notification Center.

<a id="Discussion"></a>

## Discussion

Use this method to selectively remove notifications that you no longer want displayed in Notification Center. The method executes asynchronously, returning immediately and removing the specified notifications on a background thread.

## See Also

### Removing delivered notifications

- [getDeliveredNotifications(completionHandler:)](getdeliverednotifications%28completionhandler_%29.md): Fetches all of your app’s delivered notifications that are still present in Notification Center.
- [removeAllDeliveredNotifications()](removealldeliverednotifications%28%29.md): Removes all of your app’s delivered notifications from Notification Center.

# removeDeliveredNotificationsWithIdentifiers: (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

Removes your app’s notifications from Notification Center that match the specified identifiers.

## Declaration

```objectivec
- (void) removeDeliveredNotificationsWithIdentifiers:(NSArray<NSString *> *) identifiers;
```

## Parameters

- `identifiers`: An array of [NSString](../../foundation/nsstring.md) objects, each of which corresponds to a value in the [identifier](../unnotificationrequest/identifier.md) property of a [UNNotificationRequest](../unnotificationrequest.md) object. This method ignores the identifiers of requests whose notifications are not currently displayed in Notification Center.

<a id="Discussion"></a>

## Discussion

Use this method to selectively remove notifications that you no longer want displayed in Notification Center. The method executes asynchronously, returning immediately and removing the specified notifications on a background thread.

## See Also

### Removing delivered notifications

- [getDeliveredNotificationsWithCompletionHandler:](getdeliverednotifications%28completionhandler_%29.md): Fetches all of your app’s delivered notifications that are still present in Notification Center.
- [removeAllDeliveredNotifications](removealldeliverednotifications%28%29.md): Removes all of your app’s delivered notifications from Notification Center.
