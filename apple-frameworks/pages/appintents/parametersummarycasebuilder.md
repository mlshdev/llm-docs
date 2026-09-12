> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/parametersummarycasebuilder](https://developer.apple.com/documentation/appintents/parametersummarycasebuilder)

# ParameterSummaryCaseBuilder

**Framework:** App Intents  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A result builder that allows you to declaratively describe the cases of a switch statement in a parameter summary.

## Declaration

```swift
@resultBuilder enum ParameterSummaryCaseBuilder<Intent, Value> where Intent : AppIntent, Value : _IntentValue
```

## Topics

### Building switch statement cases

- [buildBlock(\_:\_:)](parametersummarycasebuilder/buildblock%28____%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:)](parametersummarycasebuilder/buildblock%28______%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:)](parametersummarycasebuilder/buildblock%28________%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:)](parametersummarycasebuilder/buildblock%28__________%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:)](parametersummarycasebuilder/buildblock%28____________%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:)](parametersummarycasebuilder/buildblock%28______________%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:)](parametersummarycasebuilder/buildblock%28________________%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](parametersummarycasebuilder/buildblock%28__________________%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](parametersummarycasebuilder/buildblock%28____________________%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](parametersummarycasebuilder/buildblock%28______________________%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](parametersummarycasebuilder/buildblock%28________________________%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](parametersummarycasebuilder/buildblock%28__________________________%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](parametersummarycasebuilder/buildblock%28____________________________%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](parametersummarycasebuilder/buildblock%28______________________________%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](parametersummarycasebuilder/buildblock%28________________________________%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [ParameterSummaryTupleCaseCondition](parametersummarytuplecasecondition.md): A type that represents a collection of case conditions for a specific switch statement.

### Type Methods

- [buildExpression(\_:)](parametersummarycasebuilder/buildexpression%28__%29.md)

## See Also

### Creating a switch condition

- [init(\_:\_:)](parametersummaryswitchcondition/init%28____%29-4vxvs.md): Initializes a parameter summary Switch statement over widget family.
- [init(\_:\_:)](parametersummaryswitchcondition/init%28____%29-6cdw3.md): Creates a `Switch` statement that branches based on union value parameter cases.
- [ParameterSummarySwitchCondition.WidgetFamily](parametersummaryswitchcondition/widgetfamily.md): An enum that represents a parameter summary Switch statement over widget family.
