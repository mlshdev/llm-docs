> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/year/padded(_:)](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/year/padded(_:))

# padded(\_:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a custom format style that portrays the year of the calendar system of the provided length, zero-padded if necessary.

## Declaration

```swift
static func padded(_ length: Int) -> Date.FormatStyle.Symbol.Year
```

## Parameters

- `length`: The length of the string to display a calendar year.

<a id="return-value"></a>

## Return Value

A custom year format style that portrays the year of the calendar system with the provided length.

<a id="Discussion"></a>

## Discussion

Use [padded(\_:)](padded%28__%29.md) to display a year using three or more digits, zero-padded if necessary. For example, `002`, `020`, `201`, `2017`.

## See Also

### Modifying a Year

- [defaultDigits](defaultdigits.md): The custom year format style showing the minimum number of digits that represents the numeric year.
- [twoDigits](twodigits.md): The custom format style portraying the two-digit numeric year, zero-padded if necessary.
- [relatedGregorian(minimumLength:)](relatedgregorian%28minimumlength_%29.md): Returns a custom format style that portrays the year of a non-Gregorian calendar system in the corresponding Gregorian year.
- [extended(minimumLength:)](extended%28minimumlength_%29.md): Returns a custom format style that portrays the year of the calendar system, encompassing all supra-year fields.
