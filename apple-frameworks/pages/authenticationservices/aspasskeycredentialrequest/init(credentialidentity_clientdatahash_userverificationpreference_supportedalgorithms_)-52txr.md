> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeycredentialrequest/init(credentialidentity:clientdatahash:userverificationpreference:supportedalgorithms:)-52txr](https://developer.apple.com/documentation/authenticationservices/aspasskeycredentialrequest/init(credentialidentity:clientdatahash:userverificationpreference:supportedalgorithms:)-52txr)

# init(credentialIdentity:clientDataHash:userVerificationPreference:supportedAlgorithms:)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Initializes a passkey credential request, identifying supported algorithms with constants.

## Declaration

```swift
convenience init(credentialIdentity: ASPasskeyCredentialIdentity, clientDataHash: Data, userVerificationPreference: ASAuthorizationPublicKeyCredentialUserVerificationPreference, supportedAlgorithms: [ASCOSEAlgorithmIdentifier])
```

## Parameters

- `credentialIdentity`: The identity of the requested passkey credential.
- `clientDataHash`: Hash of the client data from the passkey authentication challenge.
- `userVerificationPreference`: The relying party’s user verification preference.
- `supportedAlgorithms`: A list of cryptographic signature algorithms that the relying party supports.

<a id="Discussion"></a>

## Discussion

For credential assertion requests, supply an empty array for the `supportedAlgorithms`. For credential registration requests, supply an array of one or more [ASCOSEAlgorithmIdentifier](../ascosealgorithmidentifier.md) values.

## See Also

### Creating passkey credential requests

- [init(credentialIdentity:clientDataHash:userVerificationPreference:supportedAlgorithms:)](init%28credentialidentity_clientdatahash_userverificationpreference_supportedalgorithms_%29-1jihy.md): Initializes a passkey credential request, identifying supported algorithms by number.
- [init(credentialIdentity:clientDataHash:userVerificationPreference:supportedAlgorithms:extensionInput:)](init%28credentialidentity_clientdatahash_userverificationpreference_supportedalgorithms_extensioninput_%29-9hsyv.md): Initializes a passkey credential request, providing additional passkey assertion data.
- [init(credentialIdentity:clientDataHash:userVerificationPreference:supportedAlgorithms:extensionInput:)](init%28credentialidentity_clientdatahash_userverificationpreference_supportedalgorithms_extensioninput_%29-1258o.md): Initializes a passkey credential request, providing additional passkey registration data.
