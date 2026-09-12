> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtaggedbuffergroupgetnumberofmatchesfortagcollection](https://developer.apple.com/documentation/coremedia/cmtaggedbuffergroupgetnumberofmatchesfortagcollection)

# CMTaggedBufferGroupGetNumberOfMatchesForTagCollection

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Gets the number of buffers in the group associated with a given tag collection.

## Declaration

```objectivec
extern CMItemCount CMTaggedBufferGroupGetNumberOfMatchesForTagCollection(CMTaggedBufferGroupRef group, CMTagCollectionRef tagCollection);
```

## Parameters

- `group`: The tagged buffer group to inspect.
- `tagCollection`: The collection of tags to search the buffer group for.

<a id="Discussion"></a>

## Discussion

When this function returns a value other than `1`, avoid using the `tagCollection` to retrieve a buffer from this group. The results of retrieving a buffer with `tagCollection` is `NULL`, since either the group doesn’t contain those tags or the match is ambiguous.

## See Also

### Inspecting Tagged Buffer Groups

- [CMTaggedBufferGroupGetCount](cmtaggedbuffergroupgetcount.md): Gets the number of buffers contained within a tagged buffer group.
- [CMTaggedBufferGroupGetTagCollectionAtIndex](cmtaggedbuffergroupgettagcollectionatindex.md): Gets the collection of tags for a buffer at a given index in the group.
- [CMTaggedBufferGroupGetTypeID](cmtaggedbuffergroupgettypeid.md): Gets the internal type ID for a tagged buffer group.
