> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/wordprocessorintent/addtextboxtopage](https://developer.apple.com/documentation/appintents/assistantschemas/wordprocessorintent/addtextboxtopage)

# addTextBoxToPage

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The app intent conforms to the schema for adding a text box to a page in a text document.

## Declaration

```swift
var addTextBoxToPage: some AssistantSchemas.Intent { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app intent implementation. The following example shows an app intent that conforms to the `.wordProcessor.addTextBoxToPage` schema:

```swift
@AppIntent(schema: .wordProcessor.addTextBoxToPage)
struct AddTextBoxToWordProcessorPageIntent: AppIntent {
    @Parameter
    var target: WordProcessorPageEntity

    @Parameter
    var text: String

    func perform() async throws -> some IntentResult {
        .result()
    }
}
```
