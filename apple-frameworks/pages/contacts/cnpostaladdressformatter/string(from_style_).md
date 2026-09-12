> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnpostaladdressformatter/string(from:style:)](https://developer.apple.com/documentation/contacts/cnpostaladdressformatter/string(from:style:))

# string(from:style:) (Swift)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a postal address as a string and formatted for the specified style.

## Declaration

```swift
class func string(from postalAddress: CNPostalAddress, style: CNPostalAddressFormatterStyle) -> String
```

## Parameters

- `postalAddress`: The postal address to format.
- `style`: The postal formatting style to use. For a list of possible values, see [CNPostalAddressFormatterStyle](../cnpostaladdressformatterstyle.md).

<a id="Return-Value"></a>

## Return Value

The formatted postal address.

## See Also

### Generating a formatted string

- [string(from:)](string%28from_%29.md): Returns a formatted postal address.

# stringFromPostalAddress:style: (Objective-C)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a postal address as a string and formatted for the specified style.

## Declaration

```objectivec
+ (NSString *) stringFromPostalAddress:(CNPostalAddress *) postalAddress style:(CNPostalAddressFormatterStyle) style;
```

## Parameters

- `postalAddress`: The postal address to format.
- `style`: The postal formatting style to use. For a list of possible values, see [CNPostalAddressFormatterStyle](../cnpostaladdressformatterstyle.md).

<a id="Return-Value"></a>

## Return Value

The formatted postal address.

## See Also

### Generating a formatted string

- [stringFromPostalAddress:](string%28from_%29.md): Returns a formatted postal address.
