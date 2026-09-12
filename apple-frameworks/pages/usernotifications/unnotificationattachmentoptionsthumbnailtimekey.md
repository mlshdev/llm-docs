> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationattachmentoptionsthumbnailtimekey](https://developer.apple.com/documentation/usernotifications/unnotificationattachmentoptionsthumbnailtimekey)

# UNNotificationAttachmentOptionsThumbnailTimeKey (Swift)

**Framework:** User Notifications  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The frame number of an animation to use as a thumbnail image.

## Declaration

```swift
let UNNotificationAttachmentOptionsThumbnailTimeKey: String
```

<a id="Discussion"></a>

## Discussion

For animated images, the value of this key is an [NSNumber](../foundation/nsnumber.md) containing the frame number to use as the thumbnail. For movies, the value of this key is the time (in seconds) into the movie from which to grab the thumbnail image; you may also specify the value as a [CMTime](../coremedia/cmtime.md) structure encoded using the [CMTimeCopyAsDictionary(\_:allocator:)](../coremedia/cmtimecopyasdictionary%28__allocator_%29.md) function.

## See Also

### Creating an Attachment

- [init(identifier:url:options:)](unnotificationattachment/init%28identifier_url_options_%29-83grx.md): Creates an attachment object from the specified file and options.
- [UNNotificationAttachmentOptionsTypeHintKey](unnotificationattachmentoptionstypehintkey.md): A hint about an attachment’s file type.
- [UNNotificationAttachmentOptionsThumbnailHiddenKey](unnotificationattachmentoptionsthumbnailhiddenkey.md): A Boolean value indicating whether the system hides the attachment’s thumbnail.
- [UNNotificationAttachmentOptionsThumbnailClippingRectKey](unnotificationattachmentoptionsthumbnailclippingrectkey.md): The clipping rectangle for a thumbnail image.

# UNNotificationAttachmentOptionsThumbnailTimeKey (Objective-C)

**Framework:** User Notifications  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The frame number of an animation to use as a thumbnail image.

## Declaration

```objectivec
extern NSString * const UNNotificationAttachmentOptionsThumbnailTimeKey;
```

<a id="Discussion"></a>

## Discussion

For animated images, the value of this key is an [NSNumber](../foundation/nsnumber.md) containing the frame number to use as the thumbnail. For movies, the value of this key is the time (in seconds) into the movie from which to grab the thumbnail image; you may also specify the value as a [CMTime](../coremedia/cmtime.md) structure encoded using the [CMTimeCopyAsDictionary](../coremedia/cmtimecopyasdictionary%28__allocator_%29.md) function.

## See Also

### Creating an Attachment

- [attachmentWithIdentifier:URL:options:error:](unnotificationattachment/init%28identifier_url_options_%29-83grx.md): Creates an attachment object from the specified file and options.
- [UNNotificationAttachmentOptionsTypeHintKey](unnotificationattachmentoptionstypehintkey.md): A hint about an attachment’s file type.
- [UNNotificationAttachmentOptionsThumbnailHiddenKey](unnotificationattachmentoptionsthumbnailhiddenkey.md): A Boolean value indicating whether the system hides the attachment’s thumbnail.
- [UNNotificationAttachmentOptionsThumbnailClippingRectKey](unnotificationattachmentoptionsthumbnailclippingrectkey.md): The clipping rectangle for a thumbnail image.
