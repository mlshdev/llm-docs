> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/information-property-list/aswebauthenticationsessionwebbrowsersupportcapabilities/callbackurlmatchingissupported

# CallbackURLMatchingIsSupported (Swift)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.15+

A Boolean that indicates whether the app can handle callbacks to match authentication URLs.

## Details

`CallbackURLMatchingIsSupported`

<a id="Discussion"></a>

## Discussion

Set the corresponding value to `YES` to indicate that your browser app supports using an [ASWebAuthenticationSession.Callback](../../../authenticationservices/aswebauthenticationsession/callback.md) to process authentication redirect URLs.

> **Important**

> If the system doesn’t find this key in the default browser app’s `Info.plist`, it sends the request to Safari instead.

## See Also

### Capabilities

- [IsSupported](issupported.md): A Boolean that indicates whether the app acts as a browser that supports authentication sessions.
- [EphemeralBrowserSessionIsSupported](ephemeralbrowsersessionissupported.md): A Boolean that indicates whether the app supports ephemeral browsing when conducting authentication sessions.
- [AdditionalHeaderFieldsAreSupported](additionalheaderfieldsaresupported.md): A Boolean that indicates whether the app supports additional header fields in requests.

# CallbackURLMatchingIsSupported (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.15+

A Boolean that indicates whether the app can handle callbacks to match authentication URLs.

## Details

`CallbackURLMatchingIsSupported`

<a id="Discussion"></a>

## Discussion

Set the corresponding value to `YES` to indicate that your browser app supports using an [ASWebAuthenticationSessionCallback](../../../authenticationservices/aswebauthenticationsession/callback.md) to process authentication redirect URLs.

> **Important**

> If the system doesn’t find this key in the default browser app’s `Info.plist`, it sends the request to Safari instead.

## See Also

### Capabilities

- [IsSupported](issupported.md): A Boolean that indicates whether the app acts as a browser that supports authentication sessions.
- [EphemeralBrowserSessionIsSupported](ephemeralbrowsersessionissupported.md): A Boolean that indicates whether the app supports ephemeral browsing when conducting authentication sessions.
- [AdditionalHeaderFieldsAreSupported](additionalheaderfieldsaresupported.md): A Boolean that indicates whether the app supports additional header fields in requests.
