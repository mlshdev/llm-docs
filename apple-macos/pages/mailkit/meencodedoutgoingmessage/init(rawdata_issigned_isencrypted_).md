> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/meencodedoutgoingmessage/init(rawdata:issigned:isencrypted:)](https://developer.apple.com/documentation/mailkit/meencodedoutgoingmessage/init(rawdata:issigned:isencrypted:))

# init(rawData:isSigned:isEncrypted:) (Swift)

**Framework:** MailKit  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Creates an object that contains the outgoing message’s encoded data, and indicates if the encoder encrypted or signed the message.

## Declaration

```swift
init(rawData: Data, isSigned: Bool, isEncrypted: Bool)
```

## Parameters

- `rawData`: The encrypted, signed, or both encrypted and signed message data.
- `isSigned`: A Boolean value that indicates if the data contains a signed message.
- `isEncrypted`: A Boolean value that indicates if the data contains an encrypted message.

## See Also

### Encoding Outgoing Messages

- [isEncrypted](isencrypted.md): A Boolean value that indicates if the message encoder encrypted the message.
- [isSigned](issigned.md): A Boolean value that indicates if the message encoder signed the message.
- [rawData](rawdata.md): The encrypted, signed, or both encrypted and signed data for the outgoing message.

# initWithRawData:isSigned:isEncrypted: (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Creates an object that contains the outgoing message’s encoded data, and indicates if the encoder encrypted or signed the message.

## Declaration

```objectivec
- (instancetype) initWithRawData:(NSData *) rawData isSigned:(BOOL) isSigned isEncrypted:(BOOL) isEncrypted;
```

## Parameters

- `rawData`: The encrypted, signed, or both encrypted and signed message data.
- `isSigned`: A Boolean value that indicates if the data contains a signed message.
- `isEncrypted`: A Boolean value that indicates if the data contains an encrypted message.

## See Also

### Encoding Outgoing Messages

- [isEncrypted](isencrypted.md): A Boolean value that indicates if the message encoder encrypted the message.
- [isSigned](issigned.md): A Boolean value that indicates if the message encoder signed the message.
- [rawData](rawdata.md): The encrypted, signed, or both encrypted and signed data for the outgoing message.
