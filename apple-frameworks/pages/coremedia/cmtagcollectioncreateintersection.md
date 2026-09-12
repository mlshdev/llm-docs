> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtagcollectioncreateintersection](https://developer.apple.com/documentation/coremedia/cmtagcollectioncreateintersection)

# CMTagCollectionCreateIntersection

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a new tag collection containing only the tags from two existing collections which match.

## Declaration

```objectivec
extern OSStatus CMTagCollectionCreateIntersection(CMTagCollectionRef tagCollection1, CMTagCollectionRef tagCollection2, CMTagCollectionRef*tagCollectionOut);
```

## Parameters

- `tagCollection1`: The first of the tag collections to intersect.
- `tagCollection2`: The second of the tag collections to intersect.
- `tagCollectionOut`: The output destination for the new tag collection.

<a id="return-value"></a>

## Return Value

Returns `0` on success and a value from Tag Collection Error Codes on failure.

## See Also

### Deriving New Collections

- [CMTagCollectionCreateCopy](cmtagcollectioncreatecopy.md): Creates a copy of a tag collection.
- [CMTagCollectionCreateMutableCopy](cmtagcollectioncreatemutablecopy.md): Creates a new mutable copy from an existing tag collection.
- [CMTagCollectionCopyTagsOfCategories](cmtagcollectioncopytagsofcategories.md): Creates a new tag collection from an existing collection, copying all tags which match a list of categories.
- [CMTagCollectionCreateUnion](cmtagcollectioncreateunion.md): Creates a new tag collection containing all tags from two collections without duplicates.
- [CMTagCollectionCreateDifference](cmtagcollectioncreatedifference.md): Creates a new tag collection with the difference of two existing collections.
- [CMTagCollectionCreateExclusiveOr](cmtagcollectioncreateexclusiveor.md): Creates a new tag collection from two existing tag collections, copying elements which are in one collection or the other, but not both.
