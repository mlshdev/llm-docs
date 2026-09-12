> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeyregistrationcredentialextensionoutput-c.class](https://developer.apple.com/documentation/authenticationservices/aspasskeyregistrationcredentialextensionoutput-c.class)

# ASPasskeyRegistrationCredentialExtensionOutput

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A class that encapsulates output for various WebAuthn extensions during passkey registration.

## Declaration

```objectivec
@interface ASPasskeyRegistrationCredentialExtensionOutput : NSObject
```

## Topics

### Creating an extension output instance

- [initWithLargeBlobOutput:](aspasskeyregistrationcredentialextensionoutput-c.class/initwithlargebloboutput_.md): Creates an extension output instance with the given large binary object output.

### Inspecting properties

- [largeBlobRegistrationOutput](aspasskeyregistrationcredentialextensionoutput-c.class/largeblobregistrationoutput.md): The output for a large binary object operation during passkey registration.
- [ASAuthorizationPublicKeyCredentialLargeBlobRegistrationOutput](asauthorizationpublickeycredentiallargeblobregistrationoutput-c.class.md): The result of the large binary object support check, resulting from a passkey registration response.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Accessing extension output

- [extensionOutput](aspasskeyregistrationcredential/extensionoutput-95gvu.md): An output from WebAuthn extensions.
