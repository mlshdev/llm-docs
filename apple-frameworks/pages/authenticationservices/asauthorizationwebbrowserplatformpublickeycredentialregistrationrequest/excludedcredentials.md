> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationwebbrowserplatformpublickeycredentialregistrationrequest/excludedcredentials](https://developer.apple.com/documentation/authenticationservices/asauthorizationwebbrowserplatformpublickeycredentialregistrationrequest/excludedcredentials)

# excludedCredentials (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 16.6+ · macOS 13.5+

A list of passkeys that the relying party doesn’t accept for resolving the challenge.

## Declaration

```swift
var excludedCredentials: [ASAuthorizationPlatformPublicKeyCredentialDescriptor]? { get set }
```

## See Also

### Information about the assertion

- [clientData](clientdata-5dk66.md): The client data to supply to the relying party.
- [shouldShowHybridTransport](shouldshowhybridtransport.md): Whether a remote authenticator that communicates with the operating system using Bluetooth can resolve the challenge.

# excludedCredentials (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 16.6+ · macOS 13.5+

A list of passkeys that the relying party doesn’t accept for resolving the challenge.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<ASAuthorizationPlatformPublicKeyCredentialDescriptor *> * excludedCredentials;
```

## See Also

### Information about the assertion

- [clientData](clientdata-7scep.md): The client data to supply to the relying party.
- [shouldShowHybridTransport](shouldshowhybridtransport.md): Whether a remote authenticator that communicates with the operating system using Bluetooth can resolve the challenge.
