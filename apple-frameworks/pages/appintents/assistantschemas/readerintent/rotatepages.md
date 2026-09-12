> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/readerintent/rotatepages](https://developer.apple.com/documentation/appintents/assistantschemas/readerintent/rotatepages)

# rotatePages

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The app intent conforms to the schema for rotating a page.

## Declaration

```swift
var rotatePages: some AssistantSchemas.Intent { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app intent implementation. The following example shows an app intent that conforms to the `.reader.rotatePages` schema:

```swift
@AppIntent(schema: .reader.rotatePages)
struct ReaderRotatePagesIntent: AppIntent {
    @Parameter
    var pages: [ReaderPageEntity]

    @Parameter
    var isClockwise: Bool

    func perform() async throws -> some IntentResult & ReturnsValue<[ReaderPageEntity]> {
        return .result(value: [ReaderPageEntity()])
    }
}
```

For more information about the `.reader` app intent domain, see [Reader](../../app-schema-domain-reader.md). For general information about app intent domains, see [Making actions and content discoverable by Apple Intelligence](../../making-actions-and-content-discoverable-by-apple-intelligence.md).
