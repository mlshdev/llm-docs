> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnpostaladdressformatter/string(from:)](https://developer.apple.com/documentation/contacts/cnpostaladdressformatter/string(from:))

# string(from:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a formatted postal address.

## Declaration

```swift
func string(from postalAddress: CNPostalAddress) -> String
```

## Parameters

- `postalAddress`: The postal address to format.

<a id="Return-Value"></a>

## Return Value

The formatted postal address.

## See Also

### Generating a formatted string

- [string(from:style:)](string%28from_style_%29.md): Returns a postal address as a string and formatted for the specified style.

# stringFromPostalAddress: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a formatted postal address.

## Declaration

```objectivec
- (NSString *) stringFromPostalAddress:(CNPostalAddress *) postalAddress;
```

## Parameters

- `postalAddress`: The postal address to format.

<a id="Return-Value"></a>

## Return Value

The formatted postal address.

## See Also

### Generating a formatted string

- [stringFromPostalAddress:style:](string%28from_style_%29.md): Returns a postal address as a string and formatted for the specified style.
