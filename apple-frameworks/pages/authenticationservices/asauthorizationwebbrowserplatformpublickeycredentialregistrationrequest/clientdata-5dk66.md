> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationwebbrowserplatformpublickeycredentialregistrationrequest/clientdata-5dk66

# clientData

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 16.6+ · macOS 13.5+

The client data to supply to the relying party.

## Declaration

```swift
var clientData: ASPublicKeyCredentialClientData? { get }
```

## See Also

### Information about the assertion

- [excludedCredentials](excludedcredentials.md): A list of passkeys that the relying party doesn’t accept for resolving the challenge.
- [shouldShowHybridTransport](shouldshowhybridtransport.md): Whether a remote authenticator that communicates with the operating system using Bluetooth can resolve the challenge.
