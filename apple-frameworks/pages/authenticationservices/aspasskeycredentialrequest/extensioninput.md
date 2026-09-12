> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeycredentialrequest/extensioninput](https://developer.apple.com/documentation/authenticationservices/aspasskeycredentialrequest/extensioninput)

# extensionInput

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

An input for WebAuthn extensions.

## Declaration

```swift
var extensionInput: ASPasskeyCredentialExtensionInput { get }
```

## See Also

### Viewing passkey challenge information

- [clientDataHash](clientdatahash.md): The hash of the client data for this assertion.
- [userVerificationPreference](userverificationpreference.md): The relying party’s user verification preference.
- [supportedAlgorithms](supportedalgorithms-74mad.md): A list of cryptographic signature algorithms that the relying party supports.
- [ASPasskeyCredentialExtensionInput](../aspasskeycredentialextensioninput.md): A type for WebAuthn extension inputs.
