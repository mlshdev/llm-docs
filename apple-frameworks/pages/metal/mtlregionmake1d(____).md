> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlregionmake1d(_:_:)](https://developer.apple.com/documentation/metal/mtlregionmake1d(_:_:))

# MTLRegionMake1D(\_:\_:) (Swift)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a 3D representation of a 1D region.

## Declaration

```swift
func MTLRegionMake1D(_ x: Int, _ width: Int) -> MTLRegion
```

## Parameters

- `x`: The x coordinate of the origin.
- `width`: The width of the volume.

<a id="return-value"></a>

## Return Value

A region whose x and width values are as specified.  The y and z coordinates of the region’s origin are set to `0`, and the region’s height and depth are set to `1.`

## See Also

### Creating regions

- [init()](mtlregion/init%28%29.md): Initializes a new region.
- [init(origin:size:)](mtlregion/init%28origin_size_%29.md): Initializes a new region with the specified origin and size.
- [MTLRegionMake2D(\_:\_:\_:\_:)](mtlregionmake2d%28________%29.md): Creates a 3D representation of a 2D region.
- [MTLRegionMake3D(\_:\_:\_:\_:\_:\_:)](mtlregionmake3d%28____________%29.md): Creates a 3D region.

# MTLRegionMake1D (Objective-C)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a 3D representation of a 1D region.

## Declaration

```objectivec
static MTLRegion MTLRegionMake1D(NSUInteger x, NSUInteger width);
```

## Parameters

- `x`: The x coordinate of the origin.
- `width`: The width of the volume.

<a id="return-value"></a>

## Return Value

A region whose x and width values are as specified.  The y and z coordinates of the region’s origin are set to `0`, and the region’s height and depth are set to `1.`

## See Also

### Creating regions

- [MTLRegionMake2D](mtlregionmake2d%28________%29.md): Creates a 3D representation of a 2D region.
- [MTLRegionMake3D](mtlregionmake3d%28____________%29.md): Creates a 3D region.
