> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clktimetextprovider/timezone

# timeZone (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.2)

The time zone used to format time values.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
var timeZone: TimeZone? { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is `nil`, the text provider uses the time zone currently configured for the user.

## See Also

### Related Documentation

- [init(date:timeZone:)](init%28date_timezone_%29.md): Deprecated. Creates and returns a text provider for displaying the specified time.

### Getting the Time Information

- [date](date.md): Deprecated. The date object containing the time value.

# timeZone (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.2)

The time zone used to format time values.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, retain, nullable) NSTimeZone * timeZone;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is `nil`, the text provider uses the time zone currently configured for the user.

## See Also

### Related Documentation

- [textProviderWithDate:timeZone:](init%28date_timezone_%29.md): Deprecated. Creates and returns a text provider for displaying the specified time.

### Getting the Time Information

- [date](date.md): Deprecated. The date object containing the time value.
