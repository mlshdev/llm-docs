> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialupdater](https://developer.apple.com/documentation/authenticationservices/ascredentialupdater)

# ASCredentialUpdater

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 26.0+ (deprecated in 26.2) · iPadOS 26.0+ (deprecated in 26.2) · Mac Catalyst 26.0+ (deprecated in 26.2) · macOS 26.0+ (deprecated in 26.2) · visionOS 26.0+ (deprecated in 26.2)

A class to pass credential update events to credential managers enabled on the system.

> Use \`ASCredentialDataManager\` instead

## Declaration

```swift
final class ASCredentialUpdater
```

<a id="overview"></a>

## Overview

The `ASCredentialUpdater` implements the functionality of the WebAuthn Signal API, allowing apps to update credential managers with information about existing credentials. By informing credential managers of updated, removed, or revoked credentials, the credential managers can stay synchronized with the credential information of the person using the device.

Use `ASCredendialUpdater` in the following scenarios:

- **Updating passkey metadata**: The system UI represents passkeys by a “user name”, set when the passkey is created. This field is usually a user name or email address. If your app allows the person using it to change the user name for their account, use [reportPublicKeyCredentialUpdate(relyingPartyIdentifier:userHandle:newName:)](ascredentialupdater/reportpublickeycredentialupdate%28relyingpartyidentifier_userhandle_newname_%29.md) to relay that information to credential managers.
- **Removing revoked passkeys**: Your app and its related services may allow someone using it to remove passkeys associated with their account, or delete the account entirely. Use [reportUnknownPublicKeyCredential(relyingPartyIdentifier:credentialID:)](ascredentialupdater/reportunknownpublickeycredential%28relyingpartyidentifier_credentialid_%29.md) to inform credential managers of this deletion, so the passkeys aren’t shown in future login flows.
- **Removing passwords**: When you’re confident the person using your app has transitioned to using a passkey to sign in and no longer requires a password fallback to sign in, you can direct credential managers to remove or hide passwords with [reportUnusedPasswordCredential(domain:userName:)](ascredentialupdater/reportunusedpasswordcredential%28domain_username_%29.md). This prevents the now invalid passwords from appearing in the UI.

The following example shows how an app might use this class when processing various sign-in and account-management events:

```swift
import AuthenticationServices

let credentialUpdater = ASCredentialUpdater()

func handleSuccessfulPasskeySignIn() {
    ...
    // Update passkey if the username changed on the account.
    try credentialUpdater.reportPublicKeyCredentialUpdate(relyingPartyIdentifier:"example.com", userHandle:userData, newName: "name")
    
    // Report accepted credentials.
    try credentialUpdater.reportAllAcceptedPublicKeyCredentials(relyingPartyIdentifier:"example.com", userHandle:userData, allowedCredentialIDs:[credentialID1, credentailID2])
    
    // Remove or hide stale password.
    try credentialUpdater.reportUnusedPasswordCredential(domain: "example.com", username:"user")
}

func handleFailedPasskeySignIn() {
    ...
    // Remove or hide invalid passkey.
    try credentialUpdater.reportUnknownPublicKeyCredential(relyingPartyIdentifier:"example.com", credentialID:credentialIDData)
}

func handleAccountAccountDeletion() {
    ...
    try credentialUpdater.reportAllAcceptedPublicKeyCredentials(relyingPartyIdentifier:"example.com", userHandle:userData, allowedCredentialIDs:[])
    try credentialUpdater.reportUnusedPasswordCredential(domain: "example.com", username:"user")
}
```

> **Note**

> To protect the privacy of the person using the app, this class’s methods don’t indicate whether their operations succeeded. A successful call only indicates that the parameters were well formed.

## Topics

### Creating a credential updater

- [init()](ascredentialupdater/init%28%29.md): Deprecated. Creates an instance of the credential updater class.

### Reporting accepted credentials

- [reportAllAcceptedPublicKeyCredentials(relyingPartyIdentifier:userHandle:acceptedCredentialIDs:)](ascredentialupdater/reportallacceptedpublickeycredentials%28relyingpartyidentifier_userhandle_acceptedcredentialids_%29.md): Deprecated. Provides credential managers with a snapshot of all credential identifiers accepted for a given user handle.

### Reporting updated credentials

- [reportPublicKeyCredentialUpdate(relyingPartyIdentifier:userHandle:newName:)](ascredentialupdater/reportpublickeycredentialupdate%28relyingpartyidentifier_userhandle_newname_%29.md): Deprecated. Provides credential managers with an update to a credential’s name, such as when changing the user name or email address on an account.

### Reporting unused and unknown credentials

- [reportUnusedPasswordCredential(domain:userName:)](ascredentialupdater/reportunusedpasswordcredential%28domain_username_%29.md): Deprecated. Informs credential managers that a password is no longer in use.
- [reportUnknownPublicKeyCredential(relyingPartyIdentifier:credentialID:)](ascredentialupdater/reportunknownpublickeycredential%28relyingpartyidentifier_credentialid_%29.md): Deprecated. Informs credential managers that a specific credential is unknown or no longer accepted.
