> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmailcomposeviewcontrollerdelegate/mailcomposecontroller(_:didfinishwith:error:)](https://developer.apple.com/documentation/messageui/mfmailcomposeviewcontrollerdelegate/mailcomposecontroller(_:didfinishwith:error:))

# mailComposeController(\_:didFinishWith:error:) (Swift)

**Framework:** Message UI  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the user wants to dismiss the mail composition view.

## Declaration

```swift
optional func mailComposeController(_ controller: MFMailComposeViewController, didFinishWith result: MFMailComposeResult, error: (any Error)?)
```

## Parameters

- `controller`: The view controller object that manages the mail composition view.
- `result`: The result of the user’s action.
- `error`: If an error occurred, this parameter contains an error object with information about the type of failure.

<a id="Discussion"></a>

## Discussion

Your implementation of this method should dismiss the mail composition view. Implementation of this method is optional, but expected.

If the user has opted to send the email created by this interface, that email should be queued in the user’s Mail program by the time this method is called. If an error occurred while queueing the email message, the `error` parameter contains an error object that indicates the type of failure that occurred.

## See Also

### Responding to Email Completion

- [MFMailComposeResult](../mfmailcomposeresult.md): Result codes returned when the mail composition interface is dismissed.

# mailComposeController:didFinishWithResult:error: (Objective-C)

**Framework:** Message UI  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Tells the delegate that the user wants to dismiss the mail composition view.

## Declaration

```objectivec
- (void) mailComposeController:(MFMailComposeViewController *) controller didFinishWithResult:(MFMailComposeResult) result error:(NSError *) error;
```

## Parameters

- `controller`: The view controller object that manages the mail composition view.
- `result`: The result of the user’s action.
- `error`: If an error occurred, this parameter contains an error object with information about the type of failure.

<a id="Discussion"></a>

## Discussion

Your implementation of this method should dismiss the mail composition view. Implementation of this method is optional, but expected.

If the user has opted to send the email created by this interface, that email should be queued in the user’s Mail program by the time this method is called. If an error occurred while queueing the email message, the `error` parameter contains an error object that indicates the type of failure that occurred.

## See Also

### Responding to Email Completion

- [MFMailComposeResult](../mfmailcomposeresult.md): Result codes returned when the mail composition interface is dismissed.
