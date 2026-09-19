> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/date/formatstyle/attributed-swift.struct/timezone(_:)

# timeZone(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

Change the representation of the time zone in the format.

## Declaration

```swift
func timeZone(_ format: Date.FormatStyle.Symbol.TimeZone = .specificName(.short)) -> Date.FormatStyle.Attributed
```

## Parameters

- `format`: Set the symbol representation or pass `nil` to remove it.
