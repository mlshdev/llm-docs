> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnpostaladdress/localizedstring(forkey:)](https://developer.apple.com/documentation/contacts/cnpostaladdress/localizedstring(forkey:))

# localizedString(forKey:) (Swift)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns the localized name for the property associated with the specified key.

## Declaration

```swift
class func localizedString(forKey key: String) -> String
```

## Parameters

- `key`: The key for the property whose localized name is being returned.

<a id="Return-Value"></a>

## Return Value

The localized property name.

## See Also

### Getting Localized Postal Values

- [CNPostalAddressStreetKey](../cnpostaladdressstreetkey.md): The street name of the address.
- [CNPostalAddressCityKey](../cnpostaladdresscitykey.md): The city of the address.
- [CNPostalAddressStateKey](../cnpostaladdressstatekey.md): The state name of the address.
- [CNPostalAddressPostalCodeKey](../cnpostaladdresspostalcodekey.md): The postal code of the address.
- [CNPostalAddressCountryKey](../cnpostaladdresscountrykey.md): The country or region name of the address.
- [CNPostalAddressISOCountryCodeKey](../cnpostaladdressisocountrycodekey.md): The ISO country code of the address.

# localizedStringForKey: (Objective-C)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns the localized name for the property associated with the specified key.

## Declaration

```objectivec
+ (NSString *) localizedStringForKey:(NSString *) key;
```

## Parameters

- `key`: The key for the property whose localized name is being returned.

<a id="Return-Value"></a>

## Return Value

The localized property name.

## See Also

### Getting Localized Postal Values

- [CNPostalAddressStreetKey](../cnpostaladdressstreetkey.md): The street name of the address.
- [CNPostalAddressCityKey](../cnpostaladdresscitykey.md): The city of the address.
- [CNPostalAddressStateKey](../cnpostaladdressstatekey.md): The state name of the address.
- [CNPostalAddressPostalCodeKey](../cnpostaladdresspostalcodekey.md): The postal code of the address.
- [CNPostalAddressCountryKey](../cnpostaladdresscountrykey.md): The country or region name of the address.
- [CNPostalAddressISOCountryCodeKey](../cnpostaladdressisocountrycodekey.md): The ISO country code of the address.
