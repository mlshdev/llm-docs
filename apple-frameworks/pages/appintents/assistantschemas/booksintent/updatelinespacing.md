> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/booksintent/updatelinespacing](https://developer.apple.com/documentation/appintents/assistantschemas/booksintent/updatelinespacing)

# updateLineSpacing

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The app intent conforms to the schema for updating the line spacing.

## Declaration

```swift
var updateLineSpacing: some AssistantSchemas.Intent { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app intent implementation. The following example shows an app intent that conforms to the `.books.updateLineSpacing` schema:

```swift
@AppIntent(schema: .books.updateLineSpacing)
struct UpdateBookLineSpacingIntent: AppIntent {
    @Parameter
    var target: BookSettingsEntity

    @Parameter
    var changeOperation: BookRelativeLineSpacingChange

    func perform() async throws -> some IntentResult {
        .result()
    }
}
For more information about the `.books` app intent domain,
see <doc:app-schema-domain-books>.
For general information about app intent domains, see <doc:making-actions-and-content-discoverable-by-apple-intelligence>.
```
