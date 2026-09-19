> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/rangecheckingresolver/checkparameterrangecontains(value:context:)

# checkParameterRangeContains(value:context:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
func checkParameterRangeContains<Value>(value: Value, context: IntentParameterContext<Self.Output>) throws where Value : RangeComparableProperty, Value == Self.Output.ValueType, Self.Output : Sendable
```
