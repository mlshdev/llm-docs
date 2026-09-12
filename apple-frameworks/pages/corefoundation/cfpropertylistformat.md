> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpropertylistformat](https://developer.apple.com/documentation/corefoundation/cfpropertylistformat)

# CFPropertyListFormat (Swift)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies the format of a property list.

## Declaration

```swift
enum CFPropertyListFormat
```

## Topics

### Constants

- [CFPropertyListFormat.openStepFormat](cfpropertylistformat/openstepformat.md): OpenStep format (use of this format is discouraged).
- [CFPropertyListFormat.xmlFormat_v1_0](cfpropertylistformat/xmlformat_v1_0.md): XML format version 1.0.
- [CFPropertyListFormat.binaryFormat_v1_0](cfpropertylistformat/binaryformat_v1_0.md): Binary format version 1.0.

### Initializers

- [init(rawValue:)](cfpropertylistformat/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [Property List Mutability Options](property_list_mutability_options.md): Option flags that determine the degree of mutability of newly created property lists.
- [Reading and Writing Error Codes](1429999-reading-and-writing-error-codes.md): Error codes for property list reading and writing functions such as [CFPropertyListCreateWithData(\_:\_:\_:\_:\_:)](cfpropertylistcreatewithdata%28__________%29.md).

# CFPropertyListFormat (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies the format of a property list.

## Declaration

```objectivec
enum CFPropertyListFormat : CFIndex;
```

## Topics

### Constants

- [kCFPropertyListOpenStepFormat](cfpropertylistformat/openstepformat.md): OpenStep format (use of this format is discouraged).
- [kCFPropertyListXMLFormat_v1_0](cfpropertylistformat/xmlformat_v1_0.md): XML format version 1.0.
- [kCFPropertyListBinaryFormat_v1_0](cfpropertylistformat/binaryformat_v1_0.md): Binary format version 1.0.

## See Also

### Constants

- [Property List Mutability Options](property_list_mutability_options.md): Option flags that determine the degree of mutability of newly created property lists.
- [Reading and Writing Error Codes](1429999-reading-and-writing-error-codes.md): Error codes for property list reading and writing functions such as [CFPropertyListCreateWithData](cfpropertylistcreatewithdata%28__________%29.md).
