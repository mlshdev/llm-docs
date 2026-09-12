> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/aswebauthenticationsessionwebbrowsersupportcapabilities](https://developer.apple.com/documentation/bundleresources/information-property-list/aswebauthenticationsessionwebbrowsersupportcapabilities)

# ASWebAuthenticationSessionWebBrowserSupportCapabilities

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.15+

A collection of keys that a browser app uses to declare its ability to handle authentication requests from other apps.

## Details

`ASWebAuthenticationSessionWebBrowserSupportCapabilities`

<a id="Discussion"></a>

## Discussion

Add a dictionary for this key to your app’s [Information Property List](../information-property-list.md) if your app is a web browser and it supports web authentication. In the dictionary, include the capability keys listed below to indicate your browser app’s capabilities. For more information, see [Supporting Single Sign-On in a Web Browser App](../../authenticationservices/supporting-single-sign-on-in-a-web-browser-app.md).

## Topics

### Capabilities

- [IsSupported](aswebauthenticationsessionwebbrowsersupportcapabilities/issupported.md): A Boolean that indicates whether the app acts as a browser that supports authentication sessions.
- [EphemeralBrowserSessionIsSupported](aswebauthenticationsessionwebbrowsersupportcapabilities/ephemeralbrowsersessionissupported.md): A Boolean that indicates whether the app supports ephemeral browsing when conducting authentication sessions.
- [CallbackURLMatchingIsSupported](aswebauthenticationsessionwebbrowsersupportcapabilities/callbackurlmatchingissupported.md): A Boolean that indicates whether the app can handle callbacks to match authentication URLs.
- [AdditionalHeaderFieldsAreSupported](aswebauthenticationsessionwebbrowsersupportcapabilities/additionalheaderfieldsaresupported.md): A Boolean that indicates whether the app supports additional header fields in requests.

## See Also

### Authentication

- [ASAccountAuthenticationModificationOptOutOfSecurityPromptsOnSignIn](asaccountauthenticationmodificationoptoutofsecuritypromptsonsignin.md): A Boolean value that indicates the system shouldn’t show security recommendation prompts when users sign in using the app.
