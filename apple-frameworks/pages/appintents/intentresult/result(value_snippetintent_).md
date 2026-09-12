> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentresult/result(value:snippetintent:)](https://developer.apple.com/documentation/appintents/intentresult/result(value:snippetintent:))

# result(value:snippetIntent:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Indicates that a completed app intent returns a value and displays an interactive snippet.

## Declaration

```swift
static func result<Value>(value: Value, snippetIntent: some SnippetIntent = EmptySnippetIntent()) -> Self where Self == IntentResultContainer<Value, Never, _SnippetIntentContainer, Never>, Value : _IntentValue
```

## Parameters

- `value`: The value that the app intent returns after completion.
- `snippetIntent`: An app intent that displays an interactive snippet.
