> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unerror](https://developer.apple.com/documentation/usernotifications/unerror)

# UNError

**Framework:** User Notifications  
**Kind:** Structure  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An object that represents a notification error.

## Declaration

```swift
struct UNError
```

## Topics

### Type Properties

- [notificationsNotAllowed](unerror/notificationsnotallowed.md): Notifications are not allowed.
- [attachmentInvalidURL](unerror/attachmentinvalidurl.md): The URL for an attachment was invalid.
- [attachmentUnrecognizedType](unerror/attachmentunrecognizedtype.md): The file type of an attachment is not supported.
- [attachmentInvalidFileSize](unerror/attachmentinvalidfilesize.md): An attachment is too large.
- [attachmentNotInDataStore](unerror/attachmentnotindatastore.md): The specified attachment is not in the system data store.
- [attachmentMoveIntoDataStoreFailed](unerror/attachmentmoveintodatastorefailed.md): An error occurred when trying to move an attachment to the system data store.
- [attachmentCorrupt](unerror/attachmentcorrupt.md): The file for an attachment is corrupt.
- [notificationInvalidNoDate](unerror/notificationinvalidnodate.md): The notification does not have an associated date, but should.
- [notificationInvalidNoContent](unerror/notificationinvalidnocontent.md): The notification has no user-facing content, but should.
- [contentProvidingInvalid](unerror/contentprovidinginvalid.md)
- [contentProvidingObjectNotAllowed](unerror/contentprovidingobjectnotallowed.md)
- [badgeInputInvalid](unerror/badgeinputinvalid.md)

### Error Information

- [errorDomain](unerror/errordomain.md)
- [UNErrorDomain](unerrordomain.md): The error domain for notifications.
- [UNError.Code](unerror/code.md): Constants that identify notification errors.

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling errors

- [UNError.Code](unerror/code.md): Constants that identify notification errors.
- [UNErrorDomain](unerrordomain.md): The error domain for notifications.
