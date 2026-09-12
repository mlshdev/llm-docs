> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationsecuritykeypublickeycredentialprovider/createcredentialregistrationrequest(challenge:displayname:name:userid:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationsecuritykeypublickeycredentialprovider/createcredentialregistrationrequest(challenge:displayname:name:userid:))

# createCredentialRegistrationRequest(challenge:displayName:name:userID:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates a registration request with a challenge, display name, and user ID.

## Declaration

```swift
func createCredentialRegistrationRequest(challenge: Data, displayName: String, name: String, userID: Data) -> ASAuthorizationSecurityKeyPublicKeyCredentialRegistrationRequest
```

## Parameters

- `challenge`: A stream of bytes that the server provides to prove an authenticator is valid.
- `displayName`: The proper name of the user.
- `name`: The name of the user.
- `userID`: The user’s account identifier.

<a id="return-value"></a>

## Return Value

A security key credential registration request.

## Mentioned In

- [Supporting passkeys](../supporting-passkeys.md)
- [Supporting Security Key Authentication Using Physical Keys](../supporting-security-key-authentication-using-physical-keys.md)

## See Also

### Creating the request

- [relyingPartyIdentifier](relyingpartyidentifier.md): The domain name of the service to authorize against.
- [createCredentialAssertionRequest(challenge:)](createcredentialassertionrequest%28challenge_%29.md): Creates an assertion request with a challenge.

# createCredentialRegistrationRequestWithChallenge:displayName:name:userID: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates a registration request with a challenge, display name, and user ID.

## Declaration

```objectivec
- (ASAuthorizationSecurityKeyPublicKeyCredentialRegistrationRequest *) createCredentialRegistrationRequestWithChallenge:(NSData *) challenge displayName:(NSString *) displayName name:(NSString *) name userID:(NSData *) userID;
```

## Parameters

- `challenge`: A stream of bytes that the server provides to prove an authenticator is valid.
- `displayName`: The proper name of the user.
- `name`: The name of the user.
- `userID`: The user’s account identifier.

<a id="return-value"></a>

## Return Value

A security key credential registration request.

## Mentioned In

- [Supporting passkeys](../supporting-passkeys.md)
- [Supporting Security Key Authentication Using Physical Keys](../supporting-security-key-authentication-using-physical-keys.md)

## See Also

### Creating the request

- [relyingPartyIdentifier](relyingpartyidentifier.md): The domain name of the service to authorize against.
- [createCredentialAssertionRequestWithChallenge:](createcredentialassertionrequest%28challenge_%29.md): Creates an assertion request with a challenge.
