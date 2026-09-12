> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abcreatestringwithaddressdictionary(_:_:)](https://developer.apple.com/documentation/addressbookui/abcreatestringwithaddressdictionary(_:_:))

# ABCreateStringWithAddressDictionary(\_:\_:) (Swift)

**Framework:** Address Book UI  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns a formatted address from an address property.

> Use [CNPostalAddressFormatter](https://developer.apple.com/documentation/contacts/cnpostaladdressformatter) instead.

## Declaration

```swift
func ABCreateStringWithAddressDictionary(_ address: [AnyHashable : Any], _ addCountryName: Bool) -> String
```

## Parameters

- `address`: A dictionary representing the address property to format.
- `addCountryName`: Specifies whether to include the name of the country or region in the returned formatted address.

  When [false](https://developer.apple.com/documentation/swift/false) and address includes a country or region name, that country or region name is still included in the return value.

  When [true](https://developer.apple.com/documentation/swift/true) and `address` doesn’t include a country or region name, the country or region name is added to the return value. (The country or region name is generated from the country code entry in `address`; see `Address Property`.)

<a id="return-value"></a>

## Return Value

The formatted address (may include line endings).

<a id="Discussion"></a>

## Discussion

The address is formatted based on the address’s country code ([kABPersonAddressCountryCodeKey](https://developer.apple.com/documentation/addressbook/kabpersonaddresscountrycodekey)).  In general, the country code should be set to correspond with the country or region name ([kABPersonAddressCountryKey](https://developer.apple.com/documentation/addressbook/kabpersonaddresscountrykey)).

## See Also

### Detail Display

- [ABNewPersonViewController](abnewpersonviewcontroller.md): Deprecated. A view controller presenting an interface to create a contact.
- [ABPersonViewController](abpersonviewcontroller.md): Deprecated. The `ABPersonViewController` class (whose instances are known as **person view controllers**) implements the view used to display a person record (`ABPersonRef`).
- [ABUnknownPersonViewController](abunknownpersonviewcontroller.md): Deprecated. The `ABUnknownPersonViewController` class (whose instances are known as **unknown-person view controllers**) implements a view controller used to create a person record from a set of person properties.

# ABCreateStringWithAddressDictionary (Objective-C)

**Framework:** Address Book UI  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns a formatted address from an address property.

> Use [CNPostalAddressFormatter](https://developer.apple.com/documentation/contacts/cnpostaladdressformatter) instead.

## Declaration

```objectivec
NSString *ABCreateStringWithAddressDictionary(NSDictionary *address, BOOL addCountryName);
```

## Parameters

- `address`: A dictionary representing the address property to format.
- `addCountryName`: Specifies whether to include the name of the country or region in the returned formatted address.

  When [false](https://developer.apple.com/documentation/swift/false) and address includes a country or region name, that country or region name is still included in the return value.

  When [true](https://developer.apple.com/documentation/swift/true) and `address` doesn’t include a country or region name, the country or region name is added to the return value. (The country or region name is generated from the country code entry in `address`; see `Address Property`.)

<a id="return-value"></a>

## Return Value

The formatted address (may include line endings).

<a id="Discussion"></a>

## Discussion

The address is formatted based on the address’s country code ([kABPersonAddressCountryCodeKey](https://developer.apple.com/documentation/addressbook/kabpersonaddresscountrycodekey)).  In general, the country code should be set to correspond with the country or region name ([kABPersonAddressCountryKey](https://developer.apple.com/documentation/addressbook/kabpersonaddresscountrykey)).

## See Also

### Detail Display

- [ABNewPersonViewController](abnewpersonviewcontroller.md): Deprecated. A view controller presenting an interface to create a contact.
- [ABPersonViewController](abpersonviewcontroller.md): Deprecated. The `ABPersonViewController` class (whose instances are known as **person view controllers**) implements the view used to display a person record (`ABPersonRef`).
- [ABUnknownPersonViewController](abunknownpersonviewcontroller.md): Deprecated. The `ABUnknownPersonViewController` class (whose instances are known as **unknown-person view controllers**) implements a view controller used to create a person record from a set of person properties.
