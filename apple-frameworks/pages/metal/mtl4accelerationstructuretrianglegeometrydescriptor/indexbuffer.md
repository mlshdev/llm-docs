> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4accelerationstructuretrianglegeometrydescriptor/indexbuffer

# indexBuffer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets an optional index buffer containing references to vertices in the `vertexBuffer`.

## Declaration

```swift
var indexBuffer: MTL4BufferRange { get set }
```

<a id="discussion"></a>

## Discussion

You can set this property to `0`, the default, to avoid specifying an index buffer.

# indexBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets an optional index buffer containing references to vertices in the `vertexBuffer`.

## Declaration

```objectivec
@property (nonatomic) MTL4BufferRange indexBuffer;
```

<a id="discussion"></a>

## Discussion

You can set this property to `0`, the default, to avoid specifying an index buffer.
