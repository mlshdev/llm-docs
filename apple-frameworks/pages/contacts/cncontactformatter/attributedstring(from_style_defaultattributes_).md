> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactformatter/attributedstring(from:style:defaultattributes:)](https://developer.apple.com/documentation/contacts/cncontactformatter/attributedstring(from:style:defaultattributes:))

# attributedString(from:style:defaultAttributes:) (Swift)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Formats the contact name as an attributed string.

## Declaration

```swift
class func attributedString(from contact: CNContact, style: CNContactFormatterStyle, defaultAttributes attributes: [AnyHashable : Any]? = nil) -> NSAttributedString?
```

## Parameters

- `contact`: The contact whose name is to be formatted.
- `style`: The formatting style to be used for the contact name.
- `attributes`: The default attributes to use. For more information, see [Formatter](../../foundation/formatter.md).

<a id="Return-Value"></a>

## Return Value

The formatted contact name as an attributed string.

<a id="Discussion"></a>

## Discussion

This method behaves similarly to [string(from:style:)](string%28from_style_%29.md), except that it returns an attributed string. It includes the attribute key [CNContactPropertyAttribute](../cncontactpropertyattribute.md), whose attribute values are contact property keys, such as [CNContactGivenNameKey](../cncontactgivennamekey.md). This identifies the name components in the formatted contact name.

## See Also

### Creating a formatted attributed string

- [attributedString(from:defaultAttributes:)](attributedstring%28from_defaultattributes_%29.md): Formats the contact name as an attributed string.

# attributedStringFromContact:style:defaultAttributes: (Objective-C)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Formats the contact name as an attributed string.

## Declaration

```objectivec
+ (NSAttributedString *) attributedStringFromContact:(CNContact *) contact style:(CNContactFormatterStyle) style defaultAttributes:(NSDictionary *) attributes;
```

## Parameters

- `contact`: The contact whose name is to be formatted.
- `style`: The formatting style to be used for the contact name.
- `attributes`: The default attributes to use. For more information, see [NSFormatter](../../foundation/formatter.md).

<a id="Return-Value"></a>

## Return Value

The formatted contact name as an attributed string.

<a id="Discussion"></a>

## Discussion

This method behaves similarly to [stringFromContact:style:](string%28from_style_%29.md), except that it returns an attributed string. It includes the attribute key [CNContactPropertyAttribute](../cncontactpropertyattribute.md), whose attribute values are contact property keys, such as [CNContactGivenNameKey](../cncontactgivennamekey.md). This identifies the name components in the formatted contact name.

## See Also

### Creating a formatted attributed string

- [attributedStringFromContact:defaultAttributes:](attributedstring%28from_defaultattributes_%29.md): Formats the contact name as an attributed string.
