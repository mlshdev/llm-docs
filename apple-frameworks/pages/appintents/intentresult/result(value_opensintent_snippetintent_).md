> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentresult/result(value:opensintent:snippetintent:)](https://developer.apple.com/documentation/appintents/intentresult/result(value:opensintent:snippetintent:))

# result(value:opensIntent:snippetIntent:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Indicates that a completed app intent displays an interactive snippet and returns a value and another intent to open the originating app.

## Declaration

```swift
static func result<Value>(value: Value, opensIntent: some AppIntent, snippetIntent: some SnippetIntent = EmptySnippetIntent()) -> Self where Self == IntentResultContainer<Value, Never, _SnippetIntentContainer, Never>, Value : _IntentValue
```

## Parameters

- `value`: The value that the app intent returns after completion.
- `opensIntent`: An app intent to open the originating app and show the intent’s result. additional functionality.
- `snippetIntent`: An app intent that displays an interactive snippet.
