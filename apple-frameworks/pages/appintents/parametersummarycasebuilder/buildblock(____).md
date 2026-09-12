> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/parametersummarycasebuilder/buildblock(_:_:)](https://developer.apple.com/documentation/appintents/parametersummarycasebuilder/buildblock(_:_:))

# buildBlock(\_:\_:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
static func buildBlock<C0, DefaultSummary>(_ c0: C0, _ default: ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>) -> ParameterSummaryTupleCaseCondition<Intent, Value, (C0, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>)> where Intent == C0.Intent, C0 : _ParameterSummarySwitchCase, DefaultSummary : ParameterSummary
```

## See Also

### Building switch statement cases

- [buildBlock(\_:\_:\_:)](buildblock%28______%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:)](buildblock%28________%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:)](buildblock%28__________%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:)](buildblock%28____________%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:)](buildblock%28______________%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28________________%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28__________________%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28____________________%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28______________________%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28________________________%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28__________________________%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28____________________________%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28______________________________%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28________________________________%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [ParameterSummaryTupleCaseCondition](../parametersummarytuplecasecondition.md): A type that represents a collection of case conditions for a specific switch statement.
