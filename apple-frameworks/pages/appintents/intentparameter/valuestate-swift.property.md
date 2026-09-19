> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/intentparameter/valuestate-swift.property

# valueState

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Check if an IntentParameter was provided an initial value

## Declaration

```swift
final var valueState: IntentParameter<Value>.ValueState { get }
```

## See Also

### Accessing the underlying value

- [defaultValue](defaultvalue.md)
- [projectedValue](projectedvalue.md)
- [wrappedValue](wrappedvalue.md)
- [IntentParameter.ValueState](valuestate-swift.enum.md): Conforms when `Value` conforms to `_IntentValue` and `Sendable`. Indicates whether an IntentParameter was provided an initial value or if it was unset
