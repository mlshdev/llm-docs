> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentresult/result(value:opensintent:dialog:snippetintent:)](https://developer.apple.com/documentation/appintents/intentresult/result(value:opensintent:dialog:snippetintent:))

# result(value:opensIntent:dialog:snippetIntent:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Indicates that a completed app intent displays an interactive snippet with a dialog and returns a value and another intent to open the originating app.

## Declaration

```swift
static func result<Value>(value: Value, opensIntent: some AppIntent, dialog: IntentDialog, snippetIntent: some SnippetIntent = EmptySnippetIntent()) -> Self where Self == IntentResultContainer<Value, Never, _SnippetIntentContainer, IntentDialog>, Value : _IntentValue
```

## Parameters

- `value`: The value produced by the `AppIntent`
- `opensIntent`: An app intent to open the originating app and show the intent’s result.
- `dialog`: A custom success dialog
- `snippetIntent`: The intent responsible for presenting a snippet for this result
