> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkaudiogramsample/init(sensitivitypoints:start:end:metadata:)](https://developer.apple.com/documentation/healthkit/hkaudiogramsample/init(sensitivitypoints:start:end:metadata:))

# init(sensitivityPoints:start:end:metadata:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 18.1) · iPadOS 13.0+ (deprecated in 18.1) · Mac Catalyst 13.1+ (deprecated in 18.1) · macOS 13.0+ · visionOS 1.0+ (deprecated in 2.1) · watchOS 6.0+ (deprecated in 11.1)

Creates a new audiogram sample.

## Declaration

```swift
convenience init(sensitivityPoints: [HKAudiogramSensitivityPoint], start startDate: Date, end endDate: Date, metadata: [String : Any]?)
```

## Parameters

- `sensitivityPoints`: An array of sensitivity points.
- `startDate`: The start date for the sample. This date must be equal to or earlier than the end date; otherwise, this method throws an exception ([invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).
- `endDate`: The end date for the sample. This date must be equal to or later than the start date; otherwise, this method throws an exception ([invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).
- `metadata`: The metadata dictionary contains extra information describing this sample. The dictionary’s keys are strings. The values may be strings, numbers, or dates. For a complete list of predefined metadata keys, see [Metadata Keys](../metadata-keys.md).

  Using predefined keys helps facilitate sharing data between apps; however, you are also encouraged to create your own, custom keys as needed to extend the HealthKit quantity sample’s capabilities.

# audiogramSampleWithSensitivityPoints:startDate:endDate:metadata: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 18.1) · iPadOS 13.0+ (deprecated in 18.1) · Mac Catalyst 13.1+ (deprecated in 18.1) · macOS 13.0+ · visionOS 1.0+ (deprecated in 2.1) · watchOS 6.0+ (deprecated in 11.1)

Creates a new audiogram sample.

## Declaration

```objectivec
+ (instancetype) audiogramSampleWithSensitivityPoints:(NSArray<HKAudiogramSensitivityPoint *> *) sensitivityPoints startDate:(NSDate *) startDate endDate:(NSDate *) endDate metadata:(NSDictionary<NSString *,id> *) metadata;
```

## Parameters

- `sensitivityPoints`: An array of sensitivity points.
- `startDate`: The start date for the sample. This date must be equal to or earlier than the end date; otherwise, this method throws an exception ([NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).
- `endDate`: The end date for the sample. This date must be equal to or later than the start date; otherwise, this method throws an exception ([NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).
- `metadata`: The metadata dictionary contains extra information describing this sample. The dictionary’s keys are strings. The values may be strings, numbers, or dates. For a complete list of predefined metadata keys, see [Metadata Keys](../metadata-keys.md).

  Using predefined keys helps facilitate sharing data between apps; however, you are also encouraged to create your own, custom keys as needed to extend the HealthKit quantity sample’s capabilities.
