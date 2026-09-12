> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionconversionadjustment/adjustmenttype-swift.struct](https://developer.apple.com/documentation/avfoundation/avcaptionconversionadjustment/adjustmenttype-swift.struct)

# AVCaptionConversionAdjustment.AdjustmentType (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Constants that indicate an adjustment type.

## Declaration

```swift
struct AdjustmentType
```

## Topics

### Adjustment types

- [timeRange](adjustmenttype-swift.struct/timerange.md): Indicates a timing adjustment.

### Initializers

- [init(rawValue:)](adjustmenttype-swift.struct/init%28rawvalue_%29.md): Creates an adjustment type with a string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the adjustment type

- [adjustmentType](adjustmenttype-swift.property.md): The type of caption conversion adjustment.
- [AVCaptionConversionTimeRangeAdjustment](../avcaptionconversiontimerangeadjustment.md): An object that describes an adjustment to the time range of one or more captions.

# AVCaptionConversionAdjustmentType (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Constants that indicate an adjustment type.

## Declaration

```objectivec
typedef NSString * AVCaptionConversionAdjustmentType;
```

## Topics

### Adjustment types

- [AVCaptionConversionAdjustmentTypeTimeRange](adjustmenttype-swift.struct/timerange.md): Indicates a timing adjustment.

## See Also

### Accessing the adjustment type

- [adjustmentType](adjustmenttype-swift.property.md): The type of caption conversion adjustment.
- [AVCaptionConversionTimeRangeAdjustment](../avcaptionconversiontimerangeadjustment.md): An object that describes an adjustment to the time range of one or more captions.
