> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivity/activitytype-swift.struct/savetocameraroll](https://developer.apple.com/documentation/uikit/uiactivity/activitytype-swift.struct/savetocameraroll)

# saveToCameraRoll (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A type of activity that assigns the image or video to the user’s camera roll.

## Declaration

```swift
static let saveToCameraRoll: UIActivity.ActivityType
```

<a id="Discussion"></a>

## Discussion

When using this service, you can provide a [UIImage](../../uiimage.md) object as data for image-based activity items. For image and video items, you can provide an [NSURL](../../../foundation/nsurl.md) object with a path to the video.

## See Also

### Constants

- [addToHomeScreen](addtohomescreen.md)
- [addToReadingList](addtoreadinglist.md): A type of activity that adds the URL to Safari’s reading list.
- [airDrop](airdrop.md): A type of activity that makes the provided content available through AirDrop.
- [assignToContact](assigntocontact.md): A type of activity that assigns the image to a contact.
- [collaborationCopyLink](collaborationcopylink.md)
- [collaborationInviteWithLink](collaborationinvitewithlink.md)
- [copyToPasteboard](copytopasteboard.md): A type of activity that posts the provided content to the pasteboard.
- [mail](mail.md): A type of activity that posts the provided content to a new email message.
- [markupAsPDF](markupaspdf.md): A type of activity that marks up the provided content as a PDF file.
- [message](message.md): A type of activity that posts the provided content to the Messages app.
- [openInIBooks](openinibooks.md): A type of activity that opens the content in iBooks.
- [postToFacebook](posttofacebook.md): A type of activity that posts the provided content to the user’s wall on Facebook.
- [postToFlickr](posttoflickr.md): A type of activity that posts the provided image to the user’s Flickr account.
- [postToTencentWeibo](posttotencentweibo.md): A type of activity that posts the provided content to the user’s Tencent Weibo feed.
- [postToTwitter](posttotwitter.md): A type of activity that posts the provided content to the user’s Twitter feed.

# UIActivityTypeSaveToCameraRoll (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A type of activity that assigns the image or video to the user’s camera roll.

## Declaration

```objectivec
extern UIActivityType const UIActivityTypeSaveToCameraRoll;
```

<a id="Discussion"></a>

## Discussion

When using this service, you can provide a [UIImage](../../uiimage.md) object as data for image-based activity items. For image and video items, you can provide an [NSURL](../../../foundation/nsurl.md) object with a path to the video.

## See Also

### Constants

- [UIActivityTypeAddToHomeScreen](addtohomescreen.md)
- [UIActivityTypeAddToReadingList](addtoreadinglist.md): A type of activity that adds the URL to Safari’s reading list.
- [UIActivityTypeAirDrop](airdrop.md): A type of activity that makes the provided content available through AirDrop.
- [UIActivityTypeAssignToContact](assigntocontact.md): A type of activity that assigns the image to a contact.
- [UIActivityTypeCollaborationCopyLink](collaborationcopylink.md)
- [UIActivityTypeCollaborationInviteWithLink](collaborationinvitewithlink.md)
- [UIActivityTypeCopyToPasteboard](copytopasteboard.md): A type of activity that posts the provided content to the pasteboard.
- [UIActivityTypeMail](mail.md): A type of activity that posts the provided content to a new email message.
- [UIActivityTypeMarkupAsPDF](markupaspdf.md): A type of activity that marks up the provided content as a PDF file.
- [UIActivityTypeMessage](message.md): A type of activity that posts the provided content to the Messages app.
- [UIActivityTypeOpenInIBooks](openinibooks.md): A type of activity that opens the content in iBooks.
- [UIActivityTypePostToFacebook](posttofacebook.md): A type of activity that posts the provided content to the user’s wall on Facebook.
- [UIActivityTypePostToFlickr](posttoflickr.md): A type of activity that posts the provided image to the user’s Flickr account.
- [UIActivityTypePostToTencentWeibo](posttotencentweibo.md): A type of activity that posts the provided content to the user’s Tencent Weibo feed.
- [UIActivityTypePostToTwitter](posttotwitter.md): A type of activity that posts the provided content to the user’s Twitter feed.
