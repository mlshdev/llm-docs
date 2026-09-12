> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialproviderviewcontroller/reportunusedpasswordcredential(fordomain:username:)](https://developer.apple.com/documentation/authenticationservices/ascredentialproviderviewcontroller/reportunusedpasswordcredential(fordomain:username:))

# reportUnusedPasswordCredential(forDomain:userName:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Receives a report from the system that a relying party indicatd that a password credential isn’t needed anymore for a given user name.

## Declaration

```swift
func reportUnusedPasswordCredential(forDomain domain: String, userName: String)
```

## Parameters

- `domain`: The website domain that the credential is saved for.
- `userName`: The account user name.

<a id="discussion"></a>

## Discussion

> **Note**

> > **Note**
>
> > This method will be called for handling password credential updates when a relying party indicates a password is no longer needed using the `ASCredentialUpdater` API. You may hide or remove the credential. This update should be handled in the background, so no blocking UI or error should ever be shown.

The system calls this method when a relying party reports calls [reportUnusedPasswordCredential(domain:userName:)](../ascredentialupdater/reportunusedpasswordcredential%28domain_username_%29.md) to indicate a password isn’t needed anymore. It may call this because a person using the app has transitioned to using a passkey, or because they deleted their account. Your manager can hide or remove the credential after it receives this report.

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
- [reportUnknownPublicKeyCredential(forRelyingParty:credentialID:)](reportunknownpublickeycredential%28forrelyingparty_credentialid_%29.md): Receives a report from the system that a relying party indicated a passkey credential is invalid.

# reportUnusedPasswordCredentialForDomain:userName: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Receives a report from the system that a relying party indicatd that a password credential isn’t needed anymore for a given user name.

## Declaration

```objectivec
- (void) reportUnusedPasswordCredentialForDomain:(NSString *) domain userName:(NSString *) userName;
```

## Parameters

- `domain`: The website domain that the credential is saved for.
- `userName`: The account user name.

<a id="discussion"></a>

## Discussion

> **Note**

> > **Note**
>
> > This method will be called for handling password credential updates when a relying party indicates a password is no longer needed using the `ASCredentialUpdater` API. You may hide or remove the credential. This update should be handled in the background, so no blocking UI or error should ever be shown.

The system calls this method when a relying party reports calls [reportUnusedPasswordCredential(domain:userName:)](../ascredentialupdater/reportunusedpasswordcredential%28domain_username_%29.md) to indicate a password isn’t needed anymore. It may call this because a person using the app has transitioned to using a passkey, or because they deleted their account. Your manager can hide or remove the credential after it receives this report.

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
- [reportUnknownPublicKeyCredentialForRelyingParty:credentialID:](reportunknownpublickeycredential%28forrelyingparty_credentialid_%29.md): Receives a report from the system that a relying party indicated a passkey credential is invalid.
