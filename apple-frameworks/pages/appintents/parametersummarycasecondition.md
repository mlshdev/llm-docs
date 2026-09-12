> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/parametersummarycasecondition](https://developer.apple.com/documentation/appintents/parametersummarycasecondition)

# ParameterSummaryCaseCondition

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A type that represents an individual case of a switch statement in a parameter summary.

## Declaration

```swift
struct ParameterSummaryCaseCondition<Intent, Value, Summary> where Intent : AppIntent, Value : _IntentValue, Summary : ParameterSummary
```

## Topics

### Creating the case condition

- [init(\_:\_:)](parametersummarycasecondition/init%28____%29-3680j.md)
- [init(\_:\_:)](parametersummarycasecondition/init%28____%29-4029f.md)

## See Also

### Shortcuts support

- [ParameterSummary](parametersummary.md): An interface for defining the visual representation of an app intent’s parameters.
- [IntentParameterSummary](intentparametersummary.md): A type that describes the user interface configuration of an app intent’s parameters.
- [ParameterSummaryString](parametersummarystring.md): A human-readable string that interpolates parameter key paths to provide user-configurable placeholders in the Shortcuts app.
- [ParameterSummaryWhenCondition](parametersummarywhencondition.md): A type that represents a conditional statement in a parameter summary.
- [ParameterSummarySwitchCondition](parametersummaryswitchcondition.md): A type that represents a switch statement in a parameter summary.
- [ParameterSummaryDefaultCaseCondition](parametersummarydefaultcasecondition.md): A type that represents the default case of a switch statement in a parameter summary.
