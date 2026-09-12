> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdateinterval/init(start:end:)](https://developer.apple.com/documentation/foundation/nsdateinterval/init(start:end:))

# init(start:end:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a date interval from a given start date and end date.

## Declaration

```swift
convenience init(start startDate: Date, end endDate: Date)
```

## Parameters

- `startDate`: The start date of the date interval.
- `endDate`: The end date of the date interval.

  > **Important**

  >  This method raises an `NSArgumentException` if [endDate](enddate.md) occurs earlier than [startDate](startdate.md).

## See Also

### Creating Date Intervals

- [init()](init%28%29.md): Initializes a date interval by setting the start and end date to the current date.
- [init(start:duration:)](init%28start_duration_%29.md): Initializes a date interval with a given start date and duration.
- [init(coder:)](init%28coder_%29.md): Returns a date interval initialized from data in the given unarchiver.

# initWithStartDate:endDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a date interval from a given start date and end date.

## Declaration

```objectivec
- (instancetype) initWithStartDate:(NSDate *) startDate endDate:(NSDate *) endDate;
```

## Parameters

- `startDate`: The start date of the date interval.
- `endDate`: The end date of the date interval.

  > **Important**

  >  This method raises an `NSArgumentException` if [endDate](enddate.md) occurs earlier than [startDate](startdate.md).

## See Also

### Creating Date Intervals

- [init](init%28%29.md): Initializes a date interval by setting the start and end date to the current date.
- [initWithStartDate:duration:](init%28start_duration_%29.md): Initializes a date interval with a given start date and duration.
- [initWithCoder:](init%28coder_%29.md): Returns a date interval initialized from data in the given unarchiver.
