> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4accelerationstructuremotioncurvegeometrydescriptor/radiusbuffers](https://developer.apple.com/documentation/metal/mtl4accelerationstructuremotioncurvegeometrydescriptor/radiusbuffers)

# radiusBuffers (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns a reference to a buffer containing, in turn, references to curve radii buffers.

## Declaration

```swift
var radiusBuffers: MTL4BufferRange { get set }
```

<a id="discussion"></a>

## Discussion

This property references a buffer that conceptually represents an array with one entry for each keyframe in the motion animation. Each one of these entries consists of a [MTL4BufferRange](../mtl4bufferrange.md) that, in turn, references a buffer containing the radii corresponding to the keyframe.

Metal interpolates curve radii according to the basis function you specify via [curveBasis](curvebasis.md).

You are responsible for ensuring the type of each radius matches the type property [radiusFormat](radiusformat.md) specifies, that each radius is at least zero, and that the buffer address of the top-level buffer, as well as of buffer it references, is not zero.

# radiusBuffers (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns a reference to a buffer containing, in turn, references to curve radii buffers.

## Declaration

```objectivec
@property (nonatomic) MTL4BufferRange radiusBuffers;
```

<a id="discussion"></a>

## Discussion

This property references a buffer that conceptually represents an array with one entry for each keyframe in the motion animation. Each one of these entries consists of a [MTL4BufferRange](../mtl4bufferrange.md) that, in turn, references a buffer containing the radii corresponding to the keyframe.

Metal interpolates curve radii according to the basis function you specify via [curveBasis](curvebasis.md).

You are responsible for ensuring the type of each radius matches the type property [radiusFormat](radiusformat.md) specifies, that each radius is at least zero, and that the buffer address of the top-level buffer, as well as of buffer it references, is not zero.
