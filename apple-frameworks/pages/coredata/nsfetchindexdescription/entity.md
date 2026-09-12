> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchindexdescription/entity](https://developer.apple.com/documentation/coredata/nsfetchindexdescription/entity)

# entity (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The entity description for the fetch index description.

## Declaration

```swift
unowned(unsafe) var entity: NSEntityDescription? { get }
```

## See Also

### Inspecting an Index Description

- [elements](elements.md): An array of fetch index element descriptions.
- [name](name.md): The name of the fetch index description.
- [partialIndexPredicate](partialindexpredicate.md): A predicate that selects rows for indexing, if the index is a partial index.

# entity (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The entity description for the fetch index description.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, nullable) NSEntityDescription * entity;
```

## See Also

### Inspecting an Index Description

- [elements](elements.md): An array of fetch index element descriptions.
- [name](name.md): The name of the fetch index description.
- [partialIndexPredicate](partialindexpredicate.md): A predicate that selects rows for indexing, if the index is a partial index.
