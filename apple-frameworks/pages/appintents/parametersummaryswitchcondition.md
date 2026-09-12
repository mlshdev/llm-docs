> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/parametersummaryswitchcondition](https://developer.apple.com/documentation/appintents/parametersummaryswitchcondition)

# ParameterSummarySwitchCondition

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A type that represents a switch statement in a parameter summary.

## Declaration

```swift
struct ParameterSummarySwitchCondition<Intent, Value, CaseCondition> where Intent : AppIntent, Value : _IntentValue, CaseCondition : _ParameterSummarySwitchCase
```

## Topics

### Creating a switch condition

- [init(\_:\_:)](parametersummaryswitchcondition/init%28____%29-4vxvs.md): Initializes a parameter summary Switch statement over widget family.
- [init(\_:\_:)](parametersummaryswitchcondition/init%28____%29-6cdw3.md): Creates a `Switch` statement that branches based on union value parameter cases.
- [ParameterSummaryCaseBuilder](parametersummarycasebuilder.md): A result builder that allows you to declaratively describe the cases of a switch statement in a parameter summary.
- [ParameterSummarySwitchCondition.WidgetFamily](parametersummaryswitchcondition/widgetfamily.md): An enum that represents a parameter summary Switch statement over widget family.

### Initializers

- [init(\_:\_:)](parametersummaryswitchcondition/init%28____%29-8b7di.md): Conforms when `Intent` conforms to `AppIntent`, `Value` conforms to `_IntentValue`, and `CaseCondition` conforms to `_ParameterSummarySwitchCase`. Creates a `Switch` statement that branches based on union value parameter cases.

## Relationships

### Conforms To

- [ParameterSummary](parametersummary.md)

## See Also

### Shortcuts support

- [ParameterSummary](parametersummary.md): An interface for defining the visual representation of an app intent’s parameters.
- [IntentParameterSummary](intentparametersummary.md): A type that describes the user interface configuration of an app intent’s parameters.
- [ParameterSummaryString](parametersummarystring.md): A human-readable string that interpolates parameter key paths to provide user-configurable placeholders in the Shortcuts app.
- [ParameterSummaryWhenCondition](parametersummarywhencondition.md): A type that represents a conditional statement in a parameter summary.
- [ParameterSummaryCaseCondition](parametersummarycasecondition.md): A type that represents an individual case of a switch statement in a parameter summary.
- [ParameterSummaryDefaultCaseCondition](parametersummarydefaultcasecondition.md): A type that represents the default case of a switch statement in a parameter summary.
