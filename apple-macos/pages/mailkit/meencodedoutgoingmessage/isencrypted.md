> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/meencodedoutgoingmessage/isencrypted](https://developer.apple.com/documentation/mailkit/meencodedoutgoingmessage/isencrypted)

# isEncrypted (Swift)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A Boolean value that indicates if the message encoder encrypted the message.

## Declaration

```swift
var isEncrypted: Bool { get }
```

## See Also

### Encoding Outgoing Messages

- [init(rawData:isSigned:isEncrypted:)](init%28rawdata_issigned_isencrypted_%29.md): Creates an object that contains the outgoing message’s encoded data, and indicates if the encoder encrypted or signed the message.
- [isSigned](issigned.md): A Boolean value that indicates if the message encoder signed the message.
- [rawData](rawdata.md): The encrypted, signed, or both encrypted and signed data for the outgoing message.

# isEncrypted (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A Boolean value that indicates if the message encoder encrypted the message.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL isEncrypted;
```

## See Also

### Encoding Outgoing Messages

- [initWithRawData:isSigned:isEncrypted:](init%28rawdata_issigned_isencrypted_%29.md): Creates an object that contains the outgoing message’s encoded data, and indicates if the encoder encrypted or signed the message.
- [isSigned](issigned.md): A Boolean value that indicates if the message encoder signed the message.
- [rawData](rawdata.md): The encrypted, signed, or both encrypted and signed data for the outgoing message.
