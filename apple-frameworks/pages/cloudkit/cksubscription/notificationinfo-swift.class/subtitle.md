> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksubscription/notificationinfo-swift.class/subtitle](https://developer.apple.com/documentation/cloudkit/cksubscription/notificationinfo-swift.class/subtitle)

# subtitle (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 4.0+

The notification’s subtitle.

## Declaration

```swift
var subtitle: String? { get set }
```

<a id="discussion"></a>

## Discussion

CloudKit uses this value to set the `subtitle` push notification property. If you set [subtitleLocalizationKey](subtitlelocalizationkey.md), CloudKit ignores this value.

See [Generating a remote notification](../../../usernotifications/generating-a-remote-notification.md) for more details about push notification properties.

## See Also

### Accessing the Notification Subtitle

- [subtitleLocalizationKey](subtitlelocalizationkey.md): The key that identifies the localized string for the notification’s subtitle.
- [subtitleLocalizationArgs](subtitlelocalizationargs.md): The fields for building a notification’s subtitle.

# subtitle (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 6.0+

The notification’s subtitle.

## Declaration

```objectivec
@property (copy, nullable) NSString * subtitle;
```

<a id="discussion"></a>

## Discussion

CloudKit uses this value to set the `subtitle` push notification property. If you set [subtitleLocalizationKey](subtitlelocalizationkey.md), CloudKit ignores this value.

See [Generating a remote notification](../../../usernotifications/generating-a-remote-notification.md) for more details about push notification properties.

## See Also

### Accessing the Notification Subtitle

- [subtitleLocalizationKey](subtitlelocalizationkey.md): The key that identifies the localized string for the notification’s subtitle.
- [subtitleLocalizationArgs](../../cknotificationinfo/subtitlelocalizationargs.md): The fields for building a notification’s subtitle.
