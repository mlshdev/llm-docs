> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptionperiod/formatted(_:referencedate:)-8s3ar](https://developer.apple.com/documentation/storekit/product/subscriptionperiod/formatted(_:referencedate:)-8s3ar)

# formatted(\_:referenceDate:)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Formats the subscription period using a format style that takes a duration as an input.

## Declaration

```swift
func formatted<S>(_ format: S, referenceDate: Date = .now) -> S.FormatOutput where S : FormatStyle, S.FormatInput == Duration
```

## Parameters

- `format`: A format style that has a duration as an input.
- `referenceDate`: The starting date of the subscription period. The default value is [now](../../../foundation/date/now.md).

## See Also

### Formatting the subscription period

- [formatted(\_:referenceDate:)](formatted%28__referencedate_%29-3t7wd.md): Formats the subscription period using a format style that takes a date range as an input.
