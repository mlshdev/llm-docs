> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedcollectiondifferencecalculationoptions](https://developer.apple.com/documentation/foundation/nsorderedcollectiondifferencecalculationoptions)

# NSOrderedCollectionDifferenceCalculationOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that specify the options to use when creating an ordered collection difference.

## Declaration

```swift
struct NSOrderedCollectionDifferenceCalculationOptions
```

## Topics

### Creating Difference Calculation Options

- [init(rawValue:)](nsorderedcollectiondifferencecalculationoptions/init%28rawvalue_%29.md): Creates a set of difference calculation options.

### Difference Calculation Options

- [inferMoves](nsorderedcollectiondifferencecalculationoptions/infermoves.md): An option that identifies insertions or removals as moves.
- [omitInsertedObjects](nsorderedcollectiondifferencecalculationoptions/omitinsertedobjects.md): An option that indicates that the difference should omit references to the insertions.
- [omitRemovedObjects](nsorderedcollectiondifferencecalculationoptions/omitremovedobjects.md): An option that indicates that the difference should omit references to the removals.

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

### Comparing with Another Array

- [NSOrderedCollectionDifference](nsorderedcollectiondifference.md): An object representing the difference between two ordered collections.

# NSOrderedCollectionDifferenceCalculationOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that specify the options to use when creating an ordered collection difference.

## Declaration

```objectivec
enum NSOrderedCollectionDifferenceCalculationOptions : NSUInteger;
```

## Topics

### Difference Calculation Options

- [NSOrderedCollectionDifferenceCalculationInferMoves](nsorderedcollectiondifferencecalculationoptions/infermoves.md): An option that identifies insertions or removals as moves.
- [NSOrderedCollectionDifferenceCalculationOmitInsertedObjects](nsorderedcollectiondifferencecalculationoptions/omitinsertedobjects.md): An option that indicates that the difference should omit references to the insertions.
- [NSOrderedCollectionDifferenceCalculationOmitRemovedObjects](nsorderedcollectiondifferencecalculationoptions/omitremovedobjects.md): An option that indicates that the difference should omit references to the removals.

## See Also

### Comparing with Another Array

- [differenceFromArray:](nsarray/differencefromarray_.md): Compares two arrays to create a difference object that represents the changes between them.
- [differenceFromArray:withOptions:](nsarray/differencefromarray_withoptions_.md): Compares two arrays, with options, to create a difference object that represents the changes between them.
- [differenceFromArray:withOptions:usingEquivalenceTest:](nsarray/differencefromarray_withoptions_usingequivalencetest_.md): Compares two arrays, using the provided block and with options, to create a difference object that represents the changes between them.
- [NSOrderedCollectionDifference](nsorderedcollectiondifference.md): An object representing the difference between two ordered collections.
