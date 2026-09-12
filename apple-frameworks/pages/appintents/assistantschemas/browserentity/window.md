> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/browserentity/window](https://developer.apple.com/documentation/appintents/assistantschemas/browserentity/window)

# window

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The app entity describes a browser window.

## Declaration

```swift
var window: some AssistantSchemas.Entity { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app entity implementation. The following example shows an app entity that conforms to the `.browser.window` schema:

```swift
@AppEntity(schema: .browser.window)
struct WindowEntity: AppEntity {
    static var defaultQuery = Query()

    let id = UUID()

    @Property
    var tabs: [TabEntity]

    @Property
    var isPrivate: Bool

    var displayRepresentation: AppIntents.DisplayRepresentation { "Window" }
    struct Query: EntityStringQuery {
        func entities(for identifiers: [WindowEntity.ID]) async throws -> [WindowEntity] { [] }
        func entities(matching string: String) async throws -> [WindowEntity] { [] }
    }
}
```

For more information about the `.browser` app intent domain, see [Browser](../../app-schema-domain-browser.md). For general information about app intent domains, see [Making actions and content discoverable by Apple Intelligence](../../making-actions-and-content-discoverable-by-apple-intelligence.md).
