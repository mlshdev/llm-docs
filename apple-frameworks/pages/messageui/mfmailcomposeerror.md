> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmailcomposeerror](https://developer.apple.com/documentation/messageui/mfmailcomposeerror)

# MFMailComposeError

**Framework:** Message UI  
**Kind:** Structure  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Mail composition errors.

## Declaration

```swift
struct MFMailComposeError
```

## Topics

### Errors

- [errorDomain](mfmailcomposeerror/errordomain.md): The domain for errors related to mail composition.
- [saveFailed](mfmailcomposeerror/savefailed.md): An error occurred while trying to save the email message to the drafts folder.
- [sendFailed](mfmailcomposeerror/sendfailed.md): An error occurred while trying to queue or send the email message.
- [MFMailComposeError.Code](mfmailcomposeerror/code.md): Error codes for [NSError](../foundation/nserror.md) objects that are associated with the mail composition interface.

### Error Configuration

- [errorDomain](mfmailcomposeerror/errordomain.md): The domain for errors related to mail composition.

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Responding to errors

- [MFMailComposeErrorDomain](mfmailcomposeerrordomain.md): The domain used for error objects that are associated with the mail composition interface.
- [MFMailComposeError.Code](mfmailcomposeerror/code.md): Error codes for [NSError](../foundation/nserror.md) objects that are associated with the mail composition interface.
