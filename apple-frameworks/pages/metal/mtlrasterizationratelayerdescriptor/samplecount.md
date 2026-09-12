> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrasterizationratelayerdescriptor/samplecount](https://developer.apple.com/documentation/metal/mtlrasterizationratelayerdescriptor/samplecount)

# sampleCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

The number of rows and columns in the layer map.

## Declaration

```swift
var sampleCount: MTLSize { get set }
```

<a id="discussion"></a>

## Discussion

The [sampleCount](samplecount.md) property splits the logical viewport coordinate space into a 2D grid of equal-sized cells. Its [depth](../mtlsize/depth.md) value is always `0`.

The default value is the same as [maxSampleCount](maxsamplecount.md).

## See Also

### Inspecting the layer rate function parameters

- [maxSampleCount](maxsamplecount.md): The maximum number of rows and columns in the layer map.
- [horizontal](horizontal.md): The horizontal rasterization rates for the layer map’s rows.
- [vertical](vertical.md): The vertical rasterization rates for the layer map’s rows.
- [MTLRasterizationRateSampleArray](../mtlrasterizationratesamplearray.md): An array instance that contains rasterization rates.

# sampleCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

The number of rows and columns in the layer map.

## Declaration

```objectivec
@property (nonatomic, readonly) MTLSize sampleCount;
```

<a id="discussion"></a>

## Discussion

The [sampleCount](samplecount.md) property splits the logical viewport coordinate space into a 2D grid of equal-sized cells. Its [depth](../mtlsize/depth.md) value is always `0`.

The default value is the same as [maxSampleCount](maxsamplecount.md).

## See Also

### Inspecting the layer rate function parameters

- [maxSampleCount](maxsamplecount.md): The maximum number of rows and columns in the layer map.
- [horizontal](horizontal.md): The horizontal rasterization rates for the layer map’s rows.
- [vertical](vertical.md): The vertical rasterization rates for the layer map’s rows.
- [horizontalSampleStorage](horizontalsamplestorage.md): A pointer to the storage for the layer map’s horizontal rasterization rates.
- [verticalSampleStorage](verticalsamplestorage.md): A pointer to the storage for the layer map’s vertical rasterization rates.
- [MTLRasterizationRateSampleArray](../mtlrasterizationratesamplearray.md): An array instance that contains rasterization rates.
