> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/walletpasses/semantictagtype/location-data.dictionary](https://developer.apple.com/documentation/walletpasses/semantictagtype/location-data.dictionary)

# SemanticTagType.Location

**Interface language:** Data

**Framework:** Wallet Passes  
**Kind:** Object  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · watchOS 5.0+

An object that represents the coordinates of a location.

## Declaration

```
object SemanticTagType.Location
```

## Properties

- `latitude` — `double` (required): The latitude, in degrees.
- `longitude` — `double` (required): The longitude, in degrees.

## See Also

### Using semantic tag data types

- [SemanticTagType.CurrencyAmount](currencyamount-data.dictionary.md): An object that represents an amount of money and type of currency.
- [SemanticTagType.EventDateInfo](eventdateinfo-data.dictionary.md): An object that represents a date for an event.
- [SemanticTagType.PersonNameComponents](personnamecomponents-data.dictionary.md): An object that represents the parts of a person’s name.
- [SemanticTagType.Seat](seat-data.dictionary.md): An object that represents the identification of a seat for a transit journey or an event.
- [SemanticTagType.WifiNetwork](wifinetwork-data.dictionary.md): An object that contains information required to connect to a Wi-Fi network. Optionally, this object may contain keys required to perform authentication with captive portal.
