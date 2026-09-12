> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcndefmessage](https://developer.apple.com/documentation/corenfc/nfcndefmessage)

# NFCNDEFMessage (Swift)

**Framework:** Core NFC  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

An NFC NDEF message consisting of an array of payload records.

## Declaration

```swift
class NFCNDEFMessage
```

## Topics

### Creating an NDEF Message

- [init(records:)](nfcndefmessage/init%28records_%29.md): Creates an NDEF message with the specified records.
- [init(data:)](nfcndefmessage/init%28data_%29.md): Creates an NDEF message from raw data representing the message.

### Accessing NDEF Records

- [records](nfcndefmessage/records.md): An array of records for the message.

### Getting the Message Length

- [length](nfcndefmessage/length.md): The length, in bytes, of the NDEF message when stored on an NFC tag.

### Initializers

- [init(NDEFRecords:)](nfcndefmessage/init%28ndefrecords_%29.md)

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

### NDEF messages and payloads

- [NFCNDEFPayload](nfcndefpayload.md): A payload record in an NFC NDEF message.

# NFCNDEFMessage (Objective-C)

**Framework:** Core NFC  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

An NFC NDEF message consisting of an array of payload records.

## Declaration

```objectivec
@interface NFCNDEFMessage : NSObject
```

## Topics

### Creating an NDEF Message

- [initWithNDEFRecords:](nfcndefmessage/init%28records_%29.md): Creates an NDEF message with the specified records.
- [ndefMessageWithData:](nfcndefmessage/init%28data_%29.md): Creates an NDEF message from raw data representing the message.

### Accessing NDEF Records

- [records](nfcndefmessage/records.md): An array of records for the message.

### Getting the Message Length

- [length](nfcndefmessage/length.md): The length, in bytes, of the NDEF message when stored on an NFC tag.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### NDEF messages and payloads

- [NFCNDEFPayload](nfcndefpayload.md): A payload record in an NFC NDEF message.
