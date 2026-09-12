> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmessagecomposeviewcontroller/cansendtext()](https://developer.apple.com/documentation/messageui/mfmessagecomposeviewcontroller/cansendtext())

# canSendText() (Swift)

**Framework:** Message UI  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value that indicates whether the current device is capable of sending text messages.

## Declaration

```swift
class func canSendText() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device can send text messages or [false](https://developer.apple.com/documentation/swift/false) if it cannot.

<a id="Discussion"></a>

## Discussion

Always call this method before attempting to present the message compose view controller. A device may be unable to send messages if it does not support messaging or if it is not currently configured to send messages. This method applies only to the ability to send text messages via iMessage, SMS, and MMS.

To be notified of changes in the availability of sending text messages, register as an observer of the [MFMessageComposeViewControllerTextMessageAvailabilityDidChangeNotification](../mfmessagecomposeviewcontrollertextmessageavailabilitydidchangenotification.md) notification.

## See Also

### Determining if message composition is available

- [canSendAttachments()](cansendattachments%28%29.md): Indicates whether or not messages can include attachments.
- [canSendSubject()](cansendsubject%28%29.md): Indicates whether or not messages can include subject lines, according to the user’s configuration in Settings.
- [isSupportedAttachmentUTI(\_:)](issupportedattachmentuti%28__%29.md): Indicates whether or not the message can accept a file, with the specified UTI, as an attachment.

# canSendText (Objective-C)

**Framework:** Message UI  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value that indicates whether the current device is capable of sending text messages.

## Declaration

```objectivec
+ (BOOL) canSendText;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device can send text messages or [false](https://developer.apple.com/documentation/swift/false) if it cannot.

<a id="Discussion"></a>

## Discussion

Always call this method before attempting to present the message compose view controller. A device may be unable to send messages if it does not support messaging or if it is not currently configured to send messages. This method applies only to the ability to send text messages via iMessage, SMS, and MMS.

To be notified of changes in the availability of sending text messages, register as an observer of the [MFMessageComposeViewControllerTextMessageAvailabilityDidChangeNotification](../mfmessagecomposeviewcontrollertextmessageavailabilitydidchangenotification.md) notification.

## See Also

### Determining if message composition is available

- [canSendAttachments](cansendattachments%28%29.md): Indicates whether or not messages can include attachments.
- [canSendSubject](cansendsubject%28%29.md): Indicates whether or not messages can include subject lines, according to the user’s configuration in Settings.
- [isSupportedAttachmentUTI:](issupportedattachmentuti%28__%29.md): Indicates whether or not the message can accept a file, with the specified UTI, as an attachment.
