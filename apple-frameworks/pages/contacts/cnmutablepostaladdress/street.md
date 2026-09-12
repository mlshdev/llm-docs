> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnmutablepostaladdress/street](https://developer.apple.com/documentation/contacts/cnmutablepostaladdress/street)

# street (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The street name of the address.

## Declaration

```swift
var street: String { get set }
```

<a id="Discussion"></a>

## Discussion

A multiline address is delimited with carriage returns (that is, `n`).

## See Also

### Modifying the Parts of a Postal Address

- [city](city.md): The city name of the address.
- [state](state.md): The state name of the address.
- [postalCode](postalcode.md): The postal code of the address.
- [country](country.md): The country or region name of the address.
- [isoCountryCode](isocountrycode.md): The ISO country code, using the ISO 3166-1 alpha-2 standard.
- [subAdministrativeArea](subadministrativearea.md): The subadministrative area (such as a county or other region) in a postal address.
- [subLocality](sublocality.md): Additional information associated with the location, typically defined at the city or town level, in a postal address.

# street (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The street name of the address.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * street;
```

```objectivec
@property (atomic, copy) NSString * street;
```

<a id="Discussion"></a>

## Discussion

A multiline address is delimited with carriage returns (that is, `n`).

## See Also

### Modifying the Parts of a Postal Address

- [city](city.md): The city name of the address.
- [state](state.md): The state name of the address.
- [postalCode](postalcode.md): The postal code of the address.
- [country](country.md): The country or region name of the address.
- [ISOCountryCode](isocountrycode.md): The ISO country code, using the ISO 3166-1 alpha-2 standard.
- [subAdministrativeArea](subadministrativearea.md): The subadministrative area (such as a county or other region) in a postal address.
- [subLocality](sublocality.md): Additional information associated with the location, typically defined at the city or town level, in a postal address.
