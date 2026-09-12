> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfusernotificationreceiveresponse(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfusernotificationreceiveresponse(_:_:_:))

# CFUserNotificationReceiveResponse(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+

Waits for the user to respond to a notification or for the notification to time out.

## Declaration

```swift
func CFUserNotificationReceiveResponse(_ userNotification: CFUserNotification!, _ timeout: CFTimeInterval, _ responseFlags: UnsafeMutablePointer<CFOptionFlags>!) -> Int32
```

## Parameters

- `userNotification`: The user notification to use.
- `timeout`: The amount of time to wait for the user to respond to `userNotification` or for the notification to time out. If neither happens before `timeout` passes, this function returns a non-`0` value. If `timeout` is `0`, the function blocks until the user notification is dismissed.
- `responseFlags`: On return, contains flags identifying how the notification was dismissed, the state of any checkboxes, and the selected element of the pop-up menu. Bits 0-1 of the value hold an identifier for the button pressed by the user (see [Response Codes](1534504-response-codes.md)). Extract the identifier by performing a bitwise-AND operation with `0x3`. Bits 8-15 of `responseFlags` hold the state of up to 8 checkboxes or radio buttons, if present. Extract the flags by performing bitwise-AND operations with the return value of [CFUserNotificationCheckBoxChecked(\_:)](cfusernotificationcheckboxchecked%28__%29.md). Bits 24-31 hold the index number of the element selected in a pop-up menu, if present. Extract the index by performing a 24-bit right shift: `responseFlags >> 24`.

<a id="return-value"></a>

## Return Value

`0` if the call successfully received a response; a non-`0` value otherwise.

<a id="Discussion"></a>

## Discussion

Use this function to poll a user notification for a user response. You can call it any number of times on the same user notification.

To avoid polling and blocking your thread’s execution, you can create a run loop source for the user notification with [CFUserNotificationCreateRunLoopSource(\_:\_:\_:\_:)](cfusernotificationcreaterunloopsource%28________%29.md). You will then receive a callback when the dialog is dismissed.

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
- [CFUserNotificationSecureTextField(\_:)](cfusernotificationsecuretextfield%28__%29.md): Returns a flag used to set the secure state of a text field.
- [CFUserNotificationUpdate(\_:\_:\_:\_:)](cfusernotificationupdate%28________%29.md): Updates a displayed user notification dialog with new user interface information.

# CFUserNotificationReceiveResponse (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+

Waits for the user to respond to a notification or for the notification to time out.

## Declaration

```objectivec
extern SInt32 CFUserNotificationReceiveResponse(CFUserNotificationRef userNotification, CFTimeInterval timeout, CFOptionFlags *responseFlags);
```

## Parameters

- `userNotification`: The user notification to use.
- `timeout`: The amount of time to wait for the user to respond to `userNotification` or for the notification to time out. If neither happens before `timeout` passes, this function returns a non-`0` value. If `timeout` is `0`, the function blocks until the user notification is dismissed.
- `responseFlags`: On return, contains flags identifying how the notification was dismissed, the state of any checkboxes, and the selected element of the pop-up menu. Bits 0-1 of the value hold an identifier for the button pressed by the user (see [Response Codes](1534504-response-codes.md)). Extract the identifier by performing a bitwise-AND operation with `0x3`. Bits 8-15 of `responseFlags` hold the state of up to 8 checkboxes or radio buttons, if present. Extract the flags by performing bitwise-AND operations with the return value of [CFUserNotificationCheckBoxChecked](cfusernotificationcheckboxchecked%28__%29.md). Bits 24-31 hold the index number of the element selected in a pop-up menu, if present. Extract the index by performing a 24-bit right shift: `responseFlags >> 24`.

<a id="return-value"></a>

## Return Value

`0` if the call successfully received a response; a non-`0` value otherwise.

<a id="Discussion"></a>

## Discussion

Use this function to poll a user notification for a user response. You can call it any number of times on the same user notification.

To avoid polling and blocking your thread’s execution, you can create a run loop source for the user notification with [CFUserNotificationCreateRunLoopSource](cfusernotificationcreaterunloopsource%28________%29.md). You will then receive a callback when the dialog is dismissed.

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
- [CFUserNotificationSecureTextField](cfusernotificationsecuretextfield%28__%29.md): Returns a flag used to set the secure state of a text field.
- [CFUserNotificationUpdate](cfusernotificationupdate%28________%29.md): Updates a displayed user notification dialog with new user interface information.
