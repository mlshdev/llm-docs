> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/hour/defaultdigitsnoampm](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/hour/defaultdigitsnoampm)

# defaultDigitsNoAMPM

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Custom format style portraying the minimum number of digits that represents the numeric hour.

## Declaration

```swift
static var defaultDigitsNoAMPM: Date.FormatStyle.Symbol.Hour { get }
```

<a id="Discussion"></a>

## Discussion

This style doesn’t include the day period symbol (a.m. or p.m.). For example, `1`, `11`.

## See Also

### Modifying an Hour

- [twoDigitsNoAMPM](twodigitsnoampm.md): Deprecated. Custom format style portraying the numeric hour using two digits.
- [conversationalDefaultDigits(amPM:)](conversationaldefaultdigits%28ampm_%29.md): Custom format style portraying the minimum number of digits that represents the hour and locale-dependent conversational day period formats.
- [conversationalTwoDigits(amPM:)](conversationaltwodigits%28ampm_%29.md): Custom format style portraying two digits that represent the hour and locale-dependent conversational day period formats.
- [defaultDigits(amPM:)](defaultdigits%28ampm_%29.md): Custom format style portraying the minimum number of digits that represents the hour and locale-dependent day period formats.
- [twoDigits(amPM:)](twodigits%28ampm_%29.md): Custom format style portraying two digits that represent the hour and locale-dependent day period formats.
