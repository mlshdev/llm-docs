> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/browserintent/createwindow](https://developer.apple.com/documentation/appintents/assistantschemas/browserintent/createwindow)

# createWindow

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The app intent conforms to the schema for creating a new browser window.

## Declaration

```swift
var createWindow: some AssistantSchemas.Intent { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app intent implementation. The following example shows an app intent that conforms to the `.browser.createWindow` schema:

```swift
@AppIntent(schema: .browser.createWindow)
struct CreateWindowIntent: AppIntent {
    @Parameter
    var url: URL?

    @Parameter
    var isPrivate: Bool

    func perform() async throws -> some ReturnsValue<WindowEntity> {
        .result(value: WindowEntity())
    }
}
```

For more information about the `.browser` app intent domain, see [Browser](../../app-schema-domain-browser.md). For general information about app intent domains, see [Making actions and content discoverable by Apple Intelligence](../../making-actions-and-content-discoverable-by-apple-intelligence.md).
