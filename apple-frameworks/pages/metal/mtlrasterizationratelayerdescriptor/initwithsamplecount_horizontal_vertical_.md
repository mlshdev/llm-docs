> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrasterizationratelayerdescriptor/initwithsamplecount:horizontal:vertical:](https://developer.apple.com/documentation/metal/mtlrasterizationratelayerdescriptor/initwithsamplecount:horizontal:vertical:)

# initWithSampleCount:horizontal:vertical:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

Initializes the layer map with the provided grid size and rasterization rates.

## Declaration

```objectivec
- (instancetype) initWithSampleCount:(MTLSize) sampleCount horizontal:(const float *) horizontal vertical:(const float *) vertical;
```

## Parameters

- `sampleCount`: The size of the grid. Specify the width and height to determine the number of columns and rows in the layer map. The initializer ignores the depth component.
- `horizontal`: The rasterization rates for the layer map’s columns. There needs to be at least as many samples as the width you specified in `sampleCount`.
- `vertical`: The rasterization rates for the layer map’s columns. There needs to be at least as many samples as the height you specified in `sampleCount`.

<a id="return-value"></a>

## Return Value

A layer descriptor with a grid of the specified size. The layer descriptor copies the  rasterization rates.

## See Also

### Creating a layer rasterization rate descriptor

- [initWithSampleCount:](init%28samplecount_%29.md): Initializes the layer map with an empty grid.
