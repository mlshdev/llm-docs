> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmailcomposeresult](https://developer.apple.com/documentation/messageui/mfmailcomposeresult)

# MFMailComposeResult (Swift)

**Framework:** Message UI  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Result codes returned when the mail composition interface is dismissed.

## Declaration

```swift
enum MFMailComposeResult
```

## Topics

### Constants

- [MFMailComposeResult.cancelled](mfmailcomposeresult/cancelled.md): The user canceled the operation.
- [MFMailComposeResult.saved](mfmailcomposeresult/saved.md): The email message was saved in the user’s drafts folder.
- [MFMailComposeResult.sent](mfmailcomposeresult/sent.md): The email message was queued in the user’s outbox.
- [MFMailComposeResult.failed](mfmailcomposeresult/failed.md): The email message was not saved or queued, possibly due to an error.

### Initializers

- [init(rawValue:)](mfmailcomposeresult/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Responding to Email Completion

- [mailComposeController(\_:didFinishWith:error:)](mfmailcomposeviewcontrollerdelegate/mailcomposecontroller%28__didfinishwith_error_%29.md): Tells the delegate that the user wants to dismiss the mail composition view.

# MFMailComposeResult (Objective-C)

**Framework:** Message UI  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Result codes returned when the mail composition interface is dismissed.

## Declaration

```objectivec
enum MFMailComposeResult : NSInteger;
```

## Topics

### Constants

- [MFMailComposeResultCancelled](mfmailcomposeresult/cancelled.md): The user canceled the operation.
- [MFMailComposeResultSaved](mfmailcomposeresult/saved.md): The email message was saved in the user’s drafts folder.
- [MFMailComposeResultSent](mfmailcomposeresult/sent.md): The email message was queued in the user’s outbox.
- [MFMailComposeResultFailed](mfmailcomposeresult/failed.md): The email message was not saved or queued, possibly due to an error.

## See Also

### Responding to Email Completion

- [mailComposeController:didFinishWithResult:error:](mfmailcomposeviewcontrollerdelegate/mailcomposecontroller%28__didfinishwith_error_%29.md): Tells the delegate that the user wants to dismiss the mail composition view.
