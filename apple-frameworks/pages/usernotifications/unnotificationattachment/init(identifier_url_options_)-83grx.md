> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationattachment/init(identifier:url:options:)-83grx](https://developer.apple.com/documentation/usernotifications/unnotificationattachment/init(identifier:url:options:)-83grx)

# init(identifier:url:options:) (Swift)

**Framework:** User Notifications  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

Creates an attachment object from the specified file and options.

## Declaration

```swift
convenience init(identifier: String, url URL: URL, options: [AnyHashable : Any]? = nil) throws
```

## Parameters

- `identifier`: The unique identifier of the attachment. Use this string to identify the attachment later. If you specify an empty string, this method creates a unique identifier string for you.
- `URL`: The URL of the file you want to attach to the notification. The URL must be a file URL and the file must be readable by the current process. This parameter must not be `nil`. For a list of supported file types, see [Supported File Types](../unnotificationattachment.md#Supported-File-Types).
- `options`: A dictionary of options related to the attached file. Use the options to specify meta information about the attachment, such as the clipping rectangle to use for the resulting thumbnail.

<a id="return-value"></a>

## Return Value

An attachment object containing information about the specified file or `nil` if the attachment could not be created.

<a id="Discussion"></a>

## Discussion

This method verifies that the specified file is readable and that the file format is one of the supported types. When errors occur, the method provides an appropriate `error` object.

When you schedule a notification request containing the attachment, the system moves the attachment’s file to a new location to facilitate access by the appropriate processes. After the move, the only way to access the file is using the methods of the [UNUserNotificationCenter](../unusernotificationcenter.md) object.

## See Also

### Creating an Attachment

- [UNNotificationAttachmentOptionsTypeHintKey](../unnotificationattachmentoptionstypehintkey.md): A hint about an attachment’s file type.
- [UNNotificationAttachmentOptionsThumbnailHiddenKey](../unnotificationattachmentoptionsthumbnailhiddenkey.md): A Boolean value indicating whether the system hides the attachment’s thumbnail.
- [UNNotificationAttachmentOptionsThumbnailClippingRectKey](../unnotificationattachmentoptionsthumbnailclippingrectkey.md): The clipping rectangle for a thumbnail image.
- [UNNotificationAttachmentOptionsThumbnailTimeKey](../unnotificationattachmentoptionsthumbnailtimekey.md): The frame number of an animation to use as a thumbnail image.

# attachmentWithIdentifier:URL:options:error: (Objective-C)

**Framework:** User Notifications  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

Creates an attachment object from the specified file and options.

## Declaration

```objectivec
+ (instancetype) attachmentWithIdentifier:(NSString *) identifier URL:(NSURL *) URL options:(NSDictionary *) options error:(NSError **) error;
```

## Parameters

- `identifier`: The unique identifier of the attachment. Use this string to identify the attachment later. If you specify an empty string, this method creates a unique identifier string for you.
- `URL`: The URL of the file you want to attach to the notification. The URL must be a file URL and the file must be readable by the current process. This parameter must not be `nil`. For a list of supported file types, see [Supported File Types](../unnotificationattachment.md#Supported-File-Types).
- `options`: A dictionary of options related to the attached file. Use the options to specify meta information about the attachment, such as the clipping rectangle to use for the resulting thumbnail.
- `error`: An error object indicating whether a problem occurred. If the system creates the attachment successfully, it sets this parameter to `nil`. If an error occurs, it’s set to an error object containing information about why the attachment wasn’t created. You may specify `nil` for this parameter if you don’t want the error information.

<a id="return-value"></a>

## Return Value

An attachment object containing information about the specified file or `nil` if the attachment could not be created.

<a id="Discussion"></a>

## Discussion

This method verifies that the specified file is readable and that the file format is one of the supported types. When errors occur, the method provides an appropriate `error` object.

When you schedule a notification request containing the attachment, the system moves the attachment’s file to a new location to facilitate access by the appropriate processes. After the move, the only way to access the file is using the methods of the [UNUserNotificationCenter](../unusernotificationcenter.md) object.

## See Also

### Creating an Attachment

- [UNNotificationAttachmentOptionsTypeHintKey](../unnotificationattachmentoptionstypehintkey.md): A hint about an attachment’s file type.
- [UNNotificationAttachmentOptionsThumbnailHiddenKey](../unnotificationattachmentoptionsthumbnailhiddenkey.md): A Boolean value indicating whether the system hides the attachment’s thumbnail.
- [UNNotificationAttachmentOptionsThumbnailClippingRectKey](../unnotificationattachmentoptionsthumbnailclippingrectkey.md): The clipping rectangle for a thumbnail image.
- [UNNotificationAttachmentOptionsThumbnailTimeKey](../unnotificationattachmentoptionsthumbnailtimekey.md): The frame number of an animation to use as a thumbnail image.
