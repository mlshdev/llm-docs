> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/shared-web-credentials](https://developer.apple.com/documentation/security/shared-web-credentials)

# Shared Web Credentials (Swift)

**Framework:** Security  
**Kind:** API Collection

Share credentials between iOS apps and their website counterparts.

<a id="overview"></a>

## Overview

The `Security.SecSharedCredentials` API provides functions for storing and requesting shared password-based credentials. Users often save their username and password in their iCloud keychain when logging into websites in Safari. Later, they may run a native app from the same developer to access the same account. With shared web credentials, the app can access the credentials stored for the website instead of requiring the user to reenter a username and password. Users can also create new accounts, update passwords, or delete their accounts from within the app. These changes are then saved and used by Safari.

![Diagram showing a connection between your app and Safari through iCloud keychain.](https://developer.apple.com/images/com.apple.security/media-2891900@2x.png)

> **Note**

>  Accessing shared web credentials requires permission from the app, the website, and the user.

## Topics

### First Steps

- [Supporting associated domains](https://developer.apple.com/documentation/xcode/supporting-associated-domains): Connect your app and a website to provide both a native app and a browser experience.
- [Managing Shared Credentials](managing-shared-credentials.md): Use shared web credentials to create a seamless experience for the user.

### Password Sharing

- [SecAddSharedWebCredential(\_:\_:\_:\_:)](secaddsharedwebcredential%28________%29.md): Deprecated. Asynchronously stores (or updates) a shared password for a website.
- [SecRequestSharedWebCredential(\_:\_:\_:)](secrequestsharedwebcredential%28______%29.md): Deprecated. Asynchronously obtains one or more shared passwords for a website.
- [SecCreateSharedWebCredentialPassword()](seccreatesharedwebcredentialpassword%28%29.md): Returns a randomly generated password.
- [kSecSharedPassword](ksecsharedpassword.md): A dictionary key whose value is the shared password.

# Shared Web Credentials (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Share credentials between iOS apps and their website counterparts.

<a id="overview"></a>

## Overview

The `Security.SecSharedCredentials` API provides functions for storing and requesting shared password-based credentials. Users often save their username and password in their iCloud keychain when logging into websites in Safari. Later, they may run a native app from the same developer to access the same account. With shared web credentials, the app can access the credentials stored for the website instead of requiring the user to reenter a username and password. Users can also create new accounts, update passwords, or delete their accounts from within the app. These changes are then saved and used by Safari.

![Diagram showing a connection between your app and Safari through iCloud keychain.](https://developer.apple.com/images/com.apple.security/media-2891900@2x.png)

> **Note**

>  Accessing shared web credentials requires permission from the app, the website, and the user.

## Topics

### First Steps

- [Supporting associated domains](https://developer.apple.com/documentation/xcode/supporting-associated-domains): Connect your app and a website to provide both a native app and a browser experience.
- [Managing Shared Credentials](managing-shared-credentials.md): Use shared web credentials to create a seamless experience for the user.

### Password Sharing

- [SecAddSharedWebCredential](secaddsharedwebcredential%28________%29.md): Deprecated. Asynchronously stores (or updates) a shared password for a website.
- [SecRequestSharedWebCredential](secrequestsharedwebcredential%28______%29.md): Deprecated. Asynchronously obtains one or more shared passwords for a website.
- [SecCreateSharedWebCredentialPassword](seccreatesharedwebcredentialpassword%28%29.md): Returns a randomly generated password.
- [kSecSharedPassword](ksecsharedpassword.md): A dictionary key whose value is the shared password.
