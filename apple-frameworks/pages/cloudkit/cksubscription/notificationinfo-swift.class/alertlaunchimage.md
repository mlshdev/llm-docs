> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksubscription/notificationinfo-swift.class/alertlaunchimage](https://developer.apple.com/documentation/cloudkit/cksubscription/notificationinfo-swift.class/alertlaunchimage)

# alertLaunchImage (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

The filename of an image to use as a launch image.

## Declaration

```swift
var alertLaunchImage: String? { get set }
```

<a id="discussion"></a>

## Discussion

If you specify a value, the system uses it to locate an image in the app’s bundle, and displays it as a launch image when the user launches the app after receiving a push notification.

## See Also

### Accessing the Notification Alert

- [alertBody](alertbody.md): The text for the notification’s alert.
- [alertLocalizationKey](alertlocalizationkey.md): The key that identifies the localized string for the notification’s alert.
- [alertLocalizationArgs](alertlocalizationargs.md): The fields for building a notification’s alert.
- [alertActionLocalizationKey](alertactionlocalizationkey.md): The key that identifies the localized string for the notification’s action.
- [soundName](soundname.md): The filename of the sound file to play when a notification arrives.

# alertLaunchImage (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

The filename of an image to use as a launch image.

## Declaration

```objectivec
@property (copy, nullable) NSString * alertLaunchImage;
```

<a id="discussion"></a>

## Discussion

If you specify a value, the system uses it to locate an image in the app’s bundle, and displays it as a launch image when the user launches the app after receiving a push notification.

## See Also

### Accessing the Notification Alert

- [alertBody](alertbody.md): The text for the notification’s alert.
- [alertLocalizationKey](alertlocalizationkey.md): The key that identifies the localized string for the notification’s alert.
- [alertLocalizationArgs](../../cknotificationinfo/alertlocalizationargs.md): The fields for building a notification’s alert.
- [alertActionLocalizationKey](alertactionlocalizationkey.md): The key that identifies the localized string for the notification’s action.
- [soundName](soundname.md): The filename of the sound file to play when a notification arrives.
