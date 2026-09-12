> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationwebbrowserplatformpublickeycredentialregistrationrequest/shouldshowhybridtransport](https://developer.apple.com/documentation/authenticationservices/asauthorizationwebbrowserplatformpublickeycredentialregistrationrequest/shouldshowhybridtransport)

# shouldShowHybridTransport (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 16.6+ · macOS 13.5+

Whether a remote authenticator that communicates with the operating system using Bluetooth can resolve the challenge.

## Declaration

```swift
var shouldShowHybridTransport: Bool { get set }
```

## See Also

### Information about the assertion

- [clientData](clientdata-5dk66.md): The client data to supply to the relying party.
- [excludedCredentials](excludedcredentials.md): A list of passkeys that the relying party doesn’t accept for resolving the challenge.

# shouldShowHybridTransport (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 16.6+ · macOS 13.5+

Whether a remote authenticator that communicates with the operating system using Bluetooth can resolve the challenge.

## Declaration

```objectivec
@property (nonatomic) BOOL shouldShowHybridTransport;
```

## See Also

### Information about the assertion

- [clientData](clientdata-7scep.md): The client data to supply to the relying party.
- [excludedCredentials](excludedcredentials.md): A list of passkeys that the relying party doesn’t accept for resolving the challenge.
