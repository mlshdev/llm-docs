> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mailkit/medecodedmessage/init(data:securityinformation:context:banner:)

# init(data:securityInformation:context:banner:) (Swift)

**Framework:** MailKit  
**Kind:** Initializer  
**Availability:** macOS 12.0+

## Declaration

```swift
init(data rawData: Data?, securityInformation: MEMessageSecurityInformation, context: Data?, banner: MEDecodedMessageBanner?)
```

## See Also

### Initializers

- [init(data:securityInformation:context:)](init%28data_securityinformation_context_%29.md)

# initWithData:securityInformation:context:banner: (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) rawData securityInformation:(MEMessageSecurityInformation *) securityInformation context:(NSData *) context banner:(MEDecodedMessageBanner *) banner;
```

## See Also

### Initializers

- [initWithData:securityInformation:context:](init%28data_securityinformation_context_%29.md)
