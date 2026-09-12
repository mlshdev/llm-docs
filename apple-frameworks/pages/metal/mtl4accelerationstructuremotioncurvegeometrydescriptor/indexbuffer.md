> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4accelerationstructuremotioncurvegeometrydescriptor/indexbuffer](https://developer.apple.com/documentation/metal/mtl4accelerationstructuremotioncurvegeometrydescriptor/indexbuffer)

# indexBuffer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns an optional index buffer containing references to control points in the control point buffers.

## Declaration

```swift
var indexBuffer: MTL4BufferRange { get set }
```

<a id="discussion"></a>

## Discussion

All keyframes share the same index buffer, with each index representing the first control point of a curve segment.

You are responsible for ensuring the buffer address of the range is not zero.

# indexBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns an optional index buffer containing references to control points in the control point buffers.

## Declaration

```objectivec
@property (nonatomic) MTL4BufferRange indexBuffer;
```

<a id="discussion"></a>

## Discussion

All keyframes share the same index buffer, with each index representing the first control point of a curve segment.

You are responsible for ensuring the buffer address of the range is not zero.
