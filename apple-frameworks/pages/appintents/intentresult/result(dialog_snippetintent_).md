> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/intentresult/result(dialog:snippetintent:)

# result(dialog:snippetIntent:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Indicates that a completed app intent displays an interactive snippet and a success dialog.

## Declaration

```swift
static func result(dialog: IntentDialog, snippetIntent: some SnippetIntent = EmptySnippetIntent()) -> Self where Self == IntentResultContainer<Never, Never, _SnippetIntentContainer, IntentDialog>
```

## Parameters

- `dialog`: A custom success dialog
- `snippetIntent`: The intent responsible for presenting a snippet for this result
