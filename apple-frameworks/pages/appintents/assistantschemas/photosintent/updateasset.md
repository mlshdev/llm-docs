> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/photosintent/updateasset](https://developer.apple.com/documentation/appintents/assistantschemas/photosintent/updateasset)

# updateAsset

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The app intent conforms to the schema for updating an asset.

## Declaration

```swift
var updateAsset: some AssistantSchemas.Intent { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app intent implementation. The following example shows an app intent that conforms to the `.photos.updateAsset` schema:

```swift
@AppIntent(schema: .photos.updateAsset)
struct UpdateMediaAssetIntent: AppIntent {
    @Parameter
    var target: [PhotoEntity]

    @Parameter
    var name: String?

    @Parameter
    var isHidden: Bool?

    @Parameter
    var isFavorite: Bool?

    func perform() async throws -> some IntentResult {
        .result()
    }
}
```

For more information about the `.photos` app intent domain, see [Photos](../../app-schema-domain-photos.md). For general information about app intent domains, see [Making actions and content discoverable by Apple Intelligence](../../making-actions-and-content-discoverable-by-apple-intelligence.md).
