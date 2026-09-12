> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/currencyformatstyleconfiguration/signdisplaystrategy/accountingalways(showzero:)](https://developer.apple.com/documentation/foundation/currencyformatstyleconfiguration/signdisplaystrategy/accountingalways(showzero:))

# accountingAlways(showZero:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A sign display strategy to use accounting principles, with a configurable behavior for handling zero values.

## Declaration

```swift
static func accountingAlways(showZero: Bool = false) -> CurrencyFormatStyleConfiguration.SignDisplayStrategy
```

## Parameters

- `showZero`: A Boolean value that indicates whether to show the sign symbol on zero values. Defaults to `false`.

<a id="return-value"></a>

## Return Value

A strategy that uses accounting principles, and the specified handling of zero values.

## See Also

### Specifying sign display strategy

- [never](never.md): A strategy to never show the sign.
- [automatic](automatic.md): A strategy to automatically configure sign display.
- [accounting](accounting.md): A sign display strategy to use accounting principles.
- [always(showZero:)](always%28showzero_%29.md): A sign display strategy to always show the sign, with a configurable behavior for handling zero values.
