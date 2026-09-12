> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/wordprocessorintent/createpage](https://developer.apple.com/documentation/appintents/assistantschemas/wordprocessorintent/createpage)

# createPage

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The app intent conforms to the schema for creating a page in a text document.

## Declaration

```swift
var createPage: some AssistantSchemas.Intent { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app intent implementation. The following example shows an app intent that conforms to the `.wordProcessor.createPage` schema:

```swift
@AppIntent(schema: .wordProcessor.createPage)
struct CreateWordProcessorPageIntent: AppIntent {
    @Parameter
    var target: WordProcessorDocumentEntity

    @Parameter
    var template: String?

    func perform() async throws -> some ReturnsValue<WordProcessorPageEntity> {
        .result(value: WordProcessorPageEntity())
    }
}
```
