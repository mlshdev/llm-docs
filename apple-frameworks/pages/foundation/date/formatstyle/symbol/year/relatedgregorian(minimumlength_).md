> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/year/relatedgregorian(minimumlength:)](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/year/relatedgregorian(minimumlength:))

# relatedGregorian(minimumLength:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a custom format style that portrays the year of a non-Gregorian calendar system in the corresponding Gregorian year.

## Declaration

```swift
static func relatedGregorian(minimumLength: Int = 1) -> Date.FormatStyle.Symbol.Year
```

## Parameters

- `minimumLength`: The minimum length to display the full year.

<a id="return-value"></a>

## Return Value

A custom year format style that portrays the year of the calendar system with the provided minimum length.

<a id="Discussion"></a>

## Discussion

For non-Gregorian calendars, output corresponds to the extended Gregorian year in which the calendar’s year begins. The default length is the minimum needed to show the full year.

## See Also

### Modifying a Year

- [defaultDigits](defaultdigits.md): The custom year format style showing the minimum number of digits that represents the numeric year.
- [twoDigits](twodigits.md): The custom format style portraying the two-digit numeric year, zero-padded if necessary.
- [padded(\_:)](padded%28__%29.md): Returns a custom format style that portrays the year of the calendar system of the provided length, zero-padded if necessary.
- [extended(minimumLength:)](extended%28minimumlength_%29.md): Returns a custom format style that portrays the year of the calendar system, encompassing all supra-year fields.
