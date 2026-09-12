> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/factors-swift.struct/cameratemperature](https://developer.apple.com/documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/factors-swift.struct/cameratemperature)

# cameraTemperature (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

The camera module is operating at an elevated temperature.

## Declaration

```swift
static var cameraTemperature: AVCaptureDevice.SystemPressureState.Factors { get }
```

## See Also

### System pressure factors

- [systemTemperature](systemtemperature.md): The entire system is under elevated thermal load.
- [peakPower](peakpower.md): The system’s peak power requirements exceed the battery’s current capacity.
- [depthModuleTemperature](depthmoduletemperature.md): The module capturing depth information is operating at an elevated temperature.

# AVCaptureSystemPressureFactorCameraTemperature (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

The camera module is operating at an elevated temperature.

## Declaration

```objectivec
AVCaptureSystemPressureFactorCameraTemperature
```

## See Also

### System pressure factors

- [AVCaptureSystemPressureFactorSystemTemperature](systemtemperature.md): The entire system is under elevated thermal load.
- [AVCaptureSystemPressureFactorPeakPower](peakpower.md): The system’s peak power requirements exceed the battery’s current capacity.
- [AVCaptureSystemPressureFactorDepthModuleTemperature](depthmoduletemperature.md): The module capturing depth information is operating at an elevated temperature.
- [AVCaptureSystemPressureFactorNone](../../../avcapturesystempressurefactors/avcapturesystempressurefactornone.md): System pressure is currently nominal.
