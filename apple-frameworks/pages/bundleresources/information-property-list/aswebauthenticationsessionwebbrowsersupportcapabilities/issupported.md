> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/aswebauthenticationsessionwebbrowsersupportcapabilities/issupported](https://developer.apple.com/documentation/bundleresources/information-property-list/aswebauthenticationsessionwebbrowsersupportcapabilities/issupported)

# IsSupported

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.15+

A Boolean that indicates whether the app acts as a browser that supports authentication sessions.

## Details

`IsSupported`

<a id="Discussion"></a>

## Discussion

Set the corresponding value to `YES` to indicate that your browser app can handle authentication requests that other apps generate with [ASWebAuthenticationSession](../../../authenticationservices/aswebauthenticationsession.md). For details, see [Supporting Single Sign-On in a Web Browser App](../../../authenticationservices/supporting-single-sign-on-in-a-web-browser-app.md).

## See Also

### Capabilities

- [EphemeralBrowserSessionIsSupported](ephemeralbrowsersessionissupported.md): A Boolean that indicates whether the app supports ephemeral browsing when conducting authentication sessions.
- [CallbackURLMatchingIsSupported](callbackurlmatchingissupported.md): A Boolean that indicates whether the app can handle callbacks to match authentication URLs.
- [AdditionalHeaderFieldsAreSupported](additionalheaderfieldsaresupported.md): A Boolean that indicates whether the app supports additional header fields in requests.
