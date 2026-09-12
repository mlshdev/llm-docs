> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxtemporalscalerdescriptor/maketemporalscaler(device:)](https://developer.apple.com/documentation/metalfx/mtlfxtemporalscalerdescriptor/maketemporalscaler(device:))

# makeTemporalScaler(device:) (Swift)

**Framework:** MetalFX  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+

Creates a temporal scaler instance from this descriptor’s current property values.

## Declaration

```swift
func makeTemporalScaler(device: any MTLDevice) -> (any MTLFXTemporalScaler)?
```

## Parameters

- `device`: An [MTLDevice](../../metal/mtldevice.md) instance that represents the GPU that applies the temporal scaling effect.

# newTemporalScalerWithDevice: (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+

Creates a temporal scaler instance from this descriptor’s current property values.

## Declaration

```objectivec
- (id<MTLFXTemporalScaler>) newTemporalScalerWithDevice:(id<MTLDevice>) device;
```

## Parameters

- `device`: An [MTLDevice](../../metal/mtldevice.md) instance that represents the GPU that applies the temporal scaling effect.
