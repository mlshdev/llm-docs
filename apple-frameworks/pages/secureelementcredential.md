> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential](https://developer.apple.com/documentation/secureelementcredential)

# SecureElementCredential

**Framework:** SecureElementCredential  
**Kind:** Framework

Allow access to credentials inside the Secure Element on device.

## Mentioned In

- [Accessing and using secure element credentials](secureelementcredential/accessing-and-using-secure-element-credentials.md)

<a id="Overview"></a>

## Overview

The SecureElementCredential framework allows your app to manage and use Secure Element credentials with contactless transaction capabilities. See [NFC & SE Platform for secure contactless transactions](https://developer.apple.com/support/nfc-se-platform) for information about requirements, availability, and requesting acccess to the platform.

Using this framework depends on having registered an applet bundle with the [Apple Business Register](https://register.apple.com/login) (ABR). The applet contains the cryptographic code required to complete a transaction. You use this framework to provision your applet and its credentials, which downloads a bundle from the ABR and installs it into the Secure Element. Provisioning returns an instance of [CredentialSession.Credential](secureelementcredential/credentialsession/credential.md), which you use with your calls to the framework.

The [CredentialSession](secureelementcredential/credentialsession.md) class serves as the entry point to the framework. This class provides three major functions:

- **Management**: Allows your app to create, read, update, and delete credentials in the Secure Element.
- **Wired actions**: Allows your app to exchange data, given a credential, with an *applet* that corresponds to the credential.
- **Card emulation**: Allows the credential to communicate with a contactless reader.

The framework also provides SwiftUI and UIKit extensions that perform wired actions and card emulation while providing an appropriate user interface.

SecureElementCredential supports transactions for in-store payments, car keys, closed-loop transit, corporate badges, student IDs, home keys, hotel keys, merchant loyalty and rewards cards, and event tickets.

> **Warning**

> In any file that imports a symbol from this framework’s SwiftUI extension, don’t also import UIKit. Similarly, if you use this framework’s UIKit extensions, don’t also import SwiftUI in the same file. Importing SwiftUI and UIKit in the same file results in ambiguity during compilation.

## Topics

### Essentials

- [Accessing and using secure element credentials](secureelementcredential/accessing-and-using-secure-element-credentials.md): Manage and use payment cards and other credentials.

### Entitlements

- [com.apple.developer.secure-element-credential](bundleresources/entitlements/com.apple.developer.secure-element-credential.md): A Boolean value that indicates whether your app can use the SecureElementCredential framework.
- [com.apple.developer.secure-element-credential.default-contactless-app](bundleresources/entitlements/com.apple.developer.secure-element-credential.default-contactless-app.md): A Boolean value that indicates whether your app that uses the SecureElementCredential framework can become the default contactless app.

### Credentials

- [CredentialSession](secureelementcredential/credentialsession.md): A class for performing actions on a credential stored in the Secure Element.

### Transactions

- [CredentialTransaction](secureelementcredential/credentialtransaction.md): A transaction object for performing wired and contactless operations in SwiftUI views.

### UIKit scene delegate

- [CredentialSessionWindowSceneDelegate](secureelementcredential/credentialsessionwindowscenedelegate.md): Delegate to notify your `UIWindowScene` that a CredentialSession event has occurred.
