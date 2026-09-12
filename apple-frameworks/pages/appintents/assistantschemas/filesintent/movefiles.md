> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/filesintent/movefiles](https://developer.apple.com/documentation/appintents/assistantschemas/filesintent/movefiles)

# moveFiles

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The app intent conforms to the schema for moving a file.

## Declaration

```swift
var moveFiles: some AssistantSchemas.Intent { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app intent implementation. The following example shows an app intent that conforms to the `.files.moveFiles` schema:

```swift
@AppIntent(schema: .files.moveFiles)
struct MoveFilesIntent: AppIntent {
    @Parameter
    var entities: [ExampleFileEntity]

    @Parameter
    var destinationFolder: ExampleFileEntity

    func perform() async throws -> some IntentResult {
        .result()
    }
}
```

For more information about the `.files` app intent domain, see [Files](../../app-schema-domain-files.md). For general information about app intent domains, see [Making actions and content discoverable by Apple Intelligence](../../making-actions-and-content-discoverable-by-apple-intelligence.md).
