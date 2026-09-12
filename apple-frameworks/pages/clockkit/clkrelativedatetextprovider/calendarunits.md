> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkrelativedatetextprovider/calendarunits](https://developer.apple.com/documentation/clockkit/clkrelativedatetextprovider/calendarunits)

# calendarUnits (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The calendar units to include in the formatted string.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
var calendarUnits: NSCalendar.Unit { get set }
```

<a id="Discussion"></a>

## Discussion

For a list of supported units, see [Date Format Options](../clkrelativedatetextprovider.md#Date-Format-Options).

## See Also

### Getting the Date Information

- [date](date.md): Deprecated. The target date to use for calculations.
- [relativeToDate](relativetodate.md): Deprecated. The end date that the text provider uses when calculating a fixed, relative date.
- [relativeDateStyle](relativedatestyle.md): Deprecated. The formatting style to use for the relative time value.

# calendarUnits (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The calendar units to include in the formatted string.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic) NSCalendarUnit calendarUnits;
```

<a id="Discussion"></a>

## Discussion

For a list of supported units, see [Date Format Options](../clkrelativedatetextprovider.md#Date-Format-Options).

## See Also

### Getting the Date Information

- [date](date.md): Deprecated. The target date to use for calculations.
- [relativeToDate](relativetodate.md): Deprecated. The end date that the text provider uses when calculating a fixed, relative date.
- [relativeDateStyle](relativedatestyle.md): Deprecated. The formatting style to use for the relative time value.
