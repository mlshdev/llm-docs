> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfusernotificationcreate(_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfusernotificationcreate(_:_:_:_:_:))

# CFUserNotificationCreate(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+

Creates a CFUserNotification object and displays its notification dialog on screen.

## Declaration

```swift
func CFUserNotificationCreate(_ allocator: CFAllocator!, _ timeout: CFTimeInterval, _ flags: CFOptionFlags, _ error: UnsafeMutablePointer<Int32>!, _ dictionary: CFDictionary!) -> CFUserNotification!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `timeout`: The time to wait before the notification dialog dismisses itself if the user does not respond. If `0`, the notification never times out.
- `flags`: A set of flags describing the type of notification to display. These flags specify an alert level for the notification (see [Alert Levels](1534483-alert-levels.md)), determine whether radio buttons or checkboxes are to be used (see [Button Flags](1534481-button-flags.md)), specify which, if any, of these buttons are checked by default (see [CFUserNotificationCheckBoxChecked(\_:)](cfusernotificationcheckboxchecked%28__%29.md)), specify whether any of the text fields are to be secure text fields (see [CFUserNotificationSecureTextField(\_:)](cfusernotificationsecuretextfield%28__%29.md)), and determine which element of a pop-up menu, if present, should be selected by default (see [CFUserNotificationPopUpSelection(\_:)](cfusernotificationpopupselection%28__%29.md)). Combine these flags together by performing a bitwise-OR operation with all the individual flags.
- `error`: On return contains an integer error code. If `0`, the user notification was successfully created and displayed.
- `dictionary`: A description of the elements to display in the notification dialog. The possible keys are listed in [Dialog Description Keys](dialog-description-keys.md). The dictionary must contain a value for the key [kCFUserNotificationAlertHeaderKey](kcfusernotificationalertheaderkey.md), but the other keys are optional.

<a id="return-value"></a>

## Return Value

The new CFUserNotification object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### CFUserNotification Miscellaneous Functions

- [CFUserNotificationCancel(\_:)](cfusernotificationcancel%28__%29.md): Cancels a user notification dialog.
- [CFUserNotificationCheckBoxChecked(\_:)](cfusernotificationcheckboxchecked%28__%29.md): Returns a flag used to set or test a checkbox’s state.
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

# CFUserNotificationCreate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+

Creates a CFUserNotification object and displays its notification dialog on screen.

## Declaration

```objectivec
extern CFUserNotificationRefCFUserNotificationCreate(CFAllocatorRef allocator, CFTimeInterval timeout, CFOptionFlags flags, SInt32 *error, CFDictionaryRef dictionary);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `timeout`: The time to wait before the notification dialog dismisses itself if the user does not respond. If `0`, the notification never times out.
- `flags`: A set of flags describing the type of notification to display. These flags specify an alert level for the notification (see [Alert Levels](1534483-alert-levels.md)), determine whether radio buttons or checkboxes are to be used (see [Button Flags](1534481-button-flags.md)), specify which, if any, of these buttons are checked by default (see [CFUserNotificationCheckBoxChecked](cfusernotificationcheckboxchecked%28__%29.md)), specify whether any of the text fields are to be secure text fields (see [CFUserNotificationSecureTextField](cfusernotificationsecuretextfield%28__%29.md)), and determine which element of a pop-up menu, if present, should be selected by default (see [CFUserNotificationPopUpSelection](cfusernotificationpopupselection%28__%29.md)). Combine these flags together by performing a bitwise-OR operation with all the individual flags.
- `error`: On return contains an integer error code. If `0`, the user notification was successfully created and displayed.
- `dictionary`: A description of the elements to display in the notification dialog. The possible keys are listed in [Dialog Description Keys](dialog-description-keys.md). The dictionary must contain a value for the key [kCFUserNotificationAlertHeaderKey](kcfusernotificationalertheaderkey.md), but the other keys are optional.

<a id="return-value"></a>

## Return Value

The new CFUserNotification object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### CFUserNotification Miscellaneous Functions

- [CFUserNotificationCancel](cfusernotificationcancel%28__%29.md): Cancels a user notification dialog.
- [CFUserNotificationCheckBoxChecked](cfusernotificationcheckboxchecked%28__%29.md): Returns a flag used to set or test a checkbox’s state.
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
