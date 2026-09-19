> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/dayperiod/conversational(_:)

# conversational(\_:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Static factory method that creates a custom day period format style using a conversational style.

## Declaration

```swift
static func conversational(_ width: Date.FormatStyle.Symbol.DayPeriod.Width) -> Date.FormatStyle.Symbol.DayPeriod
```

## Parameters

- `width`: Specifies the width of the string result.

<a id="return-value"></a>

## Return Value

A day period format style appropriate for the locale and specified width.

## See Also

### Modifying a Day Period

- [standard(\_:)](standard%28__%29.md): Static factory method that creates a custom day period format style using a standard style.
- [with12s(\_:)](with12s%28__%29.md): Static factory method that creates a custom day period format style using a style that represents midday and midnight.
