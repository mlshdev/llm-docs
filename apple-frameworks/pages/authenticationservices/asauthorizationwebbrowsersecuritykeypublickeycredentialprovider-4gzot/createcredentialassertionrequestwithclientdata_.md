> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationwebbrowsersecuritykeypublickeycredentialprovider-4gzot/createcredentialassertionrequestwithclientdata:

# createCredentialAssertionRequestWithClientData:

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+

Creates a credential assertion request for authenticating to the relying party.

## Declaration

```objectivec
- (ASAuthorizationSecurityKeyPublicKeyCredentialAssertionRequest *) createCredentialAssertionRequestWithClientData:(ASPublicKeyCredentialClientData *) clientData;
```

## Parameters

- `clientData`: The client data that contains the reply to the relying party’s challenge.

## See Also

### Creating credential assertion requests

- [createCredentialRegistrationRequestWithClientData:displayName:name:userID:](createcredentialregistrationrequestwithclientdata_displayname_name_userid_.md): Creates a credential registration request for registering a new password with the relying party.
