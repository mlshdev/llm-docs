> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/parametersummary](https://developer.apple.com/documentation/appintents/parametersummary)

# ParameterSummary

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An interface for defining the visual representation of an app intent’s parameters.

## Declaration

```swift
protocol ParameterSummary
```

<a id="overview"></a>

## Overview

For more information about using parameters and providing a parameter summary, see [Provide an interactive parameter summary for your intent](adding-parameters-to-an-app-intent.md#Provide-an-interactive-parameter-summary-for-your-intent).

## Topics

### Associated Types

- [Intent](parametersummary/intent.md)

## Relationships

### Conforming Types

- [IntentParameterSummary](intentparametersummary.md)
- [ParameterSummarySwitchCondition](parametersummaryswitchcondition.md)
- [ParameterSummaryWhenCondition](parametersummarywhencondition.md)

## See Also

### Shortcuts support

- [IntentParameterSummary](intentparametersummary.md): A type that describes the user interface configuration of an app intent’s parameters.
- [ParameterSummaryString](parametersummarystring.md): A human-readable string that interpolates parameter key paths to provide user-configurable placeholders in the Shortcuts app.
- [ParameterSummaryWhenCondition](parametersummarywhencondition.md): A type that represents a conditional statement in a parameter summary.
- [ParameterSummarySwitchCondition](parametersummaryswitchcondition.md): A type that represents a switch statement in a parameter summary.
- [ParameterSummaryCaseCondition](parametersummarycasecondition.md): A type that represents an individual case of a switch statement in a parameter summary.
- [ParameterSummaryDefaultCaseCondition](parametersummarydefaultcasecondition.md): A type that represents the default case of a switch statement in a parameter summary.
