> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/intentparameter/unit-irv

# unit

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
final var unit: IntentParameter<Value>.Temperature? { get }
```

## See Also

### Accessing unit details

- [IntentParameter.Temperature](temperature.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitTemperature>`.
- [defaultUnit](defaultunit-62blf.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitTemperature>`.
- [supportsNegativeNumbers](supportsnegativenumbers-9bl77.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitTemperature>`.
- [unitAdjustForLocale](unitadjustforlocale-2ca9l.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitTemperature>`.
