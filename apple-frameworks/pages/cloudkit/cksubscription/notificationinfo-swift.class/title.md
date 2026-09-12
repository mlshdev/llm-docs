> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksubscription/notificationinfo-swift.class/title](https://developer.apple.com/documentation/cloudkit/cksubscription/notificationinfo-swift.class/title)

# title (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 4.0+

The notification’s title.

## Declaration

```swift
var title: String? { get set }
```

<a id="discussion"></a>

## Discussion

CloudKit uses this value to set the `title` push notification property.

See [Generating a remote notification](../../../usernotifications/generating-a-remote-notification.md) for more detail about push notification properties.

## See Also

### Accessing the Notification Title

- [titleLocalizationKey](titlelocalizationkey.md): The key that identifies the localized string for the notification’s title.
- [titleLocalizationArgs](titlelocalizationargs.md): The fields for building a notification’s title.

# title (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 6.0+

The notification’s title.

## Declaration

```objectivec
@property (copy, nullable) NSString * title;
```

<a id="discussion"></a>

## Discussion

CloudKit uses this value to set the `title` push notification property.

See [Generating a remote notification](../../../usernotifications/generating-a-remote-notification.md) for more detail about push notification properties.

## See Also

### Accessing the Notification Title

- [titleLocalizationKey](titlelocalizationkey.md): The key that identifies the localized string for the notification’s title.
- [titleLocalizationArgs](../../cknotificationinfo/titlelocalizationargs.md): The fields for building a notification’s title.
