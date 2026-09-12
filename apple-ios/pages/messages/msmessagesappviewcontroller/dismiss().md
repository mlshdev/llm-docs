> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessagesappviewcontroller/dismiss()](https://developer.apple.com/documentation/messages/msmessagesappviewcontroller/dismiss())

# dismiss() (Swift)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Dismisses the extension and marks it for termination.

## Declaration

```swift
func dismiss()
```

<a id="Discussion"></a>

## Discussion

Call this method to dismiss the extension. The system displays the keyboard if there is any content in the Messages app’s input field. If the input field is empty, the system dismisses the keyboard entirely.

This method also marks the extension as eligible for termination, causing the system to call the view controller’s [willResignActive(with:)](willresignactive%28with_%29.md) and [didResignActive(with:)](didresignactive%28with_%29.md) methods.

## See Also

### Managing the Extension’s State

- [activeConversation](activeconversation.md): The conversation currently displayed in the transcript.
- [willBecomeActive(with:)](willbecomeactive%28with_%29.md): Invoked just before the Messages extension becomes active.
- [didBecomeActive(with:)](didbecomeactive%28with_%29.md): Invoked after the Messages extension becomes active.
- [willResignActive(with:)](willresignactive%28with_%29.md): Invoked just before the message resigns its active status.
- [didResignActive(with:)](didresignactive%28with_%29.md): Invoked after the message resigns its active status.

# dismiss (Objective-C)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Dismisses the extension and marks it for termination.

## Declaration

```objectivec
- (void) dismiss;
```

<a id="Discussion"></a>

## Discussion

Call this method to dismiss the extension. The system displays the keyboard if there is any content in the Messages app’s input field. If the input field is empty, the system dismisses the keyboard entirely.

This method also marks the extension as eligible for termination, causing the system to call the view controller’s [willResignActiveWithConversation:](willresignactive%28with_%29.md) and [didResignActiveWithConversation:](didresignactive%28with_%29.md) methods.

## See Also

### Managing the Extension’s State

- [activeConversation](activeconversation.md): The conversation currently displayed in the transcript.
- [willBecomeActiveWithConversation:](willbecomeactive%28with_%29.md): Invoked just before the Messages extension becomes active.
- [didBecomeActiveWithConversation:](didbecomeactive%28with_%29.md): Invoked after the Messages extension becomes active.
- [willResignActiveWithConversation:](willresignactive%28with_%29.md): Invoked just before the message resigns its active status.
- [didResignActiveWithConversation:](didresignactive%28with_%29.md): Invoked after the message resigns its active status.
