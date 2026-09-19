> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/messageui/mfmessagecomposeviewcontroller/insertcollaborationitemprovider(_:)

# insertCollaborationItemProvider(\_:) (Swift)

**Framework:** Message UI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

## Declaration

```swift
func insertCollaborationItemProvider(_ itemProvider: NSItemProvider) -> Bool
```

## See Also

### Managing attachments

- [disableUserAttachments()](disableuserattachments%28%29.md): Disables the camera/attachment button in the message composition view.
- [attachments](attachments.md): Returns an array of dictionaries that describe the properties of an attachment.
- [addAttachmentURL(\_:withAlternateFilename:)](addattachmenturl%28__withalternatefilename_%29.md): Attaches a specified file to the message.
- [addAttachmentData(\_:typeIdentifier:filename:)](addattachmentdata%28__typeidentifier_filename_%29.md): Attaches arbitrary content to the message.
- [MFMessageComposeViewControllerAttachmentURL](../mfmessagecomposeviewcontrollerattachmenturl.md): The URL for the item that is attached to the message.
- [MFMessageComposeViewControllerAttachmentAlternateFilename](../mfmessagecomposeviewcontrollerattachmentalternatefilename.md): The key for the alternate filename for the file-based item attached to the message.

# insertCollaborationItemProvider: (Objective-C)

**Framework:** Message UI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

## Declaration

```objectivec
- (BOOL) insertCollaborationItemProvider:(NSItemProvider *) itemProvider;
```

## See Also

### Managing attachments

- [disableUserAttachments](disableuserattachments%28%29.md): Disables the camera/attachment button in the message composition view.
- [attachments](attachments.md): Returns an array of dictionaries that describe the properties of an attachment.
- [addAttachmentURL:withAlternateFilename:](addattachmenturl%28__withalternatefilename_%29.md): Attaches a specified file to the message.
- [addAttachmentData:typeIdentifier:filename:](addattachmentdata%28__typeidentifier_filename_%29.md): Attaches arbitrary content to the message.
- [MFMessageComposeViewControllerAttachmentURL](../mfmessagecomposeviewcontrollerattachmenturl.md): The URL for the item that is attached to the message.
- [MFMessageComposeViewControllerAttachmentAlternateFilename](../mfmessagecomposeviewcontrollerattachmentalternatefilename.md): The key for the alternate filename for the file-based item attached to the message.
