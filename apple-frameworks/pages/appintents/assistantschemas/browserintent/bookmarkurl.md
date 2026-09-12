> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/browserintent/bookmarkurl](https://developer.apple.com/documentation/appintents/assistantschemas/browserintent/bookmarkurl)

# bookmarkURL

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The app intent conforms to the schema for creating a bookmark for a URL.

## Declaration

```swift
var bookmarkURL: some AssistantSchemas.Intent { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app intent implementation. The following example shows an app intent that conforms to the `.browser.bookmarkURL` schema:

```swift
@AppIntent(schema: .browser.bookmarkURL)
struct BookmarkURLIntent: AppIntent {
    @Parameter
    var name: String?

    @Parameter
    var url: URL

    func perform() async throws -> some ReturnsValue<BookmarkEntity> {
        .result(value: BookmarkEntity())
    }
}
```

For more information about the `.browser` app intent domain, see [Browser](../../app-schema-domain-browser.md). For general information about app intent domains, see [Making actions and content discoverable by Apple Intelligence](../../making-actions-and-content-discoverable-by-apple-intelligence.md).
