> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessagesappviewcontroller/willresignactive(with:)](https://developer.apple.com/documentation/messages/msmessagesappviewcontroller/willresignactive(with:))

# willResignActive(with:) (Swift)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Invoked just before the message resigns its active status.

## Declaration

```swift
func willResignActive(with conversation: MSConversation)
```

## Parameters

- `conversation`: The conversation that the user is currently viewing in the Messages app.

<a id="Discussion"></a>

## Discussion

Override this method to perform any cleanup activities just before the Messages extension is dismissed. Avoid doing any time-consuming tasks in your implementation. This method should return as quickly as possible. Also, avoid making asynchronous calls, because the extension might terminate before the asynchronous tasks have completed.

## See Also

### Managing the Extension’s State

- [activeConversation](activeconversation.md): The conversation currently displayed in the transcript.
- [dismiss()](dismiss%28%29.md): Dismisses the extension and marks it for termination.
- [willBecomeActive(with:)](willbecomeactive%28with_%29.md): Invoked just before the Messages extension becomes active.
- [didBecomeActive(with:)](didbecomeactive%28with_%29.md): Invoked after the Messages extension becomes active.
- [didResignActive(with:)](didresignactive%28with_%29.md): Invoked after the message resigns its active status.

# willResignActiveWithConversation: (Objective-C)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Invoked just before the message resigns its active status.

## Declaration

```objectivec
- (void) willResignActiveWithConversation:(MSConversation *) conversation;
```

## Parameters

- `conversation`: The conversation that the user is currently viewing in the Messages app.

<a id="Discussion"></a>

## Discussion

Override this method to perform any cleanup activities just before the Messages extension is dismissed. Avoid doing any time-consuming tasks in your implementation. This method should return as quickly as possible. Also, avoid making asynchronous calls, because the extension might terminate before the asynchronous tasks have completed.

## See Also

### Managing the Extension’s State

- [activeConversation](activeconversation.md): The conversation currently displayed in the transcript.
- [dismiss](dismiss%28%29.md): Dismisses the extension and marks it for termination.
- [willBecomeActiveWithConversation:](willbecomeactive%28with_%29.md): Invoked just before the Messages extension becomes active.
- [didBecomeActiveWithConversation:](didbecomeactive%28with_%29.md): Invoked after the Messages extension becomes active.
- [didResignActiveWithConversation:](didresignactive%28with_%29.md): Invoked after the message resigns its active status.
