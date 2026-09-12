> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtaggedbuffergroupgetcvpixelbufferatindex](https://developer.apple.com/documentation/coremedia/cmtaggedbuffergroupgetcvpixelbufferatindex)

# CMTaggedBufferGroupGetCVPixelBufferAtIndex

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Gets the pixel buffer at a given index in the buffer group.

## Declaration

```objectivec
extern CVPixelBufferRefCMTaggedBufferGroupGetCVPixelBufferAtIndex(CMTaggedBufferGroupRef group, CFIndex index);
```

<a id="return-value"></a>

## Return Value

Returns the sample buffer at index, or `NULL` if the index is out of bounds or points to a sample buffer.

## See Also

### Accessing Pixel Buffers

- [CMTaggedBufferGroupGetCVPixelBufferForTag](cmtaggedbuffergroupgetcvpixelbufferfortag.md): Gets the single pixel buffer in a group which contains a given tag, if present.
- [CMTaggedBufferGroupGetCVPixelBufferForTagCollection](cmtaggedbuffergroupgetcvpixelbufferfortagcollection.md): Gets the single pixel buffer in a group which contains a given tag collection, if present.
