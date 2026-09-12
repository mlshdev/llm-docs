> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/webauthenticationsession](https://developer.apple.com/documentation/authenticationservices/webauthenticationsession)

# WebAuthenticationSession

**Framework:** AuthenticationServices  
**Kind:** Structure  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

A SwiftUI environment value that views use to authenticate someone using a web service.

## Declaration

```swift
@MainActor struct WebAuthenticationSession
```

<a id="overview"></a>

## Overview

You access an instance of this type by using the SwiftUI [Environment](https://developer.apple.com/documentation/swiftui/environment) property wrapper and specifying [webAuthenticationSession](https://developer.apple.com/documentation/swiftui/environmentvalues/webauthenticationsession) as the environment value.

To begin an authentication session and display the browser, call [authenticate(using:callbackURLScheme:preferredBrowserSession:)](webauthenticationsession/authenticate%28using_callbackurlscheme_preferredbrowsersession_%29.md). For example, when someone taps a button, the web service authenticates that person and then the authentication provider redirects the browser to a URL it constructs using the app’s custom callback scheme. The browser detects that redirect, dismisses itself, and returns the complete URL to the awaiting caller.

The following example shows how to use a SwiftUI [Button](https://developer.apple.com/documentation/swiftui/button) to invoke a session:

```swift
struct WebAuthenticationSessionExample: View {
    // Get an instance of WebAuthenticationSession using SwiftUI's 
    // @Environment property wrapper.
    @Environment(\.webAuthenticationSession) private var webAuthenticationSession
    
    var body: some View {
        Button("Sign in") {
            Task {
                do {
                    // Perform the authentication and await the result.
                    let urlWithToken = try await webAuthenticationSession.authenticate(
                        using: URL("https://www.example.com")!,
                        callbackURLScheme: "x-example-app"
                    )
                    // Call the method that completes the authentication using the
                    // returned URL.
                    try await signIn(using: urlWithToken)
                } catch {
                    // Respond to any authorization errors. 
                }
            }
        }
    }
}
```

After receiving the URL, inspect it to determine the authentication request’s outcome. For example, you might search the URL’s query parameters for a token of some form:

```swift
let queryItems = URLComponents(string: urlWithToken.absoluteString)?.queryItems
let token = queryItems?.filter({ $0.name == "token" }).first?.value
```

> **Note**

>  Refer to your authentication provider’s documentation for information on the structure of the returned URL and, if necessary, how you should parse it.

## Topics

### Authenticating a session

- [authenticate(using:callback:preferredBrowserSession:additionalHeaderFields:)](webauthenticationsession/authenticate%28using_callback_preferredbrowsersession_additionalheaderfields_%29.md): Begins a web authentication session.
- [WebAuthenticationSession.BrowserSession](webauthenticationsession/browsersession.md): Describes the preferred browser session behavior.
- [ASWebAuthenticationSession.Callback](aswebauthenticationsession/callback.md): An object for evaluating navigation events in an authentication session.

### Deprecated methods

- [authenticate(using:callbackURLScheme:preferredBrowserSession:)](webauthenticationsession/authenticate%28using_callbackurlscheme_preferredbrowsersession_%29.md): Deprecated. Begins a web authentication session.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Web authentication sessions

- [Authenticating a User Through a Web Service](authenticating-a-user-through-a-web-service.md): Use a web authentication session to authenticate a user in your app.
- [Securing Logins with iCloud Keychain Verification Codes](securing-logins-with-icloud-keychain-verification-codes.md): Use time-based codes generated on-device for a secure authentication experience.
- [ASWebAuthenticationSession](aswebauthenticationsession.md): A session that an app uses to authenticate a user through a web service.
- [Supporting Single Sign-On in a Web Browser App](supporting-single-sign-on-in-a-web-browser-app.md): Extend your web browser app to handle web authentication requests from other apps.
- [ASWebAuthenticationSessionWebBrowserSessionManager](aswebauthenticationsessionwebbrowsersessionmanager.md): A session manager that mediates sharing data between an app and a web browser.
- [ASWebAuthenticationSessionWebBrowserSupportCapabilities](../bundleresources/information-property-list/aswebauthenticationsessionwebbrowsersupportcapabilities.md): A collection of keys that a browser app uses to declare its ability to handle authentication requests from other apps.
