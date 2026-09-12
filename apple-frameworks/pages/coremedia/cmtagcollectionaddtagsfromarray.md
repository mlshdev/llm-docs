> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtagcollectionaddtagsfromarray](https://developer.apple.com/documentation/coremedia/cmtagcollectionaddtagsfromarray)

# CMTagCollectionAddTagsFromArray

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Adds the tags contained in a C-style array to a tag collection.

## Declaration

```objectivec
extern OSStatus CMTagCollectionAddTagsFromArray(CMMutableTagCollectionRef tagCollection, CMTag *tags, CMItemCount tagCount);
```

## Parameters

- `tagCollection`: The tag collection to add tags to.
- `tags`: A pointer to the start of an array of tags to copy.
- `tagCount`: The number of tags to add from the `tags` array.

<a id="return-value"></a>

## Return Value

Returns `0` on success and a value from Tag Collection Error Codes on failure.

<a id="Discussion"></a>

## Discussion

> **Warning**

>  Using a value of `containedTagCount` greater than the number of elements in the array starting from `containedTags` causes undefined behavior.

## See Also

### Modifying Collection Tags

- [CMTagCollectionAddTag](cmtagcollectionaddtag.md): Adds a new tag to an existing collection.
- [CMTagCollectionAddTagsFromCollection](cmtagcollectionaddtagsfromcollection.md): Add the tags contained in one collection to another.
- [CMTagCollectionRemoveAllTags](cmtagcollectionremovealltags.md): Removes all tags from a collection.
- [CMTagCollectionRemoveAllTagsOfCategory](cmtagcollectionremovealltagsofcategory.md): Removes all tags of a given category from a collection.
- [CMTagCollectionRemoveTag](cmtagcollectionremovetag.md): Removes a specific tag from a collection.
