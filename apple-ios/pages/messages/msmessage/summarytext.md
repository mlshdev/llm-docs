> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessage/summarytext](https://developer.apple.com/documentation/messages/msmessage/summarytext)

# summaryText (Swift)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A succinct description of the message.

## Declaration

```swift
var summaryText: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This property defaults to `nil`.

Set the summary text when you create a message that is associated with a session. When a subsequent message is sent using the same session, the Messages app uses this text to create a summary in the transcript. If the summary text is `nil`, the system provides a default description for the message so that the message history is preserved.

## See Also

### Message Properties

- [accessibilityLabel](accessibilitylabel.md): A localized string that describes the message.
- [error](error.md): An error object describing why the system failed to send the message.
- [isPending](ispending.md): A Boolean value that indicates whether the message is pending or whether it has been sent or received.
- [layout](layout.md): A layout object that defines the message’s appearance.
- [senderParticipantIdentifier](senderparticipantidentifier.md): A UUID identifying the participant that sent the message.
- [session](session.md): The session that this message belongs to.
- [shouldExpire](shouldexpire.md): A Boolean value that determines whether the message should expire after being read.
- [url](url.md): A URL that encodes data to be transmitted with the message.

# summaryText (Objective-C)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A succinct description of the message.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * summaryText;
```

<a id="Discussion"></a>

## Discussion

This property defaults to `nil`.

Set the summary text when you create a message that is associated with a session. When a subsequent message is sent using the same session, the Messages app uses this text to create a summary in the transcript. If the summary text is `nil`, the system provides a default description for the message so that the message history is preserved.

## See Also

### Message Properties

- [accessibilityLabel](accessibilitylabel.md): A localized string that describes the message.
- [error](error.md): An error object describing why the system failed to send the message.
- [pending](ispending.md): A Boolean value that indicates whether the message is pending or whether it has been sent or received.
- [layout](layout.md): A layout object that defines the message’s appearance.
- [senderParticipantIdentifier](senderparticipantidentifier.md): A UUID identifying the participant that sent the message.
- [session](session.md): The session that this message belongs to.
- [shouldExpire](shouldexpire.md): A Boolean value that determines whether the message should expire after being read.
- [URL](url.md): A URL that encodes data to be transmitted with the message.
