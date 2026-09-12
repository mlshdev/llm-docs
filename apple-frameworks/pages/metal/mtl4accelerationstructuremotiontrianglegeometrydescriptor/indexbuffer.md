> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4accelerationstructuremotiontrianglegeometrydescriptor/indexbuffer](https://developer.apple.com/documentation/metal/mtl4accelerationstructuremotiontrianglegeometrydescriptor/indexbuffer)

# indexBuffer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns an optional index buffer containing references to vertices in the vertex buffers you reference through the vertex buffers property.

## Declaration

```swift
var indexBuffer: MTL4BufferRange { get set }
```

<a id="discussion"></a>

## Discussion

You can set this property to `0`, the default, to avoid specifying an index buffer. All keyframes share the same index buffer.

# indexBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns an optional index buffer containing references to vertices in the vertex buffers you reference through the vertex buffers property.

## Declaration

```objectivec
@property (nonatomic) MTL4BufferRange indexBuffer;
```

<a id="discussion"></a>

## Discussion

You can set this property to `0`, the default, to avoid specifying an index buffer. All keyframes share the same index buffer.
