> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksubscription/notificationinfo-swift.class/alertbody](https://developer.apple.com/documentation/cloudkit/cksubscription/notificationinfo-swift.class/alertbody)

# alertBody (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

The text for the notification’s alert.

## Declaration

```swift
var alertBody: String? { get set }
```

<a id="discussion"></a>

## Discussion

Set this property’s value to have the system display the specified string when it receives the corresponding push notification. If you localize your app’s content, use the [alertLocalizationKey](alertlocalizationkey.md) property instead.

## See Also

### Accessing the Notification Alert

- [alertLocalizationKey](alertlocalizationkey.md): The key that identifies the localized string for the notification’s alert.
- [alertLocalizationArgs](alertlocalizationargs.md): The fields for building a notification’s alert.
- [alertActionLocalizationKey](alertactionlocalizationkey.md): The key that identifies the localized string for the notification’s action.
- [alertLaunchImage](alertlaunchimage.md): The filename of an image to use as a launch image.
- [soundName](soundname.md): The filename of the sound file to play when a notification arrives.

# alertBody (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

The text for the notification’s alert.

## Declaration

```objectivec
@property (copy, nullable) NSString * alertBody;
```

<a id="discussion"></a>

## Discussion

Set this property’s value to have the system display the specified string when it receives the corresponding push notification. If you localize your app’s content, use the [alertLocalizationKey](alertlocalizationkey.md) property instead.

## See Also

### Accessing the Notification Alert

- [alertLocalizationKey](alertlocalizationkey.md): The key that identifies the localized string for the notification’s alert.
- [alertLocalizationArgs](../../cknotificationinfo/alertlocalizationargs.md): The fields for building a notification’s alert.
- [alertActionLocalizationKey](alertactionlocalizationkey.md): The key that identifies the localized string for the notification’s action.
- [alertLaunchImage](alertlaunchimage.md): The filename of an image to use as a launch image.
- [soundName](soundname.md): The filename of the sound file to play when a notification arrives.
