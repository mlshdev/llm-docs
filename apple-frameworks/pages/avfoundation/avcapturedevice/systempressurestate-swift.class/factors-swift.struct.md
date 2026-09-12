> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/factors-swift.struct](https://developer.apple.com/documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/factors-swift.struct)

# AVCaptureDevice.SystemPressureState.Factors (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

A structure that defines the factors affecting capture system performance.

## Declaration

```swift
struct Factors
```

## Topics

### System pressure factors

- [systemTemperature](factors-swift.struct/systemtemperature.md): The entire system is under elevated thermal load.
- [peakPower](factors-swift.struct/peakpower.md): The system’s peak power requirements exceed the battery’s current capacity.
- [depthModuleTemperature](factors-swift.struct/depthmoduletemperature.md): The module capturing depth information is operating at an elevated temperature.
- [cameraTemperature](factors-swift.struct/cameratemperature.md): The camera module is operating at an elevated temperature.

### Initializers

- [init(rawValue:)](factors-swift.struct/init%28rawvalue_%29.md): Creates a system pressure factor from its raw string value.

### Type Properties

- [batteryStress](factors-swift.struct/batterystress.md): Indicates that under the current battery conditions, the device will shut down within 30 seconds if system load is not reduced.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Contributing factors

- [factors](factors-swift.property.md): The set of underlying causes for the system pressure level.

# AVCaptureSystemPressureFactors (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

A structure that defines the factors affecting capture system performance.

## Declaration

```objectivec
enum AVCaptureSystemPressureFactors : NSUInteger;
```

## Topics

### System pressure factors

- [AVCaptureSystemPressureFactorSystemTemperature](factors-swift.struct/systemtemperature.md): The entire system is under elevated thermal load.
- [AVCaptureSystemPressureFactorPeakPower](factors-swift.struct/peakpower.md): The system’s peak power requirements exceed the battery’s current capacity.
- [AVCaptureSystemPressureFactorDepthModuleTemperature](factors-swift.struct/depthmoduletemperature.md): The module capturing depth information is operating at an elevated temperature.
- [AVCaptureSystemPressureFactorCameraTemperature](factors-swift.struct/cameratemperature.md): The camera module is operating at an elevated temperature.
- [AVCaptureSystemPressureFactorNone](../../avcapturesystempressurefactors/avcapturesystempressurefactornone.md): System pressure is currently nominal.

### Enumeration Cases

- [AVCaptureSystemPressureFactorBatteryStress](factors-swift.struct/batterystress.md): Indicates that under the current battery conditions, the device will shut down within 30 seconds if system load is not reduced.

## See Also

### Contributing factors

- [factors](factors-swift.property.md): The set of underlying causes for the system pressure level.
