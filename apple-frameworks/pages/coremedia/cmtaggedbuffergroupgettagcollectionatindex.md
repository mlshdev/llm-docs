> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtaggedbuffergroupgettagcollectionatindex](https://developer.apple.com/documentation/coremedia/cmtaggedbuffergroupgettagcollectionatindex)

# CMTaggedBufferGroupGetTagCollectionAtIndex

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Gets the collection of tags for a buffer at a given index in the group.

## Declaration

```objectivec
extern CMTagCollectionRefCMTaggedBufferGroupGetTagCollectionAtIndex(CMTaggedBufferGroupRef group, CFIndex index);
```

## See Also

### Inspecting Tagged Buffer Groups

- [CMTaggedBufferGroupGetCount](cmtaggedbuffergroupgetcount.md): Gets the number of buffers contained within a tagged buffer group.
- [CMTaggedBufferGroupGetNumberOfMatchesForTagCollection](cmtaggedbuffergroupgetnumberofmatchesfortagcollection.md): Gets the number of buffers in the group associated with a given tag collection.
- [CMTaggedBufferGroupGetTypeID](cmtaggedbuffergroupgettypeid.md): Gets the internal type ID for a tagged buffer group.
