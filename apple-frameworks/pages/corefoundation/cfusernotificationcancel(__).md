> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfusernotificationcancel(_:)](https://developer.apple.com/documentation/corefoundation/cfusernotificationcancel(_:))

# CFUserNotificationCancel(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+

Cancels a user notification dialog.

## Declaration

```swift
func CFUserNotificationCancel(_ userNotification: CFUserNotification!) -> Int32
```

## Parameters

- `userNotification`: The user notification to cancel.

<a id="return-value"></a>

## Return Value

`0` if the cancel was successful; a non-`0` value otherwise.

<a id="Discussion"></a>

## Discussion

You must cancel a user notification if you want to remove its dialog from the screen before the user dismisses it. It is not sufficient to just release the object.

## See Also

### CFUserNotification Miscellaneous Functions

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
- [CFUserNotificationUpdate(\_:\_:\_:\_:)](cfusernotificationupdate%28________%29.md): Updates a displayed user notification dialog with new user interface information.

# CFUserNotificationCancel (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+

Cancels a user notification dialog.

## Declaration

```objectivec
extern SInt32 CFUserNotificationCancel(CFUserNotificationRef userNotification);
```

## Parameters

- `userNotification`: The user notification to cancel.

<a id="return-value"></a>

## Return Value

`0` if the cancel was successful; a non-`0` value otherwise.

<a id="Discussion"></a>

## Discussion

You must cancel a user notification if you want to remove its dialog from the screen before the user dismisses it. It is not sufficient to just release the object.

## See Also

### CFUserNotification Miscellaneous Functions

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
- [CFUserNotificationUpdate](cfusernotificationupdate%28________%29.md): Updates a displayed user notification dialog with new user interface information.
