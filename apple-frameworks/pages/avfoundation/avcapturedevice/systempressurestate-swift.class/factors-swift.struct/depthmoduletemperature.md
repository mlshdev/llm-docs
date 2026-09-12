> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/factors-swift.struct/depthmoduletemperature](https://developer.apple.com/documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/factors-swift.struct/depthmoduletemperature)

# depthModuleTemperature (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

The module capturing depth information is operating at an elevated temperature.

## Declaration

```swift
static var depthModuleTemperature: AVCaptureDevice.SystemPressureState.Factors { get }
```

<a id="Discussion"></a>

## Discussion

As system pressure increases, depth quality may become degraded. To reduce system pressure from this factor, reduce depth capture frame rate.

This factor applies only to [builtInTrueDepthCamera](../../devicetype-swift.struct/builtintruedepthcamera.md) devices.

## See Also

### System pressure factors

- [systemTemperature](systemtemperature.md): The entire system is under elevated thermal load.
- [peakPower](peakpower.md): The system’s peak power requirements exceed the battery’s current capacity.
- [cameraTemperature](cameratemperature.md): The camera module is operating at an elevated temperature.

# AVCaptureSystemPressureFactorDepthModuleTemperature (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

The module capturing depth information is operating at an elevated temperature.

## Declaration

```objectivec
AVCaptureSystemPressureFactorDepthModuleTemperature
```

<a id="Discussion"></a>

## Discussion

As system pressure increases, depth quality may become degraded. To reduce system pressure from this factor, reduce depth capture frame rate.

This factor applies only to [AVCaptureDeviceTypeBuiltInTrueDepthCamera](../../devicetype-swift.struct/builtintruedepthcamera.md) devices.

## See Also

### System pressure factors

- [AVCaptureSystemPressureFactorSystemTemperature](systemtemperature.md): The entire system is under elevated thermal load.
- [AVCaptureSystemPressureFactorPeakPower](peakpower.md): The system’s peak power requirements exceed the battery’s current capacity.
- [AVCaptureSystemPressureFactorCameraTemperature](cameratemperature.md): The camera module is operating at an elevated temperature.
- [AVCaptureSystemPressureFactorNone](../../../avcapturesystempressurefactors/avcapturesystempressurefactornone.md): System pressure is currently nominal.
