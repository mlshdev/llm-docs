> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeycredentialrequest/supportedalgorithms-74mad](https://developer.apple.com/documentation/authenticationservices/aspasskeycredentialrequest/supportedalgorithms-74mad)

# supportedAlgorithms

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A list of cryptographic signature algorithms that the relying party supports.

## Declaration

```swift
var supportedAlgorithms: [ASCOSEAlgorithmIdentifier] { get }
```

<a id="Discussion"></a>

## Discussion

For credential assertion requests, this property is empty.

## See Also

### Viewing passkey challenge information

- [clientDataHash](clientdatahash.md): The hash of the client data for this assertion.
- [userVerificationPreference](userverificationpreference.md): The relying party’s user verification preference.
- [extensionInput](extensioninput.md): An input for WebAuthn extensions.
- [ASPasskeyCredentialExtensionInput](../aspasskeycredentialextensioninput.md): A type for WebAuthn extension inputs.
