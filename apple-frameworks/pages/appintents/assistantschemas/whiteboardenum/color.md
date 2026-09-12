> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/whiteboardenum/color](https://developer.apple.com/documentation/appintents/assistantschemas/whiteboardenum/color)

# color

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The color of a whiteboard canvas.

## Declaration

```swift
var color: some AssistantSchemas.Enum { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app enum implementation. The following example shows an app enum that conforms to the `.whiteboard.color` schema:

```swift
@AppEnum(schema: .whiteboard.color)
enum CanvasColor: AppEnum {
    case red
    case blue

    static var caseDisplayRepresentations: [CanvasColor: AppIntents.DisplayRepresentation] = [
        .red: "Red",
        .blue: "Blue",
    ]
}
```

For more information about the `.whiteboard` app intent domain, see [Whiteboard](../../app-schema-domain-whiteboard.md). For general information about app intent domains, see [Making actions and content discoverable by Apple Intelligence](../../making-actions-and-content-discoverable-by-apple-intelligence.md).
