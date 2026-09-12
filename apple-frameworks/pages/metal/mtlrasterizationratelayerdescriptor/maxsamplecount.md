> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrasterizationratelayerdescriptor/maxsamplecount](https://developer.apple.com/documentation/metal/mtlrasterizationratelayerdescriptor/maxsamplecount)

# maxSampleCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The maximum number of rows and columns in the layer map.

## Declaration

```swift
var maxSampleCount: MTLSize { get }
```

<a id="discussion"></a>

## Discussion

Its [depth](../mtlsize/depth.md) value is always `0`.

## See Also

### Inspecting the layer rate function parameters

- [sampleCount](samplecount.md): The number of rows and columns in the layer map.
- [horizontal](horizontal.md): The horizontal rasterization rates for the layer map’s rows.
- [vertical](vertical.md): The vertical rasterization rates for the layer map’s rows.
- [MTLRasterizationRateSampleArray](../mtlrasterizationratesamplearray.md): An array instance that contains rasterization rates.

# maxSampleCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The maximum number of rows and columns in the layer map.

## Declaration

```objectivec
@property (nonatomic, readonly) MTLSize maxSampleCount;
```

<a id="discussion"></a>

## Discussion

Its [depth](../mtlsize/depth.md) value is always `0`.

## See Also

### Inspecting the layer rate function parameters

- [sampleCount](samplecount.md): The number of rows and columns in the layer map.
- [horizontal](horizontal.md): The horizontal rasterization rates for the layer map’s rows.
- [vertical](vertical.md): The vertical rasterization rates for the layer map’s rows.
- [horizontalSampleStorage](horizontalsamplestorage.md): A pointer to the storage for the layer map’s horizontal rasterization rates.
- [verticalSampleStorage](verticalsamplestorage.md): A pointer to the storage for the layer map’s vertical rasterization rates.
- [MTLRasterizationRateSampleArray](../mtlrasterizationratesamplearray.md): An array instance that contains rasterization rates.
