> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentiallargeblobassertionoutput-c.class

# ASAuthorizationPublicKeyCredentialLargeBlobAssertionOutput

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A type to represent the output of the requested large binary object operation, which returns in a passkey sign-in response.

## Declaration

```objectivec
@interface ASAuthorizationPublicKeyCredentialLargeBlobAssertionOutput : NSObject
```

<a id="overview"></a>

## Overview

For a read operation, this type contains the saved blob, if one is present and the read succeeds. For a write operation, this type indicates whether the write succeeds.

## Topics

### Inspecting the result

- [didWrite](asauthorizationpublickeycredentiallargeblobassertionoutput-c.class/didwrite.md): A Boolean value that indicates whether a write operation for a large binary object succeeds.
- [readData](asauthorizationpublickeycredentiallargeblobassertionoutput-c.class/readdata.md): Data the system reads from the large binary object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Inspecting properties

- [largeBlobAssertionOutput](aspasskeyassertioncredentialextensionoutput-c.class/largeblobassertionoutput.md): The output for a large binary object operation during passkey assertion.
