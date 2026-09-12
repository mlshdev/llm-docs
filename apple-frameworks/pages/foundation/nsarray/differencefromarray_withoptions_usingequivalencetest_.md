> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/differencefromarray:withoptions:usingequivalencetest:](https://developer.apple.com/documentation/foundation/nsarray/differencefromarray:withoptions:usingequivalencetest:)

# differenceFromArray:withOptions:usingEquivalenceTest:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Compares two arrays, using the provided block and with options, to create a difference object that represents the changes between them.

## Declaration

```objectivec
- (NSOrderedCollectionDifference<id> *) differenceFromArray:(NSArray<id> *) other withOptions:(NSOrderedCollectionDifferenceCalculationOptions) options usingEquivalenceTest:(BOOL (^)(ObjectType obj1, ObjectType obj2)) block;
```

<a id="Discussion"></a>

## Discussion

The options allow you to choose to omit insertion or removal references to the change objects within the difference object’s changes. Don’t use the option [NSOrderedCollectionDifferenceCalculationInferMoves](../nsorderedcollectiondifferencecalculationoptions/infermoves.md) when providing a block for the equivalence test. The changes returned in the difference object don’t include valid values for [associatedIndex](../nsorderedcollectionchange/associatedindex.md).

## See Also

### Comparing with Another Array

- [differenceFromArray:](differencefromarray_.md): Compares two arrays to create a difference object that represents the changes between them.
- [differenceFromArray:withOptions:](differencefromarray_withoptions_.md): Compares two arrays, with options, to create a difference object that represents the changes between them.
- [NSOrderedCollectionDifference](../nsorderedcollectiondifference.md): An object representing the difference between two ordered collections.
- [NSOrderedCollectionDifferenceCalculationOptions](../nsorderedcollectiondifferencecalculationoptions.md): Constants that specify the options to use when creating an ordered collection difference.
