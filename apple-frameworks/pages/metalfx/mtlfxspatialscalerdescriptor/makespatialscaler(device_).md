> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxspatialscalerdescriptor/makespatialscaler(device:)](https://developer.apple.com/documentation/metalfx/mtlfxspatialscalerdescriptor/makespatialscaler(device:))

# makeSpatialScaler(device:) (Swift)

**Framework:** MetalFX  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a spatial scaler instance from this descriptor’s current property values.

## Declaration

```swift
func makeSpatialScaler(device: any MTLDevice) -> (any MTLFXSpatialScaler)?
```

## Parameters

- `device`: An [MTLDevice](../../metal/mtldevice.md) instance that represents the GPU that applies the spatial scaler.

# newSpatialScalerWithDevice: (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a spatial scaler instance from this descriptor’s current property values.

## Declaration

```objectivec
- (id<MTLFXSpatialScaler>) newSpatialScalerWithDevice:(id<MTLDevice>) device;
```

## Parameters

- `device`: An [MTLDevice](../../metal/mtldevice.md) instance that represents the GPU that applies the spatial scaler.
