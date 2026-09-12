> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unusernotificationcenter/removependingnotificationrequests(withidentifiers:)](https://developer.apple.com/documentation/usernotifications/unusernotificationcenter/removependingnotificationrequests(withidentifiers:))

# removePendingNotificationRequests(withIdentifiers:) (Swift)

**Framework:** User Notifications  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Removes your app’s local notifications that are pending and match the specified identifiers.

## Declaration

```swift
func removePendingNotificationRequests(withIdentifiers identifiers: [String])
```

## Parameters

- `identifiers`: An array of [NSString](../../foundation/nsstring.md) objects, each of which contains the [identifier](../unnotificationrequest/identifier.md) of an active [UNNotificationRequest](../unnotificationrequest.md) object. If the identifier belongs to a non repeating request, and the trigger condition for that request has already been met, this method ignores the identifier.

<a id="Discussion"></a>

## Discussion

This method executes asynchronously, removing the pending notification requests on a secondary thread.

```swift
let center = UNUserNotificationCenter.current()
center.removePendingNotificationRequests(withIdentifiers: ["com.example.mynotification"])
```

## See Also

### Scheduling notifications

- [add(\_:withCompletionHandler:)](add%28__withcompletionhandler_%29.md): Schedules the delivery of a local notification.
- [getPendingNotificationRequests(completionHandler:)](getpendingnotificationrequests%28completionhandler_%29.md): Fetches all of your app’s local notifications that are pending delivery.
- [removeAllPendingNotificationRequests()](removeallpendingnotificationrequests%28%29.md): Removes all of your app’s pending local notifications.

# removePendingNotificationRequestsWithIdentifiers: (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Removes your app’s local notifications that are pending and match the specified identifiers.

## Declaration

```objectivec
- (void) removePendingNotificationRequestsWithIdentifiers:(NSArray<NSString *> *) identifiers;
```

## Parameters

- `identifiers`: An array of [NSString](../../foundation/nsstring.md) objects, each of which contains the [identifier](../unnotificationrequest/identifier.md) of an active [UNNotificationRequest](../unnotificationrequest.md) object. If the identifier belongs to a non repeating request, and the trigger condition for that request has already been met, this method ignores the identifier.

<a id="Discussion"></a>

## Discussion

This method executes asynchronously, removing the pending notification requests on a secondary thread.

```swift
let center = UNUserNotificationCenter.current()
center.removePendingNotificationRequests(withIdentifiers: ["com.example.mynotification"])
```

## See Also

### Scheduling notifications

- [addNotificationRequest:withCompletionHandler:](add%28__withcompletionhandler_%29.md): Schedules the delivery of a local notification.
- [getPendingNotificationRequestsWithCompletionHandler:](getpendingnotificationrequests%28completionhandler_%29.md): Fetches all of your app’s local notifications that are pending delivery.
- [removeAllPendingNotificationRequests](removeallpendingnotificationrequests%28%29.md): Removes all of your app’s pending local notifications.
