> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationplatformpublickeycredentialprovider/createcredentialassertionrequest(challenge:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationplatformpublickeycredentialprovider/createcredentialassertionrequest(challenge:))

# createCredentialAssertionRequest(challenge:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Creates an assertion request with a challenge.

## Declaration

```swift
func createCredentialAssertionRequest(challenge: Data) -> ASAuthorizationPlatformPublicKeyCredentialAssertionRequest
```

## Parameters

- `challenge`: A stream of bytes that the server provides to prove an authenticator is valid.

<a id="return-value"></a>

## Return Value

A public key credential registration request.

## See Also

### Creating the request

- [relyingPartyIdentifier](relyingpartyidentifier.md): The domain name of the service to register or authorize against.
- [createCredentialRegistrationRequest(challenge:name:userID:)](createcredentialregistrationrequest%28challenge_name_userid_%29.md): Creates a registration request with a challenge, name, and user ID.
- [createCredentialRegistrationRequest(challenge:name:userID:requestStyle:)](createcredentialregistrationrequest%28challenge_name_userid_requeststyle_%29.md)

# createCredentialAssertionRequestWithChallenge: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Creates an assertion request with a challenge.

## Declaration

```objectivec
- (ASAuthorizationPlatformPublicKeyCredentialAssertionRequest *) createCredentialAssertionRequestWithChallenge:(NSData *) challenge;
```

## Parameters

- `challenge`: A stream of bytes that the server provides to prove an authenticator is valid.

<a id="return-value"></a>

## Return Value

A public key credential registration request.

## See Also

### Creating the request

- [relyingPartyIdentifier](relyingpartyidentifier.md): The domain name of the service to register or authorize against.
- [createCredentialRegistrationRequestWithChallenge:name:userID:](createcredentialregistrationrequest%28challenge_name_userid_%29.md): Creates a registration request with a challenge, name, and user ID.
- [createCredentialRegistrationRequestWithChallenge:name:userID:requestStyle:](createcredentialregistrationrequest%28challenge_name_userid_requeststyle_%29.md)
