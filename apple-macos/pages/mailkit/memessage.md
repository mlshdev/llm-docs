> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessage](https://developer.apple.com/documentation/mailkit/memessage)

# MEMessage (Swift)

**Framework:** MailKit  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that contains information about a mail message, such as the subject, addressees, date sent, and the message contents.

## Declaration

```swift
class MEMessage
```

## Topics

### Accessing the Sender and Recipients

- [fromAddress](memessage/fromaddress.md): The sender’s email address.
- [toAddresses](memessage/toaddresses.md): An array of email addresses for the primary recipients of the message.
- [ccAddresses](memessage/ccaddresses.md): An array of email addresses for the secondary recipients of the message.
- [bccAddresses](memessage/bccaddresses.md): An array of email addresses for the concealed tertiary recipients of the message.
- [replyToAddresses](memessage/replytoaddresses.md): An array of email addresses to use when replying to the message.
- [allRecipientAddresses](memessage/allrecipientaddresses.md): An array of email addresses for all recipients of the message.

### Accessing the Message Subject

- [subject](memessage/subject.md): The subject of the message.

### Accessing Message Content

- [headers](memessage/headers.md): A dictionary that contains the message’s header values.
- [rawData](memessage/rawdata.md): The raw RFC 2822 header and body content of the message.

### Accessing Message State

- [state](memessage/state.md): The state of the mail message.

### Instance Properties

- [encryptionState](memessage/encryptionstate.md)

### Initializers

- [init(coder:)](memessage/init%28coder_%29.md)

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
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Message Properties

- [MEMessageState](memessagestate.md): The state of a message: sent, unsent, or received.

# MEMessage (Objective-C)

**Framework:** MailKit  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that contains information about a mail message, such as the subject, addressees, date sent, and the message contents.

## Declaration

```objectivec
@interface MEMessage : NSObject
```

## Topics

### Accessing the Sender and Recipients

- [fromAddress](memessage/fromaddress.md): The sender’s email address.
- [toAddresses](memessage/toaddresses.md): An array of email addresses for the primary recipients of the message.
- [ccAddresses](memessage/ccaddresses.md): An array of email addresses for the secondary recipients of the message.
- [bccAddresses](memessage/bccaddresses.md): An array of email addresses for the concealed tertiary recipients of the message.
- [replyToAddresses](memessage/replytoaddresses.md): An array of email addresses to use when replying to the message.
- [allRecipientAddresses](memessage/allrecipientaddresses.md): An array of email addresses for all recipients of the message.

### Accessing the Message Subject

- [subject](memessage/subject.md): The subject of the message.

### Accessing the Sent and Received Dates

- [dateSent](memessage/datesent.md): The date the sender sent the message.
- [dateReceived](memessage/datereceived.md): The date that the recipient received the message.

### Accessing Message Content

- [headers](memessage/headers.md): A dictionary that contains the message’s header values.
- [rawData](memessage/rawdata.md): The raw RFC 2822 header and body content of the message.

### Accessing Message State

- [state](memessage/state.md): The state of the mail message.

### Instance Properties

- [encryptionState](memessage/encryptionstate.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Message Properties

- [MEMessageState](memessagestate.md): The state of a message: sent, unsent, or received.
