> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/factors-swift.struct/systemtemperature](https://developer.apple.com/documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/factors-swift.struct/systemtemperature)

# systemTemperature (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

The entire system is under elevated thermal load.

## Declaration

```swift
static var systemTemperature: AVCaptureDevice.SystemPressureState.Factors { get }
```

## See Also

### System pressure factors

- [peakPower](peakpower.md): The system’s peak power requirements exceed the battery’s current capacity.
- [depthModuleTemperature](depthmoduletemperature.md): The module capturing depth information is operating at an elevated temperature.
- [cameraTemperature](cameratemperature.md): The camera module is operating at an elevated temperature.

# AVCaptureSystemPressureFactorSystemTemperature (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

The entire system is under elevated thermal load.

## Declaration

```objectivec
AVCaptureSystemPressureFactorSystemTemperature
```

## See Also

### System pressure factors

- [AVCaptureSystemPressureFactorPeakPower](peakpower.md): The system’s peak power requirements exceed the battery’s current capacity.
- [AVCaptureSystemPressureFactorDepthModuleTemperature](depthmoduletemperature.md): The module capturing depth information is operating at an elevated temperature.
- [AVCaptureSystemPressureFactorCameraTemperature](cameratemperature.md): The camera module is operating at an elevated temperature.
- [AVCaptureSystemPressureFactorNone](../../../avcapturesystempressurefactors/avcapturesystempressurefactornone.md): System pressure is currently nominal.
