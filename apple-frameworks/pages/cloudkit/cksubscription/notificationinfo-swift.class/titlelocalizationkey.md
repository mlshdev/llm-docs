> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksubscription/notificationinfo-swift.class/titlelocalizationkey](https://developer.apple.com/documentation/cloudkit/cksubscription/notificationinfo-swift.class/titlelocalizationkey)

# titleLocalizationKey (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 4.0+

The key that identifies the localized string for the notification’s title.

## Declaration

```swift
var titleLocalizationKey: String? { get set }
```

<a id="discussion"></a>

## Discussion

CloudKit uses this value to set the `title-loc-key` push notification property.

See [Generating a remote notification](../../../usernotifications/generating-a-remote-notification.md) for more details about push notification properties.

## See Also

### Accessing the Notification Title

- [title](title.md): The notification’s title.
- [titleLocalizationArgs](titlelocalizationargs.md): The fields for building a notification’s title.

# titleLocalizationKey (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 6.0+

The key that identifies the localized string for the notification’s title.

## Declaration

```objectivec
@property (copy, nullable) NSString * titleLocalizationKey;
```

<a id="discussion"></a>

## Discussion

CloudKit uses this value to set the `title-loc-key` push notification property.

See [Generating a remote notification](../../../usernotifications/generating-a-remote-notification.md) for more details about push notification properties.

## See Also

### Accessing the Notification Title

- [title](title.md): The notification’s title.
- [titleLocalizationArgs](../../cknotificationinfo/titlelocalizationargs.md): The fields for building a notification’s title.
