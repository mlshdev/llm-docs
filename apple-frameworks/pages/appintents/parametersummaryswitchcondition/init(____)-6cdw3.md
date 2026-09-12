> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/parametersummaryswitchcondition/init(_:_:)-6cdw3](https://developer.apple.com/documentation/appintents/parametersummaryswitchcondition/init(_:_:)-6cdw3)

# init(\_:\_:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a `Switch` statement that branches based on union value parameter cases.

## Declaration

```swift
init(_ keyPath: KeyPath<Intent, IntentParameter<Value>>, @ParameterSummaryCaseBuilder<Intent, Value> _ builder: () -> CaseCondition)
```

## Parameters

- `keyPath`: Key path to the union value parameter
- `builder`: A result builder that constructs the case conditions

## See Also

### Creating a switch condition

- [init(\_:\_:)](init%28____%29-4vxvs.md): Initializes a parameter summary Switch statement over widget family.
- [ParameterSummaryCaseBuilder](../parametersummarycasebuilder.md): A result builder that allows you to declaratively describe the cases of a switch statement in a parameter summary.
- [ParameterSummarySwitchCondition.WidgetFamily](widgetfamily.md): An enum that represents a parameter summary Switch statement over widget family.
