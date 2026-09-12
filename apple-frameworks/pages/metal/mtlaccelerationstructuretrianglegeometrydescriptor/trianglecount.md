> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructuretrianglegeometrydescriptor/trianglecount](https://developer.apple.com/documentation/metal/mtlaccelerationstructuretrianglegeometrydescriptor/trianglecount)

# triangleCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The number of triangles in the buffers.

## Declaration

```swift
var triangleCount: Int { get set }
```

<a id="discussion"></a>

## Discussion

If the triangle descriptor contains an index buffer, then the index buffer needs to provide indices for this many triangles. If the triangle descriptor doesn’t provide an index buffer, then the vertex buffer provides 3 vertices for each triangle.

# triangleCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The number of triangles in the buffers.

## Declaration

```objectivec
@property (nonatomic) NSUInteger triangleCount;
```

<a id="discussion"></a>

## Discussion

If the triangle descriptor contains an index buffer, then the index buffer needs to provide indices for this many triangles. If the triangle descriptor doesn’t provide an index buffer, then the vertex buffer provides 3 vertices for each triangle.
