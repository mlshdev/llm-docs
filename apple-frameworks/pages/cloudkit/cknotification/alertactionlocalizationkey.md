> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cknotification/alertactionlocalizationkey](https://developer.apple.com/documentation/cloudkit/cknotification/alertactionlocalizationkey)

# alertActionLocalizationKey (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.10+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 10.0)

The key that identifies the localized string for the notification’s action.

> Interact with UI elements of a CloudKit-server-generated push message via UserNotifications.framework

## Declaration

```swift
var alertActionLocalizationKey: String? { get }
```

<a id="discussion"></a>

## Discussion

The system uses this property’s value to find the matching string in your app’s `Localizable.strings` file. It uses the string as the text of the button that opens your app, which the notification alert displays.

If this property’s value is `nil`, the system displays a single button to dismiss the alert.

## See Also

### Accessing the Notification Info

- [alertBody](alertbody.md): Deprecated. The notification’s alert body.
- [alertLocalizationKey](alertlocalizationkey.md): Deprecated. The key that identifies the localized text for the alert body.
- [alertLocalizationArgs](alertlocalizationargs.md): Deprecated. The fields for building a notification’s alert.
- [alertLaunchImage](alertlaunchimage.md): Deprecated. The filename of an image to use as a launch image.
- [soundName](soundname.md): Deprecated. The name of the sound file to play when a notification arrives.
- [badge](badge.md): Deprecated. The value that the app icon’s badge displays.
- [category](category.md): Deprecated. The name of the action group that corresponds to this notification.
- [subscriptionID](subscriptionid-16ygj.md): The ID of the subscription that triggers the notification.
- [subscriptionOwnerUserRecordID](subscriptionowneruserrecordid.md): The ID of the user record that creates the subscription that generates the push notification.
- [title](title.md): Deprecated. The notification’s title.
- [titleLocalizationKey](titlelocalizationkey.md): Deprecated. The key that identifies the localized string for the notification’s title.
- [titleLocalizationArgs](titlelocalizationargs.md): Deprecated. The fields for building a notification’s title.
- [subtitle](subtitle.md): Deprecated. The notification’s subtitle.
- [subtitleLocalizationKey](subtitlelocalizationkey.md): Deprecated. The key that identifies the localized string for the notification’s subtitle.
- [subtitleLocalizationArgs](subtitlelocalizationargs.md): Deprecated. The fields for building a notification’s subtitle.

# alertActionLocalizationKey (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.10+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 10.0)

The key that identifies the localized string for the notification’s action.

> Interact with UI elements of a CloudKit-server-generated push message via UserNotifications.framework

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * alertActionLocalizationKey;
```

<a id="discussion"></a>

## Discussion

The system uses this property’s value to find the matching string in your app’s `Localizable.strings` file. It uses the string as the text of the button that opens your app, which the notification alert displays.

If this property’s value is `nil`, the system displays a single button to dismiss the alert.

## See Also

### Accessing the Notification Info

- [alertBody](alertbody.md): Deprecated. The notification’s alert body.
- [alertLocalizationKey](alertlocalizationkey.md): Deprecated. The key that identifies the localized text for the alert body.
- [alertLocalizationArgs](alertlocalizationargs.md): Deprecated. The fields for building a notification’s alert.
- [alertLaunchImage](alertlaunchimage.md): Deprecated. The filename of an image to use as a launch image.
- [soundName](soundname.md): Deprecated. The name of the sound file to play when a notification arrives.
- [badge](badge.md): Deprecated. The value that the app icon’s badge displays.
- [category](category.md): Deprecated. The name of the action group that corresponds to this notification.
- [subscriptionID](subscriptionid-90zhj.md): The ID of the subscription that triggers the notification.
- [subscriptionOwnerUserRecordID](subscriptionowneruserrecordid.md): The ID of the user record that creates the subscription that generates the push notification.
- [title](title.md): Deprecated. The notification’s title.
- [titleLocalizationKey](titlelocalizationkey.md): Deprecated. The key that identifies the localized string for the notification’s title.
- [titleLocalizationArgs](titlelocalizationargs.md): Deprecated. The fields for building a notification’s title.
- [subtitle](subtitle.md): Deprecated. The notification’s subtitle.
- [subtitleLocalizationKey](subtitlelocalizationkey.md): Deprecated. The key that identifies the localized string for the notification’s subtitle.
- [subtitleLocalizationArgs](subtitlelocalizationargs.md): Deprecated. The fields for building a notification’s subtitle.
