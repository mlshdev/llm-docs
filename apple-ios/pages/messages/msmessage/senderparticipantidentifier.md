> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessage/senderparticipantidentifier](https://developer.apple.com/documentation/messages/msmessage/senderparticipantidentifier)

# senderParticipantIdentifier (Swift)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A UUID identifying the participant that sent the message.

## Declaration

```swift
var senderParticipantIdentifier: UUID { get }
```

<a id="Discussion"></a>

## Discussion

The value of this UUID is scoped to the current device. Each device participating in the conversation will have a different UUID for the message’s sender.

By default, the `senderParticipantIdentifier` property is set to `nil` when a new message is first instantiated. It is set to the participant’s UUID as soon as the message is inserted into the conversation.

## See Also

### Message Properties

- [accessibilityLabel](accessibilitylabel.md): A localized string that describes the message.
- [error](error.md): An error object describing why the system failed to send the message.
- [isPending](ispending.md): A Boolean value that indicates whether the message is pending or whether it has been sent or received.
- [layout](layout.md): A layout object that defines the message’s appearance.
- [session](session.md): The session that this message belongs to.
- [shouldExpire](shouldexpire.md): A Boolean value that determines whether the message should expire after being read.
- [summaryText](summarytext.md): A succinct description of the message.
- [url](url.md): A URL that encodes data to be transmitted with the message.

# senderParticipantIdentifier (Objective-C)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A UUID identifying the participant that sent the message.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUUID * senderParticipantIdentifier;
```

<a id="Discussion"></a>

## Discussion

The value of this UUID is scoped to the current device. Each device participating in the conversation will have a different UUID for the message’s sender.

By default, the `senderParticipantIdentifier` property is set to `nil` when a new message is first instantiated. It is set to the participant’s UUID as soon as the message is inserted into the conversation.

## See Also

### Message Properties

- [accessibilityLabel](accessibilitylabel.md): A localized string that describes the message.
- [error](error.md): An error object describing why the system failed to send the message.
- [pending](ispending.md): A Boolean value that indicates whether the message is pending or whether it has been sent or received.
- [layout](layout.md): A layout object that defines the message’s appearance.
- [session](session.md): The session that this message belongs to.
- [shouldExpire](shouldexpire.md): A Boolean value that determines whether the message should expire after being read.
- [summaryText](summarytext.md): A succinct description of the message.
- [URL](url.md): A URL that encodes data to be transmitted with the message.
