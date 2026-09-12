> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmailcomposeresult/sent](https://developer.apple.com/documentation/messageui/mfmailcomposeresult/sent)

# MFMailComposeResult.sent (Swift)

**Framework:** Message UI  
**Kind:** Case  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The email message was queued in the user’s outbox.

## Declaration

```swift
case sent
```

<a id="Discussion"></a>

## Discussion

It is ready to send the next time the user connects to email.

## See Also

### Constants

- [MFMailComposeResult.cancelled](cancelled.md): The user canceled the operation.
- [MFMailComposeResult.saved](saved.md): The email message was saved in the user’s drafts folder.
- [MFMailComposeResult.failed](failed.md): The email message was not saved or queued, possibly due to an error.

# MFMailComposeResultSent (Objective-C)

**Framework:** Message UI  
**Kind:** Enumeration Case  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The email message was queued in the user’s outbox.

## Declaration

```objectivec
MFMailComposeResultSent
```

<a id="Discussion"></a>

## Discussion

It is ready to send the next time the user connects to email.

## See Also

### Constants

- [MFMailComposeResultCancelled](cancelled.md): The user canceled the operation.
- [MFMailComposeResultSaved](saved.md): The email message was saved in the user’s drafts folder.
- [MFMailComposeResultFailed](failed.md): The email message was not saved or queued, possibly due to an error.
