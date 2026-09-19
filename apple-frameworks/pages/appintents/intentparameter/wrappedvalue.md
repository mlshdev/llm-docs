> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/intentparameter/wrappedvalue

# wrappedValue

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
final var wrappedValue: Value { get set }
```

## See Also

### Accessing the underlying value

- [defaultValue](defaultvalue.md)
- [projectedValue](projectedvalue.md)
- [valueState](valuestate-swift.property.md): Conforms when `Value` conforms to `_IntentValue` and `Sendable`. Check if an IntentParameter was provided an initial value
- [IntentParameter.ValueState](valuestate-swift.enum.md): Conforms when `Value` conforms to `_IntentValue` and `Sendable`. Indicates whether an IntentParameter was provided an initial value or if it was unset
