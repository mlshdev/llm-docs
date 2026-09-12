> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationrequest/init(identifier:content:trigger:)](https://developer.apple.com/documentation/usernotifications/unnotificationrequest/init(identifier:content:trigger:))

# init(identifier:content:trigger:) (Swift)

**Framework:** User Notifications  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a notification request object that you use to schedule a notification.

## Declaration

```swift
convenience init(identifier: String, content: UNNotificationContent, trigger: UNNotificationTrigger?)
```

## Parameters

- `identifier`: An identifier for the request; this parameter must not be `nil`. You can use this identifier to cancel the request if it’s still pending (see the [removePendingNotificationRequests(withIdentifiers:)](../unusernotificationcenter/removependingnotificationrequests%28withidentifiers_%29.md) method).
- `content`: The content of the notification. This parameter must not be `nil`.
- `trigger`: The condition that causes the system to deliver the notification. Specify `nil` to deliver the notification right away.

<a id="return-value"></a>

## Return Value

A new notification request object.

<a id="Discussion"></a>

## Discussion

Use this method when you want to schedule the delivery of a local notification. This method creates the request object that you subsequently pass to the [add(\_:withCompletionHandler:)](../unusernotificationcenter/add%28__withcompletionhandler_%29.md) method.

The system uses the `identifier` parameter to determine how to handle the request:

- **If you provide a unique identifier,** the system creates a new notification.
- **If the identifier matches a previously delivered notification,** the system alerts the user again, replaces the old notification with the new one, and places the new notification at the top of the list.
- **If the identifier matches a pending request,** the new request replaces the pending request.

# requestWithIdentifier:content:trigger: (Objective-C)

**Framework:** User Notifications  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a notification request object that you use to schedule a notification.

## Declaration

```objectivec
+ (instancetype) requestWithIdentifier:(NSString *) identifier content:(UNNotificationContent *) content trigger:(UNNotificationTrigger *) trigger;
```

## Parameters

- `identifier`: An identifier for the request; this parameter must not be `nil`. You can use this identifier to cancel the request if it’s still pending (see the [removePendingNotificationRequestsWithIdentifiers:](../unusernotificationcenter/removependingnotificationrequests%28withidentifiers_%29.md) method).
- `content`: The content of the notification. This parameter must not be `nil`.
- `trigger`: The condition that causes the system to deliver the notification. Specify `nil` to deliver the notification right away.

<a id="return-value"></a>

## Return Value

A new notification request object.

<a id="Discussion"></a>

## Discussion

Use this method when you want to schedule the delivery of a local notification. This method creates the request object that you subsequently pass to the [addNotificationRequest:withCompletionHandler:](../unusernotificationcenter/add%28__withcompletionhandler_%29.md) method.

The system uses the `identifier` parameter to determine how to handle the request:

- **If you provide a unique identifier,** the system creates a new notification.
- **If the identifier matches a previously delivered notification,** the system alerts the user again, replaces the old notification with the new one, and places the new notification at the top of the list.
- **If the identifier matches a pending request,** the new request replaces the pending request.
