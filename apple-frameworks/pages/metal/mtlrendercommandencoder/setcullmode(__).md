> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setcullmode(_:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setcullmode(_:))

# setCullMode(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Configures how the render pipeline determines which primitives to remove.

## Declaration

```swift
func setCullMode(_ cullMode: MTLCullMode)
```

## Parameters

- `cullMode`: An [MTLCullMode](../mtlcullmode.md) value that configures how the render pipeline determines which primitives to remove from the pipeline.

<a id="discussion"></a>

## Discussion

This method configures which primitives the render pipeline removes, if any, based on the direction of each primitive’s face relative to the scene’s camera. For example, you can correctly cull hidden surfaces on some geometric models, such as a sphere made of filled triangles, if it uses orientable surfaces. A surface is *orientable* if its primitives consistently use the same ordering for its vertices. Metal defines vertex ordering with the [MTLWinding](../mtlwinding.md) type, which includes [MTLWinding.clockwise](../mtlwinding/clockwise.md) and [MTLWinding.counterClockwise](../mtlwinding/counterclockwise.md). You can tell the render pipeline which direction your primitives face by calling the [setFrontFacing(\_:)](setfrontfacing%28__%29.md) method, which affects the primitives the culling mode removes.

The render pass’s default culling mode is [MTLCullMode.none](../mtlcullmode/none.md).

## See Also

### Configuring rendering behavior

- [setTriangleFillMode(\_:)](settrianglefillmode%28__%29.md): Configures how subsequent draw commands rasterize triangle and triangle strip primitives.
- [setFrontFacing(\_:)](setfrontfacing%28__%29.md): Configures which face of a primitive, such as a triangle, is the front.

# setCullMode: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Configures how the render pipeline determines which primitives to remove.

## Declaration

```objectivec
- (void) setCullMode:(MTLCullMode) cullMode;
```

## Parameters

- `cullMode`: An [MTLCullMode](../mtlcullmode.md) value that configures how the render pipeline determines which primitives to remove from the pipeline.

<a id="discussion"></a>

## Discussion

This method configures which primitives the render pipeline removes, if any, based on the direction of each primitive’s face relative to the scene’s camera. For example, you can correctly cull hidden surfaces on some geometric models, such as a sphere made of filled triangles, if it uses orientable surfaces. A surface is *orientable* if its primitives consistently use the same ordering for its vertices. Metal defines vertex ordering with the [MTLWinding](../mtlwinding.md) type, which includes [MTLWindingClockwise](../mtlwinding/clockwise.md) and [MTLWindingCounterClockwise](../mtlwinding/counterclockwise.md). You can tell the render pipeline which direction your primitives face by calling the [setFrontFacingWinding:](setfrontfacing%28__%29.md) method, which affects the primitives the culling mode removes.

The render pass’s default culling mode is [MTLCullModeNone](../mtlcullmode/none.md).

## See Also

### Configuring rendering behavior

- [setTriangleFillMode:](settrianglefillmode%28__%29.md): Configures how subsequent draw commands rasterize triangle and triangle strip primitives.
- [setFrontFacingWinding:](setfrontfacing%28__%29.md): Configures which face of a primitive, such as a triangle, is the front.
