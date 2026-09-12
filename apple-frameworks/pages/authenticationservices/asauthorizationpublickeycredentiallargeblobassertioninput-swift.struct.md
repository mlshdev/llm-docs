> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentiallargeblobassertioninput-swift.struct](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentiallargeblobassertioninput-swift.struct)

# ASAuthorizationPublicKeyCredentialLargeBlobAssertionInput

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A type that represents input for the binary large object extension in passkey assertion requests.

## Declaration

```swift
struct ASAuthorizationPublicKeyCredentialLargeBlobAssertionInput
```

<a id="overview"></a>

## Overview

Use this type during assertion (sign-in) with an existing passkey. An app can specify exactly one operation to perform during the sign-in: either read the existing saved blob or write a new blob (overwriting the existing one, if applicable). This restriction mirrors the operations available in the WebAuthn specification.

## Topics

### Using assertion inputs

- [read](asauthorizationpublickeycredentiallargeblobassertioninput-swift.struct/read.md): An operation to read the existing blob value.
- [write(\_:)](asauthorizationpublickeycredentiallargeblobassertioninput-swift.struct/write%28__%29.md): An operation to write the blob value, overwriting any existing value.

### Inspecting the operation

- [operation](asauthorizationpublickeycredentiallargeblobassertioninput-swift.struct/operation-swift.property.md): The reading or writing operation the input performs.
- [ASAuthorizationPublicKeyCredentialLargeBlobAssertionInput.Operation](asauthorizationpublickeycredentiallargeblobassertioninput-swift.struct/operation-swift.enum.md): A type to represent the possible operations of a large binary object assertion input.

## See Also

### Creating an assertion input

- [init(largeBlob:prf:)](aspasskeyassertioncredentialextensioninput-swift.struct/init%28largeblob_prf_%29.md): Creates a passkey assertion input.
- [ASAuthorizationPublicKeyCredentialPRFAssertionInput](asauthorizationpublickeycredentialprfassertioninput-swift.struct.md): A type that represents input for the web authentication PRF extension in passkey assertion requests.
