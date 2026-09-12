> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/cameraintent/stopcapture](https://developer.apple.com/documentation/appintents/assistantschemas/cameraintent/stopcapture)

# stopCapture

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The app intent conforms to the schema for stopping the capture of a photo or video.

## Declaration

```swift
var stopCapture: some AssistantSchemas.Intent { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app intent implementation. The following example shows an app intent that conforms to the `.camera.stopCapture` schema:

```swift
@AppIntent(schema: .camera.stopCapture)
struct StopCaptureIntent: AppIntent {

    func perform() async throws -> some IntentResult {
        .result()
    }
}
```

For more information about the `.camera` app intent domain, see [Camera](../../app-schema-domain-camera.md). For general information about app intent domains, see [Making actions and content discoverable by Apple Intelligence](../../making-actions-and-content-discoverable-by-apple-intelligence.md).
