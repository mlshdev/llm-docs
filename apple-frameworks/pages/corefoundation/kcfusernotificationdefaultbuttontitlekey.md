> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/kcfusernotificationdefaultbuttontitlekey](https://developer.apple.com/documentation/corefoundation/kcfusernotificationdefaultbuttontitlekey)

# kCFUserNotificationDefaultButtonTitleKey (Swift)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

The title of the default button.

## Declaration

```swift
let kCFUserNotificationDefaultButtonTitleKey: CFString!
```

<a id="Discussion"></a>

## Discussion

If absent and the dialog is not being created with the [kCFUserNotificationNoDefaultButtonFlag](kcfusernotificationnodefaultbuttonflag.md) flag, a default button title of `OK` is used.

## See Also

### Constants

- [kCFUserNotificationIconURLKey](kcfusernotificationiconurlkey.md): A file URL pointing to the icon to display in the dialog.
- [kCFUserNotificationSoundURLKey](kcfusernotificationsoundurlkey.md): A file URL pointing to a sound that will be played when the alert appears.
- [kCFUserNotificationLocalizationURLKey](kcfusernotificationlocalizationurlkey.md): A file URL pointing to a bundle that contains localized versions of the strings displayed in the dialog.
- [kCFUserNotificationAlertHeaderKey](kcfusernotificationalertheaderkey.md): The title of the notification dialog.
- [kCFUserNotificationAlertMessageKey](kcfusernotificationalertmessagekey.md): The message string to display in the dialog.
- [kCFUserNotificationAlternateButtonTitleKey](kcfusernotificationalternatebuttontitlekey.md): The title of an optional alternate button.
- [kCFUserNotificationOtherButtonTitleKey](kcfusernotificationotherbuttontitlekey.md): The title of an optional third button.
- [kCFUserNotificationProgressIndicatorValueKey](kcfusernotificationprogressindicatorvaluekey.md): A value to indicate the progress of an operation.
- [kCFUserNotificationPopUpTitlesKey](kcfusernotificationpopuptitleskey.md): The list of strings to display in a pop-up menu.
- [kCFUserNotificationTextFieldTitlesKey](kcfusernotificationtextfieldtitleskey.md): The list of titles for all the text fields to display.
- [kCFUserNotificationCheckBoxTitlesKey](kcfusernotificationcheckboxtitleskey.md): The list of titles for all the checkboxes or radio buttons to display.
- [kCFUserNotificationTextFieldValuesKey](kcfusernotificationtextfieldvalueskey.md): The list of values to put into the text fields. If only one text field is to be displayed, you can pass its value string directly without putting it into an array first.
- [kCFUserNotificationPopUpSelectionKey](kcfusernotificationpopupselectionkey.md): The item that was selected from a pop-up menu.

# kCFUserNotificationDefaultButtonTitleKey (Objective-C)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

The title of the default button.

## Declaration

```objectivec
extern CFStringRef const kCFUserNotificationDefaultButtonTitleKey;
```

<a id="Discussion"></a>

## Discussion

If absent and the dialog is not being created with the [kCFUserNotificationNoDefaultButtonFlag](kcfusernotificationnodefaultbuttonflag.md) flag, a default button title of `OK` is used.

## See Also

### Constants

- [kCFUserNotificationIconURLKey](kcfusernotificationiconurlkey.md): A file URL pointing to the icon to display in the dialog.
- [kCFUserNotificationSoundURLKey](kcfusernotificationsoundurlkey.md): A file URL pointing to a sound that will be played when the alert appears.
- [kCFUserNotificationLocalizationURLKey](kcfusernotificationlocalizationurlkey.md): A file URL pointing to a bundle that contains localized versions of the strings displayed in the dialog.
- [kCFUserNotificationAlertHeaderKey](kcfusernotificationalertheaderkey.md): The title of the notification dialog.
- [kCFUserNotificationAlertMessageKey](kcfusernotificationalertmessagekey.md): The message string to display in the dialog.
- [kCFUserNotificationAlternateButtonTitleKey](kcfusernotificationalternatebuttontitlekey.md): The title of an optional alternate button.
- [kCFUserNotificationOtherButtonTitleKey](kcfusernotificationotherbuttontitlekey.md): The title of an optional third button.
- [kCFUserNotificationProgressIndicatorValueKey](kcfusernotificationprogressindicatorvaluekey.md): A value to indicate the progress of an operation.
- [kCFUserNotificationPopUpTitlesKey](kcfusernotificationpopuptitleskey.md): The list of strings to display in a pop-up menu.
- [kCFUserNotificationTextFieldTitlesKey](kcfusernotificationtextfieldtitleskey.md): The list of titles for all the text fields to display.
- [kCFUserNotificationCheckBoxTitlesKey](kcfusernotificationcheckboxtitleskey.md): The list of titles for all the checkboxes or radio buttons to display.
- [kCFUserNotificationTextFieldValuesKey](kcfusernotificationtextfieldvalueskey.md): The list of values to put into the text fields. If only one text field is to be displayed, you can pass its value string directly without putting it into an array first.
- [kCFUserNotificationPopUpSelectionKey](kcfusernotificationpopupselectionkey.md): The item that was selected from a pop-up menu.
