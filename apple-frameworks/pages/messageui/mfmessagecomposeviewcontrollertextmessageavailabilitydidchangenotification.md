> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmessagecomposeviewcontrollertextmessageavailabilitydidchangenotification](https://developer.apple.com/documentation/messageui/mfmessagecomposeviewcontrollertextmessageavailabilitydidchangenotification)

# MFMessageComposeViewControllerTextMessageAvailabilityDidChangeNotification

**Interface language:** Objective-C

**Framework:** Message UI  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Posted when the value returned by the [canSendText](mfmessagecomposeviewcontroller/cansendtext%28%29.md) class method has changed.

## Declaration

```objectivec
extern NSString * const MFMessageComposeViewControllerTextMessageAvailabilityDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

Upon receiving this notification, query its `userInfo` dictionary with the [MFMessageComposeViewControllerTextMessageAvailabilityKey](mfmessagecomposeviewcontrollertextmessageavailabilitykey.md) key. If the availability of text message sending has changed, your app should invalidate caches and update its user interface as appropriate.

## See Also

### Handling notifications

- [MFMessageComposeViewControllerTextMessageAvailabilityKey](mfmessagecomposeviewcontrollertextmessageavailabilitykey.md): The value of this key is a number object that contains a Boolean value.
