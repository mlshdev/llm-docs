> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksubscription/notificationinfo-swift.class/alertactionlocalizationkey](https://developer.apple.com/documentation/cloudkit/cksubscription/notificationinfo-swift.class/alertactionlocalizationkey)

# alertActionLocalizationKey (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

The key that identifies the localized string for the notification’s action.

## Declaration

```swift
var alertActionLocalizationKey: String? { get set }
```

<a id="discussion"></a>

## Discussion

Set this property’s value to have the system use a localized string for the text of the notification’s button that opens your app. The system uses the key to find the matching string in your app’s `Localizable.string` file.

If this property’s value is `nil`, the system displays a single button to dismiss the alert.

For information about localizing string resources, see [Internationalization and Localization Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/Introduction/Introduction.html#//apple_ref/doc/uid/10000171i).

## See Also

### Accessing the Notification Alert

- [alertBody](alertbody.md): The text for the notification’s alert.
- [alertLocalizationKey](alertlocalizationkey.md): The key that identifies the localized string for the notification’s alert.
- [alertLocalizationArgs](alertlocalizationargs.md): The fields for building a notification’s alert.
- [alertLaunchImage](alertlaunchimage.md): The filename of an image to use as a launch image.
- [soundName](soundname.md): The filename of the sound file to play when a notification arrives.

# alertActionLocalizationKey (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

The key that identifies the localized string for the notification’s action.

## Declaration

```objectivec
@property (copy, nullable) NSString * alertActionLocalizationKey;
```

<a id="discussion"></a>

## Discussion

Set this property’s value to have the system use a localized string for the text of the notification’s button that opens your app. The system uses the key to find the matching string in your app’s `Localizable.string` file.

If this property’s value is `nil`, the system displays a single button to dismiss the alert.

For information about localizing string resources, see [Internationalization and Localization Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/Introduction/Introduction.html#//apple_ref/doc/uid/10000171i).

## See Also

### Accessing the Notification Alert

- [alertBody](alertbody.md): The text for the notification’s alert.
- [alertLocalizationKey](alertlocalizationkey.md): The key that identifies the localized string for the notification’s alert.
- [alertLocalizationArgs](../../cknotificationinfo/alertlocalizationargs.md): The fields for building a notification’s alert.
- [alertLaunchImage](alertlaunchimage.md): The filename of an image to use as a launch image.
- [soundName](soundname.md): The filename of the sound file to play when a notification arrives.
