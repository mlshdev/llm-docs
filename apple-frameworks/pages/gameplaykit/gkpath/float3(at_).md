> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkpath/float3(at:)](https://developer.apple.com/documentation/gameplaykit/gkpath/float3(at:))

# float3(at:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Returns the 3D point at the specified index in the path’s list of vertices.

## Declaration

```swift
func float3(at index: Int) -> vector_float3
```

## Parameters

- `index`: The index of the vertex to return, between `0` and the [numPoints](numpoints.md) value.

<a id="return-value"></a>

## Return Value

The vertex at the specified index.

<a id="Discussion"></a>

## Discussion

You define a path’s vertices when creating it, either directly with the [initWithFloat3Points:count:radius:cyclical:](initwithfloat3points_count_radius_cyclical_.md) initializer or indirectly with the [init(graphNodes:radius:)](init%28graphnodes_radius_%29.md) initializer.

If the path is a 2D path, this method is still functional, but returns 3D vectors whose z-component is always zero.

## See Also

### Inspecting a Path’s Shape

- [numPoints](numpoints.md): The number of vertices in the path.
- [float2(at:)](float2%28at_%29.md): Returns the 2D point at the specified index in the path’s list of vertices.
- [point(at:)](point%28at_%29.md): Deprecated. Returns the 2D point at the specified index in the path’s list of vertices.

# float3AtIndex: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Returns the 3D point at the specified index in the path’s list of vertices.

## Declaration

```objectivec
- (vector_float3) float3AtIndex:(NSUInteger) index;
```

## Parameters

- `index`: The index of the vertex to return, between `0` and the [numPoints](numpoints.md) value.

<a id="return-value"></a>

## Return Value

The vertex at the specified index.

<a id="Discussion"></a>

## Discussion

You define a path’s vertices when creating it, either directly with the [initWithFloat3Points:count:radius:cyclical:](initwithfloat3points_count_radius_cyclical_.md) initializer or indirectly with the [initWithGraphNodes:radius:](init%28graphnodes_radius_%29.md) initializer.

If the path is a 2D path, this method is still functional, but returns 3D vectors whose z-component is always zero.

## See Also

### Inspecting a Path’s Shape

- [numPoints](numpoints.md): The number of vertices in the path.
- [float2AtIndex:](float2%28at_%29.md): Returns the 2D point at the specified index in the path’s list of vertices.
- [pointAtIndex:](point%28at_%29.md): Deprecated. Returns the 2D point at the specified index in the path’s list of vertices.
