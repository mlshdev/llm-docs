> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/parametersummarycasebuilder/buildexpression(_:)

# buildExpression(\_:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
static func buildExpression<C0>(_ expression: C0) -> C0 where Intent == C0.Intent, Value == C0.Value, C0 : _ParameterSummarySwitchCase
```
