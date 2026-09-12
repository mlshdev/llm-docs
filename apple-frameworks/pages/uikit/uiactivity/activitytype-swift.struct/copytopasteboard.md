> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivity/activitytype-swift.struct/copytopasteboard](https://developer.apple.com/documentation/uikit/uiactivity/activitytype-swift.struct/copytopasteboard)

# copyToPasteboard (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A type of activity that posts the provided content to the pasteboard.

## Declaration

```swift
static let copyToPasteboard: UIActivity.ActivityType
```

<a id="Discussion"></a>

## Discussion

When using this service, you can provide [NSString](../../../foundation/nsstring.md), [UIImage](../../uiimage.md), [NSURL](../../../foundation/nsurl.md), [UIColor](../../uicolor.md), and [NSDictionary](../../../foundation/nsdictionary.md) objects as data for the activity items.

## See Also

### Constants

- [addToHomeScreen](addtohomescreen.md)
- [addToReadingList](addtoreadinglist.md): A type of activity that adds the URL to Safari’s reading list.
- [airDrop](airdrop.md): A type of activity that makes the provided content available through AirDrop.
- [assignToContact](assigntocontact.md): A type of activity that assigns the image to a contact.
- [collaborationCopyLink](collaborationcopylink.md)
- [collaborationInviteWithLink](collaborationinvitewithlink.md)
- [mail](mail.md): A type of activity that posts the provided content to a new email message.
- [markupAsPDF](markupaspdf.md): A type of activity that marks up the provided content as a PDF file.
- [message](message.md): A type of activity that posts the provided content to the Messages app.
- [openInIBooks](openinibooks.md): A type of activity that opens the content in iBooks.
- [postToFacebook](posttofacebook.md): A type of activity that posts the provided content to the user’s wall on Facebook.
- [postToFlickr](posttoflickr.md): A type of activity that posts the provided image to the user’s Flickr account.
- [postToTencentWeibo](posttotencentweibo.md): A type of activity that posts the provided content to the user’s Tencent Weibo feed.
- [postToTwitter](posttotwitter.md): A type of activity that posts the provided content to the user’s Twitter feed.
- [postToVimeo](posttovimeo.md): A type of activity that posts the provided video to the user’s Vimeo account.

# UIActivityTypeCopyToPasteboard (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A type of activity that posts the provided content to the pasteboard.

## Declaration

```objectivec
extern UIActivityType const UIActivityTypeCopyToPasteboard;
```

<a id="Discussion"></a>

## Discussion

When using this service, you can provide [NSString](../../../foundation/nsstring.md), [UIImage](../../uiimage.md), [NSURL](../../../foundation/nsurl.md), [UIColor](../../uicolor.md), and [NSDictionary](../../../foundation/nsdictionary.md) objects as data for the activity items.

## See Also

### Constants

- [UIActivityTypeAddToHomeScreen](addtohomescreen.md)
- [UIActivityTypeAddToReadingList](addtoreadinglist.md): A type of activity that adds the URL to Safari’s reading list.
- [UIActivityTypeAirDrop](airdrop.md): A type of activity that makes the provided content available through AirDrop.
- [UIActivityTypeAssignToContact](assigntocontact.md): A type of activity that assigns the image to a contact.
- [UIActivityTypeCollaborationCopyLink](collaborationcopylink.md)
- [UIActivityTypeCollaborationInviteWithLink](collaborationinvitewithlink.md)
- [UIActivityTypeMail](mail.md): A type of activity that posts the provided content to a new email message.
- [UIActivityTypeMarkupAsPDF](markupaspdf.md): A type of activity that marks up the provided content as a PDF file.
- [UIActivityTypeMessage](message.md): A type of activity that posts the provided content to the Messages app.
- [UIActivityTypeOpenInIBooks](openinibooks.md): A type of activity that opens the content in iBooks.
- [UIActivityTypePostToFacebook](posttofacebook.md): A type of activity that posts the provided content to the user’s wall on Facebook.
- [UIActivityTypePostToFlickr](posttoflickr.md): A type of activity that posts the provided image to the user’s Flickr account.
- [UIActivityTypePostToTencentWeibo](posttotencentweibo.md): A type of activity that posts the provided content to the user’s Tencent Weibo feed.
- [UIActivityTypePostToTwitter](posttotwitter.md): A type of activity that posts the provided content to the user’s Twitter feed.
- [UIActivityTypePostToVimeo](posttovimeo.md): A type of activity that posts the provided video to the user’s Vimeo account.
