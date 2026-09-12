> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialprfregistrationoutput-swift.struct](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialprfregistrationoutput-swift.struct)

# ASAuthorizationPublicKeyCredentialPRFRegistrationOutput

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A type to represent outputs of the web authentication PRF extension, when requesting them during a registration.

## Declaration

```swift
struct ASAuthorizationPublicKeyCredentialPRFRegistrationOutput
```

<a id="overview"></a>

## Overview

This object represents one or two `SymmetricKey` keys that are available anywhere the passkey is available for use. These are general purpose keys that you can use for application-specific needs, such as encryption of user data.

Don’t store or export these keys. Derive these keys only as the result of an assertion operation, and then discard them when the operation finishes.

## Topics

### Creating an outputs instance

- [init(first:second:)](asauthorizationpublickeycredentialprfregistrationoutput-swift.struct/init%28first_second_%29.md): Initializes an object representing the outputs of the web authentication PRF extension.

### Determining PRF support

- [isSupported](asauthorizationpublickeycredentialprfregistrationoutput-swift.struct/issupported.md): A Boolean value that indicates whether the newly created passkey supports the PRF extension.

### Using defined support values

- [supported](asauthorizationpublickeycredentialprfregistrationoutput-swift.struct/supported.md): A Boolean value that indicates the newly created passkey supports the PRF extension.
- [unsupported](asauthorizationpublickeycredentialprfregistrationoutput-swift.struct/unsupported.md): A Boolean value that indicates the newly created passkey doesn’t support the PRF extension.

### Accessing symmetric keys

- [first](asauthorizationpublickeycredentialprfregistrationoutput-swift.struct/first.md): A symmetric key that’s unique to the passkey and derives from the first input, if specified.
- [second](asauthorizationpublickeycredentialprfregistrationoutput-swift.struct/second.md): A second symmetric key that’s unique to the passkey, and derives from the second input, if specified.

## See Also

### Inspecting properties

- [largeBlob](aspasskeyregistrationcredentialextensionoutput-swift.struct/largeblob.md): The output for a large binary object operation during passkey registration.
- [ASAuthorizationPublicKeyCredentialLargeBlobRegistrationOutput](asauthorizationpublickeycredentiallargeblobregistrationoutput-swift.struct.md): The result of the large binary object support check, resulting from a passkey registration response.
- [prf](aspasskeyregistrationcredentialextensionoutput-swift.struct/prf.md): The outputs of the WebAuthn PRF extension in passkey registration requests.
