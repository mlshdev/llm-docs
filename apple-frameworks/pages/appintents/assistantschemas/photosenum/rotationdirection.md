> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/photosenum/rotationdirection](https://developer.apple.com/documentation/appintents/assistantschemas/photosenum/rotationdirection)

# rotationDirection

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The direction for rotating a photo or video.

## Declaration

```swift
var rotationDirection: some AssistantSchemas.Enum { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app enum implementation. The following example shows an app enum that conforms to the `.photos.rotationDirection` schema:

```swift
@AppEnum(schema: .photos.rotationDirection)
enum PhotoRotationDirection: AppEnum {
    case clockwise

    static var caseDisplayRepresentations: [PhotoRotationDirection: AppIntents.DisplayRepresentation] = [
        .clockwise: "Clockwise",
    ]
}
```

For more information about the `.photos` app intent domain, see [Photos](../../app-schema-domain-photos.md). For general information about app intent domains, see [Making actions and content discoverable by Apple Intelligence](../../making-actions-and-content-discoverable-by-apple-intelligence.md).
