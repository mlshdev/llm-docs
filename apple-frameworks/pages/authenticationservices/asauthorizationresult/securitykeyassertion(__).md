> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationresult/securitykeyassertion(_:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationresult/securitykeyassertion(_:))

# ASAuthorizationResult.securityKeyAssertion(\_:)

**Framework:** AuthenticationServices  
**Kind:** Case  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+

A security key credential from an assertion request.

## Declaration

```swift
case securityKeyAssertion(ASAuthorizationSecurityKeyPublicKeyCredentialAssertion)
```

## See Also

### Authorization results

- [ASAuthorizationResult.appleID(\_:)](appleid%28__%29.md): A credential from an Apple ID authentication.
- [ASAuthorizationResult.customMethod(\_:)](custommethod%28__%29.md): A chosen custom authorization method.
- [ASAuthorizationResult.passkeyAssertion(\_:)](passkeyassertion%28__%29.md): A passkey credential from an assertion request.
- [ASAuthorizationResult.passkeyRegistration(\_:)](passkeyregistration%28__%29.md): A new passkey credential from a registration request.
- [ASAuthorizationResult.password(\_:)](password%28__%29.md): A password credential.
- [ASAuthorizationResult.securityKeyRegistration(\_:)](securitykeyregistration%28__%29.md): A new security key credential from a registration request.
