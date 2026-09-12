> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentiallargeblobassertionoutput-swift.struct](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentiallargeblobassertionoutput-swift.struct)

# ASAuthorizationPublicKeyCredentialLargeBlobAssertionOutput

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A type to represent the output of the requested large binary object operation, which returns in a passkey sign-in response.

## Declaration

```swift
struct ASAuthorizationPublicKeyCredentialLargeBlobAssertionOutput
```

<a id="overview"></a>

## Overview

For a read operation, this type contains the saved blob, if one is present and the read succeeds. For a write operation, this type indicates whether the write succeeds.

## Topics

### Inspecting the result

- [result](asauthorizationpublickeycredentiallargeblobassertionoutput-swift.struct/result.md): The result of the requested large binary object operation.
- [ASAuthorizationPublicKeyCredentialLargeBlobAssertionOutput.OperationResult](asauthorizationpublickeycredentiallargeblobassertionoutput-swift.struct/operationresult.md): A type that represents the result of the requested binary large object operation.

### Type Methods

- [read(data:)](asauthorizationpublickeycredentiallargeblobassertionoutput-swift.struct/read%28data_%29.md)
- [write(success:)](asauthorizationpublickeycredentiallargeblobassertionoutput-swift.struct/write%28success_%29.md)

## See Also

### Inspecting properties

- [largeBlob](aspasskeyassertioncredentialextensionoutput-swift.struct/largeblob.md): The output for a large binary object operation during passkey assertion.
- [prf](aspasskeyassertioncredentialextensionoutput-swift.struct/prf.md): The outputs of the WebAuthn PRF extension in passkey assertion requests.
- [ASAuthorizationPublicKeyCredentialPRFAssertionOutput](asauthorizationpublickeycredentialprfassertionoutput-swift.struct.md): A type to represent outputs of the web authentication PRF extension, when requesting them during an assertion.
