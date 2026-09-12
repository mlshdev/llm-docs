> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparametersummary](https://developer.apple.com/documentation/appintents/intentparametersummary)

# IntentParameterSummary

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A type that describes the user interface configuration of an app intent’s parameters.

## Declaration

```swift
struct IntentParameterSummary<Intent> where Intent : AppIntent
```

## Topics

### Crearing a parameter summary

- [init()](intentparametersummary/init%28%29.md)
- [init(\_:)](intentparametersummary/init%28__%29.md)
- [init(\_:table:)](intentparametersummary/init%28__table_%29.md)
- [init(\_:table:\_:)](intentparametersummary/init%28__table___%29.md)

### Building the parameter key paths

- [IntentParameterSummary.ParameterKeyPathsBuilder](intentparametersummary/parameterkeypathsbuilder.md): A result builder that declaratively builds the path to a parameter.

## Relationships

### Conforms To

- [ParameterSummary](parametersummary.md)

## See Also

### Shortcuts support

- [ParameterSummary](parametersummary.md): An interface for defining the visual representation of an app intent’s parameters.
- [ParameterSummaryString](parametersummarystring.md): A human-readable string that interpolates parameter key paths to provide user-configurable placeholders in the Shortcuts app.
- [ParameterSummaryWhenCondition](parametersummarywhencondition.md): A type that represents a conditional statement in a parameter summary.
- [ParameterSummarySwitchCondition](parametersummaryswitchcondition.md): A type that represents a switch statement in a parameter summary.
- [ParameterSummaryCaseCondition](parametersummarycasecondition.md): A type that represents an individual case of a switch statement in a parameter summary.
- [ParameterSummaryDefaultCaseCondition](parametersummarydefaultcasecondition.md): A type that represents the default case of a switch statement in a parameter summary.
