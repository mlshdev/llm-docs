> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/currencyformatstyleconfiguration/signdisplaystrategy/accounting](https://developer.apple.com/documentation/foundation/currencyformatstyleconfiguration/signdisplaystrategy/accounting)

# accounting

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A sign display strategy to use accounting principles.

## Declaration

```swift
static var accounting: CurrencyFormatStyleConfiguration.SignDisplayStrategy { get }
```

<a id="Discussion"></a>

## Discussion

This strategy always shows the currency symbol, and shows negative values in parenthesis. Examples of this strategy include `$123`, `$0`, and `($123)`.

## See Also

### Specifying sign display strategy

- [never](never.md): A strategy to never show the sign.
- [automatic](automatic.md): A strategy to automatically configure sign display.
- [accountingAlways(showZero:)](accountingalways%28showzero_%29.md): A sign display strategy to use accounting principles, with a configurable behavior for handling zero values.
- [always(showZero:)](always%28showzero_%29.md): A sign display strategy to always show the sign, with a configurable behavior for handling zero values.
