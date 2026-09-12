> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/walletpasses/semantictagtype/wifinetwork-data.dictionary](https://developer.apple.com/documentation/walletpasses/semantictagtype/wifinetwork-data.dictionary)

# SemanticTagType.WifiNetwork

**Interface language:** Data

**Framework:** Wallet Passes  
**Kind:** Object  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · watchOS 5.0+

An object that contains information required to connect to a Wi-Fi network. Optionally, this object may contain keys required to perform authentication with captive portal.

## Declaration

```
object SemanticTagType.WifiNetwork
```

## Properties

- `password` — `string` (required): The password for the Wi-Fi network.
- `ssid` — `string` (required): The name for the Wi-Fi network.
- `captiveToken` — `string`: Token credential required to log in to Captive Portal.
- `captiveTokenAuthURL` — `string`: The URL of the authentication server that verifies the client using a token credential.

## See Also

### Using semantic tag data types

- [SemanticTagType.CurrencyAmount](currencyamount-data.dictionary.md): An object that represents an amount of money and type of currency.
- [SemanticTagType.EventDateInfo](eventdateinfo-data.dictionary.md): An object that represents a date for an event.
- [SemanticTagType.Location](location-data.dictionary.md): An object that represents the coordinates of a location.
- [SemanticTagType.PersonNameComponents](personnamecomponents-data.dictionary.md): An object that represents the parts of a person’s name.
- [SemanticTagType.Seat](seat-data.dictionary.md): An object that represents the identification of a seat for a transit journey or an event.
