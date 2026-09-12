> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkpath/numpoints](https://developer.apple.com/documentation/gameplaykit/gkpath/numpoints)

# numPoints (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of vertices in the path.

## Declaration

```swift
var numPoints: Int { get }
```

<a id="Discussion"></a>

## Discussion

You define a path’s vertices when creating it, either directly with the [initWithPoints:count:radius:cyclical:](initwithpoints_count_radius_cyclical_.md) initializer or indirectly with the [init(graphNodes:radius:)](init%28graphnodes_radius_%29.md) initializer.

## See Also

### Inspecting a Path’s Shape

- [float2(at:)](float2%28at_%29.md): Returns the 2D point at the specified index in the path’s list of vertices.
- [float3(at:)](float3%28at_%29.md): Returns the 3D point at the specified index in the path’s list of vertices.
- [point(at:)](point%28at_%29.md): Deprecated. Returns the 2D point at the specified index in the path’s list of vertices.

# numPoints (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of vertices in the path.

## Declaration

```objectivec
@property (readonly) NSUInteger numPoints;
```

<a id="Discussion"></a>

## Discussion

You define a path’s vertices when creating it, either directly with the [initWithPoints:count:radius:cyclical:](initwithpoints_count_radius_cyclical_.md) initializer or indirectly with the [initWithGraphNodes:radius:](init%28graphnodes_radius_%29.md) initializer.

## See Also

### Inspecting a Path’s Shape

- [float2AtIndex:](float2%28at_%29.md): Returns the 2D point at the specified index in the path’s list of vertices.
- [float3AtIndex:](float3%28at_%29.md): Returns the 3D point at the specified index in the path’s list of vertices.
- [pointAtIndex:](point%28at_%29.md): Deprecated. Returns the 2D point at the specified index in the path’s list of vertices.
