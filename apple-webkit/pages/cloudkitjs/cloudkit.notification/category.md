> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.notification/category](https://developer.apple.com/documentation/cloudkitjs/cloudkit.notification/category)

# category

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

Name of the action group corresponding to this notification.

## Declaration

```
readonly attribute String category;
```

<a id="Discussion"></a>

## Discussion

Categories of actions allow you to present custom actions to the user on your push notifications. For details, see [UIUserNotificationCategory](https://developer.apple.com/documentation/uikit/uiusernotificationcategory).

## See Also

### Presenting Notifications

- [alertActionLocalizationKey](alertactionlocalizationkey.md): A key to get a localized right button title that appears in the alert dialog.
- [alertBody](alertbody.md): The text of the alert message.
- [alertLaunchImage](alertlaunchimage.md): The filename of an image file in the app bundle used as a launch image.
- [alertLocalizationArgs](alertlocalizationargs.md): An array of strings that appear as variables if [alertLocalizationKey](alertlocalizationkey.md) is a format specifier.
- [alertLocalizationKey](alertlocalizationkey.md): A key to a localized alert message.
- [badge](badge.md): The badge number to display.
- [soundName](soundname.md): The name of a sound file in the app bundle to play as an alert.
