> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutbuilder/elapsedtime(at:)](https://developer.apple.com/documentation/healthkit/hkworkoutbuilder/elapsedtime(at:))

# elapsedTime(at:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

Calculates the duration of the workout at the specified time.

## Declaration

```swift
func elapsedTime(at date: Date) -> TimeInterval
```

## Parameters

- `date`: The end date to use to calculate the duration.

<a id="Discussion"></a>

## Discussion

The duration of a workout doesn’t include intervals between pause and resume events.

> **Note**

>  The duration of a workout can decrease when you add past occurrences of pause events.

## See Also

### Starting the workout

- [beginCollection(withStart:completion:)](begincollection%28withstart_completion_%29.md): Sets the workout’s start date and begins building the workout.
- [startDate](startdate.md): The workout’s start date and time.

# elapsedTimeAtDate: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

Calculates the duration of the workout at the specified time.

## Declaration

```objectivec
- (NSTimeInterval) elapsedTimeAtDate:(NSDate *) date;
```

## Parameters

- `date`: The end date to use to calculate the duration.

<a id="Discussion"></a>

## Discussion

The duration of a workout doesn’t include intervals between pause and resume events.

> **Note**

>  The duration of a workout can decrease when you add past occurrences of pause events.

## See Also

### Starting the workout

- [beginCollectionWithStartDate:completion:](begincollection%28withstart_completion_%29.md): Sets the workout’s start date and begins building the workout.
- [startDate](startdate.md): The workout’s start date and time.
