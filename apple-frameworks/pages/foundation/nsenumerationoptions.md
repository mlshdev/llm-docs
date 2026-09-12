> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsenumerationoptions](https://developer.apple.com/documentation/foundation/nsenumerationoptions)

# NSEnumerationOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for block enumeration operations.

## Declaration

```swift
struct NSEnumerationOptions
```

## Topics

### Constants

- [concurrent](nsenumerationoptions/concurrent.md): Specifies that the Block enumeration should be concurrent.
- [reverse](nsenumerationoptions/reverse.md): Specifies that the enumeration should be performed in reverse.

### Initializers

- [init(rawValue:)](nsenumerationoptions/init%28rawvalue_%29.md)

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
- [NSSortOptions](nssortoptions.md): Options for block sorting operations.

# NSEnumerationOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for block enumeration operations.

## Declaration

```objectivec
enum NSEnumerationOptions : NSUInteger;
```

## Topics

### Constants

- [NSEnumerationConcurrent](nsenumerationoptions/concurrent.md): Specifies that the Block enumeration should be concurrent.
- [NSEnumerationReverse](nsenumerationoptions/reverse.md): Specifies that the enumeration should be performed in reverse.

## See Also

### Iteration

- [NSEnumerator](nsenumerator.md): An abstract class whose subclasses enumerate collections of objects, such as arrays and dictionaries.
- [NSFastEnumeration](nsfastenumeration.md): A protocol that objects adopt to support fast enumeration.
- [NSSortOptions](nssortoptions.md): Options for block sorting operations.
