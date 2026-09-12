> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/objectcapturesession/configuration-swift.struct](https://developer.apple.com/documentation/realitykit/objectcapturesession/configuration-swift.struct)

# ObjectCaptureSession.Configuration

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+

The configuration options for the session which are passed into the `start(imagesDirectory:configuration:)` call.

## Declaration

```swift
struct Configuration
```

## Topics

### Initializers

- [init()](configuration-swift.struct/init%28%29.md)

### Instance Properties

- [checkpointDirectory](configuration-swift.struct/checkpointdirectory.md): An optional directory to store data about session progress which may be used to speed up on-device reconstruction by passing into the `PhotogrammetrySession.Configuration`. If you provide a value for `checkpointDirectory`, it also needs to point to an empty, writable directory. If the directory is not writable or already contains data, the session moves to the `.failed(Error)` state.
- [isOverCaptureEnabled](configuration-swift.struct/isovercaptureenabled.md): Enables the session to continue capturing even after the number of captured images exceeds `maximumNumberOfInputImages`. This setting is meant for use when the images are intended to be transferred to macOS for model reconstruction.
