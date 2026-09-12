> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/spreadsheetintent/addvideotosheet](https://developer.apple.com/documentation/appintents/assistantschemas/spreadsheetintent/addvideotosheet)

# addVideoToSheet

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The app intent conforms to the schema for adding a video to a sheet in a spreadsheet.

## Declaration

```swift
var addVideoToSheet: some AssistantSchemas.Intent { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app intent implementation. The following example shows an app intent that conforms to the `.spreadsheet.addVideoToSheet` schema:

```swift
@AppIntent(schema: .spreadsheet.addVideoToSheet)
struct AddVideoToSheetIntent: AppIntent {
    @Parameter
    var target: SheetEntity

    @Parameter
    var audio: IntentFile

    func perform() async throws -> some IntentResult {
        .result()
    }
```

For more information about the `.spreadsheet` app intent domain, see [Spreadsheet](../../app-schema-domain-spreadsheet.md). For general information about app intent domains, see [Making actions and content discoverable by Apple Intelligence](../../making-actions-and-content-discoverable-by-apple-intelligence.md).
