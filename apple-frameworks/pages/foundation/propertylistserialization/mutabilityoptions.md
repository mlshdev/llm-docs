> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/propertylistserialization/mutabilityoptions](https://developer.apple.com/documentation/foundation/propertylistserialization/mutabilityoptions)

# PropertyListSerialization.MutabilityOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

These constants specify mutability options in property lists.

## Declaration

```swift
struct MutabilityOptions
```

## Topics

### Constants

- [mutableContainers](mutabilityoptions/mutablecontainers.md): Causes the returned property list to have mutable containers but immutable leaves.
- [mutableContainersAndLeaves](mutabilityoptions/mutablecontainersandleaves.md): Causes the returned property list to have mutable containers and leaves.

### Initializers

- [init(rawValue:)](mutabilityoptions/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [PropertyListSerialization.PropertyListFormat](propertylistformat.md): These constants are used to specify a property list serialization format.
- [PropertyListSerialization.ReadOptions](readoptions.md): The only read options supported are described in [PropertyListSerialization.MutabilityOptions](mutabilityoptions.md).

# NSPropertyListMutabilityOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

These constants specify mutability options in property lists.

## Declaration

```objectivec
enum NSPropertyListMutabilityOptions : NSUInteger;
```

## Topics

### Constants

- [NSPropertyListMutableContainers](mutabilityoptions/mutablecontainers.md): Causes the returned property list to have mutable containers but immutable leaves.
- [NSPropertyListMutableContainersAndLeaves](mutabilityoptions/mutablecontainersandleaves.md): Causes the returned property list to have mutable containers and leaves.
- [NSPropertyListImmutable](../nspropertylistmutabilityoptions/nspropertylistimmutable.md): Causes the returned property list to contain immutable objects.

## See Also

### Constants

- [NSPropertyListFormat](propertylistformat.md): These constants are used to specify a property list serialization format.
- [NSPropertyListReadOptions](readoptions.md): The only read options supported are described in [NSPropertyListMutabilityOptions](mutabilityoptions.md).
