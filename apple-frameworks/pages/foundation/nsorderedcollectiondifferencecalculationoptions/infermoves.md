> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedcollectiondifferencecalculationoptions/infermoves](https://developer.apple.com/documentation/foundation/nsorderedcollectiondifferencecalculationoptions/infermoves)

# inferMoves (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An option that identifies insertions or removals as moves.

## Declaration

```swift
static var inferMoves: NSOrderedCollectionDifferenceCalculationOptions { get }
```

<a id="Discussion"></a>

## Discussion

When you use the option to infer moves, the difference calculation adds an associated index to change objects to indicate the original positions of the objects.

## See Also

### Difference Calculation Options

- [omitInsertedObjects](omitinsertedobjects.md): An option that indicates that the difference should omit references to the insertions.
- [omitRemovedObjects](omitremovedobjects.md): An option that indicates that the difference should omit references to the removals.

# NSOrderedCollectionDifferenceCalculationInferMoves (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An option that identifies insertions or removals as moves.

## Declaration

```objectivec
NSOrderedCollectionDifferenceCalculationInferMoves
```

<a id="Discussion"></a>

## Discussion

When you use the option to infer moves, the difference calculation adds an associated index to change objects to indicate the original positions of the objects.

## See Also

### Difference Calculation Options

- [NSOrderedCollectionDifferenceCalculationOmitInsertedObjects](omitinsertedobjects.md): An option that indicates that the difference should omit references to the insertions.
- [NSOrderedCollectionDifferenceCalculationOmitRemovedObjects](omitremovedobjects.md): An option that indicates that the difference should omit references to the removals.
