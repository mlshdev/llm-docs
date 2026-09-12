> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/parametersummaryswitchcondition/init(_:_:)-4vxvs](https://developer.apple.com/documentation/appintents/parametersummaryswitchcondition/init(_:_:)-4vxvs)

# init(\_:\_:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS · watchOS 10.0+

Initializes a parameter summary Switch statement over widget family.

## Declaration

```swift
init(_ widgetFamily: ParameterSummarySwitchCondition<Intent, Value, CaseCondition>.WidgetFamily, @ParameterSummaryCaseBuilder<Intent, IntentWidgetFamily> _ builder: () -> CaseCondition) where Value == IntentWidgetFamily
```

<a id="discussion"></a>

## Discussion

For example:

```swift
static var parameterSummary: some ParameterSummary {
    Switch(.widgetFamily) {
        Case(.systemLarge) {
            Summary("Parameter summary for large widgets")
        }
        Case([.systemSmall, .systemMedium]) {
            Summary("Parameter summary for small and medium widgets")
        }
        DefaultCase {
            Summary("Default parameter summary")
        }
    }
}
```

## See Also

### Creating a switch condition

- [init(\_:\_:)](init%28____%29-6cdw3.md): Creates a `Switch` statement that branches based on union value parameter cases.
- [ParameterSummaryCaseBuilder](../parametersummarycasebuilder.md): A result builder that allows you to declaratively describe the cases of a switch statement in a parameter summary.
- [ParameterSummarySwitchCondition.WidgetFamily](widgetfamily.md): An enum that represents a parameter summary Switch statement over widget family.
