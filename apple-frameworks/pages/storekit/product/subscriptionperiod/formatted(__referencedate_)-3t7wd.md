> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptionperiod/formatted(_:referencedate:)-3t7wd](https://developer.apple.com/documentation/storekit/product/subscriptionperiod/formatted(_:referencedate:)-3t7wd)

# formatted(\_:referenceDate:)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Formats the subscription period using a format style that takes a date range as an input.

## Declaration

```swift
@backDeployed(before: iOS 16.0, macOS 13.0, tvOS 16.0, watchOS 9.0, macCatalyst 16.0)
func formatted<S>(_ format: S, referenceDate: Date = .now) -> S.FormatOutput where S : FormatStyle, S.FormatInput == Range<Date>
```

## Parameters

- `format`: A format style that has a date range input. The format style for a product is [subscriptionPeriodFormatStyle](../subscriptionperiodformatstyle.md).
- `referenceDate`: The lower bound date for a date range representing the subscription period. The default value is [now](../../../foundation/date/now.md).

<a id="Discussion"></a>

## Discussion

Use the [formatted(\_:referenceDate:)](formatted%28__referencedate_%29-3t7wd.md) method with [subscriptionPeriodFormatStyle](../subscriptionperiodformatstyle.md) to format the subscription period for the App Store locale, as the following example shows.

```swift
// Get a human-readable representation of a subscription period.
subscriptionPeriod.formatted(product.subscriptionPeriodFormatStyle, referenceDate: /* some date */)

```

## See Also

### Formatting the subscription period

- [formatted(\_:referenceDate:)](formatted%28__referencedate_%29-8s3ar.md): Formats the subscription period using a format style that takes a duration as an input.
