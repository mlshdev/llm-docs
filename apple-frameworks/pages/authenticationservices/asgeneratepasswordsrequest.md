> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asgeneratepasswordsrequest](https://developer.apple.com/documentation/authenticationservices/asgeneratepasswordsrequest)

# ASGeneratePasswordsRequest (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

## Declaration

```swift
class ASGeneratePasswordsRequest
```

## Topics

### Initializers

- [init(coder:)](asgeneratepasswordsrequest/init%28coder_%29.md)
- [init(serviceIdentifier:passwordFieldPasswordRules:confirmPasswordFieldPasswordRules:passwordRulesFromQuirks:)](asgeneratepasswordsrequest/init%28serviceidentifier_passwordfieldpasswordrules_confirmpasswordfieldpasswordrules_passwordrulesfromquirks_%29.md)

### Instance Properties

- [confirmPasswordFieldPasswordRules](asgeneratepasswordsrequest/confirmpasswordfieldpasswordrules.md): Developer provided password rules for a “confirm password” field.
- [passwordFieldPasswordRules](asgeneratepasswordsrequest/passwordfieldpasswordrules.md): Developer provided password rules.
- [passwordRulesFromQuirks](asgeneratepasswordsrequest/passwordrulesfromquirks.md): Password rules from https://github.com/apple/password-manager-resources
- [serviceIdentifier](asgeneratepasswordsrequest/serviceidentifier.md): The identifier of the service for which the the credential would be associated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# ASGeneratePasswordsRequest (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

## Declaration

```objectivec
@interface ASGeneratePasswordsRequest : NSObject
```

## Topics

### Instance Properties

- [confirmPasswordFieldPasswordRules](asgeneratepasswordsrequest/confirmpasswordfieldpasswordrules.md): Developer provided password rules for a “confirm password” field.
- [passwordFieldPasswordRules](asgeneratepasswordsrequest/passwordfieldpasswordrules.md): Developer provided password rules.
- [passwordRulesFromQuirks](asgeneratepasswordsrequest/passwordrulesfromquirks.md): Password rules from https://github.com/apple/password-manager-resources
- [serviceIdentifier](asgeneratepasswordsrequest/serviceidentifier.md): The identifier of the service for which the the credential would be associated.

### Instance Methods

- [initWithServiceIdentifier:passwordFieldPasswordRules:confirmPasswordFieldPasswordRules:passwordRulesFromQuirks:](asgeneratepasswordsrequest/init%28serviceidentifier_passwordfieldpasswordrules_confirmpasswordfieldpasswordrules_passwordrulesfromquirks_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
