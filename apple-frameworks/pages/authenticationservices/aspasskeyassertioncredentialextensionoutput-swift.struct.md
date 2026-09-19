> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/aspasskeyassertioncredentialextensionoutput-swift.struct

# ASPasskeyAssertionCredentialExtensionOutput

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A type that encapsulates output for various WebAuthn extensions during passkey assertion.

## Declaration

```swift
struct ASPasskeyAssertionCredentialExtensionOutput
```

## Topics

### Creating an extension output instance

- [init(largeBlob:prf:)](aspasskeyassertioncredentialextensionoutput-swift.struct/init%28largeblob_prf_%29.md): Creates an extension output instance.

### Inspecting properties

- [largeBlob](aspasskeyassertioncredentialextensionoutput-swift.struct/largeblob.md): The output for a large binary object operation during passkey assertion.
- [ASAuthorizationPublicKeyCredentialLargeBlobAssertionOutput](asauthorizationpublickeycredentiallargeblobassertionoutput-swift.struct.md): A type to represent the output of the requested large binary object operation, which returns in a passkey sign-in response.
- [prf](aspasskeyassertioncredentialextensionoutput-swift.struct/prf.md): The outputs of the WebAuthn PRF extension in passkey assertion requests.
- [ASAuthorizationPublicKeyCredentialPRFAssertionOutput](asauthorizationpublickeycredentialprfassertionoutput-swift.struct.md): A type to represent outputs of the web authentication PRF extension, when requesting them during an assertion.

## See Also

### Accessing extension output

- [extensionOutput](aspasskeyassertioncredential/extensionoutput-7t6rn.md): An output from WebAuthn extensions.
