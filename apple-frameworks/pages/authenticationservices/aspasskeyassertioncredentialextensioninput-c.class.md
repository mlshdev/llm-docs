> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeyassertioncredentialextensioninput-c.class](https://developer.apple.com/documentation/authenticationservices/aspasskeyassertioncredentialextensioninput-c.class)

# ASPasskeyAssertionCredentialExtensionInput

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A type that encapsulates input for various WebAuthn extensions during passkey assertion.

## Declaration

```objectivec
@interface ASPasskeyAssertionCredentialExtensionInput : NSObject
```

## Topics

### Inputs

- [largeBlob](aspasskeyassertioncredentialextensioninput-c.class/largeblob.md): Input for the WebAuthn large binary object extension in passkey assertion requests.
- [ASAuthorizationPublicKeyCredentialLargeBlobAssertionInput](asauthorizationpublickeycredentiallargeblobassertioninput-c.class.md): A type that represents input for the binary large object extension in passkey assertion requests.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Viewing passkey challenge information

- [clientDataHash](aspasskeycredentialrequest/clientdatahash.md): The hash of the client data for this assertion.
- [userVerificationPreference](aspasskeycredentialrequest/userverificationpreference.md): The relying party’s user verification preference.
- [supportedAlgorithms](aspasskeycredentialrequest/supportedalgorithms-27z68.md): A list of cryptographic signature algorithms that the relying party supports.
- [assertionExtensionInput](aspasskeycredentialrequest/assertionextensioninput.md): An input for WebAuthn extensions.
- [registrationExtensionInput](aspasskeycredentialrequest/registrationextensioninput.md): An input for WebAuthn extensions.
- [ASPasskeyRegistrationCredentialExtensionInput](aspasskeyregistrationcredentialextensioninput-c.class.md): A type that encapsulates input for various WebAuthn extensions during passkey registration.
