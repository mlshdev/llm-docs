> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationresult](https://developer.apple.com/documentation/authenticationservices/asauthorizationresult)

# ASAuthorizationResult

**Framework:** AuthenticationServices  
**Kind:** Enumeration  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Describes the outcome of a successful authorization request.

## Declaration

```swift
enum ASAuthorizationResult
```

## Topics

### Authorization results

- [ASAuthorizationResult.appleID(\_:)](asauthorizationresult/appleid%28__%29.md): A credential from an Apple ID authentication.
- [ASAuthorizationResult.customMethod(\_:)](asauthorizationresult/custommethod%28__%29.md): A chosen custom authorization method.
- [ASAuthorizationResult.passkeyAssertion(\_:)](asauthorizationresult/passkeyassertion%28__%29.md): A passkey credential from an assertion request.
- [ASAuthorizationResult.passkeyRegistration(\_:)](asauthorizationresult/passkeyregistration%28__%29.md): A new passkey credential from a registration request.
- [ASAuthorizationResult.password(\_:)](asauthorizationresult/password%28__%29.md): A password credential.
- [ASAuthorizationResult.securityKeyAssertion(\_:)](asauthorizationresult/securitykeyassertion%28__%29.md): A security key credential from an assertion request.
- [ASAuthorizationResult.securityKeyRegistration(\_:)](asauthorizationresult/securitykeyregistration%28__%29.md): A new security key credential from a registration request.

### Enumeration Cases

- [ASAuthorizationResult.passkeyAccountCreation(\_:)](asauthorizationresult/passkeyaccountcreation%28__%29.md): A newly created passkey credential and associated user information resulting from an account creation request.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Authorization requests

- [ASAuthorizationController](asauthorizationcontroller.md): A controller that manages authorization requests that a provider creates.
- [AuthorizationController](authorizationcontroller.md): A SwiftUI environment value that views use to perform authorization requests.
