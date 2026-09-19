> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalfx/mtlfxspatialscalerdescriptor/makespatialscaler(device:compiler:)

# makeSpatialScaler(device:compiler:) (Swift)

**Framework:** MetalFX  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a spatial scaler instance for a Metal device.

## Declaration

```swift
func makeSpatialScaler(device: any MTLDevice, compiler: any MTL4Compiler) -> (any MTL4FXSpatialScaler)?
```

## Parameters

- `device`: The Metal device that creates the spatial scaler.
- `compiler`: A compiler instance this method can use to build pipeline state objects.

<a id="return-value"></a>

## Return Value

 A new spatial scaler instance upon success, or `nil` otherwise.

# newSpatialScalerWithDevice:compiler: (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a spatial scaler instance for a Metal device.

## Declaration

```objectivec
- (id<MTL4FXSpatialScaler>) newSpatialScalerWithDevice:(id<MTLDevice>) device compiler:(id<MTL4Compiler>) compiler;
```

## Parameters

- `device`: The Metal device that creates the spatial scaler.
- `compiler`: A compiler instance this method can use to build pipeline state objects.

<a id="return-value"></a>

## Return Value

 A new spatial scaler instance upon success, or `nil` otherwise.
