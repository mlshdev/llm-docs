> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationrequest/identifier](https://developer.apple.com/documentation/usernotifications/unnotificationrequest/identifier)

# identifier (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The unique identifier for this notification request.

## Declaration

```swift
var identifier: String { get }
```

<a id="Discussion"></a>

## Discussion

Use this string to identify notifications in your app. For example, you can pass this string to the [removePendingNotificationRequests(withIdentifiers:)](../unusernotificationcenter/removependingnotificationrequests%28withidentifiers_%29.md) method to cancel a previously scheduled notification.

If you use the same identifier when scheduling a new notification, the system removes the previously scheduled notification with that identifier and replaces it with the new one.

For local notifications, the system sets this property to the value passed to the request’s initializer (see the [init(identifier:content:trigger:)](init%28identifier_content_trigger_%29.md) method). For remote notifications, the system sets this property to the value of the `apns-collapse-id` key that you specified in the APNs request header when generating the remote notification. If your app doesn’t set a value, the system automatically assigns an identifier.

## See Also

### Getting the Request Details

- [content](content.md): The content associated with the notification.
- [trigger](trigger.md): The conditions that trigger the delivery of the notification.

# identifier (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The unique identifier for this notification request.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * identifier;
```

```objectivec
@property (atomic, copy, readonly) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

Use this string to identify notifications in your app. For example, you can pass this string to the [removePendingNotificationRequestsWithIdentifiers:](../unusernotificationcenter/removependingnotificationrequests%28withidentifiers_%29.md) method to cancel a previously scheduled notification.

If you use the same identifier when scheduling a new notification, the system removes the previously scheduled notification with that identifier and replaces it with the new one.

For local notifications, the system sets this property to the value passed to the request’s initializer (see the [requestWithIdentifier:content:trigger:](init%28identifier_content_trigger_%29.md) method). For remote notifications, the system sets this property to the value of the `apns-collapse-id` key that you specified in the APNs request header when generating the remote notification. If your app doesn’t set a value, the system automatically assigns an identifier.

## See Also

### Getting the Request Details

- [content](content.md): The content associated with the notification.
- [trigger](trigger.md): The conditions that trigger the delivery of the notification.
