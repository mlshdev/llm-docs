> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4accelerationstructuremotiontrianglegeometrydescriptor/transformationmatrixbuffer](https://developer.apple.com/documentation/metal/mtl4accelerationstructuremotiontrianglegeometrydescriptor/transformationmatrixbuffer)

# transformationMatrixBuffer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assings an optional reference to a buffer containing a `float4x3` transformation matrix.

## Declaration

```swift
var transformationMatrixBuffer: MTL4BufferRange { get set }
```

<a id="discussion"></a>

## Discussion

When the buffer address is non-zero, Metal applies this transform to the vertex data positions when building the acceleration structure. All keyframes share the same transformation matrix.

Building an acceleration structure with a descriptor that specifies this property doesn’t modify the contents of the input `vertexBuffer`.

# transformationMatrixBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assings an optional reference to a buffer containing a `float4x3` transformation matrix.

## Declaration

```objectivec
@property (nonatomic) MTL4BufferRange transformationMatrixBuffer;
```

<a id="discussion"></a>

## Discussion

When the buffer address is non-zero, Metal applies this transform to the vertex data positions when building the acceleration structure. All keyframes share the same transformation matrix.

Building an acceleration structure with a descriptor that specifies this property doesn’t modify the contents of the input `vertexBuffer`.
