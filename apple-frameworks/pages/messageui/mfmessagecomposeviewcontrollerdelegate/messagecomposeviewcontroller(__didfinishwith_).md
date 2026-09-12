> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmessagecomposeviewcontrollerdelegate/messagecomposeviewcontroller(_:didfinishwith:)](https://developer.apple.com/documentation/messageui/mfmessagecomposeviewcontrollerdelegate/messagecomposeviewcontroller(_:didfinishwith:))

# messageComposeViewController(\_:didFinishWith:) (Swift)

**Framework:** Message UI  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the user finished composing the message.

## Declaration

```swift
func messageComposeViewController(_ controller: MFMessageComposeViewController, didFinishWith result: MessageComposeResult)
```

## Parameters

- `controller`: The message composition view controller that is returning the result.
- `result`: A result code that indicates how the user chose to complete the composition. See the [MessageComposeResult](../messagecomposeresult.md) enumeration.

<a id="Discussion"></a>

## Discussion

This method is called when the user taps one of the buttons to dismiss the message composition interface. Your implementation of this method should dismiss the view controller and perform any additional actions needed to process the sending of the message. The result parameter lets you know whether the user chose to cancel or send the message, or whether sending the message failed.

Implementation of this method is required.

## See Also

### Responding to the Message Completion

- [MessageComposeResult](../messagecomposeresult.md): These constants describe the result of the message-composition interface.

# messageComposeViewController:didFinishWithResult: (Objective-C)

**Framework:** Message UI  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Tells the delegate that the user finished composing the message.

## Declaration

```objectivec
- (void) messageComposeViewController:(MFMessageComposeViewController *) controller didFinishWithResult:(MessageComposeResult) result;
```

## Parameters

- `controller`: The message composition view controller that is returning the result.
- `result`: A result code that indicates how the user chose to complete the composition. See the [MessageComposeResult](../messagecomposeresult.md) enumeration.

<a id="Discussion"></a>

## Discussion

This method is called when the user taps one of the buttons to dismiss the message composition interface. Your implementation of this method should dismiss the view controller and perform any additional actions needed to process the sending of the message. The result parameter lets you know whether the user chose to cancel or send the message, or whether sending the message failed.

Implementation of this method is required.

## See Also

### Responding to the Message Completion

- [MessageComposeResult](../messagecomposeresult.md): These constants describe the result of the message-composition interface.
