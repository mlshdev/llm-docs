> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialproviderviewcontroller/reportunknownpublickeycredential(forrelyingparty:credentialid:)](https://developer.apple.com/documentation/authenticationservices/ascredentialproviderviewcontroller/reportunknownpublickeycredential(forrelyingparty:credentialid:))

# reportUnknownPublicKeyCredential(forRelyingParty:credentialID:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Receives a report from the system that a relying party indicated a passkey credential is invalid.

## Declaration

```swift
func reportUnknownPublicKeyCredential(forRelyingParty relyingParty: String, credentialID: Data)
```

## Parameters

- `relyingParty`: The relying party, typically a website, for which to update the credential.
- `credentialID`: An identifier that uniquely identifies the passkey.

<a id="discussion"></a>

## Discussion

The system calls this method when a relying party reports an invalid passkey by calling [reportUnknownPublicKeyCredential(relyingPartyIdentifier:credentialID:)](../ascredentialupdater/reportunknownpublickeycredential%28relyingpartyidentifier_credentialid_%29.md). Your manager can hide or remove the credential after it receives this report.

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
- [reportPublicKeyCredentialUpdate(forRelyingParty:userHandle:newName:)](reportpublickeycredentialupdate%28forrelyingparty_userhandle_newname_%29.md): Receives a report from the system that a relying party indicated that a passkey’s user name updated.
- [reportUnusedPasswordCredential(forDomain:userName:)](reportunusedpasswordcredential%28fordomain_username_%29.md): Receives a report from the system that a relying party indicatd that a password credential isn’t needed anymore for a given user name.

# reportUnknownPublicKeyCredentialForRelyingParty:credentialID: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Receives a report from the system that a relying party indicated a passkey credential is invalid.

## Declaration

```objectivec
- (void) reportUnknownPublicKeyCredentialForRelyingParty:(NSString *) relyingParty credentialID:(NSData *) credentialID;
```

## Parameters

- `relyingParty`: The relying party, typically a website, for which to update the credential.
- `credentialID`: An identifier that uniquely identifies the passkey.

<a id="discussion"></a>

## Discussion

The system calls this method when a relying party reports an invalid passkey by calling [reportUnknownPublicKeyCredential(relyingPartyIdentifier:credentialID:)](../ascredentialupdater/reportunknownpublickeycredential%28relyingpartyidentifier_credentialid_%29.md). Your manager can hide or remove the credential after it receives this report.

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
- [reportPublicKeyCredentialUpdateForRelyingParty:userHandle:newName:](reportpublickeycredentialupdate%28forrelyingparty_userhandle_newname_%29.md): Receives a report from the system that a relying party indicated that a passkey’s user name updated.
- [reportUnusedPasswordCredentialForDomain:userName:](reportunusedpasswordcredential%28fordomain_username_%29.md): Receives a report from the system that a relying party indicatd that a password credential isn’t needed anymore for a given user name.
