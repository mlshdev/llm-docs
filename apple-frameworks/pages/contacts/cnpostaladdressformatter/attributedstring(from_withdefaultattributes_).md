> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnpostaladdressformatter/attributedstring(from:withdefaultattributes:)](https://developer.apple.com/documentation/contacts/cnpostaladdressformatter/attributedstring(from:withdefaultattributes:))

# attributedString(from:withDefaultAttributes:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a formatted postal address as an attributed string.

## Declaration

```swift
func attributedString(from postalAddress: CNPostalAddress, withDefaultAttributes attributes: [AnyHashable : Any] = [:]) -> NSAttributedString
```

## Parameters

- `postalAddress`: The postal address to format.
- `attributes`: The default attributes to use. You can specify the [CNPostalAddressPropertyAttribute](../cnpostaladdresspropertyattribute.md) or [CNPostalAddressLocalizedPropertyNameAttribute](../cnpostaladdresslocalizedpropertynameattribute.md) attributes.

<a id="Return-Value"></a>

## Return Value

The formatted postal address as an attributed string.

<a id="Discussion"></a>

## Discussion

This method behaves similarly to  [string(from:)](string%28from_%29.md), except that it returns an attributed string. It includes the attribute key [CNPostalAddressPropertyAttribute](../cnpostaladdresspropertyattribute.md), whose attribute values are postal address property keys, such as [CNPostalAddressStreetKey](../cnpostaladdressstreetkey.md). This identifies the postal address components in the formatted postal address. It also includes the attribute key [CNPostalAddressLocalizedPropertyNameAttribute](../cnpostaladdresslocalizedpropertynameattribute.md) whose attribute values are the localized strings for the postal address property keys.

## See Also

### Generating a formatted attributed string

- [attributedString(from:style:withDefaultAttributes:)](attributedstring%28from_style_withdefaultattributes_%29.md): Returns a postal address as an attributed string and formatted for the specified style.
- [CNPostalAddressPropertyAttribute](../cnpostaladdresspropertyattribute.md): An attribute that identifies the purpose of a range of characters in an attributed string.
- [CNPostalAddressLocalizedPropertyNameAttribute](../cnpostaladdresslocalizedpropertynameattribute.md): An attribute that identifies the localized property of postal address.

# attributedStringFromPostalAddress:withDefaultAttributes: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a formatted postal address as an attributed string.

## Declaration

```objectivec
- (NSAttributedString *) attributedStringFromPostalAddress:(CNPostalAddress *) postalAddress withDefaultAttributes:(NSDictionary *) attributes;
```

## Parameters

- `postalAddress`: The postal address to format.
- `attributes`: The default attributes to use. You can specify the [CNPostalAddressPropertyAttribute](../cnpostaladdresspropertyattribute.md) or [CNPostalAddressLocalizedPropertyNameAttribute](../cnpostaladdresslocalizedpropertynameattribute.md) attributes.

<a id="Return-Value"></a>

## Return Value

The formatted postal address as an attributed string.

<a id="Discussion"></a>

## Discussion

This method behaves similarly to  [stringFromPostalAddress:](string%28from_%29.md), except that it returns an attributed string. It includes the attribute key [CNPostalAddressPropertyAttribute](../cnpostaladdresspropertyattribute.md), whose attribute values are postal address property keys, such as [CNPostalAddressStreetKey](../cnpostaladdressstreetkey.md). This identifies the postal address components in the formatted postal address. It also includes the attribute key [CNPostalAddressLocalizedPropertyNameAttribute](../cnpostaladdresslocalizedpropertynameattribute.md) whose attribute values are the localized strings for the postal address property keys.

## See Also

### Generating a formatted attributed string

- [attributedStringFromPostalAddress:style:withDefaultAttributes:](attributedstring%28from_style_withdefaultattributes_%29.md): Returns a postal address as an attributed string and formatted for the specified style.
- [CNPostalAddressPropertyAttribute](../cnpostaladdresspropertyattribute.md): An attribute that identifies the purpose of a range of characters in an attributed string.
- [CNPostalAddressLocalizedPropertyNameAttribute](../cnpostaladdresslocalizedpropertynameattribute.md): An attribute that identifies the localized property of postal address.
