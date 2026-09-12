> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter/defaultvalue](https://developer.apple.com/documentation/appintents/intentparameter/defaultvalue)

# defaultValue

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
final let defaultValue: Value.UnwrappedType?
```

## See Also

### Accessing the underlying value

- [projectedValue](projectedvalue.md)
- [wrappedValue](wrappedvalue.md)
- [valueState](valuestate-swift.property.md): Conforms when `Value` conforms to `_IntentValue` and `Sendable`. Check if an IntentParameter was provided an initial value
- [IntentParameter.ValueState](valuestate-swift.enum.md): Conforms when `Value` conforms to `_IntentValue` and `Sendable`. Indicates whether an IntentParameter was provided an initial value or if it was unset
