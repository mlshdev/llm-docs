> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeycredentialrequest/userverificationpreference](https://developer.apple.com/documentation/authenticationservices/aspasskeycredentialrequest/userverificationpreference)

# userVerificationPreference (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The relying party’s user verification preference.

## Declaration

```swift
var userVerificationPreference: ASAuthorizationPublicKeyCredentialUserVerificationPreference { get set }
```

## See Also

### Viewing passkey challenge information

- [clientDataHash](clientdatahash.md): The hash of the client data for this assertion.
- [supportedAlgorithms](supportedalgorithms-74mad.md): A list of cryptographic signature algorithms that the relying party supports.
- [extensionInput](extensioninput.md): An input for WebAuthn extensions.
- [ASPasskeyCredentialExtensionInput](../aspasskeycredentialextensioninput.md): A type for WebAuthn extension inputs.

# userVerificationPreference (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The relying party’s user verification preference.

## Declaration

```objectivec
@property (nonatomic) ASAuthorizationPublicKeyCredentialUserVerificationPreference userVerificationPreference;
```

## See Also

### Viewing passkey challenge information

- [clientDataHash](clientdatahash.md): The hash of the client data for this assertion.
- [supportedAlgorithms](supportedalgorithms-27z68.md): A list of cryptographic signature algorithms that the relying party supports.
- [assertionExtensionInput](assertionextensioninput.md): An input for WebAuthn extensions.
- [ASPasskeyAssertionCredentialExtensionInput](../aspasskeyassertioncredentialextensioninput-c.class.md): A type that encapsulates input for various WebAuthn extensions during passkey assertion.
- [registrationExtensionInput](registrationextensioninput.md): An input for WebAuthn extensions.
- [ASPasskeyRegistrationCredentialExtensionInput](../aspasskeyregistrationcredentialextensioninput-c.class.md): A type that encapsulates input for various WebAuthn extensions during passkey registration.
