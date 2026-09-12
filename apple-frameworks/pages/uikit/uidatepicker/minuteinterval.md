> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidatepicker/minuteinterval](https://developer.apple.com/documentation/uikit/uidatepicker/minuteinterval)

# minuteInterval (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interval at which the date picker should display minutes.

## Declaration

```swift
var minuteInterval: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to set the interval displayed by the minutes wheel (for example, 15 minutes). The interval value must be evenly divided into 60; if it isn’t, the default value is used. The default and minimum values are 1; the maximum value is 30.

## See Also

### Configuring temporal attributes

- [maximumDate](maximumdate.md): The maximum date that a date picker can show.
- [minimumDate](minimumdate.md): The minimum date that a date picker can show.
- [countDownDuration](countdownduration.md): The value displayed by the date picker when the mode property is set to show a countdown time.
- [roundsToMinuteInterval](roundstominuteinterval.md): A Boolean value that determines whether the date rounds to a specific minute interval.

# minuteInterval (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interval at which the date picker should display minutes.

## Declaration

```objectivec
@property (nonatomic) NSInteger minuteInterval;
```

<a id="Discussion"></a>

## Discussion

Use this property to set the interval displayed by the minutes wheel (for example, 15 minutes). The interval value must be evenly divided into 60; if it isn’t, the default value is used. The default and minimum values are 1; the maximum value is 30.

## See Also

### Configuring temporal attributes

- [maximumDate](maximumdate.md): The maximum date that a date picker can show.
- [minimumDate](minimumdate.md): The minimum date that a date picker can show.
- [countDownDuration](countdownduration.md): The value displayed by the date picker when the mode property is set to show a countdown time.
- [roundsToMinuteInterval](roundstominuteinterval.md): A Boolean value that determines whether the date rounds to a specific minute interval.
