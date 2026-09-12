> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/passkey-use-in-web-browsers](https://developer.apple.com/documentation/authenticationservices/passkey-use-in-web-browsers)

# Passkey use in web browsers (Swift)

**Framework:** Authentication Services  
**Kind:** API Collection

Register and authenticate website users by using passkeys.

<a id="overview"></a>

## Overview

If your browser app uses [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) to display web content, [WebKit](https://developer.apple.com/documentation/webkit) automatically handles `WebAuthentication` challenges in web pages and requests credentials from the person using the browser. If your browser app uses an alternative web browser engine—for example, an alternate browser engine for iPhone that you write using [BrowserEngineKit](https://developer.apple.com/documentation/browserenginekit)—when the website makes a `WebAuthentication` challenge, use [ASAuthorizationController](asauthorizationcontroller.md) to discover and use credentials to respond to the challenge.  [ASAuthorizationController](asauthorizationcontroller.md) works with passkeys stored on the keychain or managed by third-party credential managers.

The person using your browser chooses whether to let your app access their passkeys. Use [ASAuthorizationWebBrowserPublicKeyCredentialManager](asauthorizationwebbrowserpublickeycredentialmanager.md) to determine whether you browser app has access, and to request access if it has no access.

## Topics

### Website authorization

- [Authenticating people by using passkeys in browser apps](authenticating-people-by-using-passkeys-in-browser-apps.md): Provide a secure and convenient alternative to passwords.
- [ASAuthorizationWebBrowserPublicKeyCredentialManager](asauthorizationwebbrowserpublickeycredentialmanager.md): A class that you use to request access to a person’s passkeys in a web browser, and that reports on the access status.

### Website authentication requests

- [ASAuthorizationWebBrowserExternallyAuthenticatableRequest](asauthorizationwebbrowserexternallyauthenticatablerequest.md): An authorization request for which a web browser can retrieve credentials.
- [ASAuthorizationWebBrowserPlatformPublicKeyCredentialAssertionRequest](asauthorizationwebbrowserplatformpublickeycredentialassertionrequest.md): An interface you use to respond to authentication challenges in a web browser.
- [ASAuthorizationWebBrowserPlatformPublicKeyCredentialRegistrationRequest](asauthorizationwebbrowserplatformpublickeycredentialregistrationrequest.md): An interface you use to respond to passkey-creation challenges in a web browser.

### Website credential providers

- [ASAuthorizationWebBrowserPlatformPublicKeyCredentialProvider](asauthorizationwebbrowserplatformpublickeycredentialprovider-19bq.md): A mechanism you use to provide public key credential requests to a browser app.

## See Also

### Passkeys

- [Public-Private Key Authentication](public-private-key-authentication.md): Register and authenticate users with passkeys and security keys, without using passwords.
- [Performing fast account creation with passkeys](performing-fast-account-creation-with-passkeys.md): Allow people to quickly create an account with passkeys and associated domains.
- [Connecting to a service with passkeys](connecting-to-a-service-with-passkeys.md): Allow users to sign in to a service without typing a password.

# Passkey use in web browsers (Objective-C)

**Framework:** Authentication Services  
**Kind:** API Collection

Register and authenticate website users by using passkeys.

<a id="overview"></a>

## Overview

If your browser app uses [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) to display web content, [WebKit](https://developer.apple.com/documentation/webkit) automatically handles `WebAuthentication` challenges in web pages and requests credentials from the person using the browser. If your browser app uses an alternative web browser engine—for example, an alternate browser engine for iPhone that you write using [BrowserEngineKit](https://developer.apple.com/documentation/browserenginekit)—when the website makes a `WebAuthentication` challenge, use [ASAuthorizationController](asauthorizationcontroller.md) to discover and use credentials to respond to the challenge.  [ASAuthorizationController](asauthorizationcontroller.md) works with passkeys stored on the keychain or managed by third-party credential managers.

The person using your browser chooses whether to let your app access their passkeys. Use [ASAuthorizationWebBrowserPublicKeyCredentialManager](asauthorizationwebbrowserpublickeycredentialmanager.md) to determine whether you browser app has access, and to request access if it has no access.

## Topics

### Website authorization

- [Authenticating people by using passkeys in browser apps](authenticating-people-by-using-passkeys-in-browser-apps.md): Provide a secure and convenient alternative to passwords.
- [ASAuthorizationWebBrowserPublicKeyCredentialManager](asauthorizationwebbrowserpublickeycredentialmanager.md): A class that you use to request access to a person’s passkeys in a web browser, and that reports on the access status.

### Website authentication requests

- [ASAuthorizationWebBrowserExternallyAuthenticatableRequest](asauthorizationwebbrowserexternallyauthenticatablerequest.md): An authorization request for which a web browser can retrieve credentials.
- [ASAuthorizationWebBrowserPlatformPublicKeyCredentialAssertionRequest](asauthorizationwebbrowserplatformpublickeycredentialassertionrequest.md): An interface you use to respond to authentication challenges in a web browser.
- [ASAuthorizationWebBrowserPlatformPublicKeyCredentialRegistrationRequest](asauthorizationwebbrowserplatformpublickeycredentialregistrationrequest.md): An interface you use to respond to passkey-creation challenges in a web browser.

### Website credential providers

- [ASAuthorizationWebBrowserPlatformPublicKeyCredentialProvider](asauthorizationwebbrowserplatformpublickeycredentialprovider-1c8cl.md): A protocol for creating passkey requests.

## See Also

### Passkeys

- [Public-Private Key Authentication](public-private-key-authentication.md): Register and authenticate users with passkeys and security keys, without using passwords.
