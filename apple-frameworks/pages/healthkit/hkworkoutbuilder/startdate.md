> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutbuilder/startdate](https://developer.apple.com/documentation/healthkit/hkworkoutbuilder/startdate)

# startDate (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

The workout’s start date and time.

## Declaration

```swift
var startDate: Date? { get }
```

## See Also

### Starting the workout

- [beginCollection(withStart:completion:)](begincollection%28withstart_completion_%29.md): Sets the workout’s start date and begins building the workout.
- [elapsedTime(at:)](elapsedtime%28at_%29.md): Calculates the duration of the workout at the specified time.

# startDate (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

The workout’s start date and time.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDate * startDate;
```

## See Also

### Starting the workout

- [beginCollectionWithStartDate:completion:](begincollection%28withstart_completion_%29.md): Sets the workout’s start date and begins building the workout.
- [elapsedTimeAtDate:](elapsedtime%28at_%29.md): Calculates the duration of the workout at the specified time.
