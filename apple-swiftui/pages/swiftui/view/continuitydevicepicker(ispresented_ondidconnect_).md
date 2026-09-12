> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/continuitydevicepicker(ispresented:ondidconnect:)](https://developer.apple.com/documentation/swiftui/view/continuitydevicepicker(ispresented:ondidconnect:))

# continuityDevicePicker(isPresented:onDidConnect:)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 17.0+

A `continuityDevicePicker` should be used to discover and connect nearby continuity device through a button interface or other form of activation. On tvOS, this presents a fullscreen continuity device picker experience when selected. The modal view covers as much the screen of `self` as possible when a given condition is true.

## Declaration

```swift
@MainActor @preconcurrency func continuityDevicePicker(isPresented: Binding<Bool>, onDidConnect: ((AVContinuityDevice?) -> Void)? = nil) -> some View

```

## Parameters

- `isPresented`: A `Binding` to whether the modal view is presented.
- `onDidConnect`: A closure executed when the picker successfully, connects AVContinuityDevice or nil if cancelled by a user.

## See Also

### Displaying media

- [CameraView](https://developer.apple.com/documentation/homekit/cameraview): A SwiftUI view into which a video stream or an image snapshot is rendered.
- [NowPlayingView](https://developer.apple.com/documentation/watchkit/nowplayingview): A view that displays the system’s Now Playing interface so that the user can control audio.
- [VideoPlayer](https://developer.apple.com/documentation/avkit/videoplayer): A view that displays content from a player and a native user interface to control playback.
- [cameraAnchor(isActive:)](cameraanchor%28isactive_%29.md): Specifies the view that should act as the virtual camera for Apple Vision Pro 2D Persona stream.
- [foveatedStreamingPauseSheet(session:)](foveatedstreamingpausesheet%28session_%29.md): Tells the system to present a sheet with controls for resuming or ending the foveated streaming session when it pauses.
