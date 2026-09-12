> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/whiteboardintent/updateboard](https://developer.apple.com/documentation/appintents/assistantschemas/whiteboardintent/updateboard)

# updateBoard

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The app intent conforms to the schema for updating a whiteboard canvas.

## Declaration

```swift
var updateBoard: some AssistantSchemas.Intent { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app intent implementation. The following example shows an app intent that conforms to the `.whiteboard.updateBoard` schema:

```swift
@AppIntent(schema: .whiteboard.updateBoard)
struct UpdateCanvasBoardIntent: AppIntent {
    @Parameter
    var target: CanvasEntity

    @Parameter
    var title: String?

    func perform() async throws -> some IntentResult {
        .result()
    }
}
```

For more information about the `.whiteboard` app intent domain, see [Whiteboard](../../app-schema-domain-whiteboard.md). For general information about app intent domains, see [Making actions and content discoverable by Apple Intelligence](../../making-actions-and-content-discoverable-by-apple-intelligence.md).
