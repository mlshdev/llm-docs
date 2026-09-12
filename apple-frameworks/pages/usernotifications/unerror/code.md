> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unerror/code](https://developer.apple.com/documentation/usernotifications/unerror/code)

# UNError.Code (Swift)

**Framework:** User Notifications  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Constants that identify notification errors.

## Declaration

```swift
enum Code
```

## Topics

### Constants

- [UNError.Code.notificationsNotAllowed](code/notificationsnotallowed.md): Notifications aren’t allowed.
- [UNError.Code.attachmentInvalidURL](code/attachmentinvalidurl.md): The URL for an attachment was invalid.
- [UNError.Code.attachmentUnrecognizedType](code/attachmentunrecognizedtype.md): The file type of an attachment isn’t supported.
- [UNError.Code.attachmentInvalidFileSize](code/attachmentinvalidfilesize.md): An attachment is too large.
- [UNError.Code.attachmentNotInDataStore](code/attachmentnotindatastore.md): The specified attachment isn’t in the system data store.
- [UNError.Code.attachmentMoveIntoDataStoreFailed](code/attachmentmoveintodatastorefailed.md): An error occurred when trying to move an attachment to the system data store.
- [UNError.Code.attachmentCorrupt](code/attachmentcorrupt.md): The file for an attachment is corrupt.
- [UNError.Code.notificationInvalidNoDate](code/notificationinvalidnodate.md): The notification doesn’t have an associated date, but should.
- [UNError.Code.notificationInvalidNoContent](code/notificationinvalidnocontent.md): The notification has no user-facing content, but should.
- [UNError.Code.contentProvidingInvalid](code/contentprovidinginvalid.md)
- [UNError.Code.contentProvidingObjectNotAllowed](code/contentprovidingobjectnotallowed.md)

### Enumeration Cases

- [UNError.Code.badgeInputInvalid](code/badgeinputinvalid.md)

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling errors

- [UNError](../unerror.md): An object that represents a notification error.
- [UNErrorDomain](../unerrordomain.md): The error domain for notifications.

# UNErrorCode (Objective-C)

**Framework:** User Notifications  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Constants that identify notification errors.

## Declaration

```objectivec
enum UNErrorCode : NSInteger;
```

## Topics

### Constants

- [UNErrorCodeNotificationsNotAllowed](code/notificationsnotallowed.md): Notifications aren’t allowed.
- [UNErrorCodeAttachmentInvalidURL](code/attachmentinvalidurl.md): The URL for an attachment was invalid.
- [UNErrorCodeAttachmentUnrecognizedType](code/attachmentunrecognizedtype.md): The file type of an attachment isn’t supported.
- [UNErrorCodeAttachmentInvalidFileSize](code/attachmentinvalidfilesize.md): An attachment is too large.
- [UNErrorCodeAttachmentNotInDataStore](code/attachmentnotindatastore.md): The specified attachment isn’t in the system data store.
- [UNErrorCodeAttachmentMoveIntoDataStoreFailed](code/attachmentmoveintodatastorefailed.md): An error occurred when trying to move an attachment to the system data store.
- [UNErrorCodeAttachmentCorrupt](code/attachmentcorrupt.md): The file for an attachment is corrupt.
- [UNErrorCodeNotificationInvalidNoDate](code/notificationinvalidnodate.md): The notification doesn’t have an associated date, but should.
- [UNErrorCodeNotificationInvalidNoContent](code/notificationinvalidnocontent.md): The notification has no user-facing content, but should.
- [UNErrorCodeContentProvidingInvalid](code/contentprovidinginvalid.md)
- [UNErrorCodeContentProvidingObjectNotAllowed](code/contentprovidingobjectnotallowed.md)

### Enumeration Cases

- [UNErrorCodeBadgeInputInvalid](code/badgeinputinvalid.md)

## See Also

### Handling errors

- [UNErrorDomain](../unerrordomain.md): The error domain for notifications.
