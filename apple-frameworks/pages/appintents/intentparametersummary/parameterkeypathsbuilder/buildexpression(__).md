> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/intentparametersummary/parameterkeypathsbuilder/buildexpression(_:)

# buildExpression(\_:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
static func buildExpression<ValueType>(_ expression: KeyPath<Intent, IntentParameter<ValueType>>) -> PartialKeyPath<Intent> where ValueType : _IntentValue, ValueType : Sendable
```

## See Also

### Building the path

- [buildBlock(\_:)](buildblock%28__%29.md)
