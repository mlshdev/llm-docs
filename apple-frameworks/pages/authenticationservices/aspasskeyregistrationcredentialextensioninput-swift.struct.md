> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeyregistrationcredentialextensioninput-swift.struct](https://developer.apple.com/documentation/authenticationservices/aspasskeyregistrationcredentialextensioninput-swift.struct)

# ASPasskeyRegistrationCredentialExtensionInput

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A type that encapsulates input for various WebAuthn extensions during passkey registration.

## Declaration

```swift
struct ASPasskeyRegistrationCredentialExtensionInput
```

## Topics

### Inputs

- [largeBlob](aspasskeyregistrationcredentialextensioninput-swift.struct/largeblob.md): Input for the WebAuthn large binary object extension in passkey registration requests.
- [ASAuthorizationPublicKeyCredentialLargeBlobRegistrationInput](asauthorizationpublickeycredentiallargeblobregistrationinput-swift.struct.md): A type that encapsulates input for large binary object extensions during registration.
- [prf](aspasskeyregistrationcredentialextensioninput-swift.struct/prf.md): Input for the WebAuthn PRF extension in passkey registration requests.
- [ASAuthorizationPublicKeyCredentialPRFRegistrationInput](asauthorizationpublickeycredentialprfregistrationinput-swift.struct.md): A type that encapsulates input for PRF extensions during registration.

## See Also

### Extension input types

- [ASPasskeyCredentialExtensionInput.none](aspasskeycredentialextensioninput/none.md): An empty extension input.
- [ASPasskeyCredentialExtensionInput.assertion(\_:)](aspasskeycredentialextensioninput/assertion%28__%29.md): An extension input for an assertion.
- [ASPasskeyAssertionCredentialExtensionInput](aspasskeyassertioncredentialextensioninput-swift.struct.md): A type that encapsulates input for various WebAuthn extensions during passkey assertion.
- [ASPasskeyCredentialExtensionInput.registration(\_:)](aspasskeycredentialextensioninput/registration%28__%29.md): An extension input for a registration.
