> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtagcollectionaddtagsfromcollection](https://developer.apple.com/documentation/coremedia/cmtagcollectionaddtagsfromcollection)

# CMTagCollectionAddTagsFromCollection

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Add the tags contained in one collection to another.

## Declaration

```objectivec
extern OSStatus CMTagCollectionAddTagsFromCollection(CMMutableTagCollectionRef tagCollection, CMTagCollectionRef collectionWithTagsToAdd);
```

## Parameters

- `tagCollection`: The tag collection to add tags to.
- `collectionWithTagsToAdd`: The collection containing the tags to add.

<a id="return-value"></a>

## Return Value

Returns `0` on success and a value from Tag Collection Error Codes on failure.

## See Also

### Modifying Collection Tags

- [CMTagCollectionAddTag](cmtagcollectionaddtag.md): Adds a new tag to an existing collection.
- [CMTagCollectionAddTagsFromArray](cmtagcollectionaddtagsfromarray.md): Adds the tags contained in a C-style array to a tag collection.
- [CMTagCollectionRemoveAllTags](cmtagcollectionremovealltags.md): Removes all tags from a collection.
- [CMTagCollectionRemoveAllTagsOfCategory](cmtagcollectionremovealltagsofcategory.md): Removes all tags of a given category from a collection.
- [CMTagCollectionRemoveTag](cmtagcollectionremovetag.md): Removes a specific tag from a collection.
