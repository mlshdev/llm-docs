> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmessagecomposeviewcontroller/addattachmentdata(_:typeidentifier:filename:)](https://developer.apple.com/documentation/messageui/mfmessagecomposeviewcontroller/addattachmentdata(_:typeidentifier:filename:))

# addAttachmentData(\_:typeIdentifier:filename:) (Swift)

**Framework:** Message UI  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Attaches arbitrary content to the message.

## Declaration

```swift
func addAttachmentData(_ attachmentData: Data, typeIdentifier uti: String, filename: String) -> Bool
```

## Parameters

- `attachmentData`: Content in the form of an [NSData](../../foundation/nsdata.md) object to attach to the message. Must not be `nil`.
- `uti`: A valid Uniform Type Identifier (UTI) appropriate for the attachment data. See [Uniform Type Identifiers Reference](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/UTIRef/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009257). Must not be `nil`.
- `filename`: The name to present to the user, in the message UI, for the data attachment.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the attachment data was successfully added to the message, or [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

This method is especially useful when the attachment you want to add to a message does not have a file system representation. This can be the case, for example, for programmatically composed audiovisual content.

## See Also

### Managing attachments

- [disableUserAttachments()](disableuserattachments%28%29.md): Disables the camera/attachment button in the message composition view.
- [attachments](attachments.md): Returns an array of dictionaries that describe the properties of an attachment.
- [addAttachmentURL(\_:withAlternateFilename:)](addattachmenturl%28__withalternatefilename_%29.md): Attaches a specified file to the message.
- [MFMessageComposeViewControllerAttachmentURL](../mfmessagecomposeviewcontrollerattachmenturl.md): The URL for the item that is attached to the message.
- [MFMessageComposeViewControllerAttachmentAlternateFilename](../mfmessagecomposeviewcontrollerattachmentalternatefilename.md): The key for the alternate filename for the file-based item attached to the message.
- [insertCollaborationItemProvider(\_:)](insertcollaborationitemprovider%28__%29.md)

# addAttachmentData:typeIdentifier:filename: (Objective-C)

**Framework:** Message UI  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Attaches arbitrary content to the message.

## Declaration

```objectivec
- (BOOL) addAttachmentData:(NSData *) attachmentData typeIdentifier:(NSString *) uti filename:(NSString *) filename;
```

## Parameters

- `attachmentData`: Content in the form of an [NSData](../../foundation/nsdata.md) object to attach to the message. Must not be `nil`.
- `uti`: A valid Uniform Type Identifier (UTI) appropriate for the attachment data. See [Uniform Type Identifiers Reference](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/UTIRef/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009257). Must not be `nil`.
- `filename`: The name to present to the user, in the message UI, for the data attachment.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the attachment data was successfully added to the message, or [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

This method is especially useful when the attachment you want to add to a message does not have a file system representation. This can be the case, for example, for programmatically composed audiovisual content.

## See Also

### Managing attachments

- [disableUserAttachments](disableuserattachments%28%29.md): Disables the camera/attachment button in the message composition view.
- [attachments](attachments.md): Returns an array of dictionaries that describe the properties of an attachment.
- [addAttachmentURL:withAlternateFilename:](addattachmenturl%28__withalternatefilename_%29.md): Attaches a specified file to the message.
- [MFMessageComposeViewControllerAttachmentURL](../mfmessagecomposeviewcontrollerattachmenturl.md): The URL for the item that is attached to the message.
- [MFMessageComposeViewControllerAttachmentAlternateFilename](../mfmessagecomposeviewcontrollerattachmentalternatefilename.md): The key for the alternate filename for the file-based item attached to the message.
- [insertCollaborationItemProvider:](insertcollaborationitemprovider%28__%29.md)
