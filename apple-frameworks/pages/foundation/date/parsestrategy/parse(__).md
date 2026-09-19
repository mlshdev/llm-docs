> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/date/parsestrategy/parse(_:)

# parse(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a `Date` of a given string interpreted using the current settings.

## Declaration

```swift
func parse(_ value: String) throws -> Date
```

## Parameters

- `value`: A string representation of a date.

<a id="return-value"></a>

## Return Value

A `Date` represented by `value`.

<a id="discussion"></a>

## Discussion

> **Throws**

> Throws `NSFormattingError` if the string cannot be parsed.
