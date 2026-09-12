> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clplacemark/addressdictionary](https://developer.apple.com/documentation/corelocation/clplacemark/addressdictionary)

# addressDictionary (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 11.0) · iPadOS 5.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · watchOS 1.0+ (deprecated in 4.0)

A dictionary containing the Address Book keys and values for the placemark.

> Use [CLPlacemark](../clplacemark.md) instead of Address Book.

## Declaration

```swift
var addressDictionary: [AnyHashable : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

The keys in this dictionary are those defined by the Address Book framework and used to access address information for a person. For a list of the strings that can be in this dictionary, see the “Address Property” constants in `ABPerson`.

You can format the contents of this dictionary to get a full address string as opposed to building the address yourself. To format the dictionary, use the [ABCreateStringWithAddressDictionary(\_:\_:)](https://developer.apple.com/documentation/addressbookui/abcreatestringwithaddressdictionary%28_:_:%29) function as described in `AddressBookUI Functions`.

## See Also

### Getting the associated contact details

- [postalAddress](postaladdress.md): Deprecated. The postal address associated with the location, formatted for use with the Contacts framework.

# addressDictionary (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 11.0) · iPadOS 5.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · watchOS 2.0+ (deprecated in 4.0)

A dictionary containing the Address Book keys and values for the placemark.

> Use [CLPlacemark](../clplacemark.md) instead of Address Book.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDictionary * addressDictionary;
```

<a id="Discussion"></a>

## Discussion

The keys in this dictionary are those defined by the Address Book framework and used to access address information for a person. For a list of the strings that can be in this dictionary, see the “Address Property” constants in `ABPerson`.

You can format the contents of this dictionary to get a full address string as opposed to building the address yourself. To format the dictionary, use the [ABCreateStringWithAddressDictionary](https://developer.apple.com/documentation/addressbookui/abcreatestringwithaddressdictionary%28_:_:%29) function as described in `AddressBookUI Functions`.

## See Also

### Getting the associated contact details

- [postalAddress](postaladdress.md): Deprecated. The postal address associated with the location, formatted for use with the Contacts framework.
