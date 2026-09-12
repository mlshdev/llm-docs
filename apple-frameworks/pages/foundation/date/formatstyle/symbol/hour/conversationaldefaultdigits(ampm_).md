> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/hour/conversationaldefaultdigits(ampm:)](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/hour/conversationaldefaultdigits(ampm:))

# conversationalDefaultDigits(amPM:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Custom format style portraying the minimum number of digits that represents the hour and locale-dependent conversational day period formats.

## Declaration

```swift
static func conversationalDefaultDigits(amPM: Date.FormatStyle.Symbol.Hour.AMPMStyle) -> Date.FormatStyle.Symbol.Hour
```

## Parameters

- `amPM`: Specifies the format of the day period representation.

<a id="return-value"></a>

## Return Value

An hour format style customized according to the specified day period format style and the given locale.

<a id="Discussion"></a>

## Discussion

This format may include the day period symbol (a.m. or p.m.), depending on locale, and can include conversational period formats. For example, `7a` (`narrow`), `7AM` (`abbreviated`), `7A.M.` (`wide`).

## See Also

### Modifying an Hour

- [defaultDigitsNoAMPM](defaultdigitsnoampm.md): Deprecated. Custom format style portraying the minimum number of digits that represents the numeric hour.
- [twoDigitsNoAMPM](twodigitsnoampm.md): Deprecated. Custom format style portraying the numeric hour using two digits.
- [conversationalTwoDigits(amPM:)](conversationaltwodigits%28ampm_%29.md): Custom format style portraying two digits that represent the hour and locale-dependent conversational day period formats.
- [defaultDigits(amPM:)](defaultdigits%28ampm_%29.md): Custom format style portraying the minimum number of digits that represents the hour and locale-dependent day period formats.
- [twoDigits(amPM:)](twodigits%28ampm_%29.md): Custom format style portraying two digits that represent the hour and locale-dependent day period formats.
