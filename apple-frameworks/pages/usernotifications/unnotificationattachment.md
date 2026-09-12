> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationattachment](https://developer.apple.com/documentation/usernotifications/unnotificationattachment)

# UNNotificationAttachment (Swift)

**Framework:** User Notifications  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

A media file associated with a notification.

## Declaration

```swift
class UNNotificationAttachment
```

<a id="overview"></a>

## Overview

Create a [UNNotificationAttachment](unnotificationattachment.md) object when you want to include audio, image, or video content together in an alert-based notification. When creating the [UNNotificationAttachment](unnotificationattachment.md) object, the file you specify must be on disk, and the file format must be one of the supported types.

You’re responsible for supplying attachments before the system displays your notification’s alert. For local notifications, add attachments when creating the notification’s content. For remote notifications, use a notification service app extension to download the attached files and then add them to the notification’s content before delivery.

The system validates attachments before displaying the associated notification. If you attach a file to a local notification request that’s corrupted, invalid, or of an unsupported file type, the system doesn’t schedule your request. For remote notifications, the system validates attachments after your notification service app extension finishes. Once validated, the system moves the attached files into the attachment data store so that the appropriate processes can access the files. The system copies attachments located inside an app’s bundle.

<a id="Supported-File-Types"></a>

### Supported File Types

Table 1 lists the types of files you can include as an attachment and the supported file formats. The table also lists the maximum size allowed for attachments of each type. An image file may contain a static image or an animated image sequence.

Table 1. Supported attachment file types

| Attachment | Supported file types | Maximum size |
| --- | --- | --- |
| Audio | `kUTTypeAudioInterchangeFileFormat` ![](https://developer.apple.com/images/com.apple.usernotifications/spacer.png) `kUTTypeWaveformAudio` ![](https://developer.apple.com/images/com.apple.usernotifications/spacer.png) `kUTTypeMP3` ![](https://developer.apple.com/images/com.apple.usernotifications/spacer.png) `kUTTypeMPEG4Audio` | 5 MB |
| Image | `kUTTypeJPEG` ![](https://developer.apple.com/images/com.apple.usernotifications/spacer.png) `kUTTypeGIF` ![](https://developer.apple.com/images/com.apple.usernotifications/spacer.png) `kUTTypePNG` | 10 MB |
| Movie | `kUTTypeMPEG` ![](https://developer.apple.com/images/com.apple.usernotifications/spacer.png) `kUTTypeMPEG2Video` ![](https://developer.apple.com/images/com.apple.usernotifications/spacer.png) `kUTTypeMPEG4` ![](https://developer.apple.com/images/com.apple.usernotifications/spacer.png) `kUTTypeAVIMovie` | 50 MB |

When creating an attachment, you can specify optional details about how to present the thumbnail image for the image or movie. Use the [UNNotificationAttachmentOptionsThumbnailClippingRectKey](unnotificationattachmentoptionsthumbnailclippingrectkey.md) option to use only the specified portion of an image as a thumbnail. For animated images and movies, use the [UNNotificationAttachmentOptionsThumbnailTimeKey](unnotificationattachmentoptionsthumbnailtimekey.md) option to select which frame to use for the thumbnail image.

The system limits the amount of storage space allocated for attachments for each app. To delete attachments, use the methods of the [UNUserNotificationCenter](unusernotificationcenter.md) class to remove the notification requests that contain those attachments.

## Topics

### Creating an Attachment

- [init(identifier:url:options:)](unnotificationattachment/init%28identifier_url_options_%29-83grx.md): Creates an attachment object from the specified file and options.
- [UNNotificationAttachmentOptionsTypeHintKey](unnotificationattachmentoptionstypehintkey.md): A hint about an attachment’s file type.
- [UNNotificationAttachmentOptionsThumbnailHiddenKey](unnotificationattachmentoptionsthumbnailhiddenkey.md): A Boolean value indicating whether the system hides the attachment’s thumbnail.
- [UNNotificationAttachmentOptionsThumbnailClippingRectKey](unnotificationattachmentoptionsthumbnailclippingrectkey.md): The clipping rectangle for a thumbnail image.
- [UNNotificationAttachmentOptionsThumbnailTimeKey](unnotificationattachmentoptionsthumbnailtimekey.md): The frame number of an animation to use as a thumbnail image.

### Getting the Attachment Contents

- [identifier](unnotificationattachment/identifier.md): The unique identifier for the attachment.
- [url](unnotificationattachment/url.md): The URL of the file for this attachment.
- [type](unnotificationattachment/type.md): The UTI type of the attachment.

### Initializers

- [init(coder:)](unnotificationattachment/init%28coder_%29.md)
- [init(identifier:URL:options:)](unnotificationattachment/init%28identifier_url_options_%29-7oony.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Notification content

- [Implementing communication notifications](implementing-communication-notifications.md): Configure and display your app’s communication notifications by using intents.
- [UNNotificationContentProviding](unnotificationcontentproviding.md): A protocol the system uses to provide context relevant to user notifications.
- [UNNotificationActionIcon](unnotificationactionicon.md): An icon associated with an action.
- [UNMutableNotificationContent](unmutablenotificationcontent.md): The editable content for a notification.
- [UNNotificationContent](unnotificationcontent.md): The uneditable content of a notification.
- [UNNotificationSound](unnotificationsound.md): The sound played upon delivery of a notification.
- [UNNotificationSoundName](unnotificationsoundname.md): A string providing the name of a sound file.

# UNNotificationAttachment (Objective-C)

**Framework:** User Notifications  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

A media file associated with a notification.

## Declaration

```objectivec
@interface UNNotificationAttachment : NSObject
```

<a id="overview"></a>

## Overview

Create a [UNNotificationAttachment](unnotificationattachment.md) object when you want to include audio, image, or video content together in an alert-based notification. When creating the [UNNotificationAttachment](unnotificationattachment.md) object, the file you specify must be on disk, and the file format must be one of the supported types.

You’re responsible for supplying attachments before the system displays your notification’s alert. For local notifications, add attachments when creating the notification’s content. For remote notifications, use a notification service app extension to download the attached files and then add them to the notification’s content before delivery.

The system validates attachments before displaying the associated notification. If you attach a file to a local notification request that’s corrupted, invalid, or of an unsupported file type, the system doesn’t schedule your request. For remote notifications, the system validates attachments after your notification service app extension finishes. Once validated, the system moves the attached files into the attachment data store so that the appropriate processes can access the files. The system copies attachments located inside an app’s bundle.

<a id="Supported-File-Types"></a>

### Supported File Types

Table 1 lists the types of files you can include as an attachment and the supported file formats. The table also lists the maximum size allowed for attachments of each type. An image file may contain a static image or an animated image sequence.

Table 1. Supported attachment file types

| Attachment | Supported file types | Maximum size |
| --- | --- | --- |
| Audio | `kUTTypeAudioInterchangeFileFormat` ![](https://developer.apple.com/images/com.apple.usernotifications/spacer.png) `kUTTypeWaveformAudio` ![](https://developer.apple.com/images/com.apple.usernotifications/spacer.png) `kUTTypeMP3` ![](https://developer.apple.com/images/com.apple.usernotifications/spacer.png) `kUTTypeMPEG4Audio` | 5 MB |
| Image | `kUTTypeJPEG` ![](https://developer.apple.com/images/com.apple.usernotifications/spacer.png) `kUTTypeGIF` ![](https://developer.apple.com/images/com.apple.usernotifications/spacer.png) `kUTTypePNG` | 10 MB |
| Movie | `kUTTypeMPEG` ![](https://developer.apple.com/images/com.apple.usernotifications/spacer.png) `kUTTypeMPEG2Video` ![](https://developer.apple.com/images/com.apple.usernotifications/spacer.png) `kUTTypeMPEG4` ![](https://developer.apple.com/images/com.apple.usernotifications/spacer.png) `kUTTypeAVIMovie` | 50 MB |

When creating an attachment, you can specify optional details about how to present the thumbnail image for the image or movie. Use the [UNNotificationAttachmentOptionsThumbnailClippingRectKey](unnotificationattachmentoptionsthumbnailclippingrectkey.md) option to use only the specified portion of an image as a thumbnail. For animated images and movies, use the [UNNotificationAttachmentOptionsThumbnailTimeKey](unnotificationattachmentoptionsthumbnailtimekey.md) option to select which frame to use for the thumbnail image.

The system limits the amount of storage space allocated for attachments for each app. To delete attachments, use the methods of the [UNUserNotificationCenter](unusernotificationcenter.md) class to remove the notification requests that contain those attachments.

## Topics

### Creating an Attachment

- [attachmentWithIdentifier:URL:options:error:](unnotificationattachment/init%28identifier_url_options_%29-83grx.md): Creates an attachment object from the specified file and options.
- [UNNotificationAttachmentOptionsTypeHintKey](unnotificationattachmentoptionstypehintkey.md): A hint about an attachment’s file type.
- [UNNotificationAttachmentOptionsThumbnailHiddenKey](unnotificationattachmentoptionsthumbnailhiddenkey.md): A Boolean value indicating whether the system hides the attachment’s thumbnail.
- [UNNotificationAttachmentOptionsThumbnailClippingRectKey](unnotificationattachmentoptionsthumbnailclippingrectkey.md): The clipping rectangle for a thumbnail image.
- [UNNotificationAttachmentOptionsThumbnailTimeKey](unnotificationattachmentoptionsthumbnailtimekey.md): The frame number of an animation to use as a thumbnail image.

### Getting the Attachment Contents

- [identifier](unnotificationattachment/identifier.md): The unique identifier for the attachment.
- [URL](unnotificationattachment/url.md): The URL of the file for this attachment.
- [type](unnotificationattachment/type.md): The UTI type of the attachment.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Notification content

- [Implementing communication notifications](implementing-communication-notifications.md): Configure and display your app’s communication notifications by using intents.
- [UNNotificationContentProviding](unnotificationcontentproviding.md): A protocol the system uses to provide context relevant to user notifications.
- [UNNotificationActionIcon](unnotificationactionicon.md): An icon associated with an action.
- [UNMutableNotificationContent](unmutablenotificationcontent.md): The editable content for a notification.
- [UNNotificationContent](unnotificationcontent.md): The uneditable content of a notification.
- [UNNotificationSound](unnotificationsound.md): The sound played upon delivery of a notification.
- [UNNotificationSoundName](unnotificationsoundname.md): A string providing the name of a sound file.
