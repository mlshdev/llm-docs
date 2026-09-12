> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtagcollectioncontainstag](https://developer.apple.com/documentation/coremedia/cmtagcollectioncontainstag)

# CMTagCollectionContainsTag

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Determines if a tag collection contains a specific tag.

## Declaration

```objectivec
extern Boolean CMTagCollectionContainsTag(CMTagCollectionRef tagCollection, CMTag tag);
```

## Parameters

- `tagCollection`: The tag collection to search for the tag.
- `tag`: The tag to compare collection elements against.

<a id="return-value"></a>

## Return Value

Returns `YES` if any tag in the collection is equal to `tag`.

## See Also

### Inspecting Collections

- [CMTagCollectionGetCount](cmtagcollectiongetcount.md): Gets the number of tags in a tag collection.
- [CMTagCollectionCountTagsWithFilterFunction](cmtagcollectioncounttagswithfilterfunction.md): Counts the number of tags in a collection matching an evaluation function.
- [CMTagCollectionIsEmpty](cmtagcollectionisempty.md): Checks if a tag collection has no elements.
- [CMTagCollectionGetTags](cmtagcollectiongettags.md): Retrieves an arbitrary number of tags from the collection.
- [CMTagCollectionGetTagsWithCategory](cmtagcollectiongettagswithcategory.md): Retrieves a C-style array of tags with a given category from a tag collection.
- [CMTagCollectionGetTagsWithFilterFunction](cmtagcollectiongettagswithfilterfunction.md): Gets all tags in a collection matching an evaluation function.
- [CMTagCollectionContainsCategory](cmtagcollectioncontainscategory.md): Determines if a tag collection contains tags for a given category.
- [CMTagCollectionGetCountOfCategory](cmtagcollectiongetcountofcategory.md): Retrieves the number of tags in the collection matching a given category.
- [CMTagCollectionContainsSpecifiedTags](cmtagcollectioncontainsspecifiedtags.md): Determines if a tag collection contains a subset of tags.
- [CMTagCollectionContainsTagsOfCollection](cmtagcollectioncontainstagsofcollection.md): Determines if one collection of tags contains every tag from another collection.
- [CMTagCollectionCopyDescription](cmtagcollectioncopydescription.md): Retrieves a copy of the tag collection’s description.
- [CMTagCollectionGetTypeID](cmtagcollectiongettypeid.md): Retrieves the internal type ID for tag collections.
