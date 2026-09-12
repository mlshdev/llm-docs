> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintent/summarycontent](https://developer.apple.com/documentation/appintents/appintent/summarycontent)

# SummaryContent

**Framework:** App Intents  
**Kind:** Associated Type  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The type of parameter summary representing this intent.

## Declaration

```swift
associatedtype SummaryContent : ParameterSummary
```

<a id="discussion"></a>

## Discussion

When you create an intent, Swift infers this type from your implementation of the [parameterSummary](parametersummary.md) property.

## See Also

### Summarizing the parameters

- [parameterSummary](parametersummary.md): The parameter summary the Shortcuts app uses to generate shortcuts for this intent.
- [parameterSummary](parametersummary-4vgic.md)
- [ParameterSummaryBuilder](../parametersummarybuilder.md): A result builder that allows you to declaratively describe a parameter summary.
- [AppIntent.Parameter](parameter.md)
- [AppIntent.Case](case.md)
- [AppIntent.DefaultCase](defaultcase.md)
- [AppIntent.Summary](summary.md)
- [AppIntent.Switch](switch.md)
- [AppIntent.When](when.md)
- [AppIntent.Option](option.md): A convenience type alias that represents a choice option within the scope of an app intent.
