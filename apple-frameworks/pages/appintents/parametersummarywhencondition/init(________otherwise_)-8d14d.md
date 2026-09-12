> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/parametersummarywhencondition/init(_:_:_:_:otherwise:)-8d14d](https://developer.apple.com/documentation/appintents/parametersummarywhencondition/init(_:_:_:_:otherwise:)-8d14d)

# init(\_:\_:\_:\_:otherwise:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a `When` condition checking if a union value parameter matches any case in a list.

## Declaration

```swift
init<ValueType, Parameter>(_ keyPath: KeyPath<Intent, Parameter>, _ comparisonOperator: OneOfComparisonOperator, _ values: [ValueType.ValueType.Cases], @ParameterSummaryBuilder<Intent> _ when: () -> WhenCondition, @ParameterSummaryBuilder<Intent> otherwise: () -> Otherwise) where ValueType == Parameter.Value, Parameter : AnyIntentValue, ValueType.ValueType : AppUnionValue
```

## Parameters

- `keyPath`: Key path to the union value parameter
- `comparisonOperator`: The comparison operator (`.oneOf` or `.noneOf`)
- `values`: The array of union value cases to check against
- `when`: The summary to use when the condition is true
- `otherwise`: The summary to use when the condition is false

<a id="discussion"></a>

## Discussion

Example:

```swift
When(\.$reaction, .oneOf, [.text, .emoji]) {
    Summary("Text-based reaction")
} otherwise: {
    Summary("Other reaction type")
}
```
