> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/numericimputer/strategy-swift.enum

# NumericImputer.Strategy

**Framework:** Create ML Components  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

An imputation strategy.

## Declaration

```swift
enum Strategy
```

## Topics

### Imputer strategies

- [NumericImputer.Strategy.constant(\_:)](strategy-swift.enum/constant%28__%29.md): Imputation strategy that replaces missing elements with a constant.
- [NumericImputer.Strategy.mean](strategy-swift.enum/mean.md): Imputation strategy that replaces missing elements with the mean.
- [NumericImputer.Strategy.median](strategy-swift.enum/median.md): Imputation strategy that replaces missing elements with the median.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Fitting

- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Fits a numeric imputer to a sequence of elements.
- [Transformer](../transformer.md): A transformer that takes an input and produces an output.
