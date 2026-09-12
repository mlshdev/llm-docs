> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/factors-swift.struct/peakpower](https://developer.apple.com/documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/factors-swift.struct/peakpower)

# peakPower (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

The system’s peak power requirements exceed the battery’s current capacity.

## Declaration

```swift
static var peakPower: AVCaptureDevice.SystemPressureState.Factors { get }
```

<a id="Discussion"></a>

## Discussion

Devices with chemically aged batteries are less able to respond to rapid increases in total power usage (CPU and GPU usage, I/O, camera systems, radios, etc). When a device detects such conditions, the system may limit capture sperformance to prevent an unexpected device shutdown.

## See Also

### System pressure factors

- [systemTemperature](systemtemperature.md): The entire system is under elevated thermal load.
- [depthModuleTemperature](depthmoduletemperature.md): The module capturing depth information is operating at an elevated temperature.
- [cameraTemperature](cameratemperature.md): The camera module is operating at an elevated temperature.

# AVCaptureSystemPressureFactorPeakPower (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

The system’s peak power requirements exceed the battery’s current capacity.

## Declaration

```objectivec
AVCaptureSystemPressureFactorPeakPower
```

<a id="Discussion"></a>

## Discussion

Devices with chemically aged batteries are less able to respond to rapid increases in total power usage (CPU and GPU usage, I/O, camera systems, radios, etc). When a device detects such conditions, the system may limit capture sperformance to prevent an unexpected device shutdown.

## See Also

### System pressure factors

- [AVCaptureSystemPressureFactorSystemTemperature](systemtemperature.md): The entire system is under elevated thermal load.
- [AVCaptureSystemPressureFactorDepthModuleTemperature](depthmoduletemperature.md): The module capturing depth information is operating at an elevated temperature.
- [AVCaptureSystemPressureFactorCameraTemperature](cameratemperature.md): The camera module is operating at an elevated temperature.
- [AVCaptureSystemPressureFactorNone](../../../avcapturesystempressurefactors/avcapturesystempressurefactornone.md): System pressure is currently nominal.
