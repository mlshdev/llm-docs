> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeyregistrationcredentialextensionoutput-swift.struct](https://developer.apple.com/documentation/authenticationservices/aspasskeyregistrationcredentialextensionoutput-swift.struct)

# ASPasskeyRegistrationCredentialExtensionOutput

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A type that encapsulates output for various WebAuthn extensions during passkey assertion.

## Declaration

```swift
struct ASPasskeyRegistrationCredentialExtensionOutput
```

## Topics

### Creating an extension output instance

- [init(largeBlob:prf:)](aspasskeyregistrationcredentialextensionoutput-swift.struct/init%28largeblob_prf_%29.md): Creates an extension output instance.

### Inspecting properties

- [largeBlob](aspasskeyregistrationcredentialextensionoutput-swift.struct/largeblob.md): The output for a large binary object operation during passkey registration.
- [ASAuthorizationPublicKeyCredentialLargeBlobRegistrationOutput](asauthorizationpublickeycredentiallargeblobregistrationoutput-swift.struct.md): The result of the large binary object support check, resulting from a passkey registration response.
- [prf](aspasskeyregistrationcredentialextensionoutput-swift.struct/prf.md): The outputs of the WebAuthn PRF extension in passkey registration requests.
- [ASAuthorizationPublicKeyCredentialPRFRegistrationOutput](asauthorizationpublickeycredentialprfregistrationoutput-swift.struct.md): A type to represent outputs of the web authentication PRF extension, when requesting them during a registration.

## See Also

### Accessing extension output

- [extensionOutput](aspasskeyregistrationcredential/extensionoutput-2lf9m.md): An output from WebAuthn extensions.
