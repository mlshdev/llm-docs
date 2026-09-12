> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffergettaggedbuffergroup](https://developer.apple.com/documentation/coremedia/cmsamplebuffergettaggedbuffergroup)

# CMSampleBufferGetTaggedBufferGroup

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Gets the tagged buffer group of a sample buffer.

## Declaration

```objectivec
extern CMTaggedBufferGroupRefCMSampleBufferGetTaggedBufferGroup(CMSampleBufferRef sbuf);
```

<a id="return-value"></a>

## Return Value

The sample buffer’s tagged buffer group, or `NULL` if the sample buffer doesn’t belong to a tagged buffer group.
