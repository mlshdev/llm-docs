> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtaggedbuffergroupgetcmsamplebufferfortag](https://developer.apple.com/documentation/coremedia/cmtaggedbuffergroupgetcmsamplebufferfortag)

# CMTaggedBufferGroupGetCMSampleBufferForTag

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Gets the single sample buffer in a group which contains a given tag, if present.

## Declaration

```objectivec
extern CMSampleBufferRefCMTaggedBufferGroupGetCMSampleBufferForTag(CMTaggedBufferGroupRef group, CMTag tag, CFIndex *indexOut);
```

## Parameters

- `group`: The tagged buffer group to inspect.
- `tag`: The tag to match in the buffer group.
- `indexOut`: A pointer to the index of the retrieved sample buffer. The value of indexOut is `NULL` when the function returns `NULL`.

<a id="return-value"></a>

## Return Value

Returns the unique sample buffer associated with tag, or `NULL` if there were multiple sample buffers or no sample buffer could be found.

## See Also

### Accessing Sample Buffers

- [CMTaggedBufferGroupGetCMSampleBufferAtIndex](cmtaggedbuffergroupgetcmsamplebufferatindex.md): Gets the sample buffer at a given index in the buffer group.
- [CMTaggedBufferGroupGetCMSampleBufferForTagCollection](cmtaggedbuffergroupgetcmsamplebufferfortagcollection.md): Gets the single sample buffer in a group which contains a given tag collection, if present.
