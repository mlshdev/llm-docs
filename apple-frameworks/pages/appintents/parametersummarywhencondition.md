> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/parametersummarywhencondition](https://developer.apple.com/documentation/appintents/parametersummarywhencondition)

# ParameterSummaryWhenCondition

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A type that represents a conditional statement in a parameter summary.

## Declaration

```swift
struct ParameterSummaryWhenCondition<Intent, WhenCondition, Otherwise> where Intent : AppIntent, WhenCondition : ParameterSummary, Otherwise : ParameterSummary
```

## Topics

### Creating a conditional statement

- [init(\_:\_:\_:otherwise:)](parametersummarywhencondition/init%28______otherwise_%29.md)
- [init(\_:\_:\_:\_:otherwise:)](parametersummarywhencondition/init%28________otherwise_%29-2aukt.md)
- [init(\_:\_:\_:\_:otherwise:)](parametersummarywhencondition/init%28________otherwise_%29-1u184.md)
- [init(\_:\_:\_:\_:otherwise:)](parametersummarywhencondition/init%28________otherwise_%29-6edqt.md)
- [init(\_:\_:\_:\_:otherwise:)](parametersummarywhencondition/init%28________otherwise_%29-rfm5.md)
- [init(\_:\_:\_:\_:otherwise:)](parametersummarywhencondition/init%28________otherwise_%29-3qvla.md)
- [init(\_:identifier:\_:\_:otherwise:)](parametersummarywhencondition/init%28__identifier_____otherwise_%29-215ub.md)
- [init(\_:identifier:\_:\_:otherwise:)](parametersummarywhencondition/init%28__identifier_____otherwise_%29-2yug9.md)
- [init(\_:identifier:\_:\_:otherwise:)](parametersummarywhencondition/init%28__identifier_____otherwise_%29-3xth2.md)
- [init(\_:identifier:\_:\_:otherwise:)](parametersummarywhencondition/init%28__identifier_____otherwise_%29-4f45j.md)
- [init(\_:identifier:\_:\_:otherwise:)](parametersummarywhencondition/init%28__identifier_____otherwise_%29-5o5vc.md)
- [init(\_:identifier:\_:\_:otherwise:)](parametersummarywhencondition/init%28__identifier_____otherwise_%29-7g15l.md)
- [init(\_:identifier:\_:\_:otherwise:)](parametersummarywhencondition/init%28__identifier_____otherwise_%29-7tayy.md)
- [init(\_:identifier:\_:\_:otherwise:)](parametersummarywhencondition/init%28__identifier_____otherwise_%29-9qlh.md)
- [init(widgetFamily:\_:\_:otherwise:)](parametersummarywhencondition/init%28widgetfamily_____otherwise_%29-3fujn.md)
- [init(widgetFamily:\_:\_:otherwise:)](parametersummarywhencondition/init%28widgetfamily_____otherwise_%29-9l1to.md)
- [EquatableComparisonOperator](equatablecomparisonoperator.md): Operators that indicate the type of equality check for a conditional statement.
- [ComparableComparisonOperator](comparablecomparisonoperator.md): Operators that indicate the type of comparison check for a conditional statement.
- [HasValueComparisonOperator](hasvaluecomparisonoperator.md): Operators that indicate the type of value check for a conditional statement.
- [OneOfComparisonOperator](oneofcomparisonoperator.md): Operators that indicate the type of containment check for a conditional statement.

### Initializers

- [init(\_:\_:\_:\_:otherwise:)](parametersummarywhencondition/init%28________otherwise_%29-2qooo.md): Conforms when `Intent` conforms to `AppIntent`, `WhenCondition` conforms to `ParameterSummary`, and `Otherwise` conforms to `ParameterSummary`. Creates a `When` condition comparing an optional union value parameter to a specific case.
- [init(\_:\_:\_:\_:otherwise:)](parametersummarywhencondition/init%28________otherwise_%29-8d14d.md): Conforms when `Intent` conforms to `AppIntent`, `WhenCondition` conforms to `ParameterSummary`, and `Otherwise` conforms to `ParameterSummary`. Creates a `When` condition checking if a union value parameter matches any case in a list.
- [init(\_:\_:\_:\_:otherwise:)](parametersummarywhencondition/init%28________otherwise_%29-tyz2.md): Conforms when `Intent` conforms to `AppIntent`, `WhenCondition` conforms to `ParameterSummary`, and `Otherwise` conforms to `ParameterSummary`. Creates a `When` condition comparing a union value parameter to a specific case.

## Relationships

### Conforms To

- [ParameterSummary](parametersummary.md)

## See Also

### Shortcuts support

- [ParameterSummary](parametersummary.md): An interface for defining the visual representation of an app intent’s parameters.
- [IntentParameterSummary](intentparametersummary.md): A type that describes the user interface configuration of an app intent’s parameters.
- [ParameterSummaryString](parametersummarystring.md): A human-readable string that interpolates parameter key paths to provide user-configurable placeholders in the Shortcuts app.
- [ParameterSummarySwitchCondition](parametersummaryswitchcondition.md): A type that represents a switch statement in a parameter summary.
- [ParameterSummaryCaseCondition](parametersummarycasecondition.md): A type that represents an individual case of a switch statement in a parameter summary.
- [ParameterSummaryDefaultCaseCondition](parametersummarydefaultcasecondition.md): A type that represents the default case of a switch statement in a parameter summary.
