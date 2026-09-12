> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeycredentialrequest/registrationextensioninput](https://developer.apple.com/documentation/authenticationservices/aspasskeycredentialrequest/registrationextensioninput)

# registrationExtensionInput

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

An input for WebAuthn extensions.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) ASPasskeyRegistrationCredentialExtensionInput * registrationExtensionInput;
```

## See Also

### Viewing passkey challenge information

- [clientDataHash](clientdatahash.md): The hash of the client data for this assertion.
- [userVerificationPreference](userverificationpreference.md): The relying party’s user verification preference.
- [supportedAlgorithms](supportedalgorithms-27z68.md): A list of cryptographic signature algorithms that the relying party supports.
- [assertionExtensionInput](assertionextensioninput.md): An input for WebAuthn extensions.
- [ASPasskeyAssertionCredentialExtensionInput](../aspasskeyassertioncredentialextensioninput-c.class.md): A type that encapsulates input for various WebAuthn extensions during passkey assertion.
- [ASPasskeyRegistrationCredentialExtensionInput](../aspasskeyregistrationcredentialextensioninput-c.class.md): A type that encapsulates input for various WebAuthn extensions during passkey registration.
