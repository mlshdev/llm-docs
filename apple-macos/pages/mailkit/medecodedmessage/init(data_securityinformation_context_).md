> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mailkit/medecodedmessage/init(data:securityinformation:context:)

# init(data:securityInformation:context:) (Swift)

**Framework:** MailKit  
**Kind:** Initializer  
**Availability:** macOS 12.0+

## Declaration

```swift
init(data rawData: Data?, securityInformation: MEMessageSecurityInformation, context: Data?)
```

## See Also

### Initializers

- [init(data:securityInformation:context:banner:)](init%28data_securityinformation_context_banner_%29.md)

# initWithData:securityInformation:context: (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) rawData securityInformation:(MEMessageSecurityInformation *) securityInformation context:(NSData *) context;
```

## See Also

### Initializers

- [initWithData:securityInformation:context:banner:](init%28data_securityinformation_context_banner_%29.md)
