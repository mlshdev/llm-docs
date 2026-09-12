> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintent/parametersummary](https://developer.apple.com/documentation/appintents/appintent/parametersummary)

# parameterSummary

**Framework:** App Intents  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The parameter summary the Shortcuts app uses to generate shortcuts for this intent.

## Declaration

```swift
static var parameterSummary: Self.SummaryContent { get }
```

## Mentioned In

- [Adding parameters to an app intent](../adding-parameters-to-an-app-intent.md)
- [Creating your first app intent](../creating-your-first-app-intent.md)

<a id="discussion"></a>

## Discussion

Use this property to create interactive descriptions of your app intent that include relevant parameter values. You can use this property to provide multiple summaries reflecting specific parameter values or combinations of values. You can also incorporate specific parameters values into your descriptions using variable substitution. The Shortcuts app uses the contents of this property to create bespoke shortcuts for your app.

For information about how to create parameter summaries for an app intent, see [Provide an interactive parameter summary for your intent](../adding-parameters-to-an-app-intent.md#Provide-an-interactive-parameter-summary-for-your-intent).

## Default Implementations

### AppIntent Implementations

- [parameterSummary](parametersummary-4vgic.md)

## See Also

### Summarizing the parameters

- [SummaryContent](summarycontent.md): The type of parameter summary representing this intent.
- [parameterSummary](parametersummary-4vgic.md)
- [ParameterSummaryBuilder](../parametersummarybuilder.md): A result builder that allows you to declaratively describe a parameter summary.
- [AppIntent.Parameter](parameter.md)
- [AppIntent.Case](case.md)
- [AppIntent.DefaultCase](defaultcase.md)
- [AppIntent.Summary](summary.md)
- [AppIntent.Switch](switch.md)
- [AppIntent.When](when.md)
- [AppIntent.Option](option.md): A convenience type alias that represents a choice option within the scope of an app intent.
