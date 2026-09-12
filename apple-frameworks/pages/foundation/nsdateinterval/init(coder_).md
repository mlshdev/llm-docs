> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdateinterval/init(coder:)](https://developer.apple.com/documentation/foundation/nsdateinterval/init(coder:))

# init(coder:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns a date interval initialized from data in the given unarchiver.

## Declaration

```swift
init(coder: NSCoder)
```

## See Also

### Creating Date Intervals

- [init()](init%28%29.md): Initializes a date interval by setting the start and end date to the current date.
- [init(start:duration:)](init%28start_duration_%29.md): Initializes a date interval with a given start date and duration.
- [init(start:end:)](init%28start_end_%29.md): Initializes a date interval from a given start date and end date.

# initWithCoder: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns a date interval initialized from data in the given unarchiver.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## See Also

### Creating Date Intervals

- [init](init%28%29.md): Initializes a date interval by setting the start and end date to the current date.
- [initWithStartDate:duration:](init%28start_duration_%29.md): Initializes a date interval with a given start date and duration.
- [initWithStartDate:endDate:](init%28start_end_%29.md): Initializes a date interval from a given start date and end date.
