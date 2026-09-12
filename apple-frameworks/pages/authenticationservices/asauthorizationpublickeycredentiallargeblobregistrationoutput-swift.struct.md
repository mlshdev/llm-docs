> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentiallargeblobregistrationoutput-swift.struct](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentiallargeblobregistrationoutput-swift.struct)

# ASAuthorizationPublicKeyCredentialLargeBlobRegistrationOutput

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The result of the large binary object support check, resulting from a passkey registration response.

## Declaration

```swift
struct ASAuthorizationPublicKeyCredentialLargeBlobRegistrationOutput
```

<a id="overview"></a>

## Overview

This type indicates whether the passkey provider that manages the passkey supports the `largeBlob` extension. The design of this type mirrors the response in the WebAuthn specification.

## Topics

### Accessing output properties

- [isSupported](asauthorizationpublickeycredentiallargeblobregistrationoutput-swift.struct/issupported.md): A Boolean value that indicates support for the large binary object extension.

### Using defined support values

- [supported](asauthorizationpublickeycredentiallargeblobregistrationoutput-swift.struct/supported.md)
- [unsupported](asauthorizationpublickeycredentiallargeblobregistrationoutput-swift.struct/unsupported.md)

## See Also

### Inspecting properties

- [largeBlob](aspasskeyregistrationcredentialextensionoutput-swift.struct/largeblob.md): The output for a large binary object operation during passkey registration.
- [prf](aspasskeyregistrationcredentialextensionoutput-swift.struct/prf.md): The outputs of the WebAuthn PRF extension in passkey registration requests.
- [ASAuthorizationPublicKeyCredentialPRFRegistrationOutput](asauthorizationpublickeycredentialprfregistrationoutput-swift.struct.md): A type to represent outputs of the web authentication PRF extension, when requesting them during a registration.
