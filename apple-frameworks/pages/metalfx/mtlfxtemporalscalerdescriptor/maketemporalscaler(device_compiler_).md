> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxtemporalscalerdescriptor/maketemporalscaler(device:compiler:)](https://developer.apple.com/documentation/metalfx/mtlfxtemporalscalerdescriptor/maketemporalscaler(device:compiler:))

# makeTemporalScaler(device:compiler:) (Swift)

**Framework:** MetalFX  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Creates a temporal scaler instance for a Metal device.

## Declaration

```swift
func makeTemporalScaler(device: any MTLDevice, compiler: any MTL4Compiler) -> (any MTL4FXTemporalScaler)?
```

## Parameters

- `device`: The Metal device that creates the temporal scaler.
- `compiler`: A compiler instance this method can use to build pipeline state objects.

<a id="return-value"></a>

## Return Value

 A new temporal scaler instance upon success, or `nil` otherwise.

# newTemporalScalerWithDevice:compiler: (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Creates a temporal scaler instance for a Metal device.

## Declaration

```objectivec
- (id<MTL4FXTemporalScaler>) newTemporalScalerWithDevice:(id<MTLDevice>) device compiler:(id<MTL4Compiler>) compiler;
```

## Parameters

- `device`: The Metal device that creates the temporal scaler.
- `compiler`: A compiler instance this method can use to build pipeline state objects.

<a id="return-value"></a>

## Return Value

 A new temporal scaler instance upon success, or `nil` otherwise.
