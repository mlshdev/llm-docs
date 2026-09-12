> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxframeinterpolatordescriptor/makeframeinterpolator(device:compiler:)](https://developer.apple.com/documentation/metalfx/mtlfxframeinterpolatordescriptor/makeframeinterpolator(device:compiler:))

# makeFrameInterpolator(device:compiler:) (Swift)

**Framework:** MetalFX  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Creates a frame interpolator instance for a Metal device.

## Declaration

```swift
func makeFrameInterpolator(device: any MTLDevice, compiler: any MTL4Compiler) -> (any MTL4FXFrameInterpolator)?
```

## Parameters

- `device`: The Metal device that creates the frame interpolator.
- `compiler`: A compiler instance this method can use to build pipeline state objects.

<a id="return-value"></a>

## Return Value

 A new frame interpolator instance upon success, or `nil` otherwise.

# newFrameInterpolatorWithDevice:compiler: (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Creates a frame interpolator instance for a Metal device.

## Declaration

```objectivec
- (id<MTL4FXFrameInterpolator>) newFrameInterpolatorWithDevice:(id<MTLDevice>) device compiler:(id<MTL4Compiler>) compiler;
```

## Parameters

- `device`: The Metal device that creates the frame interpolator.
- `compiler`: A compiler instance this method can use to build pipeline state objects.

<a id="return-value"></a>

## Return Value

 A new frame interpolator instance upon success, or `nil` otherwise.
