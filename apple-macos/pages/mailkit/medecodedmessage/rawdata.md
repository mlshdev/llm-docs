> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mailkit/medecodedmessage/rawdata

# rawData (Swift)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The decoded MIME data for a message.

## Declaration

```swift
var rawData: Data? { get }
```

## See Also

### Decoding Messages

- [securityInformation](securityinformation.md): An object that contains encryption and digital signature information about the message content.

# rawData (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The decoded MIME data for a message.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSData * rawData;
```

## See Also

### Decoding Messages

- [securityInformation](securityinformation.md): An object that contains encryption and digital signature information about the message content.
