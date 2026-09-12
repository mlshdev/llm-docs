> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessage/shouldexpire](https://developer.apple.com/documentation/messages/msmessage/shouldexpire)

# shouldExpire (Swift)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A Boolean value that determines whether the message should expire after being read.

## Declaration

```swift
var shouldExpire: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the message should expire after it is read. Expired messages are deleted a short time after being read by the recipient. The recipient may opt to keep the message.

The `shouldExpire` property defaults to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Message Properties

- [accessibilityLabel](accessibilitylabel.md): A localized string that describes the message.
- [error](error.md): An error object describing why the system failed to send the message.
- [isPending](ispending.md): A Boolean value that indicates whether the message is pending or whether it has been sent or received.
- [layout](layout.md): A layout object that defines the message’s appearance.
- [senderParticipantIdentifier](senderparticipantidentifier.md): A UUID identifying the participant that sent the message.
- [session](session.md): The session that this message belongs to.
- [summaryText](summarytext.md): A succinct description of the message.
- [url](url.md): A URL that encodes data to be transmitted with the message.

# shouldExpire (Objective-C)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A Boolean value that determines whether the message should expire after being read.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL shouldExpire;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the message should expire after it is read. Expired messages are deleted a short time after being read by the recipient. The recipient may opt to keep the message.

The `shouldExpire` property defaults to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Message Properties

- [accessibilityLabel](accessibilitylabel.md): A localized string that describes the message.
- [error](error.md): An error object describing why the system failed to send the message.
- [pending](ispending.md): A Boolean value that indicates whether the message is pending or whether it has been sent or received.
- [layout](layout.md): A layout object that defines the message’s appearance.
- [senderParticipantIdentifier](senderparticipantidentifier.md): A UUID identifying the participant that sent the message.
- [session](session.md): The session that this message belongs to.
- [summaryText](summarytext.md): A succinct description of the message.
- [URL](url.md): A URL that encodes data to be transmitted with the message.
