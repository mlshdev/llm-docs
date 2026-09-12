> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abaddressbook-swift.class/formattedaddress(from:)](https://developer.apple.com/documentation/addressbook/abaddressbook-swift.class/formattedaddress(from:))

# formattedAddress(from:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Returns an attributed string containing the formatted address.

## Declaration

```swift
func formattedAddress(from address: [AnyHashable : Any]!) -> NSAttributedString!
```

## Parameters

- `address`: The dictionary containing a street address.

<a id="return-value"></a>

## Return Value

An attributed string containing the formatted address.

<a id="Discussion"></a>

## Discussion

The string’s attributes match address dictionary keys, such as `kABAddressStreetKey`. Each attribute value contains the localized description of the key. (For example, the value of a Canadian `kABAddressZIPKey` field would be “Postal Code”, while the value of a French one would be “Code Postal”.)

To get the dictionary containing a street address for a person record, use [value(forProperty:)](../abrecord-swift.class/value%28forproperty_%29.md) with the property `kABAddressProperty`, and then getting one of the values from the multivalue that is returned.

# formattedAddressFromDictionary: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Returns an attributed string containing the formatted address.

## Declaration

```objectivec
- (NSAttributedString *) formattedAddressFromDictionary:(NSDictionary *) address;
```

## Parameters

- `address`: The dictionary containing a street address.

<a id="return-value"></a>

## Return Value

An attributed string containing the formatted address.

<a id="Discussion"></a>

## Discussion

The string’s attributes match address dictionary keys, such as `kABAddressStreetKey`. Each attribute value contains the localized description of the key. (For example, the value of a Canadian `kABAddressZIPKey` field would be “Postal Code”, while the value of a French one would be “Code Postal”.)

To get the dictionary containing a street address for a person record, use [valueForProperty:](../abrecord-swift.class/value%28forproperty_%29.md) with the property `kABAddressProperty`, and then getting one of the values from the multivalue that is returned.
