> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactformatter/string(from:)](https://developer.apple.com/documentation/contacts/cncontactformatter/string(from:))

# string(from:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Formats the contact name.

## Declaration

```swift
func string(from contact: CNContact) -> String?
```

## Parameters

- `contact`: The contact whose name is to be formatted.

<a id="Return-Value"></a>

## Return Value

The formatted contact name.

## See Also

### Creating a formatted string

- [string(from:style:)](string%28from_style_%29.md): Returns the contact name, formatted with the specified formatter.

# stringFromContact: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Formats the contact name.

## Declaration

```objectivec
- (NSString *) stringFromContact:(CNContact *) contact;
```

## Parameters

- `contact`: The contact whose name is to be formatted.

<a id="Return-Value"></a>

## Return Value

The formatted contact name.

## See Also

### Creating a formatted string

- [stringFromContact:style:](string%28from_style_%29.md): Returns the contact name, formatted with the specified formatter.
