> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/parametersummarycasebuilder/buildblock(_:_:_:_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/appintents/parametersummarycasebuilder/buildblock(_:_:_:_:_:_:_:_:_:_:_:_:_:))

# buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, DefaultSummary>(_ c0: C0, _ c1: C1, _ c2: C2, _ c3: C3, _ c4: C4, _ c5: C5, _ c6: C6, _ c7: C7, _ c8: C8, _ c9: C9, _ c10: C10, _ c11: C11, _ default: ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>) -> ParameterSummaryTupleCaseCondition<Intent, Value, (C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, ParameterSummaryDefaultCaseCondition<Intent, Value, DefaultSummary>)> where Intent == C0.Intent, C0 : _ParameterSummarySwitchCase, C1 : _ParameterSummarySwitchCase, C2 : _ParameterSummarySwitchCase, C3 : _ParameterSummarySwitchCase, C4 : _ParameterSummarySwitchCase, C5 : _ParameterSummarySwitchCase, C6 : _ParameterSummarySwitchCase, C7 : _ParameterSummarySwitchCase, C8 : _ParameterSummarySwitchCase, C9 : _ParameterSummarySwitchCase, C10 : _ParameterSummarySwitchCase, C11 : _ParameterSummarySwitchCase, DefaultSummary : ParameterSummary, C0.Intent == C1.Intent, C1.Intent == C2.Intent, C2.Intent == C3.Intent, C3.Intent == C4.Intent, C4.Intent == C5.Intent, C5.Intent == C6.Intent, C6.Intent == C7.Intent, C7.Intent == C8.Intent, C8.Intent == C9.Intent, C9.Intent == C10.Intent, C10.Intent == C11.Intent
```

## See Also

### Building switch statement cases

- [buildBlock(\_:\_:)](buildblock%28____%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
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
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28____________________________%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28______________________________%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28________________________________%29.md): Conforms when `Intent` conforms to `AppIntent` and `Value` conforms to `_IntentValue`.
- [ParameterSummaryTupleCaseCondition](../parametersummarytuplecasecondition.md): A type that represents a collection of case conditions for a specific switch statement.
