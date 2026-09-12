> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutevent/date](https://developer.apple.com/documentation/healthkit/hkworkoutevent/date)

# date (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 13.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.0)

The time when the transition occurred.

> Use [dateInterval](dateinterval.md) instead.

## Declaration

```swift
var date: Date { get }
```

<a id="Discussion"></a>

## Discussion

For a pause event, this date indicates the start of the break. For a resume event, this date indicates the end of the break. You must use a date between the starting and ending dates of the workout that you intend to modify.

## See Also

### Deprecated

- [init(type:date:)](init%28type_date_%29.md): Deprecated. Instantiates and returns a new workout event with the specified type and date.
- [init(type:date:metadata:)](init%28type_date_metadata_%29.md): Deprecated. Instantiates and returns a new workout event with the specified type, date, and metadata.

# date (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 13.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.0)

The time when the transition occurred.

> Use [dateInterval](dateinterval.md) instead.

## Declaration

```objectivec
@property (copy, readonly) NSDate * date;
```

<a id="Discussion"></a>

## Discussion

For a pause event, this date indicates the start of the break. For a resume event, this date indicates the end of the break. You must use a date between the starting and ending dates of the workout that you intend to modify.

## See Also

### Deprecated

- [workoutEventWithType:date:](init%28type_date_%29.md): Deprecated. Instantiates and returns a new workout event with the specified type and date.
- [workoutEventWithType:date:metadata:](init%28type_date_metadata_%29.md): Deprecated. Instantiates and returns a new workout event with the specified type, date, and metadata.
