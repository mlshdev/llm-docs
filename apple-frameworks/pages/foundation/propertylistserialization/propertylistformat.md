> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/propertylistserialization/propertylistformat](https://developer.apple.com/documentation/foundation/propertylistserialization/propertylistformat)

# PropertyListSerialization.PropertyListFormat (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

These constants are used to specify a property list serialization format.

## Declaration

```swift
enum PropertyListFormat
```

## Topics

### Constants

- [PropertyListSerialization.PropertyListFormat.openStep](propertylistformat/openstep.md): Specifies the ASCII property list format inherited from the OpenStep APIs.
- [PropertyListSerialization.PropertyListFormat.xml](propertylistformat/xml.md): Specifies the XML property list format.
- [PropertyListSerialization.PropertyListFormat.binary](propertylistformat/binary.md): Specifies the binary property list format.

### Initializers

- [init(rawValue:)](propertylistformat/init%28rawvalue_%29.md)

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

- [PropertyListSerialization.MutabilityOptions](mutabilityoptions.md): These constants specify mutability options in property lists.
- [PropertyListSerialization.ReadOptions](readoptions.md): The only read options supported are described in [PropertyListSerialization.MutabilityOptions](mutabilityoptions.md).

# NSPropertyListFormat (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

These constants are used to specify a property list serialization format.

## Declaration

```objectivec
enum NSPropertyListFormat : NSUInteger;
```

## Topics

### Constants

- [NSPropertyListOpenStepFormat](propertylistformat/openstep.md): Specifies the ASCII property list format inherited from the OpenStep APIs.
- [NSPropertyListXMLFormat_v1_0](propertylistformat/xml.md): Specifies the XML property list format.
- [NSPropertyListBinaryFormat_v1_0](propertylistformat/binary.md): Specifies the binary property list format.

## See Also

### Constants

- [NSPropertyListMutabilityOptions](mutabilityoptions.md): These constants specify mutability options in property lists.
- [NSPropertyListReadOptions](readoptions.md): The only read options supported are described in [NSPropertyListMutabilityOptions](mutabilityoptions.md).
