> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksample/startdate](https://developer.apple.com/documentation/healthkit/hksample/startdate)

# startDate (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The sample’s start date.

## Declaration

```swift
var startDate: Date { get }
```

## Mentioned In

- [Adding samples to a workout](../adding-samples-to-a-workout.md)
- [Running workout sessions](../running-workout-sessions.md)

<a id="Discussion"></a>

## Discussion

The sample’s start date must be equal to or earlier than its end date.

Some samples—for example, body temperature—represent a single point in time. For these samples, both the start and the end date are the same, because they both refer to the point in time when the sample was taken.

Other samples—for example, step count—represent data over a time interval. Here, the sample should use different start and end dates. These dates mark the beginning and end of the sample’s time interval, respectively.

## See Also

### Accessing the Sample’s Data

- [endDate](enddate.md): The sample’s end date.
- [hasUndeterminedDuration](hasundeterminedduration.md): Indicates whether the sample has an unknown duration.
- [sampleType](sampletype.md): The sample type.

# startDate (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The sample’s start date.

## Declaration

```objectivec
@property (strong, readonly) NSDate * startDate;
```

## Mentioned In

- [Adding samples to a workout](../adding-samples-to-a-workout.md)
- [Running workout sessions](../running-workout-sessions.md)

<a id="Discussion"></a>

## Discussion

The sample’s start date must be equal to or earlier than its end date.

Some samples—for example, body temperature—represent a single point in time. For these samples, both the start and the end date are the same, because they both refer to the point in time when the sample was taken.

Other samples—for example, step count—represent data over a time interval. Here, the sample should use different start and end dates. These dates mark the beginning and end of the sample’s time interval, respectively.

## See Also

### Accessing the Sample’s Data

- [endDate](enddate.md): The sample’s end date.
- [hasUndeterminedDuration](hasundeterminedduration.md): Indicates whether the sample has an unknown duration.
- [sampleType](sampletype.md): The sample type.
