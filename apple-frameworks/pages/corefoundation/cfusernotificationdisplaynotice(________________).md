> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfusernotificationdisplaynotice(_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfusernotificationdisplaynotice(_:_:_:_:_:_:_:_:))

# CFUserNotificationDisplayNotice(\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+

Displays a user notification dialog that does not need a user response.

## Declaration

```swift
func CFUserNotificationDisplayNotice(_ timeout: CFTimeInterval, _ flags: CFOptionFlags, _ iconURL: CFURL!, _ soundURL: CFURL!, _ localizationURL: CFURL!, _ alertHeader: CFString!, _ alertMessage: CFString!, _ defaultButtonTitle: CFString!) -> Int32
```

## Parameters

- `timeout`: The amount of time to wait for the user to dismiss the notification dialog before the dialog dismisses itself. Pass `0` to have the dialog never time out.
- `flags`: A set of flags describing the type of notification dialog to display. The value is normally just the alert level from [Alert Levels](1534483-alert-levels.md). If you don’t want a default button displayed, perform a bitwise-OR operation with the alert level and the constant [kCFUserNotificationNoDefaultButtonFlag](kcfusernotificationnodefaultbuttonflag.md).
- `iconURL`: A file URL pointing to the icon to display in the dialog. If `NULL`, a default icon is used based on the notification’s alert level specified in `flags`.
- `soundURL`: Not used.
- `localizationURL`: A file URL pointing to a bundle that contains localized versions of the strings displayed in the dialog. Can be `NULL`.
- `alertHeader`: The title of the notification dialog. Cannot be `NULL`.
- `alertMessage`: The message string to display in the dialog. Can be `NULL`.
- `defaultButtonTitle`: The title of the default button. If `NULL`, the string `OK` is used.

<a id="return-value"></a>

## Return Value

`0` if the cancel was successful; a non-`0` value otherwise.

<a id="Discussion"></a>

## Discussion

This function returns immediately. It does not wait for a user response after displaying the dialog.

## See Also

### CFUserNotification Miscellaneous Functions

- [CFUserNotificationCancel(\_:)](cfusernotificationcancel%28__%29.md): Cancels a user notification dialog.
- [CFUserNotificationCheckBoxChecked(\_:)](cfusernotificationcheckboxchecked%28__%29.md): Returns a flag used to set or test a checkbox’s state.
- [CFUserNotificationCreate(\_:\_:\_:\_:\_:)](cfusernotificationcreate%28__________%29.md): Creates a CFUserNotification object and displays its notification dialog on screen.
- [CFUserNotificationCreateRunLoopSource(\_:\_:\_:\_:)](cfusernotificationcreaterunloopsource%28________%29.md): Creates a run loop source for a user notification.
- [CFUserNotificationDisplayAlert(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cfusernotificationdisplayalert%28______________________%29.md): Displays a user notification dialog and waits for a user response.
- [CFUserNotificationGetResponseDictionary(\_:)](cfusernotificationgetresponsedictionary%28__%29.md): Returns the dictionary containing all the text field values from a dismissed notification dialog.
- [CFUserNotificationGetResponseValue(\_:\_:\_:)](cfusernotificationgetresponsevalue%28______%29.md): Extracts the values of the text fields from a dismissed notification dialog.
- [CFUserNotificationGetTypeID()](cfusernotificationgettypeid%28%29.md): Returns the type identifier for the `CFUserNotification` opaque type.
- [CFUserNotificationPopUpSelection(\_:)](cfusernotificationpopupselection%28__%29.md): Returns a flag used to set the selected element of a pop-up menu.
- [CFUserNotificationReceiveResponse(\_:\_:\_:)](cfusernotificationreceiveresponse%28______%29.md): Waits for the user to respond to a notification or for the notification to time out.
- [CFUserNotificationSecureTextField(\_:)](cfusernotificationsecuretextfield%28__%29.md): Returns a flag used to set the secure state of a text field.
- [CFUserNotificationUpdate(\_:\_:\_:\_:)](cfusernotificationupdate%28________%29.md): Updates a displayed user notification dialog with new user interface information.

# CFUserNotificationDisplayNotice (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+

Displays a user notification dialog that does not need a user response.

## Declaration

```objectivec
extern SInt32 CFUserNotificationDisplayNotice(CFTimeInterval timeout, CFOptionFlags flags, CFURLRef iconURL, CFURLRef soundURL, CFURLRef localizationURL, CFStringRef alertHeader, CFStringRef alertMessage, CFStringRef defaultButtonTitle);
```

## Parameters

- `timeout`: The amount of time to wait for the user to dismiss the notification dialog before the dialog dismisses itself. Pass `0` to have the dialog never time out.
- `flags`: A set of flags describing the type of notification dialog to display. The value is normally just the alert level from [Alert Levels](1534483-alert-levels.md). If you don’t want a default button displayed, perform a bitwise-OR operation with the alert level and the constant [kCFUserNotificationNoDefaultButtonFlag](kcfusernotificationnodefaultbuttonflag.md).
- `iconURL`: A file URL pointing to the icon to display in the dialog. If `NULL`, a default icon is used based on the notification’s alert level specified in `flags`.
- `soundURL`: Not used.
- `localizationURL`: A file URL pointing to a bundle that contains localized versions of the strings displayed in the dialog. Can be `NULL`.
- `alertHeader`: The title of the notification dialog. Cannot be `NULL`.
- `alertMessage`: The message string to display in the dialog. Can be `NULL`.
- `defaultButtonTitle`: The title of the default button. If `NULL`, the string `OK` is used.

<a id="return-value"></a>

## Return Value

`0` if the cancel was successful; a non-`0` value otherwise.

<a id="Discussion"></a>

## Discussion

This function returns immediately. It does not wait for a user response after displaying the dialog.

## See Also

### CFUserNotification Miscellaneous Functions

- [CFUserNotificationCancel](cfusernotificationcancel%28__%29.md): Cancels a user notification dialog.
- [CFUserNotificationCheckBoxChecked](cfusernotificationcheckboxchecked%28__%29.md): Returns a flag used to set or test a checkbox’s state.
- [CFUserNotificationCreate](cfusernotificationcreate%28__________%29.md): Creates a CFUserNotification object and displays its notification dialog on screen.
- [CFUserNotificationCreateRunLoopSource](cfusernotificationcreaterunloopsource%28________%29.md): Creates a run loop source for a user notification.
- [CFUserNotificationDisplayAlert](cfusernotificationdisplayalert%28______________________%29.md): Displays a user notification dialog and waits for a user response.
- [CFUserNotificationGetResponseDictionary](cfusernotificationgetresponsedictionary%28__%29.md): Returns the dictionary containing all the text field values from a dismissed notification dialog.
- [CFUserNotificationGetResponseValue](cfusernotificationgetresponsevalue%28______%29.md): Extracts the values of the text fields from a dismissed notification dialog.
- [CFUserNotificationGetTypeID](cfusernotificationgettypeid%28%29.md): Returns the type identifier for the `CFUserNotification` opaque type.
- [CFUserNotificationPopUpSelection](cfusernotificationpopupselection%28__%29.md): Returns a flag used to set the selected element of a pop-up menu.
- [CFUserNotificationReceiveResponse](cfusernotificationreceiveresponse%28______%29.md): Waits for the user to respond to a notification or for the notification to time out.
- [CFUserNotificationSecureTextField](cfusernotificationsecuretextfield%28__%29.md): Returns a flag used to set the secure state of a text field.
- [CFUserNotificationUpdate](cfusernotificationupdate%28________%29.md): Updates a displayed user notification dialog with new user interface information.
