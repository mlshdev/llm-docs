> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialproviderviewcontroller/reportallacceptedpublickeycredentials(forrelyingparty:userhandle:acceptedcredentialids:)](https://developer.apple.com/documentation/authenticationservices/ascredentialproviderviewcontroller/reportallacceptedpublickeycredentials(forrelyingparty:userhandle:acceptedcredentialids:))

# reportAllAcceptedPublicKeyCredentials(forRelyingParty:userHandle:acceptedCredentialIDs:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Receives a report from the system that a relying party sent a snapshot of all accepted credentials for an account.

## Declaration

```swift
func reportAllAcceptedPublicKeyCredentials(forRelyingParty relyingParty: String, userHandle: Data, acceptedCredentialIDs: [Data])
```

## Parameters

- `relyingParty`: The relying party, typically a website, for which to save the credentials.
- `userHandle`: The user identifier.
- `acceptedCredentialIDs`: An array of identifiers that uniquely identifies the accepted credentials.

<a id="Discussion"></a>

## Discussion

The system calls this method when a relying party sends a list of accepted credentials by calling [reportAllAcceptedPublicKeyCredentials(relyingPartyIdentifier:userHandle:acceptedCredentialIDs:)](../ascredentialupdater/reportallacceptedpublickeycredentials%28relyingpartyidentifier_userhandle_acceptedcredentialids_%29.md). Your manager can hide or remove any credential that’s absent from the `acceptedCredentialIDs` array.

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

- [reportPublicKeyCredentialUpdate(forRelyingParty:userHandle:newName:)](reportpublickeycredentialupdate%28forrelyingparty_userhandle_newname_%29.md): Receives a report from the system that a relying party indicated that a passkey’s user name updated.
- [reportUnknownPublicKeyCredential(forRelyingParty:credentialID:)](reportunknownpublickeycredential%28forrelyingparty_credentialid_%29.md): Receives a report from the system that a relying party indicated a passkey credential is invalid.
- [reportUnusedPasswordCredential(forDomain:userName:)](reportunusedpasswordcredential%28fordomain_username_%29.md): Receives a report from the system that a relying party indicatd that a password credential isn’t needed anymore for a given user name.

# reportAllAcceptedPublicKeyCredentialsForRelyingParty:userHandle:acceptedCredentialIDs: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Receives a report from the system that a relying party sent a snapshot of all accepted credentials for an account.

## Declaration

```objectivec
- (void) reportAllAcceptedPublicKeyCredentialsForRelyingParty:(NSString *) relyingParty userHandle:(NSData *) userHandle acceptedCredentialIDs:(NSArray<NSData *> *) acceptedCredentialIDs;
```

## Parameters

- `relyingParty`: The relying party, typically a website, for which to save the credentials.
- `userHandle`: The user identifier.
- `acceptedCredentialIDs`: An array of identifiers that uniquely identifies the accepted credentials.

<a id="Discussion"></a>

## Discussion

The system calls this method when a relying party sends a list of accepted credentials by calling [reportAllAcceptedPublicKeyCredentials(relyingPartyIdentifier:userHandle:acceptedCredentialIDs:)](../ascredentialupdater/reportallacceptedpublickeycredentials%28relyingpartyidentifier_userhandle_acceptedcredentialids_%29.md). Your manager can hide or remove any credential that’s absent from the `acceptedCredentialIDs` array.

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

- [reportPublicKeyCredentialUpdateForRelyingParty:userHandle:newName:](reportpublickeycredentialupdate%28forrelyingparty_userhandle_newname_%29.md): Receives a report from the system that a relying party indicated that a passkey’s user name updated.
- [reportUnknownPublicKeyCredentialForRelyingParty:credentialID:](reportunknownpublickeycredential%28forrelyingparty_credentialid_%29.md): Receives a report from the system that a relying party indicated a passkey credential is invalid.
- [reportUnusedPasswordCredentialForDomain:userName:](reportunusedpasswordcredential%28fordomain_username_%29.md): Receives a report from the system that a relying party indicatd that a password credential isn’t needed anymore for a given user name.
