> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdateinterval/init(start:duration:)](https://developer.apple.com/documentation/foundation/nsdateinterval/init(start:duration:))

# init(start:duration:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a date interval with a given start date and duration.

## Declaration

```swift
init(start startDate: Date, duration: TimeInterval)
```

## Parameters

- `startDate`: The start date of the date interval.
- `duration`: The duration from the start date for the date interval.

  > **Important**

  >  This method raises an `NSArgumentException` if [duration](duration.md) is less than `0`.

<a id="Discussion"></a>

## Discussion

This is the designated initializer.

## See Also

### Creating Date Intervals

- [init()](init%28%29.md): Initializes a date interval by setting the start and end date to the current date.
- [init(start:end:)](init%28start_end_%29.md): Initializes a date interval from a given start date and end date.
- [init(coder:)](init%28coder_%29.md): Returns a date interval initialized from data in the given unarchiver.

# initWithStartDate:duration: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a date interval with a given start date and duration.

## Declaration

```objectivec
- (instancetype) initWithStartDate:(NSDate *) startDate duration:(NSTimeInterval) duration;
```

## Parameters

- `startDate`: The start date of the date interval.
- `duration`: The duration from the start date for the date interval.

  > **Important**

  >  This method raises an `NSArgumentException` if [duration](duration.md) is less than `0`.

<a id="Discussion"></a>

## Discussion

This is the designated initializer.

## See Also

### Creating Date Intervals

- [init](init%28%29.md): Initializes a date interval by setting the start and end date to the current date.
- [initWithStartDate:endDate:](init%28start_end_%29.md): Initializes a date interval from a given start date and end date.
- [initWithCoder:](init%28coder_%29.md): Returns a date interval initialized from data in the given unarchiver.
