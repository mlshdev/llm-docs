> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlregionmake2d(_:_:_:_:)](https://developer.apple.com/documentation/metal/mtlregionmake2d(_:_:_:_:))

# MTLRegionMake2D(\_:\_:\_:\_:) (Swift)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a 3D representation of a 2D region.

## Declaration

```swift
func MTLRegionMake2D(_ x: Int, _ y: Int, _ width: Int, _ height: Int) -> MTLRegion
```

## Parameters

- `x`: The x coordinate of the origin.
- `y`: The y coordinate of the origin.
- `width`: The width of the volume.
- `height`: The height of the volume.

<a id="return-value"></a>

## Return Value

A region whose x, y, width, and height values are as specified. The z coordinate of the region’s origin is set to `0`, and the region’s depth is set to `1`.

## See Also

### Creating regions

- [init()](mtlregion/init%28%29.md): Initializes a new region.
- [init(origin:size:)](mtlregion/init%28origin_size_%29.md): Initializes a new region with the specified origin and size.
- [MTLRegionMake1D(\_:\_:)](mtlregionmake1d%28____%29.md): Creates a 3D representation of a 1D region.
- [MTLRegionMake3D(\_:\_:\_:\_:\_:\_:)](mtlregionmake3d%28____________%29.md): Creates a 3D region.

# MTLRegionMake2D (Objective-C)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a 3D representation of a 2D region.

## Declaration

```objectivec
static MTLRegion MTLRegionMake2D(NSUInteger x, NSUInteger y, NSUInteger width, NSUInteger height);
```

## Parameters

- `x`: The x coordinate of the origin.
- `y`: The y coordinate of the origin.
- `width`: The width of the volume.
- `height`: The height of the volume.

<a id="return-value"></a>

## Return Value

A region whose x, y, width, and height values are as specified. The z coordinate of the region’s origin is set to `0`, and the region’s depth is set to `1`.

## See Also

### Creating regions

- [MTLRegionMake1D](mtlregionmake1d%28____%29.md): Creates a 3D representation of a 1D region.
- [MTLRegionMake3D](mtlregionmake3d%28____________%29.md): Creates a 3D region.
