> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/factors-swift.property](https://developer.apple.com/documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/factors-swift.property)

# factors (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

The set of underlying causes for the system pressure level.

## Declaration

```swift
var factors: AVCaptureDevice.SystemPressureState.Factors { get }
```

<a id="Discussion"></a>

## Discussion

Increased system pressure may be due to one or more contributing causes; this set provides additional details for the overall performance characterization reported by the [level](level-swift.property.md) property.

When the system pressure level is high, you can use this information to choose how to mitigate the issue. For example, you can reduce high system pressure due to [depthModuleTemperature](factors-swift.struct/depthmoduletemperature.md) (on a [builtInTrueDepthCamera](../devicetype-swift.struct/builtintruedepthcamera.md) device) by limiting the depth capture frame rate.

## See Also

### Contributing factors

- [AVCaptureDevice.SystemPressureState.Factors](factors-swift.struct.md): A structure that defines the factors affecting capture system performance.

# factors (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

The set of underlying causes for the system pressure level.

## Declaration

```objectivec
@property (atomic, readonly) AVCaptureSystemPressureFactors factors;
```

<a id="Discussion"></a>

## Discussion

Increased system pressure may be due to one or more contributing causes; this set provides additional details for the overall performance characterization reported by the [level](level-swift.property.md) property.

When the system pressure level is high, you can use this information to choose how to mitigate the issue. For example, you can reduce high system pressure due to [AVCaptureSystemPressureFactorDepthModuleTemperature](factors-swift.struct/depthmoduletemperature.md) (on a [AVCaptureDeviceTypeBuiltInTrueDepthCamera](../devicetype-swift.struct/builtintruedepthcamera.md) device) by limiting the depth capture frame rate.

## See Also

### Contributing factors

- [AVCaptureSystemPressureFactors](factors-swift.struct.md): A structure that defines the factors affecting capture system performance.
