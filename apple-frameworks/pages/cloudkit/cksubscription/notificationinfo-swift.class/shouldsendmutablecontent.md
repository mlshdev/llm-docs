> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksubscription/notificationinfo-swift.class/shouldsendmutablecontent](https://developer.apple.com/documentation/cloudkit/cksubscription/notificationinfo-swift.class/shouldsendmutablecontent)

# shouldSendMutableContent (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A Boolean value that indicates whether the push notification sets the mutable content flag.

## Declaration

```swift
var shouldSendMutableContent: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true), the server includes the `mutable-content` flag with a value of `1` in the push notification’s payload. When the value is `1`, the system passes the notification to your app extension for modification before delivery.

See [Generating a remote notification](../../../usernotifications/generating-a-remote-notification.md) for more information about the `mutable-content` flag, and [Modifying content in newly delivered notifications](../../../usernotifications/modifying-content-in-newly-delivered-notifications.md) for information about how to modify push notification content in your app extension prior to delivery.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing the Notification Info

- [shouldSendContentAvailable](shouldsendcontentavailable.md): A Boolean value that indicates whether the push notification includes the content available flag.

# shouldSendMutableContent (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the push notification sets the mutable content flag.

## Declaration

```objectivec
@property (assign) BOOL shouldSendMutableContent;
```

<a id="discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true), the server includes the `mutable-content` flag with a value of `1` in the push notification’s payload. When the value is `1`, the system passes the notification to your app extension for modification before delivery.

See [Generating a remote notification](../../../usernotifications/generating-a-remote-notification.md) for more information about the `mutable-content` flag, and [Modifying content in newly delivered notifications](../../../usernotifications/modifying-content-in-newly-delivered-notifications.md) for information about how to modify push notification content in your app extension prior to delivery.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing the Notification Info

- [shouldSendContentAvailable](shouldsendcontentavailable.md): A Boolean value that indicates whether the push notification includes the content available flag.
