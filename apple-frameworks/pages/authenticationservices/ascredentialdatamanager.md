> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialdatamanager](https://developer.apple.com/documentation/authenticationservices/ascredentialdatamanager)

# ASCredentialDataManager

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · visionOS 26.2+

This class allows submitting credentials and events to any credential manager enabled on the system.

## Declaration

```swift
final class ASCredentialDataManager
```

<a id="overview"></a>

## Overview

By informing credential managers of new, updated, removed, or revoked credentials, they can stay synchronized with the credential information of the person using the device.

In order to protect the user’s privacy, `ASCredentialDataManager` does not indicate whether the operation succeeded. A successful call only indicates that the parameters passed were well formed.

## Topics

### Initializers

- [init()](ascredentialdatamanager/init%28%29.md)

### Instance Methods

- [reportAllAcceptedPublicKeyCredentials(relyingPartyIdentifier:userHandle:acceptedCredentialIDs:)](ascredentialdatamanager/reportallacceptedpublickeycredentials%28relyingpartyidentifier_userhandle_acceptedcredentialids_%29.md): Report a snapshot of all the credentialIDs that will be accepted for a `userHandle`. Credentials not present in the `acceptedCredentialIDs` may be removed or hidden by a password manager. Relying party may choose to perform this periodically, e.g. on every sign in. This information is shared with all password managers enabled in the system.
- [reportPublicKeyCredentialUpdate(relyingPartyIdentifier:userHandle:newName:)](ascredentialdatamanager/reportpublickeycredentialupdate%28relyingpartyidentifier_userhandle_newname_%29.md): Report an update to a credential’s name, such as when changing the user name on an account. This information is shared with all password managers enabled in the system.
- [reportUnknownPublicKeyCredential(relyingPartyIdentifier:credentialID:)](ascredentialdatamanager/reportunknownpublickeycredential%28relyingpartyidentifier_credentialid_%29.md): Report that a specific credential is unknown or no longer accepted. The credential may be removed or hidden by a password manager. This information is shared with all password managers enabled in the system.
- [reportUnusedPasswordCredential(domain:userName:)](ascredentialdatamanager/reportunusedpasswordcredential%28domain_username_%29.md): Report an unused password credential for a given domain and username. Password managers may remove or hide the password credential. This information is shared with all password managers enabled in the system.
- [save(password:for:title:anchor:)](ascredentialdatamanager/save%28password_for_title_anchor_%29.md): Save or update a password credential to the user’s preferred password manager in the system.
