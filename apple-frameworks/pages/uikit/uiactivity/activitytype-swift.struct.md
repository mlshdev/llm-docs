> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivity/activitytype-swift.struct](https://developer.apple.com/documentation/uikit/uiactivity/activitytype-swift.struct)

# UIActivity.ActivityType (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A structure that describes the types of activities for which the system has built-in support.

## Declaration

```swift
struct ActivityType
```

<a id="overview"></a>

## Overview

These constants represent the values that can be stored in the [activityType](activitytype-swift.property.md) property of system-defined activity objects.

## Topics

### Constants

- [addToHomeScreen](activitytype-swift.struct/addtohomescreen.md)
- [addToReadingList](activitytype-swift.struct/addtoreadinglist.md): A type of activity that adds the URL to Safari’s reading list.
- [airDrop](activitytype-swift.struct/airdrop.md): A type of activity that makes the provided content available through AirDrop.
- [assignToContact](activitytype-swift.struct/assigntocontact.md): A type of activity that assigns the image to a contact.
- [collaborationCopyLink](activitytype-swift.struct/collaborationcopylink.md)
- [collaborationInviteWithLink](activitytype-swift.struct/collaborationinvitewithlink.md)
- [copyToPasteboard](activitytype-swift.struct/copytopasteboard.md): A type of activity that posts the provided content to the pasteboard.
- [mail](activitytype-swift.struct/mail.md): A type of activity that posts the provided content to a new email message.
- [markupAsPDF](activitytype-swift.struct/markupaspdf.md): A type of activity that marks up the provided content as a PDF file.
- [message](activitytype-swift.struct/message.md): A type of activity that posts the provided content to the Messages app.
- [openInIBooks](activitytype-swift.struct/openinibooks.md): A type of activity that opens the content in iBooks.
- [postToFacebook](activitytype-swift.struct/posttofacebook.md): A type of activity that posts the provided content to the user’s wall on Facebook.
- [postToFlickr](activitytype-swift.struct/posttoflickr.md): A type of activity that posts the provided image to the user’s Flickr account.
- [postToTencentWeibo](activitytype-swift.struct/posttotencentweibo.md): A type of activity that posts the provided content to the user’s Tencent Weibo feed.
- [postToTwitter](activitytype-swift.struct/posttotwitter.md): A type of activity that posts the provided content to the user’s Twitter feed.
- [postToVimeo](activitytype-swift.struct/posttovimeo.md): A type of activity that posts the provided video to the user’s Vimeo account.
- [postToWeibo](activitytype-swift.struct/posttoweibo.md): A type of activity that posts the provided content to the user’s Weibo feed.
- [print](activitytype-swift.struct/print.md): A type of activity that prints the provided content.
- [saveToCameraRoll](activitytype-swift.struct/savetocameraroll.md): A type of activity that assigns the image or video to the user’s camera roll.
- [sharePlay](activitytype-swift.struct/shareplay.md): A type of activity that makes the provided content available through SharePlay.

### Initializers

- [init(\_:)](activitytype-swift.struct/init%28__%29.md): Creates an activity type.
- [init(rawValue:)](activitytype-swift.struct/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the activity information

- [activityCategory](activitycategory.md): The category of the activity, which may be used to group activities in the UI.
- [UIActivity.Category](category.md): An enumeration that defines categories of activities.
- [activityType](activitytype-swift.property.md): The type of service being provided.
- [activityTitle](activitytitle.md): A user-readable string that describes the service.
- [activityImage](activityimage.md): An image that identifies the service to the user.

# UIActivityType (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A structure that describes the types of activities for which the system has built-in support.

## Declaration

```objectivec
typedef NSString * UIActivityType;
```

<a id="overview"></a>

## Overview

These constants represent the values that can be stored in the [activityType](activitytype-swift.property.md) property of system-defined activity objects.

## Topics

### Constants

- [UIActivityTypeAddToHomeScreen](activitytype-swift.struct/addtohomescreen.md)
- [UIActivityTypeAddToReadingList](activitytype-swift.struct/addtoreadinglist.md): A type of activity that adds the URL to Safari’s reading list.
- [UIActivityTypeAirDrop](activitytype-swift.struct/airdrop.md): A type of activity that makes the provided content available through AirDrop.
- [UIActivityTypeAssignToContact](activitytype-swift.struct/assigntocontact.md): A type of activity that assigns the image to a contact.
- [UIActivityTypeCollaborationCopyLink](activitytype-swift.struct/collaborationcopylink.md)
- [UIActivityTypeCollaborationInviteWithLink](activitytype-swift.struct/collaborationinvitewithlink.md)
- [UIActivityTypeCopyToPasteboard](activitytype-swift.struct/copytopasteboard.md): A type of activity that posts the provided content to the pasteboard.
- [UIActivityTypeMail](activitytype-swift.struct/mail.md): A type of activity that posts the provided content to a new email message.
- [UIActivityTypeMarkupAsPDF](activitytype-swift.struct/markupaspdf.md): A type of activity that marks up the provided content as a PDF file.
- [UIActivityTypeMessage](activitytype-swift.struct/message.md): A type of activity that posts the provided content to the Messages app.
- [UIActivityTypeOpenInIBooks](activitytype-swift.struct/openinibooks.md): A type of activity that opens the content in iBooks.
- [UIActivityTypePostToFacebook](activitytype-swift.struct/posttofacebook.md): A type of activity that posts the provided content to the user’s wall on Facebook.
- [UIActivityTypePostToFlickr](activitytype-swift.struct/posttoflickr.md): A type of activity that posts the provided image to the user’s Flickr account.
- [UIActivityTypePostToTencentWeibo](activitytype-swift.struct/posttotencentweibo.md): A type of activity that posts the provided content to the user’s Tencent Weibo feed.
- [UIActivityTypePostToTwitter](activitytype-swift.struct/posttotwitter.md): A type of activity that posts the provided content to the user’s Twitter feed.
- [UIActivityTypePostToVimeo](activitytype-swift.struct/posttovimeo.md): A type of activity that posts the provided video to the user’s Vimeo account.
- [UIActivityTypePostToWeibo](activitytype-swift.struct/posttoweibo.md): A type of activity that posts the provided content to the user’s Weibo feed.
- [UIActivityTypePrint](activitytype-swift.struct/print.md): A type of activity that prints the provided content.
- [UIActivityTypeSaveToCameraRoll](activitytype-swift.struct/savetocameraroll.md): A type of activity that assigns the image or video to the user’s camera roll.
- [UIActivityTypeSharePlay](activitytype-swift.struct/shareplay.md): A type of activity that makes the provided content available through SharePlay.

## See Also

### Getting the activity information

- [activityCategory](activitycategory.md): The category of the activity, which may be used to group activities in the UI.
- [UIActivityCategory](category.md): An enumeration that defines categories of activities.
- [activityType](activitytype-swift.property.md): The type of service being provided.
- [activityTitle](activitytitle.md): A user-readable string that describes the service.
- [activityImage](activityimage.md): An image that identifies the service to the user.
