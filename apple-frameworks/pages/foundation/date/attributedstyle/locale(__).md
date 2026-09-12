> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/attributedstyle/locale(_:)](https://developer.apple.com/documentation/foundation/date/attributedstyle/locale(_:))

# locale(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · tvOS 15.0+ (deprecated in 18.0) · visionOS 1.0+ · watchOS 8.0+ (deprecated in 11.0)

Modifies the date attributed style to use the specified locale.

> Use Date.FormatStyle.Attributed or Date.VerbatimFormatStyle.Attributed instead

## Declaration

```swift
func locale(_ locale: Locale) -> Date.AttributedStyle
```

## Parameters

- `locale`: The locale to use when formatting a date.

<a id="return-value"></a>

## Return Value

A date attributed style with the provided locale.
