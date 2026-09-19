> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/intentresult/result(value:dialog:snippetintent:)

# result(value:dialog:snippetIntent:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Indicates that a completed app intent displays an interactive snippet with a dialog and returns a value.

## Declaration

```swift
static func result<Value>(value: Value, dialog: IntentDialog, snippetIntent: some SnippetIntent = EmptySnippetIntent()) -> Self where Self == IntentResultContainer<Value, Never, _SnippetIntentContainer, IntentDialog>, Value : _IntentValue
```

## Parameters

- `value`: The value produced by the `AppIntent`
- `dialog`: A custom success dialog
- `snippetIntent`: The intent responsible for presenting a snippet for this result
