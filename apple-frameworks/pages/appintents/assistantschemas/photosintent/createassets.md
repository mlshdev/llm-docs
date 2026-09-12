> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/photosintent/createassets](https://developer.apple.com/documentation/appintents/assistantschemas/photosintent/createassets)

# createAssets

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The app intent conforms to the schema for creating an asset.

## Declaration

```swift
var createAssets: some AssistantSchemas.Intent { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app intent implementation. The following example shows an app intent that conforms to the `.photos.createAssets` schema:

```swift
@AppIntent(schema: .photos.createAssets)
struct CreateMediaAssetsIntent: AppIntent {
    @Parameter
    var files: [IntentFile]

    // Return a set of assets once created.
    func perform() async throws -> some ReturnsValue<[PhotoEntity]> {
        .result(value: [PhotoEntity()])
    }
}
```

For more information about the `.photos` app intent domain, see [Photos](../../app-schema-domain-photos.md). For general information about app intent domains, see [Making actions and content discoverable by Apple Intelligence](../../making-actions-and-content-discoverable-by-apple-intelligence.md).
