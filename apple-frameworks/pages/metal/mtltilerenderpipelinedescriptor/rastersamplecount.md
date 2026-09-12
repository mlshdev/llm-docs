> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltilerenderpipelinedescriptor/rastersamplecount](https://developer.apple.com/documentation/metal/mtltilerenderpipelinedescriptor/rastersamplecount)

# rasterSampleCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

The number of samples in each fragment.

## Declaration

```swift
var rasterSampleCount: Int { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `1`. This value is used only if the pipeline render targets support multisampling. If the render targets don’t support multisampling, then this value needs to be `1`.

When you create a  [MTLRenderCommandEncoder](../mtlrendercommandencoder.md), the [sampleCount](../mtltexture/samplecount.md) value of all attachments need to match this `sampleCount` value. Furthermore, the texture type of all attachments need to be [MTLTextureType.type2DMultisample](../mtltexturetype/type2dmultisample.md).

Support for different sample count values varies by device instance. Call the [supportsTextureSampleCount(\_:)](../mtldevice/supportstexturesamplecount%28__%29.md) method on an [MTLDevice](../mtldevice.md) instance to determine whether it supports a specific sample count.

## See Also

### Specifying rasterization and visibility state

- [threadgroupSizeMatchesTileSize](threadgroupsizematchestilesize.md): A Boolean value that indicates whether all threadgroups for this pipeline completely cover tiles.

# rasterSampleCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

The number of samples in each fragment.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger rasterSampleCount;
```

<a id="discussion"></a>

## Discussion

The default value is `1`. This value is used only if the pipeline render targets support multisampling. If the render targets don’t support multisampling, then this value needs to be `1`.

When you create a  [MTLRenderCommandEncoder](../mtlrendercommandencoder.md), the [sampleCount](../mtltexture/samplecount.md) value of all attachments need to match this `sampleCount` value. Furthermore, the texture type of all attachments need to be [MTLTextureType2DMultisample](../mtltexturetype/type2dmultisample.md).

Support for different sample count values varies by device instance. Call the [supportsTextureSampleCount:](../mtldevice/supportstexturesamplecount%28__%29.md) method on an [MTLDevice](../mtldevice.md) instance to determine whether it supports a specific sample count.

## See Also

### Specifying rasterization and visibility state

- [threadgroupSizeMatchesTileSize](threadgroupsizematchestilesize.md): A Boolean value that indicates whether all threadgroups for this pipeline completely cover tiles.
