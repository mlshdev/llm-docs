> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtagcollectioncreatemutablecopy](https://developer.apple.com/documentation/coremedia/cmtagcollectioncreatemutablecopy)

# CMTagCollectionCreateMutableCopy

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a new mutable copy from an existing tag collection.

## Declaration

```objectivec
extern OSStatus CMTagCollectionCreateMutableCopy(CMTagCollectionRef tagCollection, CFAllocatorRef allocator, CMMutableTagCollectionRef*newMutableCollectionCopyOut);
```

## Parameters

- `tagCollection`: The tag collection to copy.
- `allocator`: The allocator to use for the new tag collection. Pass `kCFAllocatorDefault` to use the default global allocator.
- `newMutableCollectionCopyOut`: The output destination for the new mutable tag collection.

<a id="return-value"></a>

## Return Value

Returns `0` on success and a value from Tag Collection Error Codes on failure.

## See Also

### Deriving New Collections

- [CMTagCollectionCreateCopy](cmtagcollectioncreatecopy.md): Creates a copy of a tag collection.
- [CMTagCollectionCopyTagsOfCategories](cmtagcollectioncopytagsofcategories.md): Creates a new tag collection from an existing collection, copying all tags which match a list of categories.
- [CMTagCollectionCreateUnion](cmtagcollectioncreateunion.md): Creates a new tag collection containing all tags from two collections without duplicates.
- [CMTagCollectionCreateDifference](cmtagcollectioncreatedifference.md): Creates a new tag collection with the difference of two existing collections.
- [CMTagCollectionCreateExclusiveOr](cmtagcollectioncreateexclusiveor.md): Creates a new tag collection from two existing tag collections, copying elements which are in one collection or the other, but not both.
- [CMTagCollectionCreateIntersection](cmtagcollectioncreateintersection.md): Creates a new tag collection containing only the tags from two existing collections which match.
