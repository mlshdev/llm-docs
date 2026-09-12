> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeycredentialrequest/initwithcredentialidentity:clientdatahash:userverificationpreference:supportedalgorithms:registrationextensioninput:](https://developer.apple.com/documentation/authenticationservices/aspasskeycredentialrequest/initwithcredentialidentity:clientdatahash:userverificationpreference:supportedalgorithms:registrationextensioninput:)

# initWithCredentialIdentity:clientDataHash:userVerificationPreference:supportedAlgorithms:registrationExtensionInput:

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Initializes a passkey credential request, providing additional passkey registration data.

## Declaration

```objectivec
- (instancetype) initWithCredentialIdentity:(ASPasskeyCredentialIdentity *) credentialIdentity clientDataHash:(NSData *) clientDataHash userVerificationPreference:(ASAuthorizationPublicKeyCredentialUserVerificationPreference) userVerificationPreference supportedAlgorithms:(NSArray<NSNumber *> *) supportedAlgorithms registrationExtensionInput:(ASPasskeyRegistrationCredentialExtensionInput *) registrationExtensionInput;
```

## Parameters

- `credentialIdentity`: The identity of the requested passkey credential.
- `clientDataHash`: The hash of the client data from the passkey authentication challenge.
- `userVerificationPreference`: The relying party’s user verification preference.
- `supportedAlgorithms`: A list of cryptographic signature algorithms that the relying party supports.
- `registrationExtensionInput`: Input for any requested passkey extensions.

## See Also

### Creating passkey credential requests

- [requestWithCredentialIdentity:clientDataHash:userVerificationPreference:supportedAlgorithms:](init%28credentialidentity_clientdatahash_userverificationpreference_supportedalgorithms_%29-1jihy.md): Initializes a passkey credential request, identifying supported algorithms by number.
- [initWithCredentialIdentity:clientDataHash:userVerificationPreference:supportedAlgorithms:](initwithcredentialidentity_clientdatahash_userverificationpreference_supportedalgorithms_.md): Initializes a passkey credential request.
- [initWithCredentialIdentity:clientDataHash:userVerificationPreference:supportedAlgorithms:assertionExtensionInput:](initwithcredentialidentity_clientdatahash_userverificationpreference_supportedalgorithms_assertionextensioninput_.md): Initializes a passkey credential request, providing additional passkey registration data.
