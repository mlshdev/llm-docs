> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialprfassertionoutput-swift.struct](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialprfassertionoutput-swift.struct)

# ASAuthorizationPublicKeyCredentialPRFAssertionOutput

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A type to represent outputs of the web authentication PRF extension, when requesting them during an assertion.

## Declaration

```swift
struct ASAuthorizationPublicKeyCredentialPRFAssertionOutput
```

<a id="overview"></a>

## Overview

This object represents one or two `SymmetricKey` keys that are available anywhere the passkey is available for use. These are general purpose keys that you can use for application-specific needs, such as encryption of user data.

Don’t store or export these keys. Derive these keys only as the result of an assertion operation, and then discard them when the operation finishes.

## Topics

### Creating a PRF assertion output

- [init(first:second:)](asauthorizationpublickeycredentialprfassertionoutput-swift.struct/init%28first_second_%29.md): Initializes an assertion output structure with one or two keys.

### Accessing symmetric keys

- [first](asauthorizationpublickeycredentialprfassertionoutput-swift.struct/first.md): A symmetric key that’s unique to the passkey and derives from the first input.
- [second](asauthorizationpublickeycredentialprfassertionoutput-swift.struct/second.md): A second symmetric key that’s unique to the passkey, and derives from the second input, if specified.

## See Also

### Inspecting properties

- [largeBlob](aspasskeyassertioncredentialextensionoutput-swift.struct/largeblob.md): The output for a large binary object operation during passkey assertion.
- [ASAuthorizationPublicKeyCredentialLargeBlobAssertionOutput](asauthorizationpublickeycredentiallargeblobassertionoutput-swift.struct.md): A type to represent the output of the requested large binary object operation, which returns in a passkey sign-in response.
- [prf](aspasskeyassertioncredentialextensionoutput-swift.struct/prf.md): The outputs of the WebAuthn PRF extension in passkey assertion requests.
