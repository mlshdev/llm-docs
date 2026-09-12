> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/parametersummarystring](https://developer.apple.com/documentation/appintents/parametersummarystring)

# ParameterSummaryString

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A human-readable string that interpolates parameter key paths to provide user-configurable placeholders in the Shortcuts app.

## Declaration

```swift
struct ParameterSummaryString<Intent> where Intent : AppIntent
```

## Topics

### Creating the summary string

- [init(\_:)](parametersummarystring/init%28__%29.md)

## Relationships

### Conforms To

- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByStringInterpolation](https://developer.apple.com/documentation/swift/expressiblebystringinterpolation)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)

## See Also

### Shortcuts support

- [ParameterSummary](parametersummary.md): An interface for defining the visual representation of an app intent’s parameters.
- [IntentParameterSummary](intentparametersummary.md): A type that describes the user interface configuration of an app intent’s parameters.
- [ParameterSummaryWhenCondition](parametersummarywhencondition.md): A type that represents a conditional statement in a parameter summary.
- [ParameterSummarySwitchCondition](parametersummaryswitchcondition.md): A type that represents a switch statement in a parameter summary.
- [ParameterSummaryCaseCondition](parametersummarycasecondition.md): A type that represents an individual case of a switch statement in a parameter summary.
- [ParameterSummaryDefaultCaseCondition](parametersummarydefaultcasecondition.md): A type that represents the default case of a switch statement in a parameter summary.
