> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmessagecomposeviewcontrollertextmessageavailabilitykey](https://developer.apple.com/documentation/messageui/mfmessagecomposeviewcontrollertextmessageavailabilitykey)

# MFMessageComposeViewControllerTextMessageAvailabilityKey (Swift)

**Framework:** Message UI  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The value of this key is a number object that contains a Boolean value.

## Declaration

```swift
let MFMessageComposeViewControllerTextMessageAvailabilityKey: String
```

<a id="Discussion"></a>

## Discussion

This value matches the result of the [canSendText()](mfmessagecomposeviewcontroller/cansendtext%28%29.md) class method.The `userInfo` dictionary for the [MFMessageComposeViewControllerTextMessageAvailabilityDidChangeNotification](mfmessagecomposeviewcontrollertextmessageavailabilitydidchangenotification.md) notification includes this key. The value of this key is an [NSNumber](../foundation/nsnumber.md) object that contains a Boolean value. This value matches the result of the [canSendText()](mfmessagecomposeviewcontroller/cansendtext%28%29.md) class method.

# MFMessageComposeViewControllerTextMessageAvailabilityKey (Objective-C)

**Framework:** Message UI  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The value of this key is a number object that contains a Boolean value.

## Declaration

```objectivec
extern NSString * const MFMessageComposeViewControllerTextMessageAvailabilityKey;
```

<a id="Discussion"></a>

## Discussion

This value matches the result of the [canSendText](mfmessagecomposeviewcontroller/cansendtext%28%29.md) class method.The `userInfo` dictionary for the [MFMessageComposeViewControllerTextMessageAvailabilityDidChangeNotification](mfmessagecomposeviewcontrollertextmessageavailabilitydidchangenotification.md) notification includes this key. The value of this key is an [NSNumber](../foundation/nsnumber.md) object that contains a Boolean value. This value matches the result of the [canSendText](mfmessagecomposeviewcontroller/cansendtext%28%29.md) class method.

## See Also

### Handling notifications

- [MFMessageComposeViewControllerTextMessageAvailabilityDidChangeNotification](mfmessagecomposeviewcontrollertextmessageavailabilitydidchangenotification.md): Posted when the value returned by the [canSendText](mfmessagecomposeviewcontroller/cansendtext%28%29.md) class method has changed.
