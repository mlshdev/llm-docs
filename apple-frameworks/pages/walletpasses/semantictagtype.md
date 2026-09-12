> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/walletpasses/semantictagtype](https://developer.apple.com/documentation/walletpasses/semantictagtype)

# SemanticTagType

**Interface language:** Data

**Framework:** Wallet Passes  
**Kind:** Object  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · watchOS 5.0+

A compilation of data object types for semantic tags.

## Declaration

```
object SemanticTagType
```

## Properties

- `currencyAmount` — `SemanticTagType.CurrencyAmount`: An object that represents an amount of money and type of currency.
- `eventDateInfo` — `SemanticTagType.EventDateInfo`: An object that represents a date for an event.
- `location` — `SemanticTagType.Location`: An object that represents the coordinates of a location.
- `personNameComponents` — `SemanticTagType.PersonNameComponents`: An object that represents the parts of a person’s name.
- `seat` — `SemanticTagType.Seat`: An object that represents the identification of a seat for a transit journey or an event.
- `wifiNetwork` — `SemanticTagType.WifiNetwork`: An object that contains information required to connect to a WiFi network.

## Topics

### Using semantic tag data types

- [SemanticTagType.CurrencyAmount](semantictagtype/currencyamount-data.dictionary.md): An object that represents an amount of money and type of currency.
- [SemanticTagType.EventDateInfo](semantictagtype/eventdateinfo-data.dictionary.md): An object that represents a date for an event.
- [SemanticTagType.Location](semantictagtype/location-data.dictionary.md): An object that represents the coordinates of a location.
- [SemanticTagType.PersonNameComponents](semantictagtype/personnamecomponents-data.dictionary.md): An object that represents the parts of a person’s name.
- [SemanticTagType.Seat](semantictagtype/seat-data.dictionary.md): An object that represents the identification of a seat for a transit journey or an event.
- [SemanticTagType.WifiNetwork](semantictagtype/wifinetwork-data.dictionary.md): An object that contains information required to connect to a Wi-Fi network. Optionally, this object may contain keys required to perform authentication with captive portal.

## See Also

### Boarding passes

- [Creating an airline boarding pass using semantic tags](creating-an-airline-boarding-pass-using-semantic-tags.md): Update your semantic tags to provide live and interactive passenger information for boarding passes.
- [Pass.BoardingPass](pass/boardingpass-data.dictionary.md): An object that represents the groups of fields that display the information for a boarding pass.
- [SemanticTags](semantictags.md): An object that contains machine-readable metadata the system uses to offer a pass and suggest related actions.
