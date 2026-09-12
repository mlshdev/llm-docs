> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmessagecomposeviewcontroller/addattachmenturl(_:withalternatefilename:)](https://developer.apple.com/documentation/messageui/mfmessagecomposeviewcontroller/addattachmenturl(_:withalternatefilename:))

# addAttachmentURL(\_:withAlternateFilename:) (Swift)

**Framework:** Message UI  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Attaches a specified file to the message.

## Declaration

```swift
func addAttachmentURL(_ attachmentURL: URL, withAlternateFilename alternateFilename: String?) -> Bool
```

## Parameters

- `attachmentURL`: The file URL for the attachment. Must not be `nil`.
- `alternateFilename`: If you supply a string here, the message UI uses it for the attachment. Use an alternate filename to better describe the attachment or to make the name more readable.

  OK to use a `nil` value, in which case the attachment’s actual filename is displayed in the message UI.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the attachment at the specified URL was successfully added to the message, or [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

You can add zero or more attachments to a message before you display the message to the user. To access information about a message’s attachments, access the [attachments](attachments.md) property.

## See Also

### Managing attachments

- [disableUserAttachments()](disableuserattachments%28%29.md): Disables the camera/attachment button in the message composition view.
- [attachments](attachments.md): Returns an array of dictionaries that describe the properties of an attachment.
- [addAttachmentData(\_:typeIdentifier:filename:)](addattachmentdata%28__typeidentifier_filename_%29.md): Attaches arbitrary content to the message.
- [MFMessageComposeViewControllerAttachmentURL](../mfmessagecomposeviewcontrollerattachmenturl.md): The URL for the item that is attached to the message.
- [MFMessageComposeViewControllerAttachmentAlternateFilename](../mfmessagecomposeviewcontrollerattachmentalternatefilename.md): The key for the alternate filename for the file-based item attached to the message.
- [insertCollaborationItemProvider(\_:)](insertcollaborationitemprovider%28__%29.md)

# addAttachmentURL:withAlternateFilename: (Objective-C)

**Framework:** Message UI  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Attaches a specified file to the message.

## Declaration

```objectivec
- (BOOL) addAttachmentURL:(NSURL *) attachmentURL withAlternateFilename:(NSString *) alternateFilename;
```

## Parameters

- `attachmentURL`: The file URL for the attachment. Must not be `nil`.
- `alternateFilename`: If you supply a string here, the message UI uses it for the attachment. Use an alternate filename to better describe the attachment or to make the name more readable.

  OK to use a `nil` value, in which case the attachment’s actual filename is displayed in the message UI.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the attachment at the specified URL was successfully added to the message, or [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

You can add zero or more attachments to a message before you display the message to the user. To access information about a message’s attachments, access the [attachments](attachments.md) property.

## See Also

### Managing attachments

- [disableUserAttachments](disableuserattachments%28%29.md): Disables the camera/attachment button in the message composition view.
- [attachments](attachments.md): Returns an array of dictionaries that describe the properties of an attachment.
- [addAttachmentData:typeIdentifier:filename:](addattachmentdata%28__typeidentifier_filename_%29.md): Attaches arbitrary content to the message.
- [MFMessageComposeViewControllerAttachmentURL](../mfmessagecomposeviewcontrollerattachmenturl.md): The URL for the item that is attached to the message.
- [MFMessageComposeViewControllerAttachmentAlternateFilename](../mfmessagecomposeviewcontrollerattachmentalternatefilename.md): The key for the alternate filename for the file-based item attached to the message.
- [insertCollaborationItemProvider:](insertcollaborationitemprovider%28__%29.md)
