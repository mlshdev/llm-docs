> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/1534504-response-codes](https://developer.apple.com/documentation/corefoundation/1534504-response-codes)

# Response Codes (Swift)

**Framework:** Core Foundation  
**Kind:** API Collection

Response codes identifying the button that was pressed to dismiss a notification dialog.

<a id="overview"></a>

## Overview

To extract this value from the response flags of a dismissed notification (such as returned by [CFUserNotificationReceiveResponse(\_:\_:\_:)](cfusernotificationreceiveresponse%28______%29.md)), you must perform a bitwise-AND operation between the returned response flags and `0x3` before comparing the value to these constants.

## Topics

### Constants

- [kCFUserNotificationDefaultResponse](kcfusernotificationdefaultresponse.md): The default button was pressed.
- [kCFUserNotificationAlternateResponse](kcfusernotificationalternateresponse.md): The alternate button was pressed.
- [kCFUserNotificationOtherResponse](kcfusernotificationotherresponse.md): The third button was pressed.
- [kCFUserNotificationCancelResponse](kcfusernotificationcancelresponse.md): No button was pressed and the notification timed out.

## See Also

### Constants

- [Alert Levels](1534483-alert-levels.md): Flags identifying the seriousness of a user notification.
- [Button Flags](1534481-button-flags.md): Flags that alter the display of buttons in a user notification dialog.
- [Alert Levels](1534483-alert-levels.md): Flags identifying the seriousness of a user notification.
- [Button Flags](1534481-button-flags.md): Flags that alter the display of buttons in a user notification dialog.
- [Dialog Description Keys](dialog-description-keys.md): Keys used in a user notification’s description dictionary, which describes the contents of the notification dialog to display.

# Response Codes (Objective-C)

**Framework:** Core Foundation  
**Kind:** API Collection

Response codes identifying the button that was pressed to dismiss a notification dialog.

<a id="overview"></a>

## Overview

To extract this value from the response flags of a dismissed notification (such as returned by [CFUserNotificationReceiveResponse](cfusernotificationreceiveresponse%28______%29.md)), you must perform a bitwise-AND operation between the returned response flags and `0x3` before comparing the value to these constants.

## Topics

### Constants

- [kCFUserNotificationDefaultResponse](kcfusernotificationdefaultresponse.md): The default button was pressed.
- [kCFUserNotificationAlternateResponse](kcfusernotificationalternateresponse.md): The alternate button was pressed.
- [kCFUserNotificationOtherResponse](kcfusernotificationotherresponse.md): The third button was pressed.
- [kCFUserNotificationCancelResponse](kcfusernotificationcancelresponse.md): No button was pressed and the notification timed out.

## See Also

### Constants

- [Alert Levels](1534483-alert-levels.md): Flags identifying the seriousness of a user notification.
- [Button Flags](1534481-button-flags.md): Flags that alter the display of buttons in a user notification dialog.
- [Alert Levels](1534483-alert-levels.md): Flags identifying the seriousness of a user notification.
- [Button Flags](1534481-button-flags.md): Flags that alter the display of buttons in a user notification dialog.
- [Dialog Description Keys](dialog-description-keys.md): Keys used in a user notification’s description dictionary, which describes the contents of the notification dialog to display.
