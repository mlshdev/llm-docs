> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkaudiogramsample/init(sensitivitypoints:start:end:device:metadata:)](https://developer.apple.com/documentation/healthkit/hkaudiogramsample/init(sensitivitypoints:start:end:device:metadata:))

# init(sensitivityPoints:start:end:device:metadata:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.1+ · watchOS 11.1+

## Declaration

```swift
convenience init(sensitivityPoints: [HKAudiogramSensitivityPoint], start startDate: Date, end endDate: Date, device: HKDevice?, metadata: [String : Any]?)
```

## Parameters

- `sensitivityPoints`: Sensitivity data associated with the sample, with a maximum limit of 30 points. Frequencies must be unique, and ordered ascending.
- `startDate`: The start date of the hearing test.
- `endDate`: The end date of the hearing test.
- `device`: The device that generated the sample data.
- `metadata`: Optional metadata associated with the sample.

<a id="return-value"></a>

## Return Value

A new instance of an audiogram sample.

<a id="discussion"></a>

## Discussion

Creates a new audiogram sample with the specified attributes.

# audiogramSampleWithSensitivityPoints:startDate:endDate:device:metadata: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.1+ · watchOS 11.1+

## Declaration

```objectivec
+ (instancetype) audiogramSampleWithSensitivityPoints:(NSArray<HKAudiogramSensitivityPoint *> *) sensitivityPoints startDate:(NSDate *) startDate endDate:(NSDate *) endDate device:(HKDevice *) device metadata:(NSDictionary<NSString *,id> *) metadata;
```

## Parameters

- `sensitivityPoints`: Sensitivity data associated with the sample, with a maximum limit of 30 points. Frequencies must be unique, and ordered ascending.
- `startDate`: The start date of the hearing test.
- `endDate`: The end date of the hearing test.
- `device`: The device that generated the sample data.
- `metadata`: Optional metadata associated with the sample.

<a id="return-value"></a>

## Return Value

A new instance of an audiogram sample.

<a id="discussion"></a>

## Discussion

Creates a new audiogram sample with the specified attributes.
