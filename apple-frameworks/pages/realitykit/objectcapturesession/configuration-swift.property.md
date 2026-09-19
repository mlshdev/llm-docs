> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/objectcapturesession/configuration-swift.property

# configuration

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+

The read-only `Configuration` used to start the capture session.  The configuration can be set by passing it to the `start()` call and it remains immutable after the session is started successfully.

## Declaration

```swift
@MainActor var configuration: ObjectCaptureSession.Configuration { get }
```
