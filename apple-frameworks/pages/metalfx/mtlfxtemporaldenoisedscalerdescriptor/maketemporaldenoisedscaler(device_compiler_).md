> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxtemporaldenoisedscalerdescriptor/maketemporaldenoisedscaler(device:compiler:)](https://developer.apple.com/documentation/metalfx/mtlfxtemporaldenoisedscalerdescriptor/maketemporaldenoisedscaler(device:compiler:))

# makeTemporalDenoisedScaler(device:compiler:) (Swift)

**Framework:** MetalFX  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · tvOS 18.0+

Creates a denoiser scaler instance for a Metal device.

## Declaration

```swift
func makeTemporalDenoisedScaler(device: any MTLDevice, compiler: any MTL4Compiler) -> (any MTL4FXTemporalDenoisedScaler)?
```

## Parameters

- `device`: The Metal device that creates the denoiser scaler.
- `compiler`: A compiler instance this method can use to build pipeline state objects.

<a id="return-value"></a>

## Return Value

 A denoiser scaler instance upon success, or `nil` otherwise.

# newTemporalDenoisedScalerWithDevice:compiler: (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · tvOS 18.0+

Creates a denoiser scaler instance for a Metal device.

## Declaration

```objectivec
- (id<MTL4FXTemporalDenoisedScaler>) newTemporalDenoisedScalerWithDevice:(id<MTLDevice>) device compiler:(id<MTL4Compiler>) compiler;
```

## Parameters

- `device`: The Metal device that creates the denoiser scaler.
- `compiler`: A compiler instance this method can use to build pipeline state objects.

<a id="return-value"></a>

## Return Value

 A denoiser scaler instance upon success, or `nil` otherwise.
