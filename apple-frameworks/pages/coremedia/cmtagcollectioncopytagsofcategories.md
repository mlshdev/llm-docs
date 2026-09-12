> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtagcollectioncopytagsofcategories](https://developer.apple.com/documentation/coremedia/cmtagcollectioncopytagsofcategories)

# CMTagCollectionCopyTagsOfCategories

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a new tag collection from an existing collection, copying all tags which match a list of categories.

## Declaration

```objectivec
extern OSStatus CMTagCollectionCopyTagsOfCategories(CFAllocatorRef allocator, CMTagCollectionRef tagCollection, const CMTagCategory *categories, CMItemCount categoriesCount, CMTagCollectionRef*collectionWithTagsOfCategories);
```

## Parameters

- `allocator`: The allocator to use for the new tag collection. Pass `kCFAllocatorDefault` to use the default global allocator.
- `tagCollection`: The tag collection to copy tags from.
- `categories`: A C-style array containing the categories to match.
- `categoriesCount`: The number of categories.
- `collectionWithTagsOfCategories`: The output destination for the new tag collection.

<a id="return-value"></a>

## Return Value

Returns `0` on success and a value from Tag Collection Error Codes on failure.

<a id="Discussion"></a>

## Discussion

> **Warning**

>  Using a value of `categoriesCount` greater than the number of elements in the array starting from `categories` causes undefined behavior.

## See Also

### Deriving New Collections

- [CMTagCollectionCreateCopy](cmtagcollectioncreatecopy.md): Creates a copy of a tag collection.
- [CMTagCollectionCreateMutableCopy](cmtagcollectioncreatemutablecopy.md): Creates a new mutable copy from an existing tag collection.
- [CMTagCollectionCreateUnion](cmtagcollectioncreateunion.md): Creates a new tag collection containing all tags from two collections without duplicates.
- [CMTagCollectionCreateDifference](cmtagcollectioncreatedifference.md): Creates a new tag collection with the difference of two existing collections.
- [CMTagCollectionCreateExclusiveOr](cmtagcollectioncreateexclusiveor.md): Creates a new tag collection from two existing tag collections, copying elements which are in one collection or the other, but not both.
- [CMTagCollectionCreateIntersection](cmtagcollectioncreateintersection.md): Creates a new tag collection containing only the tags from two existing collections which match.
