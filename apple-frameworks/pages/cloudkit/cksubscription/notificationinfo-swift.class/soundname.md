> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksubscription/notificationinfo-swift.class/soundname](https://developer.apple.com/documentation/cloudkit/cksubscription/notificationinfo-swift.class/soundname)

# soundName (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

The filename of the sound file to play when a notification arrives.

## Declaration

```swift
var soundName: String? { get set }
```

<a id="discussion"></a>

## Discussion

If you specify a value, the system uses it to locate a sound file in the app’s bundle. The sound plays when the system receives a push notification. If the system can’t find the specified file, or if you use the string `default`, the system plays the default sound.

## See Also

### Accessing the Notification Alert

- [alertBody](alertbody.md): The text for the notification’s alert.
- [alertLocalizationKey](alertlocalizationkey.md): The key that identifies the localized string for the notification’s alert.
- [alertLocalizationArgs](alertlocalizationargs.md): The fields for building a notification’s alert.
- [alertActionLocalizationKey](alertactionlocalizationkey.md): The key that identifies the localized string for the notification’s action.
- [alertLaunchImage](alertlaunchimage.md): The filename of an image to use as a launch image.

# soundName (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

The filename of the sound file to play when a notification arrives.

## Declaration

```objectivec
@property (copy, nullable) NSString * soundName;
```

<a id="discussion"></a>

## Discussion

If you specify a value, the system uses it to locate a sound file in the app’s bundle. The sound plays when the system receives a push notification. If the system can’t find the specified file, or if you use the string `default`, the system plays the default sound.

## See Also

### Accessing the Notification Alert

- [alertBody](alertbody.md): The text for the notification’s alert.
- [alertLocalizationKey](alertlocalizationkey.md): The key that identifies the localized string for the notification’s alert.
- [alertLocalizationArgs](../../cknotificationinfo/alertlocalizationargs.md): The fields for building a notification’s alert.
- [alertActionLocalizationKey](alertactionlocalizationkey.md): The key that identifies the localized string for the notification’s action.
- [alertLaunchImage](alertlaunchimage.md): The filename of an image to use as a launch image.
