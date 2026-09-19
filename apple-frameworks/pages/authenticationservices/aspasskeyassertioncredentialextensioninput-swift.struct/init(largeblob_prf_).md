> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/aspasskeyassertioncredentialextensioninput-swift.struct/init(largeblob:prf:)

# init(largeBlob:prf:)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Creates a passkey assertion input.

## Declaration

```swift
init(largeBlob: ASAuthorizationPublicKeyCredentialLargeBlobAssertionInput? = nil, prf: ASAuthorizationPublicKeyCredentialPRFAssertionInput? = nil)
```

## Parameters

- `largeBlob`: Input for the WebAuthn `largeBlob` extension.
- `prf`: Input for the WebAuthn PRF extension.

## See Also

### Creating an assertion input

- [ASAuthorizationPublicKeyCredentialLargeBlobAssertionInput](../asauthorizationpublickeycredentiallargeblobassertioninput-swift.struct.md): A type that represents input for the binary large object extension in passkey assertion requests.
- [ASAuthorizationPublicKeyCredentialPRFAssertionInput](../asauthorizationpublickeycredentialprfassertioninput-swift.struct.md): A type that represents input for the web authentication PRF extension in passkey assertion requests.
