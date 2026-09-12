> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfusernotification](https://developer.apple.com/documentation/corefoundation/cfusernotification)

# CFUserNotification (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFUserNotification
```

<a id="Overview"></a>

## Overview

A `CFUserNotification` object presents a simple dialog on the screen and optionally receives feedback from the user. The contents of the dialog can include a header, a message, an icon, text fields, a pop-up button, radio buttons or checkboxes, and up to three ordinary buttons. Use `CFUserNotification` in processes that do not otherwise have user interfaces, but may need occasional interaction with the user.

You create a user notification with the [CFUserNotificationCreate(\_:\_:\_:\_:\_:)](cfusernotificationcreate%28__________%29.md) function. You pass in a dictionary whose keys describe the items to place into the dialog. (See [Dialog Description Keys](dialog-description-keys.md) for the list of keys.) A set of flags passed to the function determines, among other things, whether secure text fields are used (such as for password fields), whether radio buttons or checkboxes are used, and which of these buttons are checked by default. You can also specify a timeout for the dialog, in which case the dialog cancels itself if the user does not respond in the allotted time period.

A user notification displays its dialog as soon as it is created. If any reply is required, it may be awaited in one of two ways: either synchronously, using [CFUserNotificationReceiveResponse(\_:\_:\_:)](cfusernotificationreceiveresponse%28______%29.md), or asynchronously, using a run loop source created with [CFUserNotificationCreateRunLoopSource(\_:\_:\_:\_:)](cfusernotificationcreaterunloopsource%28________%29.md). [CFUserNotificationReceiveResponse(\_:\_:\_:)](cfusernotificationreceiveresponse%28______%29.md) has a timeout parameter that determines how long it will block (zero meaning indefinitely) and it may be called as many times as necessary until a response arrives. If a user notification has not yet received a response, it may be updated with new information or it may be cancelled. User notifications may not be reused.

`CFUserNotification` provides two convenience functions, [CFUserNotificationDisplayNotice(\_:\_:\_:\_:\_:\_:\_:\_:)](cfusernotificationdisplaynotice%28________________%29.md) and [CFUserNotificationDisplayAlert(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cfusernotificationdisplayalert%28______________________%29.md), to display very basic dialogs that either require no response from the user or require only a single button to be pressed, respectively.

## Topics

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
- [CFUserNotificationUpdate(\_:\_:\_:\_:)](cfusernotificationupdate%28________%29.md): Updates a displayed user notification dialog with new user interface information.

### Callbacks

- [CFUserNotificationCallBack](cfusernotificationcallback.md): Callback invoked when an asynchronous user notification dialog is dismissed.

### Constants

- [Alert Levels](1534483-alert-levels.md): Flags identifying the seriousness of a user notification.
- [Response Codes](1534504-response-codes.md): Response codes identifying the button that was pressed to dismiss a notification dialog.
- [Button Flags](1534481-button-flags.md): Flags that alter the display of buttons in a user notification dialog.
- [Alert Levels](1534483-alert-levels.md): Flags identifying the seriousness of a user notification.
- [Response Codes](1534504-response-codes.md): Response codes identifying the button that was pressed to dismiss a notification dialog.
- [Button Flags](1534481-button-flags.md): Flags that alter the display of buttons in a user notification dialog.
- [Dialog Description Keys](dialog-description-keys.md): Keys used in a user notification’s description dictionary, which describes the contents of the notification dialog to display.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Opaque Types

- [CFAllocator](cfallocator.md)
- [CFArray](cfarray.md)
- [CFAttributedString](cfattributedstring.md)
- [CFBag](cfbag.md)
- [CFBinaryHeap](cfbinaryheap.md)
- [CFBitVector](cfbitvector.md)
- [CFBoolean](cfboolean.md)
- [CFBundle](cfbundle.md)
- [CFCalendar](cfcalendar.md)
- [CFCharacterSet](cfcharacterset.md)
- [CFData](cfdata.md)
- [CFDate](cfdate.md)
- [CFDateFormatter](cfdateformatter.md)
- [CFDictionary](cfdictionary.md)
- [CFError](cferror.md)

# CFUserNotificationRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct __CFUserNotification * CFUserNotificationRef;
```

<a id="Overview"></a>

## Overview

A `CFUserNotification` object presents a simple dialog on the screen and optionally receives feedback from the user. The contents of the dialog can include a header, a message, an icon, text fields, a pop-up button, radio buttons or checkboxes, and up to three ordinary buttons. Use `CFUserNotification` in processes that do not otherwise have user interfaces, but may need occasional interaction with the user.

You create a user notification with the [CFUserNotificationCreate](cfusernotificationcreate%28__________%29.md) function. You pass in a dictionary whose keys describe the items to place into the dialog. (See [Dialog Description Keys](dialog-description-keys.md) for the list of keys.) A set of flags passed to the function determines, among other things, whether secure text fields are used (such as for password fields), whether radio buttons or checkboxes are used, and which of these buttons are checked by default. You can also specify a timeout for the dialog, in which case the dialog cancels itself if the user does not respond in the allotted time period.

A user notification displays its dialog as soon as it is created. If any reply is required, it may be awaited in one of two ways: either synchronously, using [CFUserNotificationReceiveResponse](cfusernotificationreceiveresponse%28______%29.md), or asynchronously, using a run loop source created with [CFUserNotificationCreateRunLoopSource](cfusernotificationcreaterunloopsource%28________%29.md). [CFUserNotificationReceiveResponse](cfusernotificationreceiveresponse%28______%29.md) has a timeout parameter that determines how long it will block (zero meaning indefinitely) and it may be called as many times as necessary until a response arrives. If a user notification has not yet received a response, it may be updated with new information or it may be cancelled. User notifications may not be reused.

`CFUserNotification` provides two convenience functions, [CFUserNotificationDisplayNotice](cfusernotificationdisplaynotice%28________________%29.md) and [CFUserNotificationDisplayAlert](cfusernotificationdisplayalert%28______________________%29.md), to display very basic dialogs that either require no response from the user or require only a single button to be pressed, respectively.

## Topics

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
- [CFUserNotificationUpdate](cfusernotificationupdate%28________%29.md): Updates a displayed user notification dialog with new user interface information.

### Callbacks

- [CFUserNotificationCallBack](cfusernotificationcallback.md): Callback invoked when an asynchronous user notification dialog is dismissed.

### Constants

- [Alert Levels](1534483-alert-levels.md): Flags identifying the seriousness of a user notification.
- [Response Codes](1534504-response-codes.md): Response codes identifying the button that was pressed to dismiss a notification dialog.
- [Button Flags](1534481-button-flags.md): Flags that alter the display of buttons in a user notification dialog.
- [Alert Levels](1534483-alert-levels.md): Flags identifying the seriousness of a user notification.
- [Response Codes](1534504-response-codes.md): Response codes identifying the button that was pressed to dismiss a notification dialog.
- [Button Flags](1534481-button-flags.md): Flags that alter the display of buttons in a user notification dialog.
- [Dialog Description Keys](dialog-description-keys.md): Keys used in a user notification’s description dictionary, which describes the contents of the notification dialog to display.

## See Also

### Opaque Types

- [CFAllocatorRef](cfallocator.md)
- [CFArrayRef](cfarray.md)
- [CFAttributedStringRef](cfattributedstring.md)
- [CFBagRef](cfbag.md)
- [CFBinaryHeapRef](cfbinaryheap.md)
- [CFBitVectorRef](cfbitvector.md)
- [CFBooleanRef](cfboolean.md)
- [CFBundleRef](cfbundle.md)
- [CFCalendarRef](cfcalendar.md)
- [CFCharacterSetRef](cfcharacterset.md)
- [CFDataRef](cfdata.md)
- [CFDateRef](cfdate.md)
- [CFDateFormatterRef](cfdateformatter.md)
- [CFDictionaryRef](cfdictionary.md)
- [CFErrorRef](cferror.md)
