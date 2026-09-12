> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessage/layout](https://developer.apple.com/documentation/messages/msmessage/layout)

# layout (Swift)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A layout object that defines the message’s appearance.

## Declaration

```swift
@NSCopying var layout: MSMessageLayout? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to a concrete subclass of the abstract [MSMessageLayout](../msmessagelayout.md) class.

By default, the `layout` property is set to `nil`.

## See Also

### Message Properties

- [accessibilityLabel](accessibilitylabel.md): A localized string that describes the message.
- [error](error.md): An error object describing why the system failed to send the message.
- [isPending](ispending.md): A Boolean value that indicates whether the message is pending or whether it has been sent or received.
- [senderParticipantIdentifier](senderparticipantidentifier.md): A UUID identifying the participant that sent the message.
- [session](session.md): The session that this message belongs to.
- [shouldExpire](shouldexpire.md): A Boolean value that determines whether the message should expire after being read.
- [summaryText](summarytext.md): A succinct description of the message.
- [url](url.md): A URL that encodes data to be transmitted with the message.

# layout (Objective-C)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A layout object that defines the message’s appearance.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) MSMessageLayout * layout;
```

<a id="Discussion"></a>

## Discussion

Set this property to a concrete subclass of the abstract [MSMessageLayout](../msmessagelayout.md) class.

By default, the `layout` property is set to `nil`.

## See Also

### Message Properties

- [accessibilityLabel](accessibilitylabel.md): A localized string that describes the message.
- [error](error.md): An error object describing why the system failed to send the message.
- [pending](ispending.md): A Boolean value that indicates whether the message is pending or whether it has been sent or received.
- [senderParticipantIdentifier](senderparticipantidentifier.md): A UUID identifying the participant that sent the message.
- [session](session.md): The session that this message belongs to.
- [shouldExpire](shouldexpire.md): A Boolean value that determines whether the message should expire after being read.
- [summaryText](summarytext.md): A succinct description of the message.
- [URL](url.md): A URL that encodes data to be transmitted with the message.
