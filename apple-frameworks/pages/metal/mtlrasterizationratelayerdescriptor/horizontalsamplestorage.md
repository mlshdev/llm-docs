> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrasterizationratelayerdescriptor/horizontalsamplestorage](https://developer.apple.com/documentation/metal/mtlrasterizationratelayerdescriptor/horizontalsamplestorage)

# horizontalSampleStorage

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

A pointer to the storage for the layer map’s horizontal rasterization rates.

## Declaration

```objectivec
@property (nonatomic, readonly) float * horizontalSampleStorage;
```

<a id="discussion"></a>

## Discussion

Points to the first element in the array of horizontal rasterization rates. The number of elements is equal to the [width](../mtlsize/width.md) value of [sampleCount](samplecount.md).

## See Also

### Inspecting the layer rate function parameters

- [sampleCount](samplecount.md): The number of rows and columns in the layer map.
- [maxSampleCount](maxsamplecount.md): The maximum number of rows and columns in the layer map.
- [horizontal](horizontal.md): The horizontal rasterization rates for the layer map’s rows.
- [vertical](vertical.md): The vertical rasterization rates for the layer map’s rows.
- [verticalSampleStorage](verticalsamplestorage.md): A pointer to the storage for the layer map’s vertical rasterization rates.
- [MTLRasterizationRateSampleArray](../mtlrasterizationratesamplearray.md): An array instance that contains rasterization rates.
