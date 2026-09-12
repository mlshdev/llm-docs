> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dateformatter/generatescalendardates](https://developer.apple.com/documentation/foundation/dateformatter/generatescalendardates)

# generatesCalendarDates (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates whether the formatter generates the deprecated calendar date type.

## Declaration

```swift
var generatesCalendarDates: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property is [true](https://developer.apple.com/documentation/swift/true) if the formatter generates the deprecated [NSCalendarDate](../nscalendardate.md) type, and is [false](https://developer.apple.com/documentation/swift/false) otherwise. You should use [Date](../date.md) and [Calendar](../calendar.md) rather than [NSCalendarDate](../nscalendardate.md).

# generatesCalendarDates (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates whether the formatter generates the deprecated calendar date type.

## Declaration

```objectivec
@property BOOL generatesCalendarDates;
```

<a id="Discussion"></a>

## Discussion

This property is [true](https://developer.apple.com/documentation/swift/true) if the formatter generates the deprecated [NSCalendarDate](../nscalendardate.md) type, and is [false](https://developer.apple.com/documentation/swift/false) otherwise. You should use [Date](../date.md) and [Calendar](../calendar.md) rather than [NSCalendarDate](../nscalendardate.md).

## See Also

### Deprecated

- [initWithDateFormat:allowNaturalLanguage:](../nsdateformatter/initwithdateformat_allownaturallanguage_.md): Deprecated. Initializes and returns an `NSDateFormatter` instance that uses the OS X 10.0 formatting behavior and the given date format string in its conversions.
