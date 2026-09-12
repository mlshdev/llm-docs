> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidatepicker/roundstominuteinterval](https://developer.apple.com/documentation/uikit/uidatepicker/roundstominuteinterval)

# roundsToMinuteInterval (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A Boolean value that determines whether the date rounds to a specific minute interval.

## Declaration

```swift
var roundsToMinuteInterval: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), [date](date.md) always rounds to the [minuteInterval](minuteinterval.md) and only produces dates that align with the minute interval. If this property is [false](https://developer.apple.com/documentation/swift/false), changes to [date](date.md) ignore the [minuteInterval](minuteinterval.md) property.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring temporal attributes

- [maximumDate](maximumdate.md): The maximum date that a date picker can show.
- [minimumDate](minimumdate.md): The minimum date that a date picker can show.
- [minuteInterval](minuteinterval.md): The interval at which the date picker should display minutes.
- [countDownDuration](countdownduration.md): The value displayed by the date picker when the mode property is set to show a countdown time.

# roundsToMinuteInterval (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A Boolean value that determines whether the date rounds to a specific minute interval.

## Declaration

```objectivec
@property (nonatomic) BOOL roundsToMinuteInterval;
```

<a id="Discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), [date](date.md) always rounds to the [minuteInterval](minuteinterval.md) and only produces dates that align with the minute interval. If this property is [false](https://developer.apple.com/documentation/swift/false), changes to [date](date.md) ignore the [minuteInterval](minuteinterval.md) property.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring temporal attributes

- [maximumDate](maximumdate.md): The maximum date that a date picker can show.
- [minimumDate](minimumdate.md): The minimum date that a date picker can show.
- [minuteInterval](minuteinterval.md): The interval at which the date picker should display minutes.
- [countDownDuration](countdownduration.md): The value displayed by the date picker when the mode property is set to show a countdown time.
