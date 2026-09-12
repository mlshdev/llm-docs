> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4accelerationstructuremotiontrianglegeometrydescriptor/trianglecount](https://developer.apple.com/documentation/metal/mtl4accelerationstructuremotiontrianglegeometrydescriptor/trianglecount)

# triangleCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Declares the number of triangles in the vertex buffers that the buffer in the vertex buffers property references.

## Declaration

```swift
var triangleCount: Int { get set }
```

<a id="discussion"></a>

## Discussion

All keyframes share the same triangle count.

# triangleCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Declares the number of triangles in the vertex buffers that the buffer in the vertex buffers property references.

## Declaration

```objectivec
@property (nonatomic) NSUInteger triangleCount;
```

<a id="discussion"></a>

## Discussion

All keyframes share the same triangle count.
