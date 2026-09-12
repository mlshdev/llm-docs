> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintent/switch](https://developer.apple.com/documentation/appintents/appintent/switch)

# AppIntent.Switch

**Framework:** App Intents  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
typealias Switch<Value, CaseCondition> = ParameterSummarySwitchCondition<Self, Value, CaseCondition> where Value : _IntentValue, CaseCondition : _ParameterSummarySwitchCase
```

## Mentioned In

- [Adding parameters to an app intent](../adding-parameters-to-an-app-intent.md)

## See Also

### Summarizing the parameters

- [SummaryContent](summarycontent.md): The type of parameter summary representing this intent.
- [parameterSummary](parametersummary.md): The parameter summary the Shortcuts app uses to generate shortcuts for this intent.
- [parameterSummary](parametersummary-4vgic.md)
- [ParameterSummaryBuilder](../parametersummarybuilder.md): A result builder that allows you to declaratively describe a parameter summary.
- [AppIntent.Parameter](parameter.md)
- [AppIntent.Case](case.md)
- [AppIntent.DefaultCase](defaultcase.md)
- [AppIntent.Summary](summary.md)
- [AppIntent.When](when.md)
- [AppIntent.Option](option.md): A convenience type alias that represents a choice option within the scope of an app intent.
