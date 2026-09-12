> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clktimetextprovider/date](https://developer.apple.com/documentation/clockkit/clktimetextprovider/date)

# date (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The date object containing the time value.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
var date: Date { get set }
```

<a id="Discussion"></a>

## Discussion

You can make changes to this property until you hand off the timeline entry containing it to ClockKit. The value of this property must not be `nil`.

## See Also

### Related Documentation

- [init(date:)](init%28date_%29.md): Deprecated. Creates and returns a text provider for displaying the specified time.
- [init(date:timeZone:)](init%28date_timezone_%29.md): Deprecated. Creates and returns a text provider for displaying the specified time.

### Getting the Time Information

- [timeZone](timezone.md): Deprecated. The time zone used to format time values.

# date (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The date object containing the time value.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, retain) NSDate * date;
```

<a id="Discussion"></a>

## Discussion

You can make changes to this property until you hand off the timeline entry containing it to ClockKit. The value of this property must not be `nil`.

## See Also

### Related Documentation

- [textProviderWithDate:](init%28date_%29.md): Deprecated. Creates and returns a text provider for displaying the specified time.
- [textProviderWithDate:timeZone:](init%28date_timezone_%29.md): Deprecated. Creates and returns a text provider for displaying the specified time.

### Getting the Time Information

- [timeZone](timezone.md): Deprecated. The time zone used to format time values.
