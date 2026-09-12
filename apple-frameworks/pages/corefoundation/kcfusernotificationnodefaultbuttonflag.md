> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/kcfusernotificationnodefaultbuttonflag](https://developer.apple.com/documentation/corefoundation/kcfusernotificationnodefaultbuttonflag)

# kCFUserNotificationNoDefaultButtonFlag (Swift)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

Displays the dialog without the default, alternate, or other buttons.

## Declaration

```swift
var kCFUserNotificationNoDefaultButtonFlag: CFOptionFlags { get }
```

<a id="Discussion"></a>

## Discussion

The dialog remains on screen until it times out or you cancel it with [CFUserNotificationCancel(\_:)](cfusernotificationcancel%28__%29.md). If you provide a title for the default button in the user notification’s description dictionary, this flag is ignored and buttons show up normally.

## See Also

### Constants

- [kCFUserNotificationUseRadioButtonsFlag](kcfusernotificationuseradiobuttonsflag.md): Creates a group of radio buttons instead of checkboxes for the elements in the [kCFUserNotificationCheckBoxTitlesKey](kcfusernotificationcheckboxtitleskey.md) array in the user notification’s description dictionary.

# kCFUserNotificationNoDefaultButtonFlag (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

Displays the dialog without the default, alternate, or other buttons.

## Declaration

```objectivec
kCFUserNotificationNoDefaultButtonFlag
```

<a id="Discussion"></a>

## Discussion

The dialog remains on screen until it times out or you cancel it with [CFUserNotificationCancel](cfusernotificationcancel%28__%29.md). If you provide a title for the default button in the user notification’s description dictionary, this flag is ignored and buttons show up normally.

## See Also

### Constants

- [kCFUserNotificationUseRadioButtonsFlag](kcfusernotificationuseradiobuttonsflag.md): Creates a group of radio buttons instead of checkboxes for the elements in the [kCFUserNotificationCheckBoxTitlesKey](kcfusernotificationcheckboxtitleskey.md) array in the user notification’s description dictionary.
