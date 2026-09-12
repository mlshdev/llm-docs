> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnpostaladdresslocalizedpropertynameattribute](https://developer.apple.com/documentation/contacts/cnpostaladdresslocalizedpropertynameattribute)

# CNPostalAddressLocalizedPropertyNameAttribute (Swift)

**Framework:** Contacts  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An attribute that identifies the localized property of postal address.

## Declaration

```swift
let CNPostalAddressLocalizedPropertyNameAttribute: String
```

<a id="Discussion"></a>

## Discussion

This constant is a key in the attributed string whose value is a localized version of the CNPostalAddress property key. This label takes a string value.

## See Also

### Generating a formatted attributed string

- [attributedString(from:withDefaultAttributes:)](cnpostaladdressformatter/attributedstring%28from_withdefaultattributes_%29.md): Returns a formatted postal address as an attributed string.
- [attributedString(from:style:withDefaultAttributes:)](cnpostaladdressformatter/attributedstring%28from_style_withdefaultattributes_%29.md): Returns a postal address as an attributed string and formatted for the specified style.
- [CNPostalAddressPropertyAttribute](cnpostaladdresspropertyattribute.md): An attribute that identifies the purpose of a range of characters in an attributed string.

# CNPostalAddressLocalizedPropertyNameAttribute (Objective-C)

**Framework:** Contacts  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An attribute that identifies the localized property of postal address.

## Declaration

```objectivec
extern NSString * const CNPostalAddressLocalizedPropertyNameAttribute;
```

<a id="Discussion"></a>

## Discussion

This constant is a key in the attributed string whose value is a localized version of the CNPostalAddress property key. This label takes a string value.

## See Also

### Generating a formatted attributed string

- [attributedStringFromPostalAddress:withDefaultAttributes:](cnpostaladdressformatter/attributedstring%28from_withdefaultattributes_%29.md): Returns a formatted postal address as an attributed string.
- [attributedStringFromPostalAddress:style:withDefaultAttributes:](cnpostaladdressformatter/attributedstring%28from_style_withdefaultattributes_%29.md): Returns a postal address as an attributed string and formatted for the specified style.
- [CNPostalAddressPropertyAttribute](cnpostaladdresspropertyattribute.md): An attribute that identifies the purpose of a range of characters in an attributed string.
