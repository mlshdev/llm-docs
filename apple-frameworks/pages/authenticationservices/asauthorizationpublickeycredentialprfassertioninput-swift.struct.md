> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialprfassertioninput-swift.struct](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialprfassertioninput-swift.struct)

# ASAuthorizationPublicKeyCredentialPRFAssertionInput

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A type that represents input for the web authentication PRF extension in passkey assertion requests.

## Declaration

```swift
struct ASAuthorizationPublicKeyCredentialPRFAssertionInput
```

<a id="overview"></a>

## Overview

The PRF extension lets you create general purpose `SymmetricKey` keys from passkeys, which can be useful for tasks like encryption of user data. Using the same input values with the same passkey produces the same `SymmetricKey`.

## Topics

### Accessing input values

- [inputValues](asauthorizationpublickeycredentialprfassertioninput-swift.struct/inputvalues-swift.property.md): The input values to use when generating the PRF extension output, if specified.
- [inputValues(\_:perCredentialInputValues:)](asauthorizationpublickeycredentialprfassertioninput-swift.struct/inputvalues%28__percredentialinputvalues_%29.md): The inputs for the PRF extension.

### Accessing per-credential input values

- [perCredentialInputValues](asauthorizationpublickeycredentialprfassertioninput-swift.struct/percredentialinputvalues.md): A map of credential identifiers to input values for the PRF extension.
- [perCredentialInputValues(\_:)](asauthorizationpublickeycredentialprfassertioninput-swift.struct/percredentialinputvalues%28__%29.md): The inputs for the PRF extension, when not specifying general input values.

### Supporting types

- [ASAuthorizationPublicKeyCredentialPRFAssertionInput.InputValues](asauthorizationpublickeycredentialprfassertioninput-swift.struct/inputvalues-swift.struct.md): The values to use as inputs to the salts for deriving the symmetric key.

## See Also

### Creating an assertion input

- [init(largeBlob:prf:)](aspasskeyassertioncredentialextensioninput-swift.struct/init%28largeblob_prf_%29.md): Creates a passkey assertion input.
- [ASAuthorizationPublicKeyCredentialLargeBlobAssertionInput](asauthorizationpublickeycredentiallargeblobassertioninput-swift.struct.md): A type that represents input for the binary large object extension in passkey assertion requests.
