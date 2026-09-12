> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentiallargeblobregistrationoutput-c.class](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentiallargeblobregistrationoutput-c.class)

# ASAuthorizationPublicKeyCredentialLargeBlobRegistrationOutput

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The result of the large binary object support check, resulting from a passkey registration response.

## Declaration

```objectivec
@interface ASAuthorizationPublicKeyCredentialLargeBlobRegistrationOutput : NSObject
```

<a id="overview"></a>

## Overview

This type indicates whether the passkey provider that manages the passkey supports the `largeBlob` extension. The design of this type mirrors the response in the WebAuthn specification.

## Topics

### Accessing output properties

- [isSupported](asauthorizationpublickeycredentiallargeblobregistrationoutput-c.class/issupported.md): A Boolean value that indicates support for the large binary object extension.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Inspecting properties

- [largeBlobRegistrationOutput](aspasskeyregistrationcredentialextensionoutput-c.class/largeblobregistrationoutput.md): The output for a large binary object operation during passkey registration.
