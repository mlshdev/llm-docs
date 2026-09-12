> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unerror/attachmentcorrupt](https://developer.apple.com/documentation/usernotifications/unerror/attachmentcorrupt)

# attachmentCorrupt

**Framework:** User Notifications  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The file for an attachment is corrupt.

## Declaration

```swift
static var attachmentCorrupt: UNError.Code { get }
```

## See Also

### Type Properties

- [notificationsNotAllowed](notificationsnotallowed.md): Notifications are not allowed.
- [attachmentInvalidURL](attachmentinvalidurl.md): The URL for an attachment was invalid.
- [attachmentUnrecognizedType](attachmentunrecognizedtype.md): The file type of an attachment is not supported.
- [attachmentInvalidFileSize](attachmentinvalidfilesize.md): An attachment is too large.
- [attachmentNotInDataStore](attachmentnotindatastore.md): The specified attachment is not in the system data store.
- [attachmentMoveIntoDataStoreFailed](attachmentmoveintodatastorefailed.md): An error occurred when trying to move an attachment to the system data store.
- [notificationInvalidNoDate](notificationinvalidnodate.md): The notification does not have an associated date, but should.
- [notificationInvalidNoContent](notificationinvalidnocontent.md): The notification has no user-facing content, but should.
- [contentProvidingInvalid](contentprovidinginvalid.md)
- [contentProvidingObjectNotAllowed](contentprovidingobjectnotallowed.md)
- [badgeInputInvalid](badgeinputinvalid.md)
