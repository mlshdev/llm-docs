> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructuremotiontrianglegeometrydescriptor/vertexbuffers](https://developer.apple.com/documentation/metal/mtlaccelerationstructuremotiontrianglegeometrydescriptor/vertexbuffers)

# vertexBuffers (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

An array of motion keyframes, each containing triangle data.

## Declaration

```swift
var vertexBuffers: [MTLMotionKeyframeData] { get set }
```

## See Also

### Specifying vertex data

- [vertexStride](vertexstride.md): The stride, in bytes, between vertices in each vertex buffer.

# vertexBuffers (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

An array of motion keyframes, each containing triangle data.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<MTLMotionKeyframeData *> * vertexBuffers;
```

## See Also

### Specifying vertex data

- [vertexStride](vertexstride.md): The stride, in bytes, between vertices in each vertex buffer.
