> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrasterizationratelayerdescriptor/init(samplecount:)](https://developer.apple.com/documentation/metal/mtlrasterizationratelayerdescriptor/init(samplecount:))

# init(sampleCount:) (Swift)

**Framework:** Metal  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

Initializes the layer map with an empty grid.

## Declaration

```swift
init(sampleCount: MTLSize)
```

## Parameters

- `sampleCount`: The size of the grid. Specify the width and height to determine the number of columns and rows in the layer map. The initializer ignores the depth component.

<a id="return-value"></a>

## Return Value

A layer descriptor with a grid of the specified size. All of the rasterization rates are set to `0.0`.

## See Also

### Creating a layer rasterization rate descriptor

- [init(horizontal:vertical:)](init%28horizontal_vertical_%29.md): Initializes a layer rate map with a set of horizontal and vertical rasterization rates.

# initWithSampleCount: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

Initializes the layer map with an empty grid.

## Declaration

```objectivec
- (instancetype) initWithSampleCount:(MTLSize) sampleCount;
```

## Parameters

- `sampleCount`: The size of the grid. Specify the width and height to determine the number of columns and rows in the layer map. The initializer ignores the depth component.

<a id="return-value"></a>

## Return Value

A layer descriptor with a grid of the specified size. All of the rasterization rates are set to `0.0`.

## See Also

### Creating a layer rasterization rate descriptor

- [initWithSampleCount:horizontal:vertical:](initwithsamplecount_horizontal_vertical_.md): Initializes the layer map with the provided grid size and rasterization rates.
