> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtagcollectionremovealltags](https://developer.apple.com/documentation/coremedia/cmtagcollectionremovealltags)

# CMTagCollectionRemoveAllTags

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Removes all tags from a collection.

## Declaration

```objectivec
extern OSStatus CMTagCollectionRemoveAllTags(CMMutableTagCollectionRef tagCollection);
```

## Parameters

- `tagCollection`: The collection to remove tags from.

<a id="return-value"></a>

## Return Value

Returns `0` on success and a value from Tag Collection Error Codes on failure.

## See Also

### Modifying Collection Tags

- [CMTagCollectionAddTag](cmtagcollectionaddtag.md): Adds a new tag to an existing collection.
- [CMTagCollectionAddTagsFromArray](cmtagcollectionaddtagsfromarray.md): Adds the tags contained in a C-style array to a tag collection.
- [CMTagCollectionAddTagsFromCollection](cmtagcollectionaddtagsfromcollection.md): Add the tags contained in one collection to another.
- [CMTagCollectionRemoveAllTagsOfCategory](cmtagcollectionremovealltagsofcategory.md): Removes all tags of a given category from a collection.
- [CMTagCollectionRemoveTag](cmtagcollectionremovetag.md): Removes a specific tag from a collection.
