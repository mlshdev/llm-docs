> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/attributedstyle/format(_:)](https://developer.apple.com/documentation/foundation/date/attributedstyle/format(_:))

# format(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · tvOS 15.0+ (deprecated in 18.0) · visionOS 1.0+ · watchOS 8.0+ (deprecated in 11.0)

Creates a locale-aware attributed string representation from a date value.

> Use Date.FormatStyle.Attributed or Date.VerbatimFormatStyle.Attributed instead

## Declaration

```swift
func format(_ value: Date) -> AttributedString
```

## Parameters

- `value`: The date to format.

<a id="return-value"></a>

## Return Value

An attributed string representation of the date.

<a id="Discussion"></a>

## Discussion

The [Date.ISO8601FormatStyle](../iso8601formatstyle.md) [format(\_:)](../formatstyle/format%28__%29.md) instance method generates an attributed string from the provided date. Once you create a style, you can use it to format dates multiple times.

For an example of formatting multiple dates into plain strings, see [format(\_:)](../formatstyle/format%28__%29.md).
