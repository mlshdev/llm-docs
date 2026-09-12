> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmessagecomposeviewcontroller/disableuserattachments()](https://developer.apple.com/documentation/messageui/mfmessagecomposeviewcontroller/disableuserattachments())

# disableUserAttachments() (Swift)

**Framework:** Message UI  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Disables the camera/attachment button in the message composition view.

## Declaration

```swift
func disableUserAttachments()
```

<a id="Discussion"></a>

## Discussion

In iOS 7.0 and later, call this method to disable the camera/attachment button in the message composition view. In an app linked against an older version of iOS, the camera/attachment button is not available in any case.

## See Also

### Managing attachments

- [attachments](attachments.md): Returns an array of dictionaries that describe the properties of an attachment.
- [addAttachmentURL(\_:withAlternateFilename:)](addattachmenturl%28__withalternatefilename_%29.md): Attaches a specified file to the message.
- [addAttachmentData(\_:typeIdentifier:filename:)](addattachmentdata%28__typeidentifier_filename_%29.md): Attaches arbitrary content to the message.
- [MFMessageComposeViewControllerAttachmentURL](../mfmessagecomposeviewcontrollerattachmenturl.md): The URL for the item that is attached to the message.
- [MFMessageComposeViewControllerAttachmentAlternateFilename](../mfmessagecomposeviewcontrollerattachmentalternatefilename.md): The key for the alternate filename for the file-based item attached to the message.
- [insertCollaborationItemProvider(\_:)](insertcollaborationitemprovider%28__%29.md)

# disableUserAttachments (Objective-C)

**Framework:** Message UI  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Disables the camera/attachment button in the message composition view.

## Declaration

```objectivec
- (void) disableUserAttachments;
```

<a id="Discussion"></a>

## Discussion

In iOS 7.0 and later, call this method to disable the camera/attachment button in the message composition view. In an app linked against an older version of iOS, the camera/attachment button is not available in any case.

## See Also

### Managing attachments

- [attachments](attachments.md): Returns an array of dictionaries that describe the properties of an attachment.
- [addAttachmentURL:withAlternateFilename:](addattachmenturl%28__withalternatefilename_%29.md): Attaches a specified file to the message.
- [addAttachmentData:typeIdentifier:filename:](addattachmentdata%28__typeidentifier_filename_%29.md): Attaches arbitrary content to the message.
- [MFMessageComposeViewControllerAttachmentURL](../mfmessagecomposeviewcontrollerattachmenturl.md): The URL for the item that is attached to the message.
- [MFMessageComposeViewControllerAttachmentAlternateFilename](../mfmessagecomposeviewcontrollerattachmentalternatefilename.md): The key for the alternate filename for the file-based item attached to the message.
- [insertCollaborationItemProvider:](insertcollaborationitemprovider%28__%29.md)
