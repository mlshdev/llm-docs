> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationplatformpublickeycredentialprovider/relyingpartyidentifier](https://developer.apple.com/documentation/authenticationservices/asauthorizationplatformpublickeycredentialprovider/relyingpartyidentifier)

# relyingPartyIdentifier (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The domain name of the service to register or authorize against.

## Declaration

```swift
var relyingPartyIdentifier: String { get }
```

## See Also

### Creating the request

- [createCredentialAssertionRequest(challenge:)](createcredentialassertionrequest%28challenge_%29.md): Creates an assertion request with a challenge.
- [createCredentialRegistrationRequest(challenge:name:userID:)](createcredentialregistrationrequest%28challenge_name_userid_%29.md): Creates a registration request with a challenge, name, and user ID.
- [createCredentialRegistrationRequest(challenge:name:userID:requestStyle:)](createcredentialregistrationrequest%28challenge_name_userid_requeststyle_%29.md)

# relyingPartyIdentifier (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The domain name of the service to register or authorize against.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * relyingPartyIdentifier;
```

## See Also

### Creating the request

- [createCredentialAssertionRequestWithChallenge:](createcredentialassertionrequest%28challenge_%29.md): Creates an assertion request with a challenge.
- [createCredentialRegistrationRequestWithChallenge:name:userID:](createcredentialregistrationrequest%28challenge_name_userid_%29.md): Creates a registration request with a challenge, name, and user ID.
- [createCredentialRegistrationRequestWithChallenge:name:userID:requestStyle:](createcredentialregistrationrequest%28challenge_name_userid_requeststyle_%29.md)
