> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/settessellationfactorscale(_:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/settessellationfactorscale(_:))

# setTessellationFactorScale(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Configures the scale factor for per-patch tessellation factors.

## Declaration

```swift
func setTessellationFactorScale(_ scale: Float)
```

## Parameters

- `scale`: A positive, normal floating-point scale factor the render pass applies to the per-patch tessellation factors.

  The value of `scale` can’t be negative, infinite, equal to `NaN` (not a number), or a denormalized number.

<a id="discussion"></a>

## Discussion

The command converts `scale` to a half-precision floating-point value before it applies it to the per-patch tessellation factors (see [setTessellationFactorBuffer(\_:offset:instanceStride:)](settessellationfactorbuffer%28__offset_instancestride_%29.md)).

## See Also

### Configuring tessellation factors

- [setTessellationFactorBuffer(\_:offset:instanceStride:)](settessellationfactorbuffer%28__offset_instancestride_%29.md): Configures the per-patch tessellation factors for any subsequent patch-drawing commands.

# setTessellationFactorScale: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Configures the scale factor for per-patch tessellation factors.

## Declaration

```objectivec
- (void) setTessellationFactorScale:(float) scale;
```

## Parameters

- `scale`: A positive, normal floating-point scale factor the render pass applies to the per-patch tessellation factors.

  The value of `scale` can’t be negative, infinite, equal to `NaN` (not a number), or a denormalized number.

<a id="discussion"></a>

## Discussion

The command converts `scale` to a half-precision floating-point value before it applies it to the per-patch tessellation factors (see [setTessellationFactorBuffer:offset:instanceStride:](settessellationfactorbuffer%28__offset_instancestride_%29.md)).

## See Also

### Configuring tessellation factors

- [setTessellationFactorBuffer:offset:instanceStride:](settessellationfactorbuffer%28__offset_instancestride_%29.md): Configures the per-patch tessellation factors for any subsequent patch-drawing commands.
