> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessagesappviewcontroller/activeconversation](https://developer.apple.com/documentation/messages/msmessagesappviewcontroller/activeconversation)

# activeConversation (Swift)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The conversation currently displayed in the transcript.

## Declaration

```swift
var activeConversation: MSConversation? { get }
```

<a id="Discussion"></a>

## Discussion

This is the conversation that the user is currently viewing in the Messages app.

## See Also

### Managing the Extension’s State

- [dismiss()](dismiss%28%29.md): Dismisses the extension and marks it for termination.
- [willBecomeActive(with:)](willbecomeactive%28with_%29.md): Invoked just before the Messages extension becomes active.
- [didBecomeActive(with:)](didbecomeactive%28with_%29.md): Invoked after the Messages extension becomes active.
- [willResignActive(with:)](willresignactive%28with_%29.md): Invoked just before the message resigns its active status.
- [didResignActive(with:)](didresignactive%28with_%29.md): Invoked after the message resigns its active status.

# activeConversation (Objective-C)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The conversation currently displayed in the transcript.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) MSConversation * activeConversation;
```

<a id="Discussion"></a>

## Discussion

This is the conversation that the user is currently viewing in the Messages app.

## See Also

### Managing the Extension’s State

- [dismiss](dismiss%28%29.md): Dismisses the extension and marks it for termination.
- [willBecomeActiveWithConversation:](willbecomeactive%28with_%29.md): Invoked just before the Messages extension becomes active.
- [didBecomeActiveWithConversation:](didbecomeactive%28with_%29.md): Invoked after the Messages extension becomes active.
- [willResignActiveWithConversation:](willresignactive%28with_%29.md): Invoked just before the message resigns its active status.
- [didResignActiveWithConversation:](didresignactive%28with_%29.md): Invoked after the message resigns its active status.
