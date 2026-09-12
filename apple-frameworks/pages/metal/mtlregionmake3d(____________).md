> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlregionmake3d(_:_:_:_:_:_:)](https://developer.apple.com/documentation/metal/mtlregionmake3d(_:_:_:_:_:_:))

# MTLRegionMake3D(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a 3D region.

## Declaration

```swift
func MTLRegionMake3D(_ x: Int, _ y: Int, _ z: Int, _ width: Int, _ height: Int, _ depth: Int) -> MTLRegion
```

## Parameters

- `x`: The x coordinate of the origin.
- `y`: The y coordinate of the origin.
- `z`: The z coordinate of the origin.
- `width`: The width of the volume.
- `height`: The height of the volume.
- `depth`: The depth of the volume.

<a id="return-value"></a>

## Return Value

A 3D region with the specified values.

## See Also

### Creating regions

- [init()](mtlregion/init%28%29.md): Initializes a new region.
- [init(origin:size:)](mtlregion/init%28origin_size_%29.md): Initializes a new region with the specified origin and size.
- [MTLRegionMake1D(\_:\_:)](mtlregionmake1d%28____%29.md): Creates a 3D representation of a 1D region.
- [MTLRegionMake2D(\_:\_:\_:\_:)](mtlregionmake2d%28________%29.md): Creates a 3D representation of a 2D region.

# MTLRegionMake3D (Objective-C)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a 3D region.

## Declaration

```objectivec
static MTLRegion MTLRegionMake3D(NSUInteger x, NSUInteger y, NSUInteger z, NSUInteger width, NSUInteger height, NSUInteger depth);
```

## Parameters

- `x`: The x coordinate of the origin.
- `y`: The y coordinate of the origin.
- `z`: The z coordinate of the origin.
- `width`: The width of the volume.
- `height`: The height of the volume.
- `depth`: The depth of the volume.

<a id="return-value"></a>

## Return Value

A 3D region with the specified values.

## See Also

### Creating regions

- [MTLRegionMake1D](mtlregionmake1d%28____%29.md): Creates a 3D representation of a 1D region.
- [MTLRegionMake2D](mtlregionmake2d%28________%29.md): Creates a 3D representation of a 2D region.
