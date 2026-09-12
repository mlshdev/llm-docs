> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/booksenum/relativefontchange](https://developer.apple.com/documentation/appintents/assistantschemas/booksenum/relativefontchange)

# relativeFontChange

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The relative change of the font for rendering a book.

## Declaration

```swift
var relativeFontChange: some AssistantSchemas.Enum { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app enum implementation. The following example shows an app enum that conforms to the `.books.relativeFontChange` schema:

```swift
@AppEnum(schema: .books.relativeFontChange)
enum BookRelativeFontChange: AppEnum {
    case increase
    case decrease

    static var caseDisplayRepresentations: [BookRelativeFontChange: AppIntents.DisplayRepresentation] = [
        .increase: "Increase",
        .decrease: "Decrease",
    ]
}
```

For more information about the `.books` app intent domain, see [Books](../../app-schema-domain-books.md). For general information about app intent domains, see [Making actions and content discoverable by Apple Intelligence](../../making-actions-and-content-discoverable-by-apple-intelligence.md).
