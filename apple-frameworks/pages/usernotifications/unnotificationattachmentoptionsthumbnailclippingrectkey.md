> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationattachmentoptionsthumbnailclippingrectkey](https://developer.apple.com/documentation/usernotifications/unnotificationattachmentoptionsthumbnailclippingrectkey)

# UNNotificationAttachmentOptionsThumbnailClippingRectKey (Swift)

**Framework:** User Notifications  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The clipping rectangle for a thumbnail image.

## Declaration

```swift
let UNNotificationAttachmentOptionsThumbnailClippingRectKey: String
```

<a id="Discussion"></a>

## Discussion

The value of this key is a dictionary containing a normalized [CGRect](../corefoundation/cgrect.md) — a unit rectangle whose values are in the range `0.0` to `1.0` and represent the portion of the original image that you want to display. For example, specifying an origin of (`0.25`, `0.25`) and a size of (`0.5`, `0.5`) defines a clipping rectangle that shows only the center portion of the image. Use the [dictionaryRepresentation](../corefoundation/cgrect/dictionaryrepresentation.md) function to create the dictionary for your rectangle.

## See Also

### Creating an Attachment

- [init(identifier:url:options:)](unnotificationattachment/init%28identifier_url_options_%29-83grx.md): Creates an attachment object from the specified file and options.
- [UNNotificationAttachmentOptionsTypeHintKey](unnotificationattachmentoptionstypehintkey.md): A hint about an attachment’s file type.
- [UNNotificationAttachmentOptionsThumbnailHiddenKey](unnotificationattachmentoptionsthumbnailhiddenkey.md): A Boolean value indicating whether the system hides the attachment’s thumbnail.
- [UNNotificationAttachmentOptionsThumbnailTimeKey](unnotificationattachmentoptionsthumbnailtimekey.md): The frame number of an animation to use as a thumbnail image.

# UNNotificationAttachmentOptionsThumbnailClippingRectKey (Objective-C)

**Framework:** User Notifications  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The clipping rectangle for a thumbnail image.

## Declaration

```objectivec
extern NSString * const UNNotificationAttachmentOptionsThumbnailClippingRectKey;
```

<a id="Discussion"></a>

## Discussion

The value of this key is a dictionary containing a normalized [CGRect](../corefoundation/cgrect.md) — a unit rectangle whose values are in the range `0.0` to `1.0` and represent the portion of the original image that you want to display. For example, specifying an origin of (`0.25`, `0.25`) and a size of (`0.5`, `0.5`) defines a clipping rectangle that shows only the center portion of the image. Use the [dictionaryRepresentation](../corefoundation/cgrect/dictionaryrepresentation.md) function to create the dictionary for your rectangle.

## See Also

### Creating an Attachment

- [attachmentWithIdentifier:URL:options:error:](unnotificationattachment/init%28identifier_url_options_%29-83grx.md): Creates an attachment object from the specified file and options.
- [UNNotificationAttachmentOptionsTypeHintKey](unnotificationattachmentoptionstypehintkey.md): A hint about an attachment’s file type.
- [UNNotificationAttachmentOptionsThumbnailHiddenKey](unnotificationattachmentoptionsthumbnailhiddenkey.md): A Boolean value indicating whether the system hides the attachment’s thumbnail.
- [UNNotificationAttachmentOptionsThumbnailTimeKey](unnotificationattachmentoptionsthumbnailtimekey.md): The frame number of an animation to use as a thumbnail image.
