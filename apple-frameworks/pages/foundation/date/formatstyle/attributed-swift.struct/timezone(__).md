> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/attributed-swift.struct/timezone(_:)](https://developer.apple.com/documentation/foundation/date/formatstyle/attributed-swift.struct/timezone(_:))

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
