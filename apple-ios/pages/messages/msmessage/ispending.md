> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessage/ispending](https://developer.apple.com/documentation/messages/msmessage/ispending)

# isPending (Swift)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

A Boolean value that indicates whether the message is pending or whether it has been sent or received.

## Declaration

```swift
var isPending: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to determine whether an [MSMessage](../msmessage.md) instance represents an unsent message—for example, to determine whether the conversation’s [selectedMessage](../msconversation/selectedmessage.md) property refers to a message in the transcript ([false](https://developer.apple.com/documentation/swift/false)) or to a message in the Messages app’s input field ([true](https://developer.apple.com/documentation/swift/true)).

This property’s value is set based on the following rules:

- This property is set to [true](https://developer.apple.com/documentation/swift/true) when your app calls the [insert(\_:completionHandler:)](../msconversation/insert%28__completionhandler_%29-3g248.md) method to place the message in the Messages app’s input field.
- It’s set to [false](https://developer.apple.com/documentation/swift/false) when the system calls the [didStartSending(\_:conversation:)](../msmessagesappviewcontroller/didstartsending%28__conversation_%29.md) method (either because the user sent the message from the input field or because you called the [send(\_:completionHandler:)](../msconversation/send%28__completionhandler_%29-9krz.md) method to send it directly).
- This property is set to [false](https://developer.apple.com/documentation/swift/false) on messages received from other participants.

In other words, the property is [true](https://developer.apple.com/documentation/swift/true) only for the selected method of the active conversation when there’s an [MSMessagesAppViewController](../msmessagesappviewcontroller.md) instance in the Messages app’s input field.

## See Also

### Message Properties

- [accessibilityLabel](accessibilitylabel.md): A localized string that describes the message.
- [error](error.md): An error object describing why the system failed to send the message.
- [layout](layout.md): A layout object that defines the message’s appearance.
- [senderParticipantIdentifier](senderparticipantidentifier.md): A UUID identifying the participant that sent the message.
- [session](session.md): The session that this message belongs to.
- [shouldExpire](shouldexpire.md): A Boolean value that determines whether the message should expire after being read.
- [summaryText](summarytext.md): A succinct description of the message.
- [url](url.md): A URL that encodes data to be transmitted with the message.

# pending (Objective-C)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

A Boolean value that indicates whether the message is pending or whether it has been sent or received.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isPending) BOOL pending;
```

<a id="Discussion"></a>

## Discussion

Use this property to determine whether an [MSMessage](../msmessage.md) instance represents an unsent message—for example, to determine whether the conversation’s [selectedMessage](../msconversation/selectedmessage.md) property refers to a message in the transcript ([false](https://developer.apple.com/documentation/swift/false)) or to a message in the Messages app’s input field ([true](https://developer.apple.com/documentation/swift/true)).

This property’s value is set based on the following rules:

- This property is set to [true](https://developer.apple.com/documentation/swift/true) when your app calls the [insertMessage:completionHandler:](../msconversation/insert%28__completionhandler_%29-3g248.md) method to place the message in the Messages app’s input field.
- It’s set to [false](https://developer.apple.com/documentation/swift/false) when the system calls the [didStartSendingMessage:conversation:](../msmessagesappviewcontroller/didstartsending%28__conversation_%29.md) method (either because the user sent the message from the input field or because you called the [sendMessage:completionHandler:](../msconversation/send%28__completionhandler_%29-9krz.md) method to send it directly).
- This property is set to [false](https://developer.apple.com/documentation/swift/false) on messages received from other participants.

In other words, the property is [true](https://developer.apple.com/documentation/swift/true) only for the selected method of the active conversation when there’s an [MSMessagesAppViewController](../msmessagesappviewcontroller.md) instance in the Messages app’s input field.

## See Also

### Message Properties

- [accessibilityLabel](accessibilitylabel.md): A localized string that describes the message.
- [error](error.md): An error object describing why the system failed to send the message.
- [layout](layout.md): A layout object that defines the message’s appearance.
- [senderParticipantIdentifier](senderparticipantidentifier.md): A UUID identifying the participant that sent the message.
- [session](session.md): The session that this message belongs to.
- [shouldExpire](shouldexpire.md): A Boolean value that determines whether the message should expire after being read.
- [summaryText](summarytext.md): A succinct description of the message.
- [URL](url.md): A URL that encodes data to be transmitted with the message.
