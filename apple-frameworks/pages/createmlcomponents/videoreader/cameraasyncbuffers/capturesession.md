> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/videoreader/cameraasyncbuffers/capturesession

# captureSession

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 1.0+

The capture session.

## Declaration

```swift
var captureSession: AVCaptureSession { get }
```

<a id="discussion"></a>

## Discussion

You can use the capture session to create a preview with [AVCaptureVideoPreviewLayer](../../../avfoundation/avcapturevideopreviewlayer.md) and to configure the input device, for example switching the input camera.

```
let sequence = try await VideoReader.readCamera(configuration: configuration)
sequence.captureSession.beginConfiguration()
sequence.captureSession.removeInput(captureSession.inputs[0])
try sequence.captureSession.addInput(AVCaptureDeviceInput(device: camera))
sequence.captureSession.commitConfiguration()
```
