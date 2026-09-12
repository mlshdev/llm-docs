> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cknotification/subscriptionid-16ygj](https://developer.apple.com/documentation/cloudkit/cknotification/subscriptionid-16ygj)

# subscriptionID

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS · watchOS 3.0+ · Swift 4.2+

The ID of the subscription that triggers the notification.

## Declaration

```swift
var subscriptionID: CKSubscription.ID? { get }
```

## See Also

### Accessing the Notification Info

- [alertBody](alertbody.md): Deprecated. The notification’s alert body.
- [alertLocalizationKey](alertlocalizationkey.md): Deprecated. The key that identifies the localized text for the alert body.
- [alertLocalizationArgs](alertlocalizationargs.md): Deprecated. The fields for building a notification’s alert.
- [alertActionLocalizationKey](alertactionlocalizationkey.md): Deprecated. The key that identifies the localized string for the notification’s action.
- [alertLaunchImage](alertlaunchimage.md): Deprecated. The filename of an image to use as a launch image.
- [soundName](soundname.md): Deprecated. The name of the sound file to play when a notification arrives.
- [badge](badge.md): Deprecated. The value that the app icon’s badge displays.
- [category](category.md): Deprecated. The name of the action group that corresponds to this notification.
- [subscriptionOwnerUserRecordID](subscriptionowneruserrecordid.md): The ID of the user record that creates the subscription that generates the push notification.
- [title](title.md): Deprecated. The notification’s title.
- [titleLocalizationKey](titlelocalizationkey.md): Deprecated. The key that identifies the localized string for the notification’s title.
- [titleLocalizationArgs](titlelocalizationargs.md): Deprecated. The fields for building a notification’s title.
- [subtitle](subtitle.md): Deprecated. The notification’s subtitle.
- [subtitleLocalizationKey](subtitlelocalizationkey.md): Deprecated. The key that identifies the localized string for the notification’s subtitle.
- [subtitleLocalizationArgs](subtitlelocalizationargs.md): Deprecated. The fields for building a notification’s subtitle.
