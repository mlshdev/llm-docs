> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/aspasskeyregistrationcredentialextensionoutput-swift.struct/prf

# prf

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

The outputs of the WebAuthn PRF extension in passkey registration requests.

## Declaration

```swift
var prf: ASAuthorizationPublicKeyCredentialPRFRegistrationOutput? { get }
```

## See Also

### Inspecting properties

- [largeBlob](largeblob.md): The output for a large binary object operation during passkey registration.
- [ASAuthorizationPublicKeyCredentialLargeBlobRegistrationOutput](../asauthorizationpublickeycredentiallargeblobregistrationoutput-swift.struct.md): The result of the large binary object support check, resulting from a passkey registration response.
- [ASAuthorizationPublicKeyCredentialPRFRegistrationOutput](../asauthorizationpublickeycredentialprfregistrationoutput-swift.struct.md): A type to represent outputs of the web authentication PRF extension, when requesting them during a registration.
