> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekrecurrencedayofweek/weeknumber](https://developer.apple.com/documentation/eventkit/ekrecurrencedayofweek/weeknumber)

# weekNumber (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The week number of the day of the week.

## Declaration

```swift
var weekNumber: Int { get }
```

<a id="Discussion"></a>

## Discussion

Values range from `–53` to `53`. A negative value indicates a value from the end of the range. `0` indicates the week number is irrelevant.

## See Also

### Accessing Properties of a Day of the Week

- [dayOfTheWeek](dayoftheweek.md): The day of the week.

# weekNumber (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The week number of the day of the week.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger weekNumber;
```

<a id="Discussion"></a>

## Discussion

Values range from `–53` to `53`. A negative value indicates a value from the end of the range. `0` indicates the week number is irrelevant.

## See Also

### Accessing Properties of a Day of the Week

- [dayOfTheWeek](dayoftheweek.md): The day of the week.
