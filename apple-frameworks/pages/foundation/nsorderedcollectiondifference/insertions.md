> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedcollectiondifference/insertions](https://developer.apple.com/documentation/foundation/nsorderedcollectiondifference/insertions)

# insertions (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A collection of insertion change objects.

## Declaration

```swift
var insertions: [NSOrderedCollectionChange] { get }
```

## See Also

### Accessing Changes

- [hasChanges](haschanges.md): A Boolean value that indicates if the difference has changes.
- [removals](removals.md): A collection of removal change objects.
- [NSOrderedCollectionChange](../nsorderedcollectionchange.md): An object that represents an indexed change within an ordered collection.
- [NSCollectionChangeType](../nscollectionchangetype.md): The type of change represented in computing the difference of an ordered collection.

# insertions (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A collection of insertion change objects.

## Declaration

```objectivec
@property (strong, readonly) NSArray<NSOrderedCollectionChange<id> *> * insertions;
```

## See Also

### Accessing Changes

- [hasChanges](haschanges.md): A Boolean value that indicates if the difference has changes.
- [removals](removals.md): A collection of removal change objects.
- [NSOrderedCollectionChange](../nsorderedcollectionchange.md): An object that represents an indexed change within an ordered collection.
- [NSCollectionChangeType](../nscollectionchangetype.md): The type of change represented in computing the difference of an ordered collection.
