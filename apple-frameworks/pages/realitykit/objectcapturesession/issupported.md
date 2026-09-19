> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/objectcapturesession/issupported

# isSupported

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+

A Boolean that indicates whether the current device supports object capture sessions.

## Declaration

```swift
@MainActor static var isSupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

Before creating an object capture session, check this value to make sure the current device supports the feature. If `false`, attempting to create an `ObjectCaptureSession` will result in a runtime error.
