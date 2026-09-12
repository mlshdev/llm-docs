> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeycredentialextensioninput](https://developer.apple.com/documentation/authenticationservices/aspasskeycredentialextensioninput)

# ASPasskeyCredentialExtensionInput

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A type for WebAuthn extension inputs.

## Declaration

```swift
enum ASPasskeyCredentialExtensionInput
```

## Topics

### Extension input types

- [ASPasskeyCredentialExtensionInput.none](aspasskeycredentialextensioninput/none.md): An empty extension input.
- [ASPasskeyCredentialExtensionInput.assertion(\_:)](aspasskeycredentialextensioninput/assertion%28__%29.md): An extension input for an assertion.
- [ASPasskeyAssertionCredentialExtensionInput](aspasskeyassertioncredentialextensioninput-swift.struct.md): A type that encapsulates input for various WebAuthn extensions during passkey assertion.
- [ASPasskeyCredentialExtensionInput.registration(\_:)](aspasskeycredentialextensioninput/registration%28__%29.md): An extension input for a registration.
- [ASPasskeyRegistrationCredentialExtensionInput](aspasskeyregistrationcredentialextensioninput-swift.struct.md): A type that encapsulates input for various WebAuthn extensions during passkey registration.

## See Also

### Viewing passkey challenge information

- [clientDataHash](aspasskeycredentialrequest/clientdatahash.md): The hash of the client data for this assertion.
- [userVerificationPreference](aspasskeycredentialrequest/userverificationpreference.md): The relying party’s user verification preference.
- [supportedAlgorithms](aspasskeycredentialrequest/supportedalgorithms-74mad.md): A list of cryptographic signature algorithms that the relying party supports.
- [extensionInput](aspasskeycredentialrequest/extensioninput.md): An input for WebAuthn extensions.
