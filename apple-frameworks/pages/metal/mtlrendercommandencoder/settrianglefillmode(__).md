> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/settrianglefillmode(_:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/settrianglefillmode(_:))

# setTriangleFillMode(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Configures how subsequent draw commands rasterize triangle and triangle strip primitives.

## Declaration

```swift
func setTriangleFillMode(_ fillMode: MTLTriangleFillMode)
```

## Parameters

- `fillMode`: A triangle filling mode the render pass applies to draw commands that rasterize triangles or triangle strips.

<a id="discussion"></a>

## Discussion

The render pass’s default mode is [MTLTriangleFillMode.fill](../mtltrianglefillmode/fill.md).

## See Also

### Configuring rendering behavior

- [setFrontFacing(\_:)](setfrontfacing%28__%29.md): Configures which face of a primitive, such as a triangle, is the front.
- [setCullMode(\_:)](setcullmode%28__%29.md): Configures how the render pipeline determines which primitives to remove.

# setTriangleFillMode: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Configures how subsequent draw commands rasterize triangle and triangle strip primitives.

## Declaration

```objectivec
- (void) setTriangleFillMode:(MTLTriangleFillMode) fillMode;
```

## Parameters

- `fillMode`: A triangle filling mode the render pass applies to draw commands that rasterize triangles or triangle strips.

<a id="discussion"></a>

## Discussion

The render pass’s default mode is [MTLTriangleFillModeFill](../mtltrianglefillmode/fill.md).

## See Also

### Configuring rendering behavior

- [setFrontFacingWinding:](setfrontfacing%28__%29.md): Configures which face of a primitive, such as a triangle, is the front.
- [setCullMode:](setcullmode%28__%29.md): Configures how the render pipeline determines which primitives to remove.
