> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeyregistrationcredentialextensioninput-c.class](https://developer.apple.com/documentation/authenticationservices/aspasskeyregistrationcredentialextensioninput-c.class)

# ASPasskeyRegistrationCredentialExtensionInput

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A type that encapsulates input for various WebAuthn extensions during passkey registration.

## Declaration

```objectivec
@interface ASPasskeyRegistrationCredentialExtensionInput : NSObject
```

## Topics

### Inputs

- [largeBlob](aspasskeyregistrationcredentialextensioninput-c.class/largeblob.md): Input for the large binary object extension in passkey registration requests.

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
- [ASPasskeyAssertionCredentialExtensionInput](aspasskeyassertioncredentialextensioninput-c.class.md): A type that encapsulates input for various WebAuthn extensions during passkey assertion.
- [registrationExtensionInput](aspasskeycredentialrequest/registrationextensioninput.md): An input for WebAuthn extensions.
