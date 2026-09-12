> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotificationsui/unnotificationcontentextension/didreceive(_:)](https://developer.apple.com/documentation/usernotificationsui/unnotificationcontentextension/didreceive(_:))

# didReceive(\_:) (Swift)

**Framework:** User Notifications UI  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 11.0+ · visionOS 1.0+

Delivers a new notification to your notification content app extension.

## Declaration

```swift
@MainActor func didReceive(_ notification: UNNotification)
```

## Parameters

- `notification`: The notification that arrived.

## Mentioned In

- [Customizing the Appearance of Notifications](../customizing-the-appearance-of-notifications.md)

<a id="discussion"></a>

## Discussion

In your implementation of this method, use the contents of `notification` to configure your view controller. This method may be called multiple times while your view controller is visible. Specifically, it is called again when a new notification arrives whose [threadIdentifier](../../usernotifications/unnotificationcontent/threadidentifier.md) value matches the thread identifier of the notification already being displayed. The method is called on the main thread of your notification content app extension.

If you want to accommodate new content in your interface, you can change the height of your view controller’s view. Change only the height; width values are ignored. You can then add subviews to fill the additional space with your content.

# didReceiveNotification: (Objective-C)

**Framework:** User Notifications UI  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Delivers a new notification to your notification content app extension.

## Declaration

```objectivec
- (void) didReceiveNotification:(UNNotification *) notification;
```

## Parameters

- `notification`: The notification that arrived.

## Mentioned In

- [Customizing the Appearance of Notifications](../customizing-the-appearance-of-notifications.md)

<a id="discussion"></a>

## Discussion

In your implementation of this method, use the contents of `notification` to configure your view controller. This method may be called multiple times while your view controller is visible. Specifically, it is called again when a new notification arrives whose [threadIdentifier](../../usernotifications/unnotificationcontent/threadidentifier.md) value matches the thread identifier of the notification already being displayed. The method is called on the main thread of your notification content app extension.

If you want to accommodate new content in your interface, you can change the height of your view controller’s view. Change only the height; width values are ignored. You can then add subviews to fill the additional space with your content.
