> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4accelerationstructuretrianglegeometrydescriptor/vertexstride

# vertexStride (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the stride, in bytes, between vertices in the vertex buffer.

## Declaration

```swift
var vertexStride: Int { get set }
```

<a id="discussion"></a>

## Discussion

The stride you specify needs to be a multiple of the size of the vertex format you provide in the [vertexFormat](vertexformat.md) property. Similarly, you are responsible for ensuring this stride matches the vertex format data type’s alignment.

Defaults to `0`, which signals the stride matches the size of the [vertexFormat](vertexformat.md) data.

# vertexStride (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the stride, in bytes, between vertices in the vertex buffer.

## Declaration

```objectivec
@property (nonatomic) NSUInteger vertexStride;
```

<a id="discussion"></a>

## Discussion

The stride you specify needs to be a multiple of the size of the vertex format you provide in the [vertexFormat](vertexformat.md) property. Similarly, you are responsible for ensuring this stride matches the vertex format data type’s alignment.

Defaults to `0`, which signals the stride matches the size of the [vertexFormat](vertexformat.md) data.
