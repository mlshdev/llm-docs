> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessage/accessibilitylabel](https://developer.apple.com/documentation/messages/msmessage/accessibilitylabel)

# accessibilityLabel (Swift)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A localized string that describes the message.

## Declaration

```swift
var accessibilityLabel: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to provide a succinct description of the message. VoiceOver reads this property when describing the message. By default, the `accessibilityLabel` property is set to `nil`.

## See Also

### Message Properties

- [error](error.md): An error object describing why the system failed to send the message.
- [isPending](ispending.md): A Boolean value that indicates whether the message is pending or whether it has been sent or received.
- [layout](layout.md): A layout object that defines the message’s appearance.
- [senderParticipantIdentifier](senderparticipantidentifier.md): A UUID identifying the participant that sent the message.
- [session](session.md): The session that this message belongs to.
- [shouldExpire](shouldexpire.md): A Boolean value that determines whether the message should expire after being read.
- [summaryText](summarytext.md): A succinct description of the message.
- [url](url.md): A URL that encodes data to be transmitted with the message.

# accessibilityLabel (Objective-C)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A localized string that describes the message.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * accessibilityLabel;
```

<a id="Discussion"></a>

## Discussion

Set this property to provide a succinct description of the message. VoiceOver reads this property when describing the message. By default, the `accessibilityLabel` property is set to `nil`.

## See Also

### Message Properties

- [error](error.md): An error object describing why the system failed to send the message.
- [pending](ispending.md): A Boolean value that indicates whether the message is pending or whether it has been sent or received.
- [layout](layout.md): A layout object that defines the message’s appearance.
- [senderParticipantIdentifier](senderparticipantidentifier.md): A UUID identifying the participant that sent the message.
- [session](session.md): The session that this message belongs to.
- [shouldExpire](shouldexpire.md): A Boolean value that determines whether the message should expire after being read.
- [summaryText](summarytext.md): A succinct description of the message.
- [URL](url.md): A URL that encodes data to be transmitted with the message.
