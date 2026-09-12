> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unmutablenotificationcontent/userinfo](https://developer.apple.com/documentation/usernotifications/unmutablenotificationcontent/userinfo)

# userInfo (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The custom data to associate with the notification.

## Declaration

```swift
var userInfo: [AnyHashable : Any] { get set }
```

## Mentioned In

- [Declaring your actionable notification types](../declaring-your-actionable-notification-types.md)

<a id="Discussion"></a>

## Discussion

Use this property to associate custom information with the notification. The contents of the dictionary aren’t seen by the user, but are accessible to your app or to any notification-related app extensions.

The keys in this dictionary must be types that can be serialized into the property-list format. For information about property-list types, see [Property List Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/Introduction/Introduction.html#//apple_ref/doc/uid/10000048i).

## See Also

### Providing supplementary content

- [attachments](attachments.md): The visual and audio attachments to display alongside the notification’s main content.

# userInfo (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The custom data to associate with the notification.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSDictionary * userInfo;
```

```objectivec
@property (atomic, copy, readwrite) NSDictionary * userInfo;
```

## Mentioned In

- [Declaring your actionable notification types](../declaring-your-actionable-notification-types.md)

<a id="Discussion"></a>

## Discussion

Use this property to associate custom information with the notification. The contents of the dictionary aren’t seen by the user, but are accessible to your app or to any notification-related app extensions.

The keys in this dictionary must be types that can be serialized into the property-list format. For information about property-list types, see [Property List Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/Introduction/Introduction.html#//apple_ref/doc/uid/10000048i).

## See Also

### Providing supplementary content

- [attachments](attachments.md): The visual and audio attachments to display alongside the notification’s main content.
