> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessage/session](https://developer.apple.com/documentation/messages/msmessage/session)

# session (Swift)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The session that this message belongs to.

## Declaration

```swift
var session: MSSession? { get }
```

<a id="Discussion"></a>

## Discussion

The `session` property is set to the session object passed to the [init(session:)](init%28session_%29.md) initializer; otherwise, it is set to `nil`.

## See Also

### Message Properties

- [accessibilityLabel](accessibilitylabel.md): A localized string that describes the message.
- [error](error.md): An error object describing why the system failed to send the message.
- [isPending](ispending.md): A Boolean value that indicates whether the message is pending or whether it has been sent or received.
- [layout](layout.md): A layout object that defines the message’s appearance.
- [senderParticipantIdentifier](senderparticipantidentifier.md): A UUID identifying the participant that sent the message.
- [shouldExpire](shouldexpire.md): A Boolean value that determines whether the message should expire after being read.
- [summaryText](summarytext.md): A succinct description of the message.
- [url](url.md): A URL that encodes data to be transmitted with the message.

# session (Objective-C)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The session that this message belongs to.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) MSSession * session;
```

<a id="Discussion"></a>

## Discussion

The `session` property is set to the session object passed to the [initWithSession:](init%28session_%29.md) initializer; otherwise, it is set to `nil`.

## See Also

### Message Properties

- [accessibilityLabel](accessibilitylabel.md): A localized string that describes the message.
- [error](error.md): An error object describing why the system failed to send the message.
- [pending](ispending.md): A Boolean value that indicates whether the message is pending or whether it has been sent or received.
- [layout](layout.md): A layout object that defines the message’s appearance.
- [senderParticipantIdentifier](senderparticipantidentifier.md): A UUID identifying the participant that sent the message.
- [shouldExpire](shouldexpire.md): A Boolean value that determines whether the message should expire after being read.
- [summaryText](summarytext.md): A succinct description of the message.
- [URL](url.md): A URL that encodes data to be transmitted with the message.
