> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/medecodedmessage/securityinformation](https://developer.apple.com/documentation/mailkit/medecodedmessage/securityinformation)

# securityInformation (Swift)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

An object that contains encryption and digital signature information about the message content.

## Declaration

```swift
var securityInformation: MEMessageSecurityInformation { get }
```

## See Also

### Decoding Messages

- [rawData](rawdata.md): The decoded MIME data for a message.

# securityInformation (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

An object that contains encryption and digital signature information about the message content.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) MEMessageSecurityInformation * securityInformation;
```

## See Also

### Decoding Messages

- [rawData](rawdata.md): The decoded MIME data for a message.
