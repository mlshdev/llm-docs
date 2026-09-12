> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationcontent/userinfo](https://developer.apple.com/documentation/usernotifications/unnotificationcontent/userinfo)

# userInfo (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The custom data to associate with the notification.

## Declaration

```swift
var userInfo: [AnyHashable : Any] { get }
```

## Mentioned In

- [Declaring your actionable notification types](../declaring-your-actionable-notification-types.md)
- [Generating a remote notification](../generating-a-remote-notification.md)

<a id="Discussion"></a>

## Discussion

For remote notifications, this property contains the entire notification payload. For local notifications, you configure the property directly before scheduling the notification.

The keys in this dictionary must be property-list types—that’s, they must be types that can be serialized into the property-list format. For information about property-list types, see [Property List Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/Introduction/Introduction.html#//apple_ref/doc/uid/10000048i).

## See Also

### Accessing supplementary content

- [attachments](attachments.md): The visual and audio attachments to display alongside the notification’s main content.

# userInfo (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The custom data to associate with the notification.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSDictionary * userInfo;
```

```objectivec
@property (atomic, copy, readonly) NSDictionary * userInfo;
```

## Mentioned In

- [Declaring your actionable notification types](../declaring-your-actionable-notification-types.md)
- [Generating a remote notification](../generating-a-remote-notification.md)

<a id="Discussion"></a>

## Discussion

For remote notifications, this property contains the entire notification payload. For local notifications, you configure the property directly before scheduling the notification.

The keys in this dictionary must be property-list types—that’s, they must be types that can be serialized into the property-list format. For information about property-list types, see [Property List Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/Introduction/Introduction.html#//apple_ref/doc/uid/10000048i).

## See Also

### Accessing supplementary content

- [attachments](attachments.md): The visual and audio attachments to display alongside the notification’s main content.
