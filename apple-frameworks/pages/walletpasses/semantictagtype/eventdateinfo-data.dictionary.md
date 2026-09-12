> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/walletpasses/semantictagtype/eventdateinfo-data.dictionary](https://developer.apple.com/documentation/walletpasses/semantictagtype/eventdateinfo-data.dictionary)

# SemanticTagType.EventDateInfo

**Interface language:** Data

**Framework:** Wallet Passes  
**Kind:** Object  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · watchOS 11.0+

An object that represents a date for an event.

## Declaration

```
object SemanticTagType.EventDateInfo
```

## Properties

- `date` — `ISO 8601 date as string`: The date.
- `ignoreTimeComponents` — `boolean`: A Boolean value that indicates whether the system ignores the time components of the date.
- `timeZone` — `Time zone database identifier as string`: The time zone to display in the date.
- `unannounced` — `boolean`: A Boolean value that indicates whether the date of the event is announced.
- `undetermined` — `boolean`: A Boolean value that indicates whether the date of the event is determined.

<a id="Discussion"></a>

## Discussion

> **Note**

>  The time zone identifiers come from the [IANA time zone database](https://www.iana.org/time-zones).

## See Also

### Using semantic tag data types

- [SemanticTagType.CurrencyAmount](currencyamount-data.dictionary.md): An object that represents an amount of money and type of currency.
- [SemanticTagType.Location](location-data.dictionary.md): An object that represents the coordinates of a location.
- [SemanticTagType.PersonNameComponents](personnamecomponents-data.dictionary.md): An object that represents the parts of a person’s name.
- [SemanticTagType.Seat](seat-data.dictionary.md): An object that represents the identification of a seat for a transit journey or an event.
- [SemanticTagType.WifiNetwork](wifinetwork-data.dictionary.md): An object that contains information required to connect to a Wi-Fi network. Optionally, this object may contain keys required to perform authentication with captive portal.
