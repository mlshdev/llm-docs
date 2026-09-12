> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkrelativedatetextprovider/date](https://developer.apple.com/documentation/clockkit/clkrelativedatetextprovider/date)

# date (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The target date to use for calculations.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
var date: Date { get set }
```

<a id="Discussion"></a>

## Discussion

When creating a text provider that updates automatically,  the provider calculates the relative date between this property and the current date. The value of this property must not be `nil`.

When creating a fixed, relative text provider, the provider calculates the relative date between this property and the [relativeToDate](relativetodate.md) property.

## See Also

### Getting the Date Information

- [relativeToDate](relativetodate.md): Deprecated. The end date that the text provider uses when calculating a fixed, relative date.
- [relativeDateStyle](relativedatestyle.md): Deprecated. The formatting style to use for the relative time value.
- [calendarUnits](calendarunits.md): Deprecated. The calendar units to include in the formatted string.

# date (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The target date to use for calculations.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, retain) NSDate * date;
```

<a id="Discussion"></a>

## Discussion

When creating a text provider that updates automatically,  the provider calculates the relative date between this property and the current date. The value of this property must not be `nil`.

When creating a fixed, relative text provider, the provider calculates the relative date between this property and the [relativeToDate](relativetodate.md) property.

## See Also

### Getting the Date Information

- [relativeToDate](relativetodate.md): Deprecated. The end date that the text provider uses when calculating a fixed, relative date.
- [relativeDateStyle](relativedatestyle.md): Deprecated. The formatting style to use for the relative time value.
- [calendarUnits](calendarunits.md): Deprecated. The calendar units to include in the formatted string.
