> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeycredentialrequest/supportedalgorithms-27z68](https://developer.apple.com/documentation/authenticationservices/aspasskeycredentialrequest/supportedalgorithms-27z68)

# supportedAlgorithms

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A list of cryptographic signature algorithms that the relying party supports.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSNumber *> * supportedAlgorithms;
```

<a id="Discussion"></a>

## Discussion

For credential assertion requests, this property is empty. For credential registration requests, it contains one or more numbers from the Internet Assigned Numbers Authority (IANA) [Concise Binary Object Representation Object Signing and Encryption (COSE) algorithms registry](https://www.iana.org/assignments/cose/cose.xhtml#algorithms), as [NSNumber](../../foundation/nsnumber.md) objects.

## See Also

### Viewing passkey challenge information

- [clientDataHash](clientdatahash.md): The hash of the client data for this assertion.
- [userVerificationPreference](userverificationpreference.md): The relying party’s user verification preference.
- [assertionExtensionInput](assertionextensioninput.md): An input for WebAuthn extensions.
- [ASPasskeyAssertionCredentialExtensionInput](../aspasskeyassertioncredentialextensioninput-c.class.md): A type that encapsulates input for various WebAuthn extensions during passkey assertion.
- [registrationExtensionInput](registrationextensioninput.md): An input for WebAuthn extensions.
- [ASPasskeyRegistrationCredentialExtensionInput](../aspasskeyregistrationcredentialextensioninput-c.class.md): A type that encapsulates input for various WebAuthn extensions during passkey registration.
