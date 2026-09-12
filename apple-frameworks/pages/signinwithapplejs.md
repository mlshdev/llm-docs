> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/signinwithapplejs](https://developer.apple.com/documentation/signinwithapplejs)

# Sign in with Apple JS

**Interface language:** Data

**Framework:** Sign in with Apple JS  
**Kind:** Framework

Provide users a fast, secure way to sign in to your web service with their Apple Account.

## Mentioned In

- [Configuring your environment for Sign in with Apple](https://developer.apple.com/documentation/signinwithapple/configuring-your-environment-for-sign-in-with-apple)
- [Incorporating Sign in with Apple into other platforms](https://developer.apple.com/documentation/signinwithapple/incorporating-sign-in-with-apple-into-other-platforms)

<a id="overview"></a>

## Overview

[Sign in with Apple](https://developer.apple.com/documentation/signinwithapple) is the fastest way to onboard new users securely and provides two-factor authentication. Using Sign in with Apple JS, users can to log into your website with their Apple Account rather than creating a new account and password.

Enabling Sign in with Apple for your app begins with registering your app in your Apple Developer account. When integrating the API with your app, consider button presentation style, notification options, server integration, and what kind of user information to request.

## Topics

### Essentials

- [Configuring your webpage for Sign in with Apple](https://developer.apple.com/documentation/signinwithapple/configuring-your-webpage-for-sign-in-with-apple): Prepare your webpage to authorize users through Sign in with Apple.
- [Communicating using the private email relay service](https://developer.apple.com/documentation/signinwithapple/communicating-using-the-private-email-relay-service): Stay in touch with users who opt for an anonymous email address with Sign in with Apple.

### Authentication and configuration

- [SignInResponseI](signinwithapplejs/signinresponsei.md): An object that contains the response to a sign-in request.
- [SignInErrorI](signinwithapplejs/signinerrori.md): An object that contains error information.
- [AuthorizationI](signinwithapplejs/authorizationi.md): An object that contains a user’s authorization information.
- [AuthI](signinwithapplejs/authi.md): The interface used to authenticate a user.
- [ClientConfigI](signinwithapplejs/clientconfigi.md): An object that contains a user’s configuration information.

### Multiplatform use

- [Incorporating Sign in with Apple into other platforms](https://developer.apple.com/documentation/signinwithapple/incorporating-sign-in-with-apple-into-other-platforms): Add Sign in with Apple capabilities to apps that can’t directly access Sign in with Apple JS.

### User identification

- [NameI](signinwithapplejs/namei.md): An object that contains the user’s full name from their Apple Account or a user-submitted value provided from the Sign in with Apple UI.
- [UserI](signinwithapplejs/useri.md): An object that contains the user’s name and email address.

## See Also

### Web support

- [Sign in with Apple REST API](signinwithapplerestapi.md): Communicate between your app servers and Apple’s authentication servers.
- [Displaying Sign in with Apple buttons on the web](https://developer.apple.com/documentation/signinwithapple/displaying-sign-in-with-apple-buttons-on-the-web): Configure the appearance of Sign in with Apple buttons with CSS styles.
- [Configuring your environment for Sign in with Apple](https://developer.apple.com/documentation/signinwithapple/configuring-your-environment-for-sign-in-with-apple): Authenticate users with your web service by associating an existing app with a Services ID and private key.
- [Processing changes for Sign in with Apple accounts](https://developer.apple.com/documentation/signinwithapple/processing-changes-for-sign-in-with-apple-accounts): Manage user-initiated modifications to maintain privacy with server-to-server notifications.
