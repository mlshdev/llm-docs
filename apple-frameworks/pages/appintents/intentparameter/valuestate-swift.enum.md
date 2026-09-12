> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter/valuestate-swift.enum](https://developer.apple.com/documentation/appintents/intentparameter/valuestate-swift.enum)

# IntentParameter.ValueState

**Framework:** App Intents  
**Kind:** Enumeration  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Indicates whether an IntentParameter was provided an initial value or if it was unset

## Declaration

```swift
enum ValueState
```

## Topics

### Enumeration Cases

- [IntentParameter.ValueState.set(\_:)](valuestate-swift.enum/set%28__%29.md): The parameter was provided an initial value.
- [IntentParameter.ValueState.unset](valuestate-swift.enum/unset.md): The parameter was never provided a value

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Accessing the underlying value

- [defaultValue](defaultvalue.md)
- [projectedValue](projectedvalue.md)
- [wrappedValue](wrappedvalue.md)
- [valueState](valuestate-swift.property.md): Conforms when `Value` conforms to `_IntentValue` and `Sendable`. Check if an IntentParameter was provided an initial value
