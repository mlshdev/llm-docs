> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkpath/float2(at:)](https://developer.apple.com/documentation/gameplaykit/gkpath/float2(at:))

# float2(at:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Returns the 2D point at the specified index in the path’s list of vertices.

## Declaration

```swift
func float2(at index: Int) -> vector_float2
```

## Parameters

- `index`: The index of the vertex to return, between `0` and the [numPoints](numpoints.md) value.

<a id="return-value"></a>

## Return Value

The vertex at the specified index.

<a id="Discussion"></a>

## Discussion

You define a path’s vertices when creating it, either directly with the [initWithFloat3Points:count:radius:cyclical:](initwithfloat3points_count_radius_cyclical_.md) initializer or indirectly with the [init(graphNodes:radius:)](init%28graphnodes_radius_%29.md) initializer.

If the path is a 3D path, this method is still functional but returns only 2D vectors, ignoring the z-component of each point on the path.

## See Also

### Inspecting a Path’s Shape

- [numPoints](numpoints.md): The number of vertices in the path.
- [float3(at:)](float3%28at_%29.md): Returns the 3D point at the specified index in the path’s list of vertices.
- [point(at:)](point%28at_%29.md): Deprecated. Returns the 2D point at the specified index in the path’s list of vertices.

# float2AtIndex: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Returns the 2D point at the specified index in the path’s list of vertices.

## Declaration

```objectivec
- (vector_float2) float2AtIndex:(NSUInteger) index;
```

## Parameters

- `index`: The index of the vertex to return, between `0` and the [numPoints](numpoints.md) value.

<a id="return-value"></a>

## Return Value

The vertex at the specified index.

<a id="Discussion"></a>

## Discussion

You define a path’s vertices when creating it, either directly with the [initWithFloat3Points:count:radius:cyclical:](initwithfloat3points_count_radius_cyclical_.md) initializer or indirectly with the [initWithGraphNodes:radius:](init%28graphnodes_radius_%29.md) initializer.

If the path is a 3D path, this method is still functional but returns only 2D vectors, ignoring the z-component of each point on the path.

## See Also

### Inspecting a Path’s Shape

- [numPoints](numpoints.md): The number of vertices in the path.
- [float3AtIndex:](float3%28at_%29.md): Returns the 3D point at the specified index in the path’s list of vertices.
- [pointAtIndex:](point%28at_%29.md): Deprecated. Returns the 2D point at the specified index in the path’s list of vertices.
