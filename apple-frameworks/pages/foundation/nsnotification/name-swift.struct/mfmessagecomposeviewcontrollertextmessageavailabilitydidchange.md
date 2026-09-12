> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/mfmessagecomposeviewcontrollertextmessageavailabilitydidchange](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/mfmessagecomposeviewcontrollertextmessageavailabilitydidchange)

# MFMessageComposeViewControllerTextMessageAvailabilityDidChange

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Posted when the current device’s ability to send text messages changes.

## Declaration

```swift
static let MFMessageComposeViewControllerTextMessageAvailabilityDidChange: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The system posts this notification when the value [canSendText()](../../../messageui/mfmessagecomposeviewcontroller/cansendtext%28%29.md) returns has changed.

Upon receiving this notification, query its `userInfo` dictionary with the [MFMessageComposeViewControllerTextMessageAvailabilityKey](../../../messageui/mfmessagecomposeviewcontrollertextmessageavailabilitykey.md) key. If the availability of text message sending has changed, your app should invalidate caches and update its user interface as appropriate.

## See Also

### MessageUI

- [MFMessageComposeViewControllerTextMessageAvailabilityDidChange](mfmessagecomposeviewcontrollertextmessageavailabilitydidchange.md): Posted when the current device’s ability to send text messages changes.
