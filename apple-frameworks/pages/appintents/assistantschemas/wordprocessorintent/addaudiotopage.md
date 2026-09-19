> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/assistantschemas/wordprocessorintent/addaudiotopage

# addAudioToPage

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The app intent conforms to the schema for adding audio to a page in a text document.

## Declaration

```swift
var addAudioToPage: some AssistantSchemas.Intent { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app intent implementation. The following example shows an app intent that conforms to the `.wordProcessor.addAudioToPage` schema:

```swift
@AppIntent(schema: .wordProcessor.addAudioToPage)
struct AddAudioToWordProcessorPageIntent: AppIntent {
    @Parameter
    var target: WordProcessorPageEntity

    @Parameter(supportedContentTypes: [.audio])
    var audio: IntentFile

    func perform() async throws -> some IntentResult {
        .result()
    }
}
```
