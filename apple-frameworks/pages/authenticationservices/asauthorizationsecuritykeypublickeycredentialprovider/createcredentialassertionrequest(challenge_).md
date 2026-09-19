> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationsecuritykeypublickeycredentialprovider/createcredentialassertionrequest(challenge:)

# createCredentialAssertionRequest(challenge:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates an assertion request with a challenge.

## Declaration

```swift
func createCredentialAssertionRequest(challenge: Data) -> ASAuthorizationSecurityKeyPublicKeyCredentialAssertionRequest
```

## Parameters

- `challenge`: A stream of bytes that the server provides to prove an authenticator is valid.

<a id="return-value"></a>

## Return Value

A security key credential registration request.

## See Also

### Creating the request

- [relyingPartyIdentifier](relyingpartyidentifier.md): The domain name of the service to authorize against.
- [createCredentialRegistrationRequest(challenge:displayName:name:userID:)](createcredentialregistrationrequest%28challenge_displayname_name_userid_%29.md): Creates a registration request with a challenge, display name, and user ID.

# createCredentialAssertionRequestWithChallenge: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates an assertion request with a challenge.

## Declaration

```objectivec
- (ASAuthorizationSecurityKeyPublicKeyCredentialAssertionRequest *) createCredentialAssertionRequestWithChallenge:(NSData *) challenge;
```

## Parameters

- `challenge`: A stream of bytes that the server provides to prove an authenticator is valid.

<a id="return-value"></a>

## Return Value

A security key credential registration request.

## See Also

### Creating the request

- [relyingPartyIdentifier](relyingpartyidentifier.md): The domain name of the service to authorize against.
- [createCredentialRegistrationRequestWithChallenge:displayName:name:userID:](createcredentialregistrationrequest%28challenge_displayname_name_userid_%29.md): Creates a registration request with a challenge, display name, and user ID.
