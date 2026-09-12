> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessage](https://developer.apple.com/documentation/messages/msmessage)

# MSMessage (Swift)

**Framework:** Messages  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A custom message object.

## Declaration

```swift
class MSMessage
```

<a id="overview"></a>

## Overview

Use the [MSMessage](msmessage.md) class to create custom message objects. To create interactive messages that can be updated by the conversation’s participants, instantiate a message with a session using the [init(session:)](msmessage/init%28session_%29.md) method. Otherwise, instantiate the message using the [init()](msmessage/init%28%29.md) method.

## Topics

### Creating Messages

- [init()](msmessage/init%28%29.md): Initializes a new message that is not part of a session.
- [init(session:)](msmessage/init%28session_%29.md): Initializes a new message that is part of the provided session.

### Message Properties

- [accessibilityLabel](msmessage/accessibilitylabel.md): A localized string that describes the message.
- [error](msmessage/error.md): An error object describing why the system failed to send the message.
- [isPending](msmessage/ispending.md): A Boolean value that indicates whether the message is pending or whether it has been sent or received.
- [layout](msmessage/layout.md): A layout object that defines the message’s appearance.
- [senderParticipantIdentifier](msmessage/senderparticipantidentifier.md): A UUID identifying the participant that sent the message.
- [session](msmessage/session.md): The session that this message belongs to.
- [shouldExpire](msmessage/shouldexpire.md): A Boolean value that determines whether the message should expire after being read.
- [summaryText](msmessage/summarytext.md): A succinct description of the message.
- [url](msmessage/url.md): A URL that encodes data to be transmitted with the message.

### Initializers

- [init(coder:)](msmessage/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Interactive messages

- [MSSession](mssession.md): A session object used to create and update messages.
- [MSMessageLayout](msmessagelayout.md): An abstract base class that defines the appearance of [MSMessage](msmessage.md) objects in the conversation transcript.
- [MSMessageTemplateLayout](msmessagetemplatelayout.md): A template-based layout for custom messages.
- [MSMessageLiveLayout](msmessagelivelayout.md): A layout that provides a custom, interactive view inside the transcript.

# MSMessage (Objective-C)

**Framework:** Messages  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A custom message object.

## Declaration

```objectivec
@interface MSMessage : NSObject
```

<a id="overview"></a>

## Overview

Use the [MSMessage](msmessage.md) class to create custom message objects. To create interactive messages that can be updated by the conversation’s participants, instantiate a message with a session using the [initWithSession:](msmessage/init%28session_%29.md) method. Otherwise, instantiate the message using the [init](msmessage/init%28%29.md) method.

## Topics

### Creating Messages

- [init](msmessage/init%28%29.md): Initializes a new message that is not part of a session.
- [initWithSession:](msmessage/init%28session_%29.md): Initializes a new message that is part of the provided session.

### Message Properties

- [accessibilityLabel](msmessage/accessibilitylabel.md): A localized string that describes the message.
- [error](msmessage/error.md): An error object describing why the system failed to send the message.
- [pending](msmessage/ispending.md): A Boolean value that indicates whether the message is pending or whether it has been sent or received.
- [layout](msmessage/layout.md): A layout object that defines the message’s appearance.
- [senderParticipantIdentifier](msmessage/senderparticipantidentifier.md): A UUID identifying the participant that sent the message.
- [session](msmessage/session.md): The session that this message belongs to.
- [shouldExpire](msmessage/shouldexpire.md): A Boolean value that determines whether the message should expire after being read.
- [summaryText](msmessage/summarytext.md): A succinct description of the message.
- [URL](msmessage/url.md): A URL that encodes data to be transmitted with the message.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Interactive messages

- [MSSession](mssession.md): A session object used to create and update messages.
- [MSMessageLayout](msmessagelayout.md): An abstract base class that defines the appearance of [MSMessage](msmessage.md) objects in the conversation transcript.
- [MSMessageTemplateLayout](msmessagetemplatelayout.md): A template-based layout for custom messages.
- [MSMessageLiveLayout](msmessagelivelayout.md): A layout that provides a custom, interactive view inside the transcript.
