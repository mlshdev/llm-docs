> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setfrontfacing(_:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setfrontfacing(_:))

# setFrontFacing(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Configures which face of a primitive, such as a triangle, is the front.

## Declaration

```swift
func setFrontFacing(_ frontFacingWinding: MTLWinding)
```

## Parameters

- `frontFacingWinding`: An [MTLWinding](../mtlwinding.md) value that configures how the render pipeline defines which side of a primitive is its front.

<a id="discussion"></a>

## Discussion

The render pass’s default front-facing mode is [MTLWinding.clockwise](../mtlwinding/clockwise.md).

The winding direction of a primitive determines whether the render pass culls it (see [setCullMode(\_:)](setcullmode%28__%29.md)).

## See Also

### Configuring rendering behavior

- [setTriangleFillMode(\_:)](settrianglefillmode%28__%29.md): Configures how subsequent draw commands rasterize triangle and triangle strip primitives.
- [setCullMode(\_:)](setcullmode%28__%29.md): Configures how the render pipeline determines which primitives to remove.

# setFrontFacingWinding: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Configures which face of a primitive, such as a triangle, is the front.

## Declaration

```objectivec
- (void) setFrontFacingWinding:(MTLWinding) frontFacingWinding;
```

## Parameters

- `frontFacingWinding`: An [MTLWinding](../mtlwinding.md) value that configures how the render pipeline defines which side of a primitive is its front.

<a id="discussion"></a>

## Discussion

The render pass’s default front-facing mode is [MTLWindingClockwise](../mtlwinding/clockwise.md).

The winding direction of a primitive determines whether the render pass culls it (see [setCullMode:](setcullmode%28__%29.md)).

## See Also

### Configuring rendering behavior

- [setTriangleFillMode:](settrianglefillmode%28__%29.md): Configures how subsequent draw commands rasterize triangle and triangle strip primitives.
- [setCullMode:](setcullmode%28__%29.md): Configures how the render pipeline determines which primitives to remove.
