> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscollectionchangetype](https://developer.apple.com/documentation/foundation/nscollectionchangetype)

# NSCollectionChangeType (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The type of change represented in computing the difference of an ordered collection.

## Declaration

```swift
enum NSCollectionChangeType
```

## Topics

### Types of Ordered Collection Changes

- [NSCollectionChangeType.insert](nscollectionchangetype/insert.md): A change type that represents the insertion of an object into an ordered collection.
- [NSCollectionChangeType.remove](nscollectionchangetype/remove.md): A change type that represents the removal of an object from an ordered collection.

### Initializers

- [init(rawValue:)](nscollectionchangetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Changes

- [hasChanges](nsorderedcollectiondifference/haschanges.md): A Boolean value that indicates if the difference has changes.
- [insertions](nsorderedcollectiondifference/insertions.md): A collection of insertion change objects.
- [removals](nsorderedcollectiondifference/removals.md): A collection of removal change objects.
- [NSOrderedCollectionChange](nsorderedcollectionchange.md): An object that represents an indexed change within an ordered collection.

# NSCollectionChangeType (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The type of change represented in computing the difference of an ordered collection.

## Declaration

```objectivec
enum NSCollectionChangeType : NSInteger;
```

## Topics

### Types of Ordered Collection Changes

- [NSCollectionChangeInsert](nscollectionchangetype/insert.md): A change type that represents the insertion of an object into an ordered collection.
- [NSCollectionChangeRemove](nscollectionchangetype/remove.md): A change type that represents the removal of an object from an ordered collection.

## See Also

### Accessing Changes

- [hasChanges](nsorderedcollectiondifference/haschanges.md): A Boolean value that indicates if the difference has changes.
- [insertions](nsorderedcollectiondifference/insertions.md): A collection of insertion change objects.
- [removals](nsorderedcollectiondifference/removals.md): A collection of removal change objects.
- [NSOrderedCollectionChange](nsorderedcollectionchange.md): An object that represents an indexed change within an ordered collection.
