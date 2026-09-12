> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmessagecomposeviewcontroller/cansendsubject()](https://developer.apple.com/documentation/messageui/mfmessagecomposeviewcontroller/cansendsubject())

# canSendSubject() (Swift)

**Framework:** Message UI  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Indicates whether or not messages can include subject lines, according to the user’s configuration in Settings.

## Declaration

```swift
class func canSendSubject() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device can include subject lines in messages, or [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Determining if message composition is available

- [canSendText()](cansendtext%28%29.md): Returns a Boolean value that indicates whether the current device is capable of sending text messages.
- [canSendAttachments()](cansendattachments%28%29.md): Indicates whether or not messages can include attachments.
- [isSupportedAttachmentUTI(\_:)](issupportedattachmentuti%28__%29.md): Indicates whether or not the message can accept a file, with the specified UTI, as an attachment.

# canSendSubject (Objective-C)

**Framework:** Message UI  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Indicates whether or not messages can include subject lines, according to the user’s configuration in Settings.

## Declaration

```objectivec
+ (BOOL) canSendSubject;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device can include subject lines in messages, or [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Determining if message composition is available

- [canSendText](cansendtext%28%29.md): Returns a Boolean value that indicates whether the current device is capable of sending text messages.
- [canSendAttachments](cansendattachments%28%29.md): Indicates whether or not messages can include attachments.
- [isSupportedAttachmentUTI:](issupportedattachmentuti%28__%29.md): Indicates whether or not the message can accept a file, with the specified UTI, as an attachment.
