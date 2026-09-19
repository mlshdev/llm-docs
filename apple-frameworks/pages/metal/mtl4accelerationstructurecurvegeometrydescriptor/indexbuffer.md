> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4accelerationstructurecurvegeometrydescriptor/indexbuffer

# indexBuffer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns an optional index buffer containing references to control points in the control point buffer.

## Declaration

```swift
var indexBuffer: MTL4BufferRange { get set }
```

<a id="discussion"></a>

## Discussion

Each index represents the first control point of a curve segment. You are responsible for ensuring the buffer address of the range is not zero.

# indexBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns an optional index buffer containing references to control points in the control point buffer.

## Declaration

```objectivec
@property (nonatomic) MTL4BufferRange indexBuffer;
```

<a id="discussion"></a>

## Discussion

Each index represents the first control point of a curve segment. You are responsible for ensuring the buffer address of the range is not zero.
