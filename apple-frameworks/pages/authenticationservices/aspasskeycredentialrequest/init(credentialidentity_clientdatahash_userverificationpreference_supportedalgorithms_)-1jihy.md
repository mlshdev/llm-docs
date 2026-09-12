> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeycredentialrequest/init(credentialidentity:clientdatahash:userverificationpreference:supportedalgorithms:)-1jihy](https://developer.apple.com/documentation/authenticationservices/aspasskeycredentialrequest/init(credentialidentity:clientdatahash:userverificationpreference:supportedalgorithms:)-1jihy)

# init(credentialIdentity:clientDataHash:userVerificationPreference:supportedAlgorithms:) (Swift)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Initializes a passkey credential request, identifying supported algorithms by number.

## Declaration

```swift
convenience init(credentialIdentity: ASPasskeyCredentialIdentity, clientDataHash: Data, userVerificationPreference: ASAuthorizationPublicKeyCredentialUserVerificationPreference, supportedAlgorithms: [NSNumber])
```

## Parameters

- `credentialIdentity`: The identity of the requested passkey credential.
- `clientDataHash`: Hash of the client data from the passkey authentication challenge.
- `userVerificationPreference`: The relying party’s user verification preference.
- `supportedAlgorithms`: An array of numbers that represent cryptographic signature algorithms the identifying party supports.

<a id="Discussion"></a>

## Discussion

The `supportedAlgorithms` parameter is empty for credential assertion requests. For credential registration requests, it contains one or more numbers from the Internet Assigned Numbers Authority (IANA) [Concise Binary Object Representation Object Signing and Encryption (COSE) algorithms registry](https://www.iana.org/assignments/cose/cose.xhtml#algorithms).

## See Also

### Creating passkey credential requests

- [init(credentialIdentity:clientDataHash:userVerificationPreference:supportedAlgorithms:)](init%28credentialidentity_clientdatahash_userverificationpreference_supportedalgorithms_%29-52txr.md): Initializes a passkey credential request, identifying supported algorithms with constants.
- [init(credentialIdentity:clientDataHash:userVerificationPreference:supportedAlgorithms:extensionInput:)](init%28credentialidentity_clientdatahash_userverificationpreference_supportedalgorithms_extensioninput_%29-9hsyv.md): Initializes a passkey credential request, providing additional passkey assertion data.
- [init(credentialIdentity:clientDataHash:userVerificationPreference:supportedAlgorithms:extensionInput:)](init%28credentialidentity_clientdatahash_userverificationpreference_supportedalgorithms_extensioninput_%29-1258o.md): Initializes a passkey credential request, providing additional passkey registration data.

# requestWithCredentialIdentity:clientDataHash:userVerificationPreference:supportedAlgorithms: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Initializes a passkey credential request, identifying supported algorithms by number.

## Declaration

```objectivec
+ (instancetype) requestWithCredentialIdentity:(ASPasskeyCredentialIdentity *) credentialIdentity clientDataHash:(NSData *) clientDataHash userVerificationPreference:(ASAuthorizationPublicKeyCredentialUserVerificationPreference) userVerificationPreference supportedAlgorithms:(NSArray<NSNumber *> *) supportedAlgorithms;
```

## Parameters

- `credentialIdentity`: The identity of the requested passkey credential.
- `clientDataHash`: Hash of the client data from the passkey authentication challenge.
- `userVerificationPreference`: The relying party’s user verification preference.
- `supportedAlgorithms`: An array of numbers that represent cryptographic signature algorithms the identifying party supports.

<a id="Discussion"></a>

## Discussion

The `supportedAlgorithms` parameter is empty for credential assertion requests. For credential registration requests, it contains one or more numbers from the Internet Assigned Numbers Authority (IANA) [Concise Binary Object Representation Object Signing and Encryption (COSE) algorithms registry](https://www.iana.org/assignments/cose/cose.xhtml#algorithms).

## See Also

### Creating passkey credential requests

- [initWithCredentialIdentity:clientDataHash:userVerificationPreference:supportedAlgorithms:](initwithcredentialidentity_clientdatahash_userverificationpreference_supportedalgorithms_.md): Initializes a passkey credential request.
- [initWithCredentialIdentity:clientDataHash:userVerificationPreference:supportedAlgorithms:assertionExtensionInput:](initwithcredentialidentity_clientdatahash_userverificationpreference_supportedalgorithms_assertionextensioninput_.md): Initializes a passkey credential request, providing additional passkey registration data.
- [initWithCredentialIdentity:clientDataHash:userVerificationPreference:supportedAlgorithms:registrationExtensionInput:](initwithcredentialidentity_clientdatahash_userverificationpreference_supportedalgorithms_registrationextensioninput_.md): Initializes a passkey credential request, providing additional passkey registration data.
