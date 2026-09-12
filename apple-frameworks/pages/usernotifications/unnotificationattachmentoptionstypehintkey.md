> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationattachmentoptionstypehintkey](https://developer.apple.com/documentation/usernotifications/unnotificationattachmentoptionstypehintkey)

# UNNotificationAttachmentOptionsTypeHintKey (Swift)

**Framework:** User Notifications  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

A hint about an attachment’s file type.

## Declaration

```swift
let UNNotificationAttachmentOptionsTypeHintKey: String
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSString](../foundation/nsstring.md) containing a Uniform Type Identifier (UTI) that describes the file’s type. If you don’t include this key, the system uses the attachment’s filename extension to determine its type.

## See Also

### Creating an Attachment

- [init(identifier:url:options:)](unnotificationattachment/init%28identifier_url_options_%29-83grx.md): Creates an attachment object from the specified file and options.
- [UNNotificationAttachmentOptionsThumbnailHiddenKey](unnotificationattachmentoptionsthumbnailhiddenkey.md): A Boolean value indicating whether the system hides the attachment’s thumbnail.
- [UNNotificationAttachmentOptionsThumbnailClippingRectKey](unnotificationattachmentoptionsthumbnailclippingrectkey.md): The clipping rectangle for a thumbnail image.
- [UNNotificationAttachmentOptionsThumbnailTimeKey](unnotificationattachmentoptionsthumbnailtimekey.md): The frame number of an animation to use as a thumbnail image.

# UNNotificationAttachmentOptionsTypeHintKey (Objective-C)

**Framework:** User Notifications  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

A hint about an attachment’s file type.

## Declaration

```objectivec
extern NSString * const UNNotificationAttachmentOptionsTypeHintKey;
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSString](../foundation/nsstring.md) containing a Uniform Type Identifier (UTI) that describes the file’s type. If you don’t include this key, the system uses the attachment’s filename extension to determine its type.

## See Also

### Creating an Attachment

- [attachmentWithIdentifier:URL:options:error:](unnotificationattachment/init%28identifier_url_options_%29-83grx.md): Creates an attachment object from the specified file and options.
- [UNNotificationAttachmentOptionsThumbnailHiddenKey](unnotificationattachmentoptionsthumbnailhiddenkey.md): A Boolean value indicating whether the system hides the attachment’s thumbnail.
- [UNNotificationAttachmentOptionsThumbnailClippingRectKey](unnotificationattachmentoptionsthumbnailclippingrectkey.md): The clipping rectangle for a thumbnail image.
- [UNNotificationAttachmentOptionsThumbnailTimeKey](unnotificationattachmentoptionsthumbnailtimekey.md): The frame number of an animation to use as a thumbnail image.
