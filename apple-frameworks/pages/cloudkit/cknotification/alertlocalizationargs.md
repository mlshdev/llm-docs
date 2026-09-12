> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cknotification/alertlocalizationargs](https://developer.apple.com/documentation/cloudkit/cknotification/alertlocalizationargs)

# alertLocalizationArgs (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.10+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 10.0)

The fields for building a notification’s alert.

> Interact with UI elements of a CloudKit-server-generated push message via UserNotifications.framework

## Declaration

```swift
var alertLocalizationArgs: [String]? { get }
```

<a id="discussion"></a>

## Discussion

This property is an array of field names that CloudKit uses to extract the corresponding values from the record that triggers the push notification. The values are strings, numbers, or dates. CloudKit may truncate strings with a length greater than 100 characters when it adds them to a notification’s payload.

If you use `%@` for your substitution variables, CloudKit replaces those variables by traversing the array in order. If you use variables of the form `%n$@`, where `n` is an integer, `n` represents the index (starting at 1) of the item in the array to use. So, the first item in the array replaces the variable `%1$@`, the second item replaces the variable `%2$@`, and so on. You can use indexed substitution variables to change the order of items in the resulting string, which might be necessary when you localize your app’s content.

## See Also

### Accessing the Notification Info

- [alertBody](alertbody.md): Deprecated. The notification’s alert body.
- [alertLocalizationKey](alertlocalizationkey.md): Deprecated. The key that identifies the localized text for the alert body.
- [alertActionLocalizationKey](alertactionlocalizationkey.md): Deprecated. The key that identifies the localized string for the notification’s action.
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

# alertLocalizationArgs (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.10+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 10.0)

The fields for building a notification’s alert.

> Interact with UI elements of a CloudKit-server-generated push message via UserNotifications.framework

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<NSString *> * alertLocalizationArgs;
```

<a id="discussion"></a>

## Discussion

This property is an array of field names that CloudKit uses to extract the corresponding values from the record that triggers the push notification. The values are strings, numbers, or dates. CloudKit may truncate strings with a length greater than 100 characters when it adds them to a notification’s payload.

If you use `%@` for your substitution variables, CloudKit replaces those variables by traversing the array in order. If you use variables of the form `%n$@`, where `n` is an integer, `n` represents the index (starting at 1) of the item in the array to use. So, the first item in the array replaces the variable `%1$@`, the second item replaces the variable `%2$@`, and so on. You can use indexed substitution variables to change the order of items in the resulting string, which might be necessary when you localize your app’s content.

## See Also

### Accessing the Notification Info

- [alertBody](alertbody.md): Deprecated. The notification’s alert body.
- [alertLocalizationKey](alertlocalizationkey.md): Deprecated. The key that identifies the localized text for the alert body.
- [alertActionLocalizationKey](alertactionlocalizationkey.md): Deprecated. The key that identifies the localized string for the notification’s action.
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
