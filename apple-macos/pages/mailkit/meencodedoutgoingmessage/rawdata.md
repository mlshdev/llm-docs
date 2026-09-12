> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/meencodedoutgoingmessage/rawdata](https://developer.apple.com/documentation/mailkit/meencodedoutgoingmessage/rawdata)

# rawData (Swift)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The encrypted, signed, or both encrypted and signed data for the outgoing message.

## Declaration

```swift
var rawData: Data { get }
```

## See Also

### Encoding Outgoing Messages

- [init(rawData:isSigned:isEncrypted:)](init%28rawdata_issigned_isencrypted_%29.md): Creates an object that contains the outgoing message’s encoded data, and indicates if the encoder encrypted or signed the message.
- [isEncrypted](isencrypted.md): A Boolean value that indicates if the message encoder encrypted the message.
- [isSigned](issigned.md): A Boolean value that indicates if the message encoder signed the message.

# rawData (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The encrypted, signed, or both encrypted and signed data for the outgoing message.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSData * rawData;
```

## See Also

### Encoding Outgoing Messages

- [initWithRawData:isSigned:isEncrypted:](init%28rawdata_issigned_isencrypted_%29.md): Creates an object that contains the outgoing message’s encoded data, and indicates if the encoder encrypted or signed the message.
- [isEncrypted](isencrypted.md): A Boolean value that indicates if the message encoder encrypted the message.
- [isSigned](issigned.md): A Boolean value that indicates if the message encoder signed the message.
