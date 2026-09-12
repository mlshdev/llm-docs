> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkdatetextprovider/uppercase](https://developer.apple.com/documentation/clockkit/clkdatetextprovider/uppercase)

# uppercase (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A Boolean value that determines whether the date string displays in uppercase.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
var uppercase: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this property is set to [false](https://developer.apple.com/documentation/swift/false). Set it to [true](../../foundation/nsexpression/true.md) if you want the text provider to produce uppercase text.

## See Also

### Getting the Date Information

- [date](date.md): Deprecated. The date to display.
- [timeZone](timezone.md): Deprecated. The time zone used in the formatted string.
- [calendarUnits](calendarunits.md): Deprecated. The calendar units to include in the formatted string.

# uppercase (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A Boolean value that determines whether the date string displays in uppercase.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic) BOOL uppercase;
```

<a id="Discussion"></a>

## Discussion

By default, this property is set to [false](https://developer.apple.com/documentation/swift/false). Set it to [trueExpression](../../foundation/nsexpression/true.md) if you want the text provider to produce uppercase text.

## See Also

### Getting the Date Information

- [date](date.md): Deprecated. The date to display.
- [timeZone](timezone.md): Deprecated. The time zone used in the formatted string.
- [calendarUnits](calendarunits.md): Deprecated. The calendar units to include in the formatted string.
