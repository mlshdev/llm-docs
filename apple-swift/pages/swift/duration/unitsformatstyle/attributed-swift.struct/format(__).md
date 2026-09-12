> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/duration/unitsformatstyle/attributed-swift.struct/format(_:)](https://developer.apple.com/documentation/swift/duration/unitsformatstyle/attributed-swift.struct/format(_:))

# format(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a locale-aware attributed string representation from a duration value.

## Declaration

```swift
func format(_ duration: Duration) -> AttributedString
```

## Parameters

- `duration`: The duration value to format.

<a id="return-value"></a>

## Return Value

A string representation of the duration, according to the style’s pattern and locale.

<a id="discussion"></a>

## Discussion

Use this method when you want to create a format style and repeatedly use it to format different durations. For one-off cases with default formatting, call the [formatted()](../../formatted%28%29.md) method of [Duration](../../../duration.md) instead.
