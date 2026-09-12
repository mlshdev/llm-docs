> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/aswebauthenticationsessionwebbrowsersupportcapabilities/additionalheaderfieldsaresupported](https://developer.apple.com/documentation/bundleresources/information-property-list/aswebauthenticationsessionwebbrowsersupportcapabilities/additionalheaderfieldsaresupported)

# AdditionalHeaderFieldsAreSupported

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.15+

A Boolean that indicates whether the app supports additional header fields in requests.

## Details

`AdditionalHeaderFieldsAreSupported`

<a id="Discussion"></a>

## Discussion

Set the corresponding value to `YES` to indicate that your browser uses the [additionalHeaderFields](../../../authenticationservices/aswebauthenticationsessionrequest/additionalheaderfields.md) property of an [ASWebAuthenticationSessionRequest](../../../authenticationservices/aswebauthenticationsessionrequest.md).

> **Important**

> If the system doesn’t find this key in the default browser app’s `Info.plist`, it sends the request to Safari instead.

## See Also

### Capabilities

- [IsSupported](issupported.md): A Boolean that indicates whether the app acts as a browser that supports authentication sessions.
- [EphemeralBrowserSessionIsSupported](ephemeralbrowsersessionissupported.md): A Boolean that indicates whether the app supports ephemeral browsing when conducting authentication sessions.
- [CallbackURLMatchingIsSupported](callbackurlmatchingissupported.md): A Boolean that indicates whether the app can handle callbacks to match authentication URLs.
