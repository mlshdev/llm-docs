> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/booksintent/updatesettings](https://developer.apple.com/documentation/appintents/assistantschemas/booksintent/updatesettings)

# updateSettings

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The app intent conforms to the schema for updating settings for an ebook.

## Declaration

```swift
var updateSettings: some AssistantSchemas.Intent { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app intent implementation. The following example shows an app intent that conforms to the `.books.updateSettings` schema:

```swift
@AppIntent(schema: .books.updateSettings)
struct UpdateBookSettingsIntent: AppIntent {
    @Parameter
    var target: BookSettingsEntity

    @Parameter
    var page: Int?

    @Parameter
    var font: BookFont?

    @Parameter
    var theme: BookTheme?

    @Parameter
    var pageNavigationSetting: BookPageNavigationSetting?

    @Parameter
    var isTextJustified: Bool?

    @Parameter
    var isAllowMultipleColumns: Bool?

    func perform() async throws -> some IntentResult {
        .result()
    }
}
```

For more information about the `.books` app intent domain, see [Books](../../app-schema-domain-books.md). For general information about app intent domains, see [Making actions and content discoverable by Apple Intelligence](../../making-actions-and-content-discoverable-by-apple-intelligence.md).
