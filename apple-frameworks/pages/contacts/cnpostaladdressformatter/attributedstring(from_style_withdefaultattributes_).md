> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnpostaladdressformatter/attributedstring(from:style:withdefaultattributes:)](https://developer.apple.com/documentation/contacts/cnpostaladdressformatter/attributedstring(from:style:withdefaultattributes:))

# attributedString(from:style:withDefaultAttributes:) (Swift)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a postal address as an attributed string and formatted for the specified style.

## Declaration

```swift
class func attributedString(from postalAddress: CNPostalAddress, style: CNPostalAddressFormatterStyle, withDefaultAttributes attributes: [AnyHashable : Any] = [:]) -> NSAttributedString
```

## Parameters

- `postalAddress`: The postal address to format.
- `style`: The postal formatting style to use. For a list of possible values, see [CNPostalAddressFormatterStyle](../cnpostaladdressformatterstyle.md).
- `attributes`: The default attributes to use. To learn more, see Formatter.

<a id="Return-Value"></a>

## Return Value

The formatted postal address as an attributed string.

<a id="Discussion"></a>

## Discussion

This method behaves similarly to  [string(from:)](string%28from_%29.md), except that it returns an attributed string. It includes the attribute key [CNPostalAddressPropertyAttribute](../cnpostaladdresspropertyattribute.md), whose attribute values are postal address property keys, such as [CNPostalAddressStreetKey](../cnpostaladdressstreetkey.md). This identifies the postal address components in the formatted postal address. It also includes the attribute key [CNPostalAddressLocalizedPropertyNameAttribute](../cnpostaladdresslocalizedpropertynameattribute.md) whose attribute values are the localized strings for the postal address property keys.

## See Also

### Generating a formatted attributed string

- [attributedString(from:withDefaultAttributes:)](attributedstring%28from_withdefaultattributes_%29.md): Returns a formatted postal address as an attributed string.
- [CNPostalAddressPropertyAttribute](../cnpostaladdresspropertyattribute.md): An attribute that identifies the purpose of a range of characters in an attributed string.
- [CNPostalAddressLocalizedPropertyNameAttribute](../cnpostaladdresslocalizedpropertynameattribute.md): An attribute that identifies the localized property of postal address.

# attributedStringFromPostalAddress:style:withDefaultAttributes: (Objective-C)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a postal address as an attributed string and formatted for the specified style.

## Declaration

```objectivec
+ (NSAttributedString *) attributedStringFromPostalAddress:(CNPostalAddress *) postalAddress style:(CNPostalAddressFormatterStyle) style withDefaultAttributes:(NSDictionary *) attributes;
```

## Parameters

- `postalAddress`: The postal address to format.
- `style`: The postal formatting style to use. For a list of possible values, see [CNPostalAddressFormatterStyle](../cnpostaladdressformatterstyle.md).
- `attributes`: The default attributes to use. To learn more, see Formatter.

<a id="Return-Value"></a>

## Return Value

The formatted postal address as an attributed string.

<a id="Discussion"></a>

## Discussion

This method behaves similarly to  [stringFromPostalAddress:](string%28from_%29.md), except that it returns an attributed string. It includes the attribute key [CNPostalAddressPropertyAttribute](../cnpostaladdresspropertyattribute.md), whose attribute values are postal address property keys, such as [CNPostalAddressStreetKey](../cnpostaladdressstreetkey.md). This identifies the postal address components in the formatted postal address. It also includes the attribute key [CNPostalAddressLocalizedPropertyNameAttribute](../cnpostaladdresslocalizedpropertynameattribute.md) whose attribute values are the localized strings for the postal address property keys.

## See Also

### Generating a formatted attributed string

- [attributedStringFromPostalAddress:withDefaultAttributes:](attributedstring%28from_withdefaultattributes_%29.md): Returns a formatted postal address as an attributed string.
- [CNPostalAddressPropertyAttribute](../cnpostaladdresspropertyattribute.md): An attribute that identifies the purpose of a range of characters in an attributed string.
- [CNPostalAddressLocalizedPropertyNameAttribute](../cnpostaladdresslocalizedpropertynameattribute.md): An attribute that identifies the localized property of postal address.
