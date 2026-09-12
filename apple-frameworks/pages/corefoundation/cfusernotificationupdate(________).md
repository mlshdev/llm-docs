> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfusernotificationupdate(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfusernotificationupdate(_:_:_:_:))

# CFUserNotificationUpdate(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+

Updates a displayed user notification dialog with new user interface information.

## Declaration

```swift
func CFUserNotificationUpdate(_ userNotification: CFUserNotification!, _ timeout: CFTimeInterval, _ flags: CFOptionFlags, _ dictionary: CFDictionary!) -> Int32
```

## Parameters

- `userNotification`: The user notification to update.
- `timeout`: The new timeout value for the dialog.
- `flags`: A set of flags describing the type of notification to display. See [CFUserNotificationCreate(\_:\_:\_:\_:\_:)](cfusernotificationcreate%28__________%29.md) for details.
- `dictionary`: A description of the elements to display in the notification dialog. The possible keys are listed in [Dialog Description Keys](dialog-description-keys.md).

<a id="return-value"></a>

## Return Value

`0` if the cancel was successful; a non-`0` value otherwise.

## See Also

### CFUserNotification Miscellaneous Functions

- [CFUserNotificationCancel(\_:)](cfusernotificationcancel%28__%29.md): Cancels a user notification dialog.
- [CFUserNotificationCheckBoxChecked(\_:)](cfusernotificationcheckboxchecked%28__%29.md): Returns a flag used to set or test a checkbox’s state.
- [CFUserNotificationCreate(\_:\_:\_:\_:\_:)](cfusernotificationcreate%28__________%29.md): Creates a CFUserNotification object and displays its notification dialog on screen.
- [CFUserNotificationCreateRunLoopSource(\_:\_:\_:\_:)](cfusernotificationcreaterunloopsource%28________%29.md): Creates a run loop source for a user notification.
- [CFUserNotificationDisplayAlert(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cfusernotificationdisplayalert%28______________________%29.md): Displays a user notification dialog and waits for a user response.
- [CFUserNotificationDisplayNotice(\_:\_:\_:\_:\_:\_:\_:\_:)](cfusernotificationdisplaynotice%28________________%29.md): Displays a user notification dialog that does not need a user response.
- [CFUserNotificationGetResponseDictionary(\_:)](cfusernotificationgetresponsedictionary%28__%29.md): Returns the dictionary containing all the text field values from a dismissed notification dialog.
- [CFUserNotificationGetResponseValue(\_:\_:\_:)](cfusernotificationgetresponsevalue%28______%29.md): Extracts the values of the text fields from a dismissed notification dialog.
- [CFUserNotificationGetTypeID()](cfusernotificationgettypeid%28%29.md): Returns the type identifier for the `CFUserNotification` opaque type.
- [CFUserNotificationPopUpSelection(\_:)](cfusernotificationpopupselection%28__%29.md): Returns a flag used to set the selected element of a pop-up menu.
- [CFUserNotificationReceiveResponse(\_:\_:\_:)](cfusernotificationreceiveresponse%28______%29.md): Waits for the user to respond to a notification or for the notification to time out.
- [CFUserNotificationSecureTextField(\_:)](cfusernotificationsecuretextfield%28__%29.md): Returns a flag used to set the secure state of a text field.

# CFUserNotificationUpdate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+

Updates a displayed user notification dialog with new user interface information.

## Declaration

```objectivec
extern SInt32 CFUserNotificationUpdate(CFUserNotificationRef userNotification, CFTimeInterval timeout, CFOptionFlags flags, CFDictionaryRef dictionary);
```

## Parameters

- `userNotification`: The user notification to update.
- `timeout`: The new timeout value for the dialog.
- `flags`: A set of flags describing the type of notification to display. See [CFUserNotificationCreate](cfusernotificationcreate%28__________%29.md) for details.
- `dictionary`: A description of the elements to display in the notification dialog. The possible keys are listed in [Dialog Description Keys](dialog-description-keys.md).

<a id="return-value"></a>

## Return Value

`0` if the cancel was successful; a non-`0` value otherwise.

## See Also

### CFUserNotification Miscellaneous Functions

- [CFUserNotificationCancel](cfusernotificationcancel%28__%29.md): Cancels a user notification dialog.
- [CFUserNotificationCheckBoxChecked](cfusernotificationcheckboxchecked%28__%29.md): Returns a flag used to set or test a checkbox’s state.
- [CFUserNotificationCreate](cfusernotificationcreate%28__________%29.md): Creates a CFUserNotification object and displays its notification dialog on screen.
- [CFUserNotificationCreateRunLoopSource](cfusernotificationcreaterunloopsource%28________%29.md): Creates a run loop source for a user notification.
- [CFUserNotificationDisplayAlert](cfusernotificationdisplayalert%28______________________%29.md): Displays a user notification dialog and waits for a user response.
- [CFUserNotificationDisplayNotice](cfusernotificationdisplaynotice%28________________%29.md): Displays a user notification dialog that does not need a user response.
- [CFUserNotificationGetResponseDictionary](cfusernotificationgetresponsedictionary%28__%29.md): Returns the dictionary containing all the text field values from a dismissed notification dialog.
- [CFUserNotificationGetResponseValue](cfusernotificationgetresponsevalue%28______%29.md): Extracts the values of the text fields from a dismissed notification dialog.
- [CFUserNotificationGetTypeID](cfusernotificationgettypeid%28%29.md): Returns the type identifier for the `CFUserNotification` opaque type.
- [CFUserNotificationPopUpSelection](cfusernotificationpopupselection%28__%29.md): Returns a flag used to set the selected element of a pop-up menu.
- [CFUserNotificationReceiveResponse](cfusernotificationreceiveresponse%28______%29.md): Waits for the user to respond to a notification or for the notification to time out.
- [CFUserNotificationSecureTextField](cfusernotificationsecuretextfield%28__%29.md): Returns a flag used to set the secure state of a text field.
