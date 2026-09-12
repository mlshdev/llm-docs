> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmessagecomposeviewcontroller/issupportedattachmentuti(_:)](https://developer.apple.com/documentation/messageui/mfmessagecomposeviewcontroller/issupportedattachmentuti(_:))

# isSupportedAttachmentUTI(\_:) (Swift)

**Framework:** Message UI  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Indicates whether or not the message can accept a file, with the specified UTI, as an attachment.

## Declaration

```swift
class func isSupportedAttachmentUTI(_ uti: String) -> Bool
```

## Parameters

- `uti`: The UTI (Uniform Type Identifier) in question. See [Uniform Type Identifiers Reference](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/UTIRef/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009257)

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a file with the specified UTI can be attached to the message, or [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Determining if message composition is available

- [canSendText()](cansendtext%28%29.md): Returns a Boolean value that indicates whether the current device is capable of sending text messages.
- [canSendAttachments()](cansendattachments%28%29.md): Indicates whether or not messages can include attachments.
- [canSendSubject()](cansendsubject%28%29.md): Indicates whether or not messages can include subject lines, according to the user’s configuration in Settings.

# isSupportedAttachmentUTI: (Objective-C)

**Framework:** Message UI  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Indicates whether or not the message can accept a file, with the specified UTI, as an attachment.

## Declaration

```objectivec
+ (BOOL) isSupportedAttachmentUTI:(NSString *) uti;
```

## Parameters

- `uti`: The UTI (Uniform Type Identifier) in question. See [Uniform Type Identifiers Reference](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/UTIRef/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009257)

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a file with the specified UTI can be attached to the message, or [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Determining if message composition is available

- [canSendText](cansendtext%28%29.md): Returns a Boolean value that indicates whether the current device is capable of sending text messages.
- [canSendAttachments](cansendattachments%28%29.md): Indicates whether or not messages can include attachments.
- [canSendSubject](cansendsubject%28%29.md): Indicates whether or not messages can include subject lines, according to the user’s configuration in Settings.
