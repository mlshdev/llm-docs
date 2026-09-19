> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usernotifications/unnotificationrequest/content

# content (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The content associated with the notification.

## Declaration

```swift
@NSCopying var content: UNNotificationContent { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to access the contents of the notification.

## See Also

### Getting the Request Details

- [identifier](identifier.md): The unique identifier for this notification request.
- [trigger](trigger.md): The conditions that trigger the delivery of the notification.

# content (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The content associated with the notification.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) UNNotificationContent * content;
```

```objectivec
@property (atomic, copy, readonly) UNNotificationContent * content;
```

<a id="Discussion"></a>

## Discussion

Use this property to access the contents of the notification.

## See Also

### Getting the Request Details

- [identifier](identifier.md): The unique identifier for this notification request.
- [trigger](trigger.md): The conditions that trigger the delivery of the notification.
