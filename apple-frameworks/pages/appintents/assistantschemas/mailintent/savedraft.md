> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/mailintent/savedraft](https://developer.apple.com/documentation/appintents/assistantschemas/mailintent/savedraft)

# saveDraft

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The app intent conforms to the schema for saving an email draft.

## Declaration

```swift
var saveDraft: some AssistantSchemas.Intent { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app intent implementation. The following example shows an app intent that conforms to the `.mail.saveDraft` schema:

```swift
@AppIntent(schema: .mail.saveDraft)
struct SaveDraftIntent: AppIntent {
    @Parameter var target: MailDraftEntity

    func perform() async throws -> some IntentResult {
        .result()
    }
}
```

For more information about the `.mail` app intent domain, see [Mail](../../app-schema-domain-mail.md). For general information about app intent domains, see [Making actions and content discoverable by Apple Intelligence](../../making-actions-and-content-discoverable-by-apple-intelligence.md).
