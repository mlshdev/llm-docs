> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/setfrontfacing(_:)](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/setfrontfacing(_:))

# setFrontFacing(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the vertex winding order that determines which face of a geometric primitive is the front one.

## Declaration

```swift
func setFrontFacing(_ frontFacingWinding: MTLWinding)
```

## Parameters

- `frontFacingWinding`: A [MTLWinding](../mtlwinding.md) value that determines which side of a primitive the render pipeline interprets as front facing.

## See Also

### Configuring rendering behavior

- [setTriangleFillMode(\_:)](settrianglefillmode%28__%29.md): Configures how subsequent draw commands rasterize triangle and triangle strip primitives.
- [setCullMode(\_:)](setcullmode%28__%29.md): Controls whether Metal culls front facing primitives, back facing primitives, or culls no primitives at all.

# setFrontFacingWinding: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the vertex winding order that determines which face of a geometric primitive is the front one.

## Declaration

```objectivec
- (void) setFrontFacingWinding:(MTLWinding) frontFacingWinding;
```

## Parameters

- `frontFacingWinding`: A [MTLWinding](../mtlwinding.md) value that determines which side of a primitive the render pipeline interprets as front facing.

## See Also

### Configuring rendering behavior

- [setTriangleFillMode:](settrianglefillmode%28__%29.md): Configures how subsequent draw commands rasterize triangle and triangle strip primitives.
- [setCullMode:](setcullmode%28__%29.md): Controls whether Metal culls front facing primitives, back facing primitives, or culls no primitives at all.
