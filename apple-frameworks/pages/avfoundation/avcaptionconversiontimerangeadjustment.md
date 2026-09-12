> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionconversiontimerangeadjustment](https://developer.apple.com/documentation/avfoundation/avcaptionconversiontimerangeadjustment)

# AVCaptionConversionTimeRangeAdjustment (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object that describes an adjustment to the time range of one or more captions.

## Declaration

```swift
class AVCaptionConversionTimeRangeAdjustment
```

## Topics

### Accessing time offsets

- [startTimeOffset](avcaptionconversiontimerangeadjustment/starttimeoffset.md): The time value by which the system offsets the start times of captions to correct a problem.
- [durationOffset](avcaptionconversiontimerangeadjustment/durationoffset.md): The time value by which the system offsets the durations of captions to correct a problem.

## Relationships

### Inherits From

- [AVCaptionConversionAdjustment](avcaptionconversionadjustment.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the adjustment type

- [adjustmentType](avcaptionconversionadjustment/adjustmenttype-swift.property.md): The type of caption conversion adjustment.
- [AVCaptionConversionAdjustment.AdjustmentType](avcaptionconversionadjustment/adjustmenttype-swift.struct.md): Constants that indicate an adjustment type.

# AVCaptionConversionTimeRangeAdjustment (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object that describes an adjustment to the time range of one or more captions.

## Declaration

```objectivec
@interface AVCaptionConversionTimeRangeAdjustment : AVCaptionConversionAdjustment
```

## Topics

### Accessing time offsets

- [startTimeOffset](avcaptionconversiontimerangeadjustment/starttimeoffset.md): The time value by which the system offsets the start times of captions to correct a problem.
- [durationOffset](avcaptionconversiontimerangeadjustment/durationoffset.md): The time value by which the system offsets the durations of captions to correct a problem.

## Relationships

### Inherits From

- [AVCaptionConversionAdjustment](avcaptionconversionadjustment.md)

## See Also

### Accessing the adjustment type

- [adjustmentType](avcaptionconversionadjustment/adjustmenttype-swift.property.md): The type of caption conversion adjustment.
- [AVCaptionConversionAdjustmentType](avcaptionconversionadjustment/adjustmenttype-swift.struct.md): Constants that indicate an adjustment type.
