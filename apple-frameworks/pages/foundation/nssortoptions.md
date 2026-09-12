> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssortoptions](https://developer.apple.com/documentation/foundation/nssortoptions)

# NSSortOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for block sorting operations.

## Declaration

```swift
struct NSSortOptions
```

## Topics

### Constants

- [concurrent](nssortoptions/concurrent.md): Specifies that the Block sort operation should be concurrent.
- [stable](nssortoptions/stable.md): Specifies that the sorted results should return compared items having equal value in the order they occurred originally.

### Initializers

- [init(rawValue:)](nssortoptions/init%28rawvalue_%29.md)

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

### Iteration

- [NSEnumerator](nsenumerator.md): An abstract class whose subclasses enumerate collections of objects, such as arrays and dictionaries.
- [NSFastEnumeration](nsfastenumeration.md): A protocol that objects adopt to support fast enumeration.
- [NSFastEnumerationIterator](nsfastenumerationiterator.md)
- [NSIndexSetIterator](nsindexsetiterator.md): An iterator suitable for enumerating the elements of an index set.
- [NSEnumerationOptions](nsenumerationoptions.md): Options for block enumeration operations.

# NSSortOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for block sorting operations.

## Declaration

```objectivec
enum NSSortOptions : NSUInteger;
```

## Topics

### Constants

- [NSSortConcurrent](nssortoptions/concurrent.md): Specifies that the Block sort operation should be concurrent.
- [NSSortStable](nssortoptions/stable.md): Specifies that the sorted results should return compared items having equal value in the order they occurred originally.

## See Also

### Iteration

- [NSEnumerator](nsenumerator.md): An abstract class whose subclasses enumerate collections of objects, such as arrays and dictionaries.
- [NSFastEnumeration](nsfastenumeration.md): A protocol that objects adopt to support fast enumeration.
- [NSEnumerationOptions](nsenumerationoptions.md): Options for block enumeration operations.
