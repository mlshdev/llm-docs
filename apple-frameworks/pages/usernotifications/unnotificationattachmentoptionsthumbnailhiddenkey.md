> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationattachmentoptionsthumbnailhiddenkey](https://developer.apple.com/documentation/usernotifications/unnotificationattachmentoptionsthumbnailhiddenkey)

# UNNotificationAttachmentOptionsThumbnailHiddenKey (Swift)

**Framework:** User Notifications  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value indicating whether the system hides the attachment’s thumbnail.

## Declaration

```swift
let UNNotificationAttachmentOptionsThumbnailHiddenKey: String
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](../foundation/nsnumber.md) containing a Boolean value. When set to [true](https://developer.apple.com/documentation/swift/true), the attachment’s thumbnail isn’t displayed. If you don’t include this key, the system shows the thumbnail.

## See Also

### Creating an Attachment

- [init(identifier:url:options:)](unnotificationattachment/init%28identifier_url_options_%29-83grx.md): Creates an attachment object from the specified file and options.
- [UNNotificationAttachmentOptionsTypeHintKey](unnotificationattachmentoptionstypehintkey.md): A hint about an attachment’s file type.
- [UNNotificationAttachmentOptionsThumbnailClippingRectKey](unnotificationattachmentoptionsthumbnailclippingrectkey.md): The clipping rectangle for a thumbnail image.
- [UNNotificationAttachmentOptionsThumbnailTimeKey](unnotificationattachmentoptionsthumbnailtimekey.md): The frame number of an animation to use as a thumbnail image.

# UNNotificationAttachmentOptionsThumbnailHiddenKey (Objective-C)

**Framework:** User Notifications  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value indicating whether the system hides the attachment’s thumbnail.

## Declaration

```objectivec
extern NSString * const UNNotificationAttachmentOptionsThumbnailHiddenKey;
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](../foundation/nsnumber.md) containing a Boolean value. When set to [true](https://developer.apple.com/documentation/swift/true), the attachment’s thumbnail isn’t displayed. If you don’t include this key, the system shows the thumbnail.

## See Also

### Creating an Attachment

- [attachmentWithIdentifier:URL:options:error:](unnotificationattachment/init%28identifier_url_options_%29-83grx.md): Creates an attachment object from the specified file and options.
- [UNNotificationAttachmentOptionsTypeHintKey](unnotificationattachmentoptionstypehintkey.md): A hint about an attachment’s file type.
- [UNNotificationAttachmentOptionsThumbnailClippingRectKey](unnotificationattachmentoptionsthumbnailclippingrectkey.md): The clipping rectangle for a thumbnail image.
- [UNNotificationAttachmentOptionsThumbnailTimeKey](unnotificationattachmentoptionsthumbnailtimekey.md): The frame number of an animation to use as a thumbnail image.
