> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsorderedcollectiondifference/transformingchanges(_:)

# transformingChanges(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Create a new ordered collection difference by mapping over this difference’s members, processing the change objects with the block provided.

## Declaration

```swift
func transformingChanges(_ block: (NSOrderedCollectionChange) -> NSOrderedCollectionChange) -> CollectionDifference<Any>
```

## Parameters

- `block`: A block receives an ordered collection change and returns an updated change.

<a id="return-value"></a>

## Return Value

A new ordered collection difference.

# differenceByTransformingChangesWithBlock: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Create a new ordered collection difference by mapping over this difference’s members, processing the change objects with the block provided.

## Declaration

```objectivec
- (NSOrderedCollectionDifference<id> *) differenceByTransformingChangesWithBlock:(NSOrderedCollectionChange<id> * (^)(NSOrderedCollectionChange<id> *)) block;
```

## Parameters

- `block`: A block receives an ordered collection change and returns an updated change.

<a id="return-value"></a>

## Return Value

A new ordered collection difference.
