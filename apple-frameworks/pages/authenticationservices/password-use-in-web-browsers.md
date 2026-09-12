> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/password-use-in-web-browsers](https://developer.apple.com/documentation/authenticationservices/password-use-in-web-browsers)

# Password use in web browsers (Swift)

**Framework:** Authentication Services  
**Kind:** API Collection

Register and authenticate website users by using passwords.

<a id="overview"></a>

## Overview

If your browser app uses [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) to display web content, [WebKit](https://developer.apple.com/documentation/webkit) automatically handles `WebAuthentication` challenges in webpages and requests credentials from the person using the browser. If your browser app uses an alternative web browser engine — for example, an alternate browser engine for iPhone that you write using [BrowserEngineKit](https://developer.apple.com/documentation/browserenginekit) — when the website makes a `WebAuthentication` challenge, use [ASAuthorizationController](asauthorizationcontroller.md) to discover and use credentials to respond to the challenge.  [ASAuthorizationController](asauthorizationcontroller.md) works with passwords the system stores on the keychain or that third-party credential managers control.

## Topics

### Website authorization

- [ASAuthorizationWebBrowserPublicKeyCredentialManager](asauthorizationwebbrowserpublickeycredentialmanager.md): A class that you use to request access to a person’s passkeys in a web browser, and that reports on the access status.

### Website authentication requests

- [ASAuthorizationWebBrowserSecurityKeyPublicKeyCredentialAssertionRequest](asauthorizationwebbrowsersecuritykeypublickeycredentialassertionrequest.md): An interface you use to respond to authentication challenges in a web browser.
- [ASAuthorizationWebBrowserSecurityKeyPublicKeyCredentialRegistrationRequest](asauthorizationwebbrowsersecuritykeypublickeycredentialregistrationrequest.md): An interface you use to respond to password-creation challenges in a web browser.

### Website credential providers

- [ASAuthorizationWebBrowserSecurityKeyPublicKeyCredentialProvider](asauthorizationwebbrowsersecuritykeypublickeycredentialprovider-8xc1s.md): A protocol for creating passkey requests.

## See Also

### Passwords

- [Password AutoFill](../security/password-autofill.md): Streamline your app’s login and onboarding procedures.
- [ASAuthorizationPasswordProvider](asauthorizationpasswordprovider.md): A mechanism for generating requests to perform keychain credential sharing.
- [ASPasswordCredential](aspasswordcredential.md): A password credential.

# Password use in web browsers (Objective-C)

**Framework:** Authentication Services  
**Kind:** API Collection

Register and authenticate website users by using passwords.

<a id="overview"></a>

## Overview

If your browser app uses [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) to display web content, [WebKit](https://developer.apple.com/documentation/webkit) automatically handles `WebAuthentication` challenges in webpages and requests credentials from the person using the browser. If your browser app uses an alternative web browser engine — for example, an alternate browser engine for iPhone that you write using [BrowserEngineKit](https://developer.apple.com/documentation/browserenginekit) — when the website makes a `WebAuthentication` challenge, use [ASAuthorizationController](asauthorizationcontroller.md) to discover and use credentials to respond to the challenge.  [ASAuthorizationController](asauthorizationcontroller.md) works with passwords the system stores on the keychain or that third-party credential managers control.

## Topics

### Website authorization

- [ASAuthorizationWebBrowserPublicKeyCredentialManager](asauthorizationwebbrowserpublickeycredentialmanager.md): A class that you use to request access to a person’s passkeys in a web browser, and that reports on the access status.

### Website authentication requests

- [ASAuthorizationWebBrowserSecurityKeyPublicKeyCredentialAssertionRequest](asauthorizationwebbrowsersecuritykeypublickeycredentialassertionrequest.md): An interface you use to respond to authentication challenges in a web browser.
- [ASAuthorizationWebBrowserSecurityKeyPublicKeyCredentialRegistrationRequest](asauthorizationwebbrowsersecuritykeypublickeycredentialregistrationrequest.md): An interface you use to respond to password-creation challenges in a web browser.

### Website credential providers

- [ASAuthorizationWebBrowserSecurityKeyPublicKeyCredentialProvider](asauthorizationwebbrowsersecuritykeypublickeycredentialprovider-4gzot.md): A protocol for creating security key requests.

## See Also

### Passwords

- [Password AutoFill](../security/password-autofill.md): Streamline your app’s login and onboarding procedures.
- [ASAuthorizationPasswordProvider](asauthorizationpasswordprovider.md): A mechanism for generating requests to perform keychain credential sharing.
- [ASPasswordCredential](aspasswordcredential.md): A password credential.
