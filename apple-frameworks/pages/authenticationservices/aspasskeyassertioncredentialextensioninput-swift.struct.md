> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeyassertioncredentialextensioninput-swift.struct](https://developer.apple.com/documentation/authenticationservices/aspasskeyassertioncredentialextensioninput-swift.struct)

# ASPasskeyAssertionCredentialExtensionInput

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A type that encapsulates input for various WebAuthn extensions during passkey assertion.

## Declaration

```swift
struct ASPasskeyAssertionCredentialExtensionInput
```

## Topics

### Creating an assertion input

- [init(largeBlob:prf:)](aspasskeyassertioncredentialextensioninput-swift.struct/init%28largeblob_prf_%29.md): Creates a passkey assertion input.
- [ASAuthorizationPublicKeyCredentialLargeBlobAssertionInput](asauthorizationpublickeycredentiallargeblobassertioninput-swift.struct.md): A type that represents input for the binary large object extension in passkey assertion requests.
- [ASAuthorizationPublicKeyCredentialPRFAssertionInput](asauthorizationpublickeycredentialprfassertioninput-swift.struct.md): A type that represents input for the web authentication PRF extension in passkey assertion requests.

### Using inputs

- [largeBlob](aspasskeyassertioncredentialextensioninput-swift.struct/largeblob.md): Input for the WebAuthn large binary object extension in passkey assertion requests.
- [prf](aspasskeyassertioncredentialextensioninput-swift.struct/prf.md): Input for the WebAuthn PRF extension in passkey assertion requests.

## See Also

### Working with WebAuthn extensions

- [extensionInput](aspasskeycredentialrequestparameters/extensioninput-2edlv.md): An input for WebAuthn extensions.
