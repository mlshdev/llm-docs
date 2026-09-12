> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtaggedbuffergroupgetcvpixelbufferfortagcollection](https://developer.apple.com/documentation/coremedia/cmtaggedbuffergroupgetcvpixelbufferfortagcollection)

# CMTaggedBufferGroupGetCVPixelBufferForTagCollection

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Gets the single pixel buffer in a group which contains a given tag collection, if present.

## Declaration

```objectivec
extern CVPixelBufferRefCMTaggedBufferGroupGetCVPixelBufferForTagCollection(CMTaggedBufferGroupRef group, CMTagCollectionRef tagCollection, CFIndex *indexOut);
```

## Parameters

- `group`: The tagged buffer group to inspect.
- `tagCollection`: The tag collection to match in the buffer group.
- `indexOut`: A pointer to the index of the retrieved pixel buffer. The value of indexOut is `NULL` when the function returns `NULL`.

<a id="return-value"></a>

## Return Value

Returns the unique pixel buffer associated with `tagCollection`, or `NULL` if there were multiple pixel buffers or no pixel buffer could be found.

## See Also

### Accessing Pixel Buffers

- [CMTaggedBufferGroupGetCVPixelBufferAtIndex](cmtaggedbuffergroupgetcvpixelbufferatindex.md): Gets the pixel buffer at a given index in the buffer group.
- [CMTaggedBufferGroupGetCVPixelBufferForTag](cmtaggedbuffergroupgetcvpixelbufferfortag.md): Gets the single pixel buffer in a group which contains a given tag, if present.
