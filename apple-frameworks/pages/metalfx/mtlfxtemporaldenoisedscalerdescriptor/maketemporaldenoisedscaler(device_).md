> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxtemporaldenoisedscalerdescriptor/maketemporaldenoisedscaler(device:)](https://developer.apple.com/documentation/metalfx/mtlfxtemporaldenoisedscalerdescriptor/maketemporaldenoisedscaler(device:))

# makeTemporalDenoisedScaler(device:) (Swift)

**Framework:** MetalFX  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · tvOS 18.0+

Creates a denoiser scaler instance for a Metal device.

## Declaration

```swift
func makeTemporalDenoisedScaler(device: any MTLDevice) -> (any MTLFXTemporalDenoisedScaler)?
```

## Parameters

- `device`: The Metal device that creates the denoiser scaler.

<a id="return-value"></a>

## Return Value

 A denoiser scaler instance upon success, or `nil` otherwise.

# newTemporalDenoisedScalerWithDevice: (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · tvOS 18.0+

Creates a denoiser scaler instance for a Metal device.

## Declaration

```objectivec
- (id<MTLFXTemporalDenoisedScaler>) newTemporalDenoisedScalerWithDevice:(id<MTLDevice>) device;
```

## Parameters

- `device`: The Metal device that creates the denoiser scaler.

<a id="return-value"></a>

## Return Value

 A denoiser scaler instance upon success, or `nil` otherwise.
