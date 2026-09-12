> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfusernotificationgetresponsevalue(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfusernotificationgetresponsevalue(_:_:_:))

# CFUserNotificationGetResponseValue(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+

Extracts the values of the text fields from a dismissed notification dialog.

## Declaration

```swift
func CFUserNotificationGetResponseValue(_ userNotification: CFUserNotification!, _ key: CFString!, _ idx: CFIndex) -> CFString!
```

## Parameters

- `userNotification`: The user notification to use.
- `key`: The dictionary key identifying the text fields to use. Currently, only [kCFUserNotificationTextFieldValuesKey](kcfusernotificationtextfieldvalueskey.md) is supported.
- `idx`: The index of the text field value to return. The index corresponds to the order in which text fields are listed in the [kCFUserNotificationTextFieldTitlesKey](kcfusernotificationtextfieldtitleskey.md) array in the user notification’s description dictionary.

<a id="return-value"></a>

## Return Value

The value of the text field identified by `key` and `idx`. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### CFUserNotification Miscellaneous Functions

- [CFUserNotificationCancel(\_:)](cfusernotificationcancel%28__%29.md): Cancels a user notification dialog.
- [CFUserNotificationCheckBoxChecked(\_:)](cfusernotificationcheckboxchecked%28__%29.md): Returns a flag used to set or test a checkbox’s state.
- [CFUserNotificationCreate(\_:\_:\_:\_:\_:)](cfusernotificationcreate%28__________%29.md): Creates a CFUserNotification object and displays its notification dialog on screen.
- [CFUserNotificationCreateRunLoopSource(\_:\_:\_:\_:)](cfusernotificationcreaterunloopsource%28________%29.md): Creates a run loop source for a user notification.
- [CFUserNotificationDisplayAlert(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cfusernotificationdisplayalert%28______________________%29.md): Displays a user notification dialog and waits for a user response.
- [CFUserNotificationDisplayNotice(\_:\_:\_:\_:\_:\_:\_:\_:)](cfusernotificationdisplaynotice%28________________%29.md): Displays a user notification dialog that does not need a user response.
- [CFUserNotificationGetResponseDictionary(\_:)](cfusernotificationgetresponsedictionary%28__%29.md): Returns the dictionary containing all the text field values from a dismissed notification dialog.
- [CFUserNotificationGetTypeID()](cfusernotificationgettypeid%28%29.md): Returns the type identifier for the `CFUserNotification` opaque type.
- [CFUserNotificationPopUpSelection(\_:)](cfusernotificationpopupselection%28__%29.md): Returns a flag used to set the selected element of a pop-up menu.
- [CFUserNotificationReceiveResponse(\_:\_:\_:)](cfusernotificationreceiveresponse%28______%29.md): Waits for the user to respond to a notification or for the notification to time out.
- [CFUserNotificationSecureTextField(\_:)](cfusernotificationsecuretextfield%28__%29.md): Returns a flag used to set the secure state of a text field.
- [CFUserNotificationUpdate(\_:\_:\_:\_:)](cfusernotificationupdate%28________%29.md): Updates a displayed user notification dialog with new user interface information.

# CFUserNotificationGetResponseValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+

Extracts the values of the text fields from a dismissed notification dialog.

## Declaration

```objectivec
extern CFStringRefCFUserNotificationGetResponseValue(CFUserNotificationRef userNotification, CFStringRef key, CFIndex idx);
```

## Parameters

- `userNotification`: The user notification to use.
- `key`: The dictionary key identifying the text fields to use. Currently, only [kCFUserNotificationTextFieldValuesKey](kcfusernotificationtextfieldvalueskey.md) is supported.
- `idx`: The index of the text field value to return. The index corresponds to the order in which text fields are listed in the [kCFUserNotificationTextFieldTitlesKey](kcfusernotificationtextfieldtitleskey.md) array in the user notification’s description dictionary.

<a id="return-value"></a>

## Return Value

The value of the text field identified by `key` and `idx`. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### CFUserNotification Miscellaneous Functions

- [CFUserNotificationCancel](cfusernotificationcancel%28__%29.md): Cancels a user notification dialog.
- [CFUserNotificationCheckBoxChecked](cfusernotificationcheckboxchecked%28__%29.md): Returns a flag used to set or test a checkbox’s state.
- [CFUserNotificationCreate](cfusernotificationcreate%28__________%29.md): Creates a CFUserNotification object and displays its notification dialog on screen.
- [CFUserNotificationCreateRunLoopSource](cfusernotificationcreaterunloopsource%28________%29.md): Creates a run loop source for a user notification.
- [CFUserNotificationDisplayAlert](cfusernotificationdisplayalert%28______________________%29.md): Displays a user notification dialog and waits for a user response.
- [CFUserNotificationDisplayNotice](cfusernotificationdisplaynotice%28________________%29.md): Displays a user notification dialog that does not need a user response.
- [CFUserNotificationGetResponseDictionary](cfusernotificationgetresponsedictionary%28__%29.md): Returns the dictionary containing all the text field values from a dismissed notification dialog.
- [CFUserNotificationGetTypeID](cfusernotificationgettypeid%28%29.md): Returns the type identifier for the `CFUserNotification` opaque type.
- [CFUserNotificationPopUpSelection](cfusernotificationpopupselection%28__%29.md): Returns a flag used to set the selected element of a pop-up menu.
- [CFUserNotificationReceiveResponse](cfusernotificationreceiveresponse%28______%29.md): Waits for the user to respond to a notification or for the notification to time out.
- [CFUserNotificationSecureTextField](cfusernotificationsecuretextfield%28__%29.md): Returns a flag used to set the secure state of a text field.
- [CFUserNotificationUpdate](cfusernotificationupdate%28________%29.md): Updates a displayed user notification dialog with new user interface information.
