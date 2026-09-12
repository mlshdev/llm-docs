> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/cameraenum/capturemode](https://developer.apple.com/documentation/appintents/assistantschemas/cameraenum/capturemode)

# captureMode

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The capture mode for taking a photo or video.

## Declaration

```swift
var captureMode: some AssistantSchemas.Enum { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app enum implementation. The following example shows an app enum that conforms to the `.camera.captureMode` schema:

```swift
@AppEnum(schema: .camera.captureMode)
enum CaptureMode: AppEnum {
    case selfie
    case video

    static var caseDisplayRepresentations: [CaptureMode: AppIntents.DisplayRepresentation] = [
        .selfie: "Selfie",
        .video: "Video",
    ]
}
```

For more information about the `.camera` app intent domain, see [Camera](../../app-schema-domain-camera.md). For general information about app intent domains, see [Making actions and content discoverable by Apple Intelligence](../../making-actions-and-content-discoverable-by-apple-intelligence.md).
