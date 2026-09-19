> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/objectcapturesession/error/directorynotempty(_:)

# ObjectCaptureSession.Error.directoryNotEmpty(\_:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+

We cannot continue a pre-existing capture, so if an output directory is provided that already exists and it is not empty, this error is thrown.

## Declaration

```swift
case directoryNotEmpty(URL)
```
