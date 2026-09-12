> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchindexdescription/elements](https://developer.apple.com/documentation/coredata/nsfetchindexdescription/elements)

# elements (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An array of fetch index element descriptions.

## Declaration

```swift
var elements: [NSFetchIndexElementDescription] { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this property to an invalid value throws an exception, such as when the new value includes both R-tree and non-R-tree elements.

## See Also

### Inspecting an Index Description

- [entity](entity.md): The entity description for the fetch index description.
- [name](name.md): The name of the fetch index description.
- [partialIndexPredicate](partialindexpredicate.md): A predicate that selects rows for indexing, if the index is a partial index.

# elements (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An array of fetch index element descriptions.

## Declaration

```objectivec
@property (copy) NSArray<NSFetchIndexElementDescription *> * elements;
```

<a id="Discussion"></a>

## Discussion

Setting this property to an invalid value throws an exception, such as when the new value includes both R-tree and non-R-tree elements.

## See Also

### Inspecting an Index Description

- [entity](entity.md): The entity description for the fetch index description.
- [name](name.md): The name of the fetch index description.
- [partialIndexPredicate](partialindexpredicate.md): A predicate that selects rows for indexing, if the index is a partial index.
