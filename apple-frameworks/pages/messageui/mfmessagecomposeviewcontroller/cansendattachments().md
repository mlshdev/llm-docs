> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmessagecomposeviewcontroller/cansendattachments()](https://developer.apple.com/documentation/messageui/mfmessagecomposeviewcontroller/cansendattachments())

# canSendAttachments() (Swift)

**Framework:** Message UI  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Indicates whether or not messages can include attachments.

## Declaration

```swift
class func canSendAttachments() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device can send attachments in MMS or iMessage messages, or [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Determining if message composition is available

- [canSendText()](cansendtext%28%29.md): Returns a Boolean value that indicates whether the current device is capable of sending text messages.
- [canSendSubject()](cansendsubject%28%29.md): Indicates whether or not messages can include subject lines, according to the user’s configuration in Settings.
- [isSupportedAttachmentUTI(\_:)](issupportedattachmentuti%28__%29.md): Indicates whether or not the message can accept a file, with the specified UTI, as an attachment.

# canSendAttachments (Objective-C)

**Framework:** Message UI  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Indicates whether or not messages can include attachments.

## Declaration

```objectivec
+ (BOOL) canSendAttachments;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device can send attachments in MMS or iMessage messages, or [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Determining if message composition is available

- [canSendText](cansendtext%28%29.md): Returns a Boolean value that indicates whether the current device is capable of sending text messages.
- [canSendSubject](cansendsubject%28%29.md): Indicates whether or not messages can include subject lines, according to the user’s configuration in Settings.
- [isSupportedAttachmentUTI:](issupportedattachmentuti%28__%29.md): Indicates whether or not the message can accept a file, with the specified UTI, as an attachment.
