> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmailcomposeerror/code](https://developer.apple.com/documentation/messageui/mfmailcomposeerror/code)

# MFMailComposeError.Code (Swift)

**Framework:** Message UI  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Error codes for [NSError](../../foundation/nserror.md) objects that are associated with the mail composition interface.

## Declaration

```swift
enum Code
```

## Topics

### Constants

- [MFMailComposeError.Code.saveFailed](code/savefailed.md): An error occurred while trying to save the email message to the Drafts folder.
- [MFMailComposeError.Code.sendFailed](code/sendfailed.md): An error occurred while trying to queue or send the email message.

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

### Responding to errors

- [MFMailComposeError](../mfmailcomposeerror.md): Mail composition errors.
- [MFMailComposeErrorDomain](../mfmailcomposeerrordomain.md): The domain used for error objects that are associated with the mail composition interface.

# MFMailComposeErrorCode (Objective-C)

**Framework:** Message UI  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Error codes for [NSError](../../foundation/nserror.md) objects that are associated with the mail composition interface.

## Declaration

```objectivec
enum MFMailComposeErrorCode : NSInteger;
```

## Topics

### Constants

- [MFMailComposeErrorCodeSaveFailed](code/savefailed.md): An error occurred while trying to save the email message to the Drafts folder.
- [MFMailComposeErrorCodeSendFailed](code/sendfailed.md): An error occurred while trying to queue or send the email message.

## See Also

### Responding to errors

- [MFMailComposeErrorDomain](../mfmailcomposeerrordomain.md): The domain used for error objects that are associated with the mail composition interface.
