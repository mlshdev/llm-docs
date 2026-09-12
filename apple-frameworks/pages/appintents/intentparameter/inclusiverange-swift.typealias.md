> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter/inclusiverange-swift.typealias](https://developer.apple.com/documentation/appintents/intentparameter/inclusiverange-swift.typealias)

# IntentParameter.InclusiveRange

**Framework:** App Intents  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
typealias InclusiveRange<Bound> = (lowerBound: Bound, upperBound: Bound) where Bound : Comparable
```

## See Also

### Accessing the configuration

- [currencyCodes](currencycodes.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `IntentCurrencyAmount`.
- [inclusiveRange](inclusiverange-swift.property.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `IntentCurrencyAmount`.
