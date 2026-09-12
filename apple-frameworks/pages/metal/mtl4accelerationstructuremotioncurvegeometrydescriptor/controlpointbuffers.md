> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4accelerationstructuremotioncurvegeometrydescriptor/controlpointbuffers](https://developer.apple.com/documentation/metal/mtl4accelerationstructuremotioncurvegeometrydescriptor/controlpointbuffers)

# controlPointBuffers (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns a reference to a buffer where each entry contains a reference to a buffer of control points.

## Declaration

```swift
var controlPointBuffers: MTL4BufferRange { get set }
```

<a id="discussion"></a>

## Discussion

This property references a buffer that conceptually represents an array with one entry for each keyframe in the motion animation. Each one of these entries consists of a [MTL4BufferRange](../mtl4bufferrange.md) that, in turn, references a buffer containing the control points corresponding to the keyframe.

You are responsible for ensuring the buffer address is not zero for the top-level buffer, as well as for all the vertex buffers it references.

# controlPointBuffers (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns a reference to a buffer where each entry contains a reference to a buffer of control points.

## Declaration

```objectivec
@property (nonatomic) MTL4BufferRange controlPointBuffers;
```

<a id="discussion"></a>

## Discussion

This property references a buffer that conceptually represents an array with one entry for each keyframe in the motion animation. Each one of these entries consists of a [MTL4BufferRange](../mtl4bufferrange.md) that, in turn, references a buffer containing the control points corresponding to the keyframe.

You are responsible for ensuring the buffer address is not zero for the top-level buffer, as well as for all the vertex buffers it references.
