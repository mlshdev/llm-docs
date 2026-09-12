> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/systempressurestate-swift.class](https://developer.apple.com/documentation/avfoundation/avcapturedevice/systempressurestate-swift.class)

# AVCaptureDevice.SystemPressureState (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

An object that provides information about OS and hardware status affecting capture system performance and availability.

## Declaration

```swift
class SystemPressureState
```

<a id="overview"></a>

## Overview

The performance and availability of the camera capture system on an iOS device is subject to several external factors, such as power usage and device temperature. If during a capture session the total system pressure reaches excessive levels, the capture system automatically shuts down, causing a session interruption (see [wasInterruptedNotification](../avcapturesession/wasinterruptednotification.md)). Under less heavy pressure, the system may automatically reduce capture quality.

Key-value observe the capture device’s [systemPressureState](systempressurestate-swift.property.md) property to monitor its state, and take action to reduce the performance impact of your capture session when system pressure increases—for example, by reducing the capture frame rate.

## Topics

### Overall level

- [level](systempressurestate-swift.class/level-swift.property.md): The overall level of performance constraints on the capture system.
- [AVCaptureDevice.SystemPressureState.Level](systempressurestate-swift.class/level-swift.struct.md): A structure that defines system pressure state levels.

### Contributing factors

- [factors](systempressurestate-swift.class/factors-swift.property.md): The set of underlying causes for the system pressure level.
- [AVCaptureDevice.SystemPressureState.Factors](systempressurestate-swift.class/factors-swift.struct.md): A structure that defines the factors affecting capture system performance.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Monitoring system pressure

- [systemPressureState](systempressurestate-swift.property.md): A value that indicates the capture device’s current system pressure state.
- [AVCaptureSessionInterruptionSystemPressureStateKey](../avcapturesessioninterruptionsystempressurestatekey.md): A key to retrieve a state value that indicates the system pressure level and contributing factors that caused the interruption.

# AVCaptureSystemPressureState (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

An object that provides information about OS and hardware status affecting capture system performance and availability.

## Declaration

```objectivec
@interface AVCaptureSystemPressureState : NSObject
```

<a id="overview"></a>

## Overview

The performance and availability of the camera capture system on an iOS device is subject to several external factors, such as power usage and device temperature. If during a capture session the total system pressure reaches excessive levels, the capture system automatically shuts down, causing a session interruption (see [AVCaptureSessionWasInterruptedNotification](../avcapturesession/wasinterruptednotification.md)). Under less heavy pressure, the system may automatically reduce capture quality.

Key-value observe the capture device’s [systemPressureState](systempressurestate-swift.property.md) property to monitor its state, and take action to reduce the performance impact of your capture session when system pressure increases—for example, by reducing the capture frame rate.

## Topics

### Overall level

- [level](systempressurestate-swift.class/level-swift.property.md): The overall level of performance constraints on the capture system.
- [AVCaptureSystemPressureLevel](systempressurestate-swift.class/level-swift.struct.md): A structure that defines system pressure state levels.

### Contributing factors

- [factors](systempressurestate-swift.class/factors-swift.property.md): The set of underlying causes for the system pressure level.
- [AVCaptureSystemPressureFactors](systempressurestate-swift.class/factors-swift.struct.md): A structure that defines the factors affecting capture system performance.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Monitoring system pressure

- [systemPressureState](systempressurestate-swift.property.md): A value that indicates the capture device’s current system pressure state.
- [AVCaptureSessionInterruptionSystemPressureStateKey](../avcapturesessioninterruptionsystempressurestatekey.md): A key to retrieve a state value that indicates the system pressure level and contributing factors that caused the interruption.
