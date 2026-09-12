> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/performing-fast-account-creation-with-passkeys](https://developer.apple.com/documentation/authenticationservices/performing-fast-account-creation-with-passkeys)

# Performing fast account creation with passkeys

**Framework:** Authentication Services  
**Kind:** Sample Code  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · Xcode 26.0+

Allow people to quickly create an account with passkeys and associated domains.

<a id="Overview"></a>

## Overview

> **Note**

> This sample code project is associated with WWDC25 session 279: [What’s new in passkeys](https://developer.apple.com/videos/play/wwdc2025/279).

<a id="Configure-the-sample-code-project"></a>

### Configure the sample code project

To configure the sample code project, do the following:

1. In Xcode, click the project’s target, then select your team from the Team pop-up menu in the Signing & Capabilities pane to let Xcode automatically manage your provisioning profile.
2. Add the Associated Domains capability using the + Capability button in the same pane, and specify your domain with the `webcredentials` service.
3. Ensure an `apple-app-site-association` (AASA) file is present on your domain in the `.well-known` directory, and that it contains an entry for this app’s App ID for the `webcredentials` service.
4. In the `SignUpView.swift` file, replace all occurrences of `example.com` with the name of your domain.

## See Also

### Passkeys

- [Public-Private Key Authentication](public-private-key-authentication.md): Register and authenticate users with passkeys and security keys, without using passwords.
- [Passkey use in web browsers](passkey-use-in-web-browsers.md): Register and authenticate website users by using passkeys.
- [Connecting to a service with passkeys](connecting-to-a-service-with-passkeys.md): Allow users to sign in to a service without typing a password.
