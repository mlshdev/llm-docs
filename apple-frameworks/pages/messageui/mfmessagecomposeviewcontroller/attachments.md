> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmessagecomposeviewcontroller/attachments](https://developer.apple.com/documentation/messageui/mfmessagecomposeviewcontroller/attachments)

# attachments (Swift)

**Framework:** Message UI  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns an array of dictionaries that describe the properties of an attachment.

## Declaration

```swift
var attachments: [[AnyHashable : Any]]? { get }
```

<a id="Discussion"></a>

## Discussion

Each attachment is described by an [NSDictionary](../../foundation/nsdictionary.md) object in the `attachments` array. To retrieve the alternate file name for an attachment from its dictionary, use the [MFMessageComposeViewControllerAttachmentAlternateFilename](../mfmessagecomposeviewcontrollerattachmentalternatefilename.md) key.

## See Also

### Managing attachments

- [disableUserAttachments()](disableuserattachments%28%29.md): Disables the camera/attachment button in the message composition view.
- [addAttachmentURL(\_:withAlternateFilename:)](addattachmenturl%28__withalternatefilename_%29.md): Attaches a specified file to the message.
- [addAttachmentData(\_:typeIdentifier:filename:)](addattachmentdata%28__typeidentifier_filename_%29.md): Attaches arbitrary content to the message.
- [MFMessageComposeViewControllerAttachmentURL](../mfmessagecomposeviewcontrollerattachmenturl.md): The URL for the item that is attached to the message.
- [MFMessageComposeViewControllerAttachmentAlternateFilename](../mfmessagecomposeviewcontrollerattachmentalternatefilename.md): The key for the alternate filename for the file-based item attached to the message.
- [insertCollaborationItemProvider(\_:)](insertcollaborationitemprovider%28__%29.md)

# attachments (Objective-C)

**Framework:** Message UI  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns an array of dictionaries that describe the properties of an attachment.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<NSDictionary *> * attachments;
```

<a id="Discussion"></a>

## Discussion

Each attachment is described by an [NSDictionary](../../foundation/nsdictionary.md) object in the `attachments` array. To retrieve the alternate file name for an attachment from its dictionary, use the [MFMessageComposeViewControllerAttachmentAlternateFilename](../mfmessagecomposeviewcontrollerattachmentalternatefilename.md) key.

## See Also

### Managing attachments

- [disableUserAttachments](disableuserattachments%28%29.md): Disables the camera/attachment button in the message composition view.
- [addAttachmentURL:withAlternateFilename:](addattachmenturl%28__withalternatefilename_%29.md): Attaches a specified file to the message.
- [addAttachmentData:typeIdentifier:filename:](addattachmentdata%28__typeidentifier_filename_%29.md): Attaches arbitrary content to the message.
- [MFMessageComposeViewControllerAttachmentURL](../mfmessagecomposeviewcontrollerattachmenturl.md): The URL for the item that is attached to the message.
- [MFMessageComposeViewControllerAttachmentAlternateFilename](../mfmessagecomposeviewcontrollerattachmentalternatefilename.md): The key for the alternate filename for the file-based item attached to the message.
- [insertCollaborationItemProvider:](insertcollaborationitemprovider%28__%29.md)
