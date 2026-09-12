> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/year/defaultdigits](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/year/defaultdigits)

# defaultDigits

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The custom year format style showing the minimum number of digits that represents the numeric year.

## Declaration

```swift
static var defaultDigits: Date.FormatStyle.Symbol.Year { get }
```

<a id="Discussion"></a>

## Discussion

This style represents years like `1`, `18`, `202`, and `2020`.

## See Also

### Modifying a Year

- [twoDigits](twodigits.md): The custom format style portraying the two-digit numeric year, zero-padded if necessary.
- [padded(\_:)](padded%28__%29.md): Returns a custom format style that portrays the year of the calendar system of the provided length, zero-padded if necessary.
- [relatedGregorian(minimumLength:)](relatedgregorian%28minimumlength_%29.md): Returns a custom format style that portrays the year of a non-Gregorian calendar system in the corresponding Gregorian year.
- [extended(minimumLength:)](extended%28minimumlength_%29.md): Returns a custom format style that portrays the year of the calendar system, encompassing all supra-year fields.
