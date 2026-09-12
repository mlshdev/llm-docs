> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/settrianglefillmode(_:)](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/settrianglefillmode(_:))

# setTriangleFillMode(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures how subsequent draw commands rasterize triangle and triangle strip primitives.

## Declaration

```swift
func setTriangleFillMode(_ fillMode: MTLTriangleFillMode)
```

## Parameters

- `fillMode`: [MTLTriangleFillMode](../mtltrianglefillmode.md) the render pass applies to draw commands that rasterize triangles or triangle strips.

## See Also

### Configuring rendering behavior

- [setFrontFacing(\_:)](setfrontfacing%28__%29.md): Configures the vertex winding order that determines which face of a geometric primitive is the front one.
- [setCullMode(\_:)](setcullmode%28__%29.md): Controls whether Metal culls front facing primitives, back facing primitives, or culls no primitives at all.

# setTriangleFillMode: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures how subsequent draw commands rasterize triangle and triangle strip primitives.

## Declaration

```objectivec
- (void) setTriangleFillMode:(MTLTriangleFillMode) fillMode;
```

## Parameters

- `fillMode`: [MTLTriangleFillMode](../mtltrianglefillmode.md) the render pass applies to draw commands that rasterize triangles or triangle strips.

## See Also

### Configuring rendering behavior

- [setFrontFacingWinding:](setfrontfacing%28__%29.md): Configures the vertex winding order that determines which face of a geometric primitive is the front one.
- [setCullMode:](setcullmode%28__%29.md): Controls whether Metal culls front facing primitives, back facing primitives, or culls no primitives at all.
