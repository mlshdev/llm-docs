> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessage/error](https://developer.apple.com/documentation/messages/msmessage/error)

# error (Swift)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

An error object describing why the system failed to send the message.

## Declaration

```swift
var error: (any Error)? { get set }
```

<a id="Discussion"></a>

## Discussion

The system sets the `error` property when an error occurs while sending this message. It is set to `nil` if you have not yet sent the message or if you have sent the message successfully.

## See Also

### Message Properties

- [accessibilityLabel](accessibilitylabel.md): A localized string that describes the message.
- [isPending](ispending.md): A Boolean value that indicates whether the message is pending or whether it has been sent or received.
- [layout](layout.md): A layout object that defines the message’s appearance.
- [senderParticipantIdentifier](senderparticipantidentifier.md): A UUID identifying the participant that sent the message.
- [session](session.md): The session that this message belongs to.
- [shouldExpire](shouldexpire.md): A Boolean value that determines whether the message should expire after being read.
- [summaryText](summarytext.md): A succinct description of the message.
- [url](url.md): A URL that encodes data to be transmitted with the message.

# error (Objective-C)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

An error object describing why the system failed to send the message.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSError * error;
```

<a id="Discussion"></a>

## Discussion

The system sets the `error` property when an error occurs while sending this message. It is set to `nil` if you have not yet sent the message or if you have sent the message successfully.

## See Also

### Message Properties

- [accessibilityLabel](accessibilitylabel.md): A localized string that describes the message.
- [pending](ispending.md): A Boolean value that indicates whether the message is pending or whether it has been sent or received.
- [layout](layout.md): A layout object that defines the message’s appearance.
- [senderParticipantIdentifier](senderparticipantidentifier.md): A UUID identifying the participant that sent the message.
- [session](session.md): The session that this message belongs to.
- [shouldExpire](shouldexpire.md): A Boolean value that determines whether the message should expire after being read.
- [summaryText](summarytext.md): A succinct description of the message.
- [URL](url.md): A URL that encodes data to be transmitted with the message.
