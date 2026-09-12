> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkdatetextprovider/timezone](https://developer.apple.com/documentation/clockkit/clkdatetextprovider/timezone)

# timeZone (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The time zone used in the formatted string.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
var timeZone: TimeZone? { get set }
```

<a id="Discussion"></a>

## Discussion

The date provider uses the time zone information during formatting to ensure that the date information is displayed correctly. To use the current time zone, set this property to `nil`.

## See Also

### Getting the Date Information

- [date](date.md): Deprecated. The date to display.
- [calendarUnits](calendarunits.md): Deprecated. The calendar units to include in the formatted string.
- [uppercase](uppercase.md): Deprecated. A Boolean value that determines whether the date string displays in uppercase.

# timeZone (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The time zone used in the formatted string.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, retain, nullable) NSTimeZone * timeZone;
```

<a id="Discussion"></a>

## Discussion

The date provider uses the time zone information during formatting to ensure that the date information is displayed correctly. To use the current time zone, set this property to `nil`.

## See Also

### Getting the Date Information

- [date](date.md): Deprecated. The date to display.
- [calendarUnits](calendarunits.md): Deprecated. The calendar units to include in the formatted string.
- [uppercase](uppercase.md): Deprecated. A Boolean value that determines whether the date string displays in uppercase.
