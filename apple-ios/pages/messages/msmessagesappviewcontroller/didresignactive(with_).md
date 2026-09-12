> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessagesappviewcontroller/didresignactive(with:)](https://developer.apple.com/documentation/messages/msmessagesappviewcontroller/didresignactive(with:))

# didResignActive(with:) (Swift)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Invoked after the message resigns its active status.

## Declaration

```swift
func didResignActive(with conversation: MSConversation)
```

## Parameters

- `conversation`: The conversation that the user is currently viewing in the Messages app.

<a id="Discussion"></a>

## Discussion

Override this method to perform any cleanup activities after the Messages extension has been dismissed. Avoid doing any time-consuming tasks in your implementation.

## See Also

### Managing the Extension’s State

- [activeConversation](activeconversation.md): The conversation currently displayed in the transcript.
- [dismiss()](dismiss%28%29.md): Dismisses the extension and marks it for termination.
- [willBecomeActive(with:)](willbecomeactive%28with_%29.md): Invoked just before the Messages extension becomes active.
- [didBecomeActive(with:)](didbecomeactive%28with_%29.md): Invoked after the Messages extension becomes active.
- [willResignActive(with:)](willresignactive%28with_%29.md): Invoked just before the message resigns its active status.

# didResignActiveWithConversation: (Objective-C)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Invoked after the message resigns its active status.

## Declaration

```objectivec
- (void) didResignActiveWithConversation:(MSConversation *) conversation;
```

## Parameters

- `conversation`: The conversation that the user is currently viewing in the Messages app.

<a id="Discussion"></a>

## Discussion

Override this method to perform any cleanup activities after the Messages extension has been dismissed. Avoid doing any time-consuming tasks in your implementation.

## See Also

### Managing the Extension’s State

- [activeConversation](activeconversation.md): The conversation currently displayed in the transcript.
- [dismiss](dismiss%28%29.md): Dismisses the extension and marks it for termination.
- [willBecomeActiveWithConversation:](willbecomeactive%28with_%29.md): Invoked just before the Messages extension becomes active.
- [didBecomeActiveWithConversation:](didbecomeactive%28with_%29.md): Invoked after the Messages extension becomes active.
- [willResignActiveWithConversation:](willresignactive%28with_%29.md): Invoked just before the message resigns its active status.
