> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivity/activitytype-swift.struct/airdrop](https://developer.apple.com/documentation/uikit/uiactivity/activitytype-swift.struct/airdrop)

# airDrop (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A type of activity that makes the provided content available through AirDrop.

## Declaration

```swift
static let airDrop: UIActivity.ActivityType
```

<a id="Discussion"></a>

## Discussion

When using this service, you can provide [NSString](../../../foundation/nsstring.md), [NSAttributedString](../../../foundation/nsattributedstring.md), [UIImage](../../uiimage.md), and [NSURL](../../../foundation/nsurl.md) objects as data for the activity items. You may also provide [NSArray](../../../foundation/nsarray.md) or [NSDictionary](../../../foundation/nsdictionary.md) objects that contain the listed data types.

## See Also

### Constants

- [addToHomeScreen](addtohomescreen.md)
- [addToReadingList](addtoreadinglist.md): A type of activity that adds the URL to Safari’s reading list.
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
- [postToVimeo](posttovimeo.md): A type of activity that posts the provided video to the user’s Vimeo account.

# UIActivityTypeAirDrop (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A type of activity that makes the provided content available through AirDrop.

## Declaration

```objectivec
extern UIActivityType const UIActivityTypeAirDrop;
```

<a id="Discussion"></a>

## Discussion

When using this service, you can provide [NSString](../../../foundation/nsstring.md), [NSAttributedString](../../../foundation/nsattributedstring.md), [UIImage](../../uiimage.md), and [NSURL](../../../foundation/nsurl.md) objects as data for the activity items. You may also provide [NSArray](../../../foundation/nsarray.md) or [NSDictionary](../../../foundation/nsdictionary.md) objects that contain the listed data types.

## See Also

### Constants

- [UIActivityTypeAddToHomeScreen](addtohomescreen.md)
- [UIActivityTypeAddToReadingList](addtoreadinglist.md): A type of activity that adds the URL to Safari’s reading list.
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
- [UIActivityTypePostToVimeo](posttovimeo.md): A type of activity that posts the provided video to the user’s Vimeo account.
