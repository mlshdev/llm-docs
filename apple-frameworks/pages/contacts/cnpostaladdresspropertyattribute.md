> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnpostaladdresspropertyattribute](https://developer.apple.com/documentation/contacts/cnpostaladdresspropertyattribute)

# CNPostalAddressPropertyAttribute (Swift)

**Framework:** Contacts  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An attribute that identifies the purpose of a range of characters in an attributed string.

## Declaration

```swift
let CNPostalAddressPropertyAttribute: String
```

<a id="Discussion"></a>

## Discussion

The value of this key is a string constant that specifies the meaning of the range of characters. For example, the value is [CNPostalAddressCityKey](cnpostaladdresscitykey.md) when the characters specify the city portion of the address.

## See Also

### Generating a formatted attributed string

- [attributedString(from:withDefaultAttributes:)](cnpostaladdressformatter/attributedstring%28from_withdefaultattributes_%29.md): Returns a formatted postal address as an attributed string.
- [attributedString(from:style:withDefaultAttributes:)](cnpostaladdressformatter/attributedstring%28from_style_withdefaultattributes_%29.md): Returns a postal address as an attributed string and formatted for the specified style.
- [CNPostalAddressLocalizedPropertyNameAttribute](cnpostaladdresslocalizedpropertynameattribute.md): An attribute that identifies the localized property of postal address.

# CNPostalAddressPropertyAttribute (Objective-C)

**Framework:** Contacts  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An attribute that identifies the purpose of a range of characters in an attributed string.

## Declaration

```objectivec
extern NSString * const CNPostalAddressPropertyAttribute;
```

<a id="Discussion"></a>

## Discussion

The value of this key is a string constant that specifies the meaning of the range of characters. For example, the value is [CNPostalAddressCityKey](cnpostaladdresscitykey.md) when the characters specify the city portion of the address.

## See Also

### Generating a formatted attributed string

- [attributedStringFromPostalAddress:withDefaultAttributes:](cnpostaladdressformatter/attributedstring%28from_withdefaultattributes_%29.md): Returns a formatted postal address as an attributed string.
- [attributedStringFromPostalAddress:style:withDefaultAttributes:](cnpostaladdressformatter/attributedstring%28from_style_withdefaultattributes_%29.md): Returns a postal address as an attributed string and formatted for the specified style.
- [CNPostalAddressLocalizedPropertyNameAttribute](cnpostaladdresslocalizedpropertynameattribute.md): An attribute that identifies the localized property of postal address.
