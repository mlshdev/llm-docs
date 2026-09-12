> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unerror/code/notificationsnotallowed](https://developer.apple.com/documentation/usernotifications/unerror/code/notificationsnotallowed)

# UNError.Code.notificationsNotAllowed (Swift)

**Framework:** User Notifications  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Notifications aren’t allowed.

## Declaration

```swift
case notificationsNotAllowed
```

<a id="Discussion"></a>

## Discussion

This error occurs when you try to submit a notification request and your app or app extension isn’t authorized to schedule notifications.

## See Also

### Constants

- [UNError.Code.attachmentInvalidURL](attachmentinvalidurl.md): The URL for an attachment was invalid.
- [UNError.Code.attachmentUnrecognizedType](attachmentunrecognizedtype.md): The file type of an attachment isn’t supported.
- [UNError.Code.attachmentInvalidFileSize](attachmentinvalidfilesize.md): An attachment is too large.
- [UNError.Code.attachmentNotInDataStore](attachmentnotindatastore.md): The specified attachment isn’t in the system data store.
- [UNError.Code.attachmentMoveIntoDataStoreFailed](attachmentmoveintodatastorefailed.md): An error occurred when trying to move an attachment to the system data store.
- [UNError.Code.attachmentCorrupt](attachmentcorrupt.md): The file for an attachment is corrupt.
- [UNError.Code.notificationInvalidNoDate](notificationinvalidnodate.md): The notification doesn’t have an associated date, but should.
- [UNError.Code.notificationInvalidNoContent](notificationinvalidnocontent.md): The notification has no user-facing content, but should.
- [UNError.Code.contentProvidingInvalid](contentprovidinginvalid.md)
- [UNError.Code.contentProvidingObjectNotAllowed](contentprovidingobjectnotallowed.md)

# UNErrorCodeNotificationsNotAllowed (Objective-C)

**Framework:** User Notifications  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Notifications aren’t allowed.

## Declaration

```objectivec
UNErrorCodeNotificationsNotAllowed
```

<a id="Discussion"></a>

## Discussion

This error occurs when you try to submit a notification request and your app or app extension isn’t authorized to schedule notifications.

## See Also

### Constants

- [UNErrorCodeAttachmentInvalidURL](attachmentinvalidurl.md): The URL for an attachment was invalid.
- [UNErrorCodeAttachmentUnrecognizedType](attachmentunrecognizedtype.md): The file type of an attachment isn’t supported.
- [UNErrorCodeAttachmentInvalidFileSize](attachmentinvalidfilesize.md): An attachment is too large.
- [UNErrorCodeAttachmentNotInDataStore](attachmentnotindatastore.md): The specified attachment isn’t in the system data store.
- [UNErrorCodeAttachmentMoveIntoDataStoreFailed](attachmentmoveintodatastorefailed.md): An error occurred when trying to move an attachment to the system data store.
- [UNErrorCodeAttachmentCorrupt](attachmentcorrupt.md): The file for an attachment is corrupt.
- [UNErrorCodeNotificationInvalidNoDate](notificationinvalidnodate.md): The notification doesn’t have an associated date, but should.
- [UNErrorCodeNotificationInvalidNoContent](notificationinvalidnocontent.md): The notification has no user-facing content, but should.
- [UNErrorCodeContentProvidingInvalid](contentprovidinginvalid.md)
- [UNErrorCodeContentProvidingObjectNotAllowed](contentprovidingobjectnotallowed.md)
