> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/track(_:camerainformation:image:)-3uuza](https://developer.apple.com/documentation/dockkit/dockaccessory/track(_:camerainformation:image:)-3uuza)

# track(\_:cameraInformation:image:)

**Framework:** DockKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Automatically generate and send tracking vectors to the device.

## Declaration

```swift
final func track(_ data: [DockAccessory.Observation], cameraInformation: DockAccessory.CameraInformation, image: CVPixelBuffer) async throws
```

## Parameters

- `data`: An array of [DockAccessory.Observation](observation.md) objects indicating the location of objects of interest in the frame.
- `cameraInformation`: The camera currently being used, and the orientation of the device.
- `image`: The captured camera image buffer.

<a id="discussion"></a>

## Discussion

The device receives tracking vectors based on manually constructed observations.

Disable system tracking, then supply the observations at a fixed rate between 10 and 30 times per second. Any other rate is unsupported. Calling this method without first disabling system tracking is a fatal error.

> **Throws**

> [DockKitError.notSupported](../dockkiterror/notsupported.md) if called on macOS.
