> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeycredentialrequest/init(credentialidentity:clientdatahash:userverificationpreference:supportedalgorithms:extensioninput:)-9hsyv](https://developer.apple.com/documentation/authenticationservices/aspasskeycredentialrequest/init(credentialidentity:clientdatahash:userverificationpreference:supportedalgorithms:extensioninput:)-9hsyv)

# init(credentialIdentity:clientDataHash:userVerificationPreference:supportedAlgorithms:extensionInput:)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Initializes a passkey credential request, providing additional passkey assertion data.

## Declaration

```swift
convenience init(credentialIdentity: ASPasskeyCredentialIdentity, clientDataHash: Data, userVerificationPreference: ASAuthorizationPublicKeyCredentialUserVerificationPreference, supportedAlgorithms: [ASCOSEAlgorithmIdentifier], extensionInput: ASPasskeyAssertionCredentialExtensionInput?)
```

## Parameters

- `credentialIdentity`: The identity of the requested passkey credential.
- `clientDataHash`: The hash of the client data from the passkey authentication challenge.
- `userVerificationPreference`: The relying party’s user verification preference.
- `supportedAlgorithms`: A list of cryptographic signature algorithms that the relying party supports.
- `extensionInput`: Input for any requested passkey extensions.

<a id="Discussion"></a>

## Discussion

For credential assertion requests, supply an empty array for `supportedAlgorithms`. For credential registration requests, supply an array of one or more [ASCOSEAlgorithmIdentifier](../ascosealgorithmidentifier.md) values.

## See Also

### Creating passkey credential requests

- [init(credentialIdentity:clientDataHash:userVerificationPreference:supportedAlgorithms:)](init%28credentialidentity_clientdatahash_userverificationpreference_supportedalgorithms_%29-1jihy.md): Initializes a passkey credential request, identifying supported algorithms by number.
- [init(credentialIdentity:clientDataHash:userVerificationPreference:supportedAlgorithms:)](init%28credentialidentity_clientdatahash_userverificationpreference_supportedalgorithms_%29-52txr.md): Initializes a passkey credential request, identifying supported algorithms with constants.
- [init(credentialIdentity:clientDataHash:userVerificationPreference:supportedAlgorithms:extensionInput:)](init%28credentialidentity_clientdatahash_userverificationpreference_supportedalgorithms_extensioninput_%29-1258o.md): Initializes a passkey credential request, providing additional passkey registration data.
