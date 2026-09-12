> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationplatformpublickeycredentialprovider/createcredentialregistrationrequest(challenge:name:userid:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationplatformpublickeycredentialprovider/createcredentialregistrationrequest(challenge:name:userid:))

# createCredentialRegistrationRequest(challenge:name:userID:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a registration request with a challenge, name, and user ID.

## Declaration

```swift
func createCredentialRegistrationRequest(challenge: Data, name: String, userID: Data) -> ASAuthorizationPlatformPublicKeyCredentialRegistrationRequest
```

## Parameters

- `challenge`: A stream of bytes that the server provides to prove an authenticator is valid.
- `name`: The name of the user.
- `userID`: A user identifier.

<a id="return-value"></a>

## Return Value

A public key credential registration request.

## See Also

### Creating the request

- [relyingPartyIdentifier](relyingpartyidentifier.md): The domain name of the service to register or authorize against.
- [createCredentialAssertionRequest(challenge:)](createcredentialassertionrequest%28challenge_%29.md): Creates an assertion request with a challenge.
- [createCredentialRegistrationRequest(challenge:name:userID:requestStyle:)](createcredentialregistrationrequest%28challenge_name_userid_requeststyle_%29.md)

# createCredentialRegistrationRequestWithChallenge:name:userID: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a registration request with a challenge, name, and user ID.

## Declaration

```objectivec
- (ASAuthorizationPlatformPublicKeyCredentialRegistrationRequest *) createCredentialRegistrationRequestWithChallenge:(NSData *) challenge name:(NSString *) name userID:(NSData *) userID;
```

## Parameters

- `challenge`: A stream of bytes that the server provides to prove an authenticator is valid.
- `name`: The name of the user.
- `userID`: A user identifier.

<a id="return-value"></a>

## Return Value

A public key credential registration request.

## See Also

### Creating the request

- [relyingPartyIdentifier](relyingpartyidentifier.md): The domain name of the service to register or authorize against.
- [createCredentialAssertionRequestWithChallenge:](createcredentialassertionrequest%28challenge_%29.md): Creates an assertion request with a challenge.
- [createCredentialRegistrationRequestWithChallenge:name:userID:requestStyle:](createcredentialregistrationrequest%28challenge_name_userid_requeststyle_%29.md)
