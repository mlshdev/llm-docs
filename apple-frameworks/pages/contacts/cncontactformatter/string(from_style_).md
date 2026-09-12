> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactformatter/string(from:style:)](https://developer.apple.com/documentation/contacts/cncontactformatter/string(from:style:))

# string(from:style:) (Swift)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns the contact name, formatted with the specified formatter.

## Declaration

```swift
class func string(from contact: CNContact, style: CNContactFormatterStyle) -> String?
```

## Parameters

- `contact`: The contact whose name is to be formatted.
- `style`: The formatting style to be used for the contact name.

<a id="Return-Value"></a>

## Return Value

The formatted contact name.

## See Also

### Creating a formatted string

- [string(from:)](string%28from_%29.md): Formats the contact name.

# stringFromContact:style: (Objective-C)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns the contact name, formatted with the specified formatter.

## Declaration

```objectivec
+ (NSString *) stringFromContact:(CNContact *) contact style:(CNContactFormatterStyle) style;
```

## Parameters

- `contact`: The contact whose name is to be formatted.
- `style`: The formatting style to be used for the contact name.

<a id="Return-Value"></a>

## Return Value

The formatted contact name.

## See Also

### Creating a formatted string

- [stringFromContact:](string%28from_%29.md): Formats the contact name.
