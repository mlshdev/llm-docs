> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4accelerationstructurecurvegeometrydescriptor/controlpointbuffer](https://developer.apple.com/documentation/metal/mtl4accelerationstructurecurvegeometrydescriptor/controlpointbuffer)

# controlPointBuffer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

References a buffer containing curve control points.

## Declaration

```swift
var controlPointBuffer: MTL4BufferRange { get set }
```

<a id="discussion"></a>

## Discussion

Control points are interpolated according to the basis function you specify in [curveBasis](curvebasis.md).

You are responsible for ensuring each control is in a format matching the control point format [controlPointFormat](controlpointformat.md) specifies, as well as ensuring that the buffer address of the range is not zero.

# controlPointBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

References a buffer containing curve control points.

## Declaration

```objectivec
@property (nonatomic) MTL4BufferRange controlPointBuffer;
```

<a id="discussion"></a>

## Discussion

Control points are interpolated according to the basis function you specify in [curveBasis](curvebasis.md).

You are responsible for ensuring each control is in a format matching the control point format [controlPointFormat](controlpointformat.md) specifies, as well as ensuring that the buffer address of the range is not zero.
