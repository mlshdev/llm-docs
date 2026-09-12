> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/photosintent/openasset](https://developer.apple.com/documentation/appintents/assistantschemas/photosintent/openasset)

# openAsset

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The app intent conforms to the schema for opening an asset.

## Declaration

```swift
var openAsset: some AssistantSchemas.Intent { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app intent implementation. The following example shows an app intent that conforms to the `.photos.openAsset` schema:

```swift
@AppIntent(schema: .photos.openAsset)
struct OpenMediaAssetIntent: OpenIntent {
    @Parameter
    var target: PhotoEntity

    func perform() async throws -> some IntentResult {
        .result()
    }
}
```

For more information about the `.photos` app intent domain, see [Photos](../../app-schema-domain-photos.md). For general information about app intent domains, see [Making actions and content discoverable by Apple Intelligence](../../making-actions-and-content-discoverable-by-apple-intelligence.md).
