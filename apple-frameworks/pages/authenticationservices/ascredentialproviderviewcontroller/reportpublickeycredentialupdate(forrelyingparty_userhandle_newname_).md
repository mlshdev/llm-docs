> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialproviderviewcontroller/reportpublickeycredentialupdate(forrelyingparty:userhandle:newname:)](https://developer.apple.com/documentation/authenticationservices/ascredentialproviderviewcontroller/reportpublickeycredentialupdate(forrelyingparty:userhandle:newname:))

# reportPublicKeyCredentialUpdate(forRelyingParty:userHandle:newName:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Receives a report from the system that a relying party indicated that a passkey’s user name updated.

## Declaration

```swift
func reportPublicKeyCredentialUpdate(forRelyingParty relyingParty: String, userHandle: Data, newName: String)
```

## Parameters

- `relyingParty`: The relying party, typically a website, for which to save the credential.
- `userHandle`: The user identifier.
- `newName`: The new user name for the credential.

<a id="discussion"></a>

## Discussion

The system calls this method when a relying party sends an updated user name by calling [reportPublicKeyCredentialUpdate(relyingPartyIdentifier:userHandle:newName:)](../ascredentialupdater/reportpublickeycredentialupdate%28relyingpartyidentifier_userhandle_newname_%29.md).

> **Important**

> Perform any updates in the background and don’t show a blocking UI or any error.

To indicate support for this feature, add the key `SupportsCredentialUpdate` with a value of `YES` under the `ASCredentialProviderExtensionCapabilities` dictionary in your app’s information property list:

```not specified
Info.plist
├─ NSExtension
    ├─ NSExtensionAttributes
        ├─ ASCredentialProviderExtensionCapabilities
            ├─ SupportsCredentialUpdate => YES
```

## See Also

### Receiving credential updates

- [reportAllAcceptedPublicKeyCredentials(forRelyingParty:userHandle:acceptedCredentialIDs:)](reportallacceptedpublickeycredentials%28forrelyingparty_userhandle_acceptedcredentialids_%29.md): Receives a report from the system that a relying party sent a snapshot of all accepted credentials for an account.
- [reportUnknownPublicKeyCredential(forRelyingParty:credentialID:)](reportunknownpublickeycredential%28forrelyingparty_credentialid_%29.md): Receives a report from the system that a relying party indicated a passkey credential is invalid.
- [reportUnusedPasswordCredential(forDomain:userName:)](reportunusedpasswordcredential%28fordomain_username_%29.md): Receives a report from the system that a relying party indicatd that a password credential isn’t needed anymore for a given user name.

# reportPublicKeyCredentialUpdateForRelyingParty:userHandle:newName: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Receives a report from the system that a relying party indicated that a passkey’s user name updated.

## Declaration

```objectivec
- (void) reportPublicKeyCredentialUpdateForRelyingParty:(NSString *) relyingParty userHandle:(NSData *) userHandle newName:(NSString *) newName;
```

## Parameters

- `relyingParty`: The relying party, typically a website, for which to save the credential.
- `userHandle`: The user identifier.
- `newName`: The new user name for the credential.

<a id="discussion"></a>

## Discussion

The system calls this method when a relying party sends an updated user name by calling [reportPublicKeyCredentialUpdate(relyingPartyIdentifier:userHandle:newName:)](../ascredentialupdater/reportpublickeycredentialupdate%28relyingpartyidentifier_userhandle_newname_%29.md).

> **Important**

> Perform any updates in the background and don’t show a blocking UI or any error.

To indicate support for this feature, add the key `SupportsCredentialUpdate` with a value of `YES` under the `ASCredentialProviderExtensionCapabilities` dictionary in your app’s information property list:

```not specified
Info.plist
├─ NSExtension
    ├─ NSExtensionAttributes
        ├─ ASCredentialProviderExtensionCapabilities
            ├─ SupportsCredentialUpdate => YES
```

## See Also

### Receiving credential updates

- [reportAllAcceptedPublicKeyCredentialsForRelyingParty:userHandle:acceptedCredentialIDs:](reportallacceptedpublickeycredentials%28forrelyingparty_userhandle_acceptedcredentialids_%29.md): Receives a report from the system that a relying party sent a snapshot of all accepted credentials for an account.
- [reportUnknownPublicKeyCredentialForRelyingParty:credentialID:](reportunknownpublickeycredential%28forrelyingparty_credentialid_%29.md): Receives a report from the system that a relying party indicated a passkey credential is invalid.
- [reportUnusedPasswordCredentialForDomain:userName:](reportunusedpasswordcredential%28fordomain_username_%29.md): Receives a report from the system that a relying party indicatd that a password credential isn’t needed anymore for a given user name.
