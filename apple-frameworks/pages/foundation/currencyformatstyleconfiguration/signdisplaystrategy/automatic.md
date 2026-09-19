> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/currencyformatstyleconfiguration/signdisplaystrategy/automatic

# automatic

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A strategy to automatically configure sign display.

## Declaration

```swift
static var automatic: CurrencyFormatStyleConfiguration.SignDisplayStrategy { get }
```

## See Also

### Specifying sign display strategy

- [never](never.md): A strategy to never show the sign.
- [accounting](accounting.md): A sign display strategy to use accounting principles.
- [accountingAlways(showZero:)](accountingalways%28showzero_%29.md): A sign display strategy to use accounting principles, with a configurable behavior for handling zero values.
- [always(showZero:)](always%28showzero_%29.md): A sign display strategy to always show the sign, with a configurable behavior for handling zero values.
