> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/objectcapturesession/error/directorynotempty(_:)](https://developer.apple.com/documentation/realitykit/objectcapturesession/error/directorynotempty(_:))

# ObjectCaptureSession.Error.directoryNotEmpty(\_:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+

We cannot continue a pre-existing capture, so if an output directory is provided that already exists and it is not empty, this error is thrown.

## Declaration

```swift
case directoryNotEmpty(URL)
```
