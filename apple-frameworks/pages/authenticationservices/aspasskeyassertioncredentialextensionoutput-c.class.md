> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeyassertioncredentialextensionoutput-c.class](https://developer.apple.com/documentation/authenticationservices/aspasskeyassertioncredentialextensionoutput-c.class)

# ASPasskeyAssertionCredentialExtensionOutput

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A class that encapsulates output for various WebAuthn extensions during passkey assertion.

## Declaration

```objectivec
@interface ASPasskeyAssertionCredentialExtensionOutput : NSObject
```

## Topics

### Creating an extension output instance

- [initWithLargeBlobOutput:](aspasskeyassertioncredentialextensionoutput-c.class/initwithlargebloboutput_.md): Creates an extension output instance with the given large binary object output.

### Inspecting properties

- [largeBlobAssertionOutput](aspasskeyassertioncredentialextensionoutput-c.class/largeblobassertionoutput.md): The output for a large binary object operation during passkey assertion.
- [ASAuthorizationPublicKeyCredentialLargeBlobAssertionOutput](asauthorizationpublickeycredentiallargeblobassertionoutput-c.class.md): A type to represent the output of the requested large binary object operation, which returns in a passkey sign-in response.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Accessing extension output

- [extensionOutput](aspasskeyassertioncredential/extensionoutput-46ib3.md): An output from WebAuthn extensions.
