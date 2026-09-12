> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeyassertioncredentialextensionoutput-swift.struct/prf](https://developer.apple.com/documentation/authenticationservices/aspasskeyassertioncredentialextensionoutput-swift.struct/prf)

# prf

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

The outputs of the WebAuthn PRF extension in passkey assertion requests.

## Declaration

```swift
var prf: ASAuthorizationPublicKeyCredentialPRFAssertionOutput? { get }
```

## See Also

### Inspecting properties

- [largeBlob](largeblob.md): The output for a large binary object operation during passkey assertion.
- [ASAuthorizationPublicKeyCredentialLargeBlobAssertionOutput](../asauthorizationpublickeycredentiallargeblobassertionoutput-swift.struct.md): A type to represent the output of the requested large binary object operation, which returns in a passkey sign-in response.
- [ASAuthorizationPublicKeyCredentialPRFAssertionOutput](../asauthorizationpublickeycredentialprfassertionoutput-swift.struct.md): A type to represent outputs of the web authentication PRF extension, when requesting them during an assertion.
