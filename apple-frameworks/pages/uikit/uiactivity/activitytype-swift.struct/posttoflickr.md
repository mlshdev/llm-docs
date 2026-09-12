> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivity/activitytype-swift.struct/posttoflickr](https://developer.apple.com/documentation/uikit/uiactivity/activitytype-swift.struct/posttoflickr)

# postToFlickr (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A type of activity that posts the provided image to the user’s Flickr account.

## Declaration

```swift
static let postToFlickr: UIActivity.ActivityType
```

<a id="Discussion"></a>

## Discussion

When using this service, you can provide [UIImage](../../uiimage.md) and [NSURL](../../../foundation/nsurl.md) objects whose contents use the file scheme and point to an image. You can also use [NSData](../../../foundation/nsdata.md) objects whose contents are image data as data for the activity items.

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
- [postToTencentWeibo](posttotencentweibo.md): A type of activity that posts the provided content to the user’s Tencent Weibo feed.
- [postToTwitter](posttotwitter.md): A type of activity that posts the provided content to the user’s Twitter feed.
- [postToVimeo](posttovimeo.md): A type of activity that posts the provided video to the user’s Vimeo account.

# UIActivityTypePostToFlickr (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A type of activity that posts the provided image to the user’s Flickr account.

## Declaration

```objectivec
extern UIActivityType const UIActivityTypePostToFlickr;
```

<a id="Discussion"></a>

## Discussion

When using this service, you can provide [UIImage](../../uiimage.md) and [NSURL](../../../foundation/nsurl.md) objects whose contents use the file scheme and point to an image. You can also use [NSData](../../../foundation/nsdata.md) objects whose contents are image data as data for the activity items.

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
- [UIActivityTypePostToTencentWeibo](posttotencentweibo.md): A type of activity that posts the provided content to the user’s Tencent Weibo feed.
- [UIActivityTypePostToTwitter](posttotwitter.md): A type of activity that posts the provided content to the user’s Twitter feed.
- [UIActivityTypePostToVimeo](posttovimeo.md): A type of activity that posts the provided video to the user’s Vimeo account.
