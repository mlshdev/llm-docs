> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/cameraenum/capturedevice](https://developer.apple.com/documentation/appintents/assistantschemas/cameraenum/capturedevice)

# captureDevice

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The device or camera for capturing a photo or video.

## Declaration

```swift
var captureDevice: some AssistantSchemas.Enum { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app enum implementation. The following example shows an app enum that conforms to the `.camera.captureDevice` schema:

```swift
@AppEnum(schema: .camera.captureDevice)
enum CaptureDevice: AppEnum {
    case front
    case back

    static var caseDisplayRepresentations: [CaptureDevice: AppIntents.DisplayRepresentation] = [
        .front: "Front",
        .back: "Back",
    ]
}
```

For more information about the `.camera` app intent domain, see [Camera](../../app-schema-domain-camera.md). For general information about app intent domains, see [Making actions and content discoverable by Apple Intelligence](../../making-actions-and-content-discoverable-by-apple-intelligence.md).
