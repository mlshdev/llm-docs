> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalfx/mtlfxframeinterpolatordescriptor/makeframeinterpolator(device:)

# makeFrameInterpolator(device:) (Swift)

**Framework:** MetalFX  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Creates a frame interpolator instance for a Metal device.

## Declaration

```swift
func makeFrameInterpolator(device: any MTLDevice) -> (any MTLFXFrameInterpolator)?
```

## Parameters

- `device`: The Metal device that creates the frame interpolator.

<a id="return-value"></a>

## Return Value

 A new frame interpolator instance upon success, or `nil` otherwise.

# newFrameInterpolatorWithDevice: (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Creates a frame interpolator instance for a Metal device.

## Declaration

```objectivec
- (id<MTLFXFrameInterpolator>) newFrameInterpolatorWithDevice:(id<MTLDevice>) device;
```

## Parameters

- `device`: The Metal device that creates the frame interpolator.

<a id="return-value"></a>

## Return Value

 A new frame interpolator instance upon success, or `nil` otherwise.
