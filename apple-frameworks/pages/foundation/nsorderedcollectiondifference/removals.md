> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedcollectiondifference/removals](https://developer.apple.com/documentation/foundation/nsorderedcollectiondifference/removals)

# removals (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A collection of removal change objects.

## Declaration

```swift
var removals: [NSOrderedCollectionChange] { get }
```

## See Also

### Accessing Changes

- [hasChanges](haschanges.md): A Boolean value that indicates if the difference has changes.
- [insertions](insertions.md): A collection of insertion change objects.
- [NSOrderedCollectionChange](../nsorderedcollectionchange.md): An object that represents an indexed change within an ordered collection.
- [NSCollectionChangeType](../nscollectionchangetype.md): The type of change represented in computing the difference of an ordered collection.

# removals (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A collection of removal change objects.

## Declaration

```objectivec
@property (strong, readonly) NSArray<NSOrderedCollectionChange<id> *> * removals;
```

## See Also

### Accessing Changes

- [hasChanges](haschanges.md): A Boolean value that indicates if the difference has changes.
- [insertions](insertions.md): A collection of insertion change objects.
- [NSOrderedCollectionChange](../nsorderedcollectionchange.md): An object that represents an indexed change within an ordered collection.
- [NSCollectionChangeType](../nscollectionchangetype.md): The type of change represented in computing the difference of an ordered collection.
