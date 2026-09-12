> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationerror-swift.struct/code](https://developer.apple.com/documentation/authenticationservices/asauthorizationerror-swift.struct/code)

# ASAuthorizationError.Code (Swift)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Codes that authorization errors can have.

## Declaration

```swift
enum Code
```

## Topics

### Codes

- [ASAuthorizationError.Code.canceled](code/canceled.md): The user canceled the authorization attempt.
- [ASAuthorizationError.Code.failed](code/failed.md): The authorization attempt failed.
- [ASAuthorizationError.Code.invalidResponse](code/invalidresponse.md): The authorization request received an invalid response.
- [ASAuthorizationError.Code.notHandled](code/nothandled.md): The authorization request wasn’t handled.
- [ASAuthorizationError.Code.unknown](code/unknown.md): The authorization attempt failed for an unknown reason.
- [ASAuthorizationError.Code.notInteractive](code/notinteractive.md): The authorization request isn’t interactive.
- [ASAuthorizationError.Code.credentialExport](code/credentialexport.md): The credential export request failed.
- [ASAuthorizationError.Code.credentialImport](code/credentialimport.md): The credential import request failed.

### Enumeration Cases

- [ASAuthorizationError.Code.deviceNotConfiguredForPasskeyCreation](code/devicenotconfiguredforpasskeycreation.md): This error signals that the device is not currently set up to create passkeys.
- [ASAuthorizationError.Code.matchedExcludedCredential](code/matchedexcludedcredential.md): This error should only be returned when specifying @c excludedCredentials on a public key credential registration request.
- [ASAuthorizationError.Code.preferSignInWithApple](code/prefersigninwithapple.md): This error signals the user has an existing Sign in with Apple account that they would prefer to use instead of continuing the current request.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Error Codes

- [canceled](canceled.md): The user canceled the authorization attempt.
- [failed](failed.md): The authorization attempt failed.
- [invalidResponse](invalidresponse.md): The authorization request received an invalid response.
- [notHandled](nothandled.md): The authorization request wasn’t handled.
- [unknown](unknown.md): The authorization attempt failed for an unknown reason.
- [credentialExport](credentialexport.md): The credential export request failed.
- [credentialImport](credentialimport.md): The credential import request failed.

# ASAuthorizationError (Objective-C)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Codes that authorization errors can have.

## Declaration

```objectivec
enum ASAuthorizationError : NSInteger;
```

## Topics

### Codes

- [ASAuthorizationErrorCanceled](code/canceled.md): The user canceled the authorization attempt.
- [ASAuthorizationErrorFailed](code/failed.md): The authorization attempt failed.
- [ASAuthorizationErrorInvalidResponse](code/invalidresponse.md): The authorization request received an invalid response.
- [ASAuthorizationErrorNotHandled](code/nothandled.md): The authorization request wasn’t handled.
- [ASAuthorizationErrorUnknown](code/unknown.md): The authorization attempt failed for an unknown reason.
- [ASAuthorizationErrorNotInteractive](code/notinteractive.md): The authorization request isn’t interactive.
- [ASAuthorizationErrorCredentialExport](code/credentialexport.md): The credential export request failed.
- [ASAuthorizationErrorCredentialImport](code/credentialimport.md): The credential import request failed.

### Enumeration Cases

- [ASAuthorizationErrorDeviceNotConfiguredForPasskeyCreation](code/devicenotconfiguredforpasskeycreation.md): This error signals that the device is not currently set up to create passkeys.
- [ASAuthorizationErrorMatchedExcludedCredential](code/matchedexcludedcredential.md): This error should only be returned when specifying @c excludedCredentials on a public key credential registration request.
- [ASAuthorizationErrorPreferSignInWithApple](code/prefersigninwithapple.md): This error signals the user has an existing Sign in with Apple account that they would prefer to use instead of continuing the current request.
