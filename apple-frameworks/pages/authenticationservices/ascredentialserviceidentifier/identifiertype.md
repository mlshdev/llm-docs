> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialserviceidentifier/identifiertype](https://developer.apple.com/documentation/authenticationservices/ascredentialserviceidentifier/identifiertype)

# ASCredentialServiceIdentifier.IdentifierType (Swift)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Possible values for the service identifier type.

## Declaration

```swift
enum IdentifierType
```

## Topics

### Identifier types

- [ASCredentialServiceIdentifier.IdentifierType.URL](identifiertype/url.md): A URL service identifier.
- [ASCredentialServiceIdentifier.IdentifierType.domain](identifiertype/domain.md): A domain service identifier.

### Enumeration Cases

- [ASCredentialServiceIdentifier.IdentifierType.app](identifiertype/app.md): The service identifier represents an App ID. When a service identifier of this type is provided to your extension for saving a password, the ASCredentialServiceIdentifier object will have a non-nil `displayName` property that contains a user friendly name for the app.

### Initializers

- [init(rawValue:)](identifiertype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Identifying the credential service

- [identifier](identifier.md): A string that names the identified service.
- [type](type.md): The kind of services that the identifier represents.

# ASCredentialServiceIdentifierType (Objective-C)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Possible values for the service identifier type.

## Declaration

```objectivec
enum ASCredentialServiceIdentifierType : NSInteger;
```

## Topics

### Identifier types

- [ASCredentialServiceIdentifierTypeURL](identifiertype/url.md): A URL service identifier.
- [ASCredentialServiceIdentifierTypeDomain](identifiertype/domain.md): A domain service identifier.

### Enumeration Cases

- [ASCredentialServiceIdentifierTypeApp](identifiertype/app.md): The service identifier represents an App ID. When a service identifier of this type is provided to your extension for saving a password, the ASCredentialServiceIdentifier object will have a non-nil `displayName` property that contains a user friendly name for the app.

## See Also

### Identifying the credential service

- [identifier](identifier.md): A string that names the identified service.
- [type](type.md): The kind of services that the identifier represents.
