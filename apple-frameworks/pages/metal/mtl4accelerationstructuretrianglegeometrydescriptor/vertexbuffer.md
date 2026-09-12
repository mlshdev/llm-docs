> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4accelerationstructuretrianglegeometrydescriptor/vertexbuffer](https://developer.apple.com/documentation/metal/mtl4accelerationstructuretrianglegeometrydescriptor/vertexbuffer)

# vertexBuffer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Associates a vertex buffer containing triangle vertices.

## Declaration

```swift
var vertexBuffer: MTL4BufferRange { get set }
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring that the format of all vertex positions match the [vertexFormat](vertexformat.md) property, and that the buffer address for the buffer range is not zero.

# vertexBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Associates a vertex buffer containing triangle vertices.

## Declaration

```objectivec
@property (nonatomic) MTL4BufferRange vertexBuffer;
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring that the format of all vertex positions match the [vertexFormat](vertexformat.md) property, and that the buffer address for the buffer range is not zero.
