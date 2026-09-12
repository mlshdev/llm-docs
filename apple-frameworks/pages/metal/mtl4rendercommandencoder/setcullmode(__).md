> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/setcullmode(_:)](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/setcullmode(_:))

# setCullMode(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Controls whether Metal culls front facing primitives, back facing primitives, or culls no primitives at all.

## Declaration

```swift
func setCullMode(_ cullMode: MTLCullMode)
```

## Parameters

- `cullMode`: [MTLCullMode](../mtlcullmode.md) to set.

## See Also

### Configuring rendering behavior

- [setTriangleFillMode(\_:)](settrianglefillmode%28__%29.md): Configures how subsequent draw commands rasterize triangle and triangle strip primitives.
- [setFrontFacing(\_:)](setfrontfacing%28__%29.md): Configures the vertex winding order that determines which face of a geometric primitive is the front one.

# setCullMode: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Controls whether Metal culls front facing primitives, back facing primitives, or culls no primitives at all.

## Declaration

```objectivec
- (void) setCullMode:(MTLCullMode) cullMode;
```

## Parameters

- `cullMode`: [MTLCullMode](../mtlcullmode.md) to set.

## See Also

### Configuring rendering behavior

- [setTriangleFillMode:](settrianglefillmode%28__%29.md): Configures how subsequent draw commands rasterize triangle and triangle strip primitives.
- [setFrontFacingWinding:](setfrontfacing%28__%29.md): Configures the vertex winding order that determines which face of a geometric primitive is the front one.
