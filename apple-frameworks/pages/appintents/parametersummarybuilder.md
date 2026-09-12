> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/parametersummarybuilder](https://developer.apple.com/documentation/appintents/parametersummarybuilder)

# ParameterSummaryBuilder

**Framework:** App Intents  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A result builder that allows you to declaratively describe a parameter summary.

## Declaration

```swift
@resultBuilder enum ParameterSummaryBuilder<Intent> where Intent : AppIntent
```

## Mentioned In

- [Adding parameters to an app intent](adding-parameters-to-an-app-intent.md)
- [Creating your first app intent](creating-your-first-app-intent.md)

<a id="overview"></a>

## Overview

For more information about using parameters and providing a parameter summary, see [Provide an interactive parameter summary for your intent](adding-parameters-to-an-app-intent.md#Provide-an-interactive-parameter-summary-for-your-intent).

## Topics

### Type Methods

- [buildBlock(\_:)](parametersummarybuilder/buildblock%28__%29.md)
- [buildExpression(\_:)](parametersummarybuilder/buildexpression%28__%29.md)

## See Also

### Summarizing the parameters

- [SummaryContent](appintent/summarycontent.md): The type of parameter summary representing this intent.
- [parameterSummary](appintent/parametersummary.md): The parameter summary the Shortcuts app uses to generate shortcuts for this intent.
- [parameterSummary](appintent/parametersummary-4vgic.md)
- [AppIntent.Parameter](appintent/parameter.md)
- [AppIntent.Case](appintent/case.md)
- [AppIntent.DefaultCase](appintent/defaultcase.md)
- [AppIntent.Summary](appintent/summary.md)
- [AppIntent.Switch](appintent/switch.md)
- [AppIntent.When](appintent/when.md)
- [AppIntent.Option](appintent/option.md): A convenience type alias that represents a choice option within the scope of an app intent.
