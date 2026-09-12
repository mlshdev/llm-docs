> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrasterizationratelayerdescriptor/init(horizontal:vertical:)](https://developer.apple.com/documentation/metal/mtlrasterizationratelayerdescriptor/init(horizontal:vertical:))

# init(horizontal:vertical:)

**Framework:** Metal  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS

Initializes a layer rate map with a set of horizontal and vertical rasterization rates.

## Declaration

```swift
convenience init(horizontal: [Float], vertical: [Float])
```

## Parameters

- `horizontal`: An array of the horizontal rates to apply across the grid.
- `vertical`: An array of the vertical rates to apply across the grid.

<a id="return-value"></a>

## Return Value

A layer descriptor whose width is the number of horizontal rates and whose height is the number of vertical rates. The layer descriptor copies the values from the input parameters.

## See Also

### Creating a layer rasterization rate descriptor

- [init(sampleCount:)](init%28samplecount_%29.md): Initializes the layer map with an empty grid.
