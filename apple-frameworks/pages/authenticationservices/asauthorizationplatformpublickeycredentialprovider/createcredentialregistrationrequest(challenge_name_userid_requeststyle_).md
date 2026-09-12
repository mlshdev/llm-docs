> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationplatformpublickeycredentialprovider/createcredentialregistrationrequest(challenge:name:userid:requeststyle:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationplatformpublickeycredentialprovider/createcredentialregistrationrequest(challenge:name:userid:requeststyle:))

# createCredentialRegistrationRequest(challenge:name:userID:requestStyle:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

## Declaration

```swift
func createCredentialRegistrationRequest(challenge: Data, name: String, userID: Data, requestStyle: ASAuthorizationPlatformPublicKeyCredentialRegistrationRequest.RequestStyle) -> ASAuthorizationPlatformPublicKeyCredentialRegistrationRequest
```

## Parameters

- `challenge`: The challenge to sign.
- `name`: The user name for the new credential.
- `userID`: An identifier to be stored alongside the credential, which will be returned with the credential when it is used to authenticate.
- `requestStyle`: The style for this request.

<a id="discussion"></a>

## Discussion

Create a request to register a new platform credential.

## See Also

### Creating the request

- [relyingPartyIdentifier](relyingpartyidentifier.md): The domain name of the service to register or authorize against.
- [createCredentialAssertionRequest(challenge:)](createcredentialassertionrequest%28challenge_%29.md): Creates an assertion request with a challenge.
- [createCredentialRegistrationRequest(challenge:name:userID:)](createcredentialregistrationrequest%28challenge_name_userid_%29.md): Creates a registration request with a challenge, name, and user ID.

# createCredentialRegistrationRequestWithChallenge:name:userID:requestStyle: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

## Declaration

```objectivec
- (ASAuthorizationPlatformPublicKeyCredentialRegistrationRequest *) createCredentialRegistrationRequestWithChallenge:(NSData *) challenge name:(NSString *) name userID:(NSData *) userID requestStyle:(ASAuthorizationPlatformPublicKeyCredentialRegistrationRequestStyle) requestStyle;
```

## Parameters

- `challenge`: The challenge to sign.
- `name`: The user name for the new credential.
- `userID`: An identifier to be stored alongside the credential, which will be returned with the credential when it is used to authenticate.
- `requestStyle`: The style for this request.

<a id="discussion"></a>

## Discussion

Create a request to register a new platform credential.

## See Also

### Creating the request

- [relyingPartyIdentifier](relyingpartyidentifier.md): The domain name of the service to register or authorize against.
- [createCredentialAssertionRequestWithChallenge:](createcredentialassertionrequest%28challenge_%29.md): Creates an assertion request with a challenge.
- [createCredentialRegistrationRequestWithChallenge:name:userID:](createcredentialregistrationrequest%28challenge_name_userid_%29.md): Creates a registration request with a challenge, name, and user ID.
