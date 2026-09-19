> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkdatetextprovider/date

# date (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.2)

The date to display.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
var date: Date { get set }
```

<a id="Discussion"></a>

## Discussion

You set the value of this property at creation time but may change it later.

## See Also

### Getting the Date Information

- [timeZone](timezone.md): Deprecated. The time zone used in the formatted string.
- [calendarUnits](calendarunits.md): Deprecated. The calendar units to include in the formatted string.
- [uppercase](uppercase.md): Deprecated. A Boolean value that determines whether the date string displays in uppercase.

# date (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.2)

The date to display.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, retain) NSDate * date;
```

<a id="Discussion"></a>

## Discussion

You set the value of this property at creation time but may change it later.

## See Also

### Getting the Date Information

- [timeZone](timezone.md): Deprecated. The time zone used in the formatted string.
- [calendarUnits](calendarunits.md): Deprecated. The calendar units to include in the formatted string.
- [uppercase](uppercase.md): Deprecated. A Boolean value that determines whether the date string displays in uppercase.
