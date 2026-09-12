> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessagesappviewcontroller/willbecomeactive(with:)](https://developer.apple.com/documentation/messages/msmessagesappviewcontroller/willbecomeactive(with:))

# willBecomeActive(with:) (Swift)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Invoked just before the Messages extension becomes active.

## Declaration

```swift
func willBecomeActive(with conversation: MSConversation)
```

## Parameters

- `conversation`: The conversation that the user is currently viewing in the Messages app.

<a id="Discussion"></a>

## Discussion

Override this method to perform any setup steps necessary before the Messages extension becomes active. The extension becomes active both when the user selects the extension from the app drawer, and when the user selects a message in the transcript that represents an [MSMessage](../msmessage.md) object created by a copy of the extension.

## See Also

### Managing the Extension’s State

- [activeConversation](activeconversation.md): The conversation currently displayed in the transcript.
- [dismiss()](dismiss%28%29.md): Dismisses the extension and marks it for termination.
- [didBecomeActive(with:)](didbecomeactive%28with_%29.md): Invoked after the Messages extension becomes active.
- [willResignActive(with:)](willresignactive%28with_%29.md): Invoked just before the message resigns its active status.
- [didResignActive(with:)](didresignactive%28with_%29.md): Invoked after the message resigns its active status.

# willBecomeActiveWithConversation: (Objective-C)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Invoked just before the Messages extension becomes active.

## Declaration

```objectivec
- (void) willBecomeActiveWithConversation:(MSConversation *) conversation;
```

## Parameters

- `conversation`: The conversation that the user is currently viewing in the Messages app.

<a id="Discussion"></a>

## Discussion

Override this method to perform any setup steps necessary before the Messages extension becomes active. The extension becomes active both when the user selects the extension from the app drawer, and when the user selects a message in the transcript that represents an [MSMessage](../msmessage.md) object created by a copy of the extension.

## See Also

### Managing the Extension’s State

- [activeConversation](activeconversation.md): The conversation currently displayed in the transcript.
- [dismiss](dismiss%28%29.md): Dismisses the extension and marks it for termination.
- [didBecomeActiveWithConversation:](didbecomeactive%28with_%29.md): Invoked after the Messages extension becomes active.
- [willResignActiveWithConversation:](willresignactive%28with_%29.md): Invoked just before the message resigns its active status.
- [didResignActiveWithConversation:](didresignactive%28with_%29.md): Invoked after the message resigns its active status.
