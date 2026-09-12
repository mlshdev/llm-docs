> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/dayperiod/conversational(_:)](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/dayperiod/conversational(_:))

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
