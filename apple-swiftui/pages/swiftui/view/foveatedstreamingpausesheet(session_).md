> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/foveatedstreamingpausesheet(session:)](https://developer.apple.com/documentation/swiftui/view/foveatedstreamingpausesheet(session:))

# foveatedStreamingPauseSheet(session:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 26.4+

Tells the system to present a sheet with controls for resuming or ending the foveated streaming session when it pauses.

## Declaration

```swift
@MainActor @preconcurrency func foveatedStreamingPauseSheet(session: Binding<FoveatedStreamingSession?>) -> some View

```

## Parameters

- `session`: A binding to the foveated streaming session to display the pause sheet for. If `nil`, the system never displays the pause sheet.

<a id="discussion"></a>

## Discussion

Add this view modifier to inform the system that it should display UI for resuming the foveated streaming session when the person pauses the session. Otherwise, build your own UI that allows the person to resume the session by calling the `FoveatedStreamingSession/resume()` function.

## See Also

### Displaying media

- [CameraView](https://developer.apple.com/documentation/homekit/cameraview): A SwiftUI view into which a video stream or an image snapshot is rendered.
- [NowPlayingView](https://developer.apple.com/documentation/watchkit/nowplayingview): A view that displays the system’s Now Playing interface so that the user can control audio.
- [VideoPlayer](https://developer.apple.com/documentation/avkit/videoplayer): A view that displays content from a player and a native user interface to control playback.
- [continuityDevicePicker(isPresented:onDidConnect:)](continuitydevicepicker%28ispresented_ondidconnect_%29.md): A `continuityDevicePicker` should be used to discover and connect nearby continuity device through a button interface or other form of activation. On tvOS, this presents a fullscreen continuity device picker experience when selected. The modal view covers as much the screen of `self` as possible when a given condition is true.
- [cameraAnchor(isActive:)](cameraanchor%28isactive_%29.md): Specifies the view that should act as the virtual camera for Apple Vision Pro 2D Persona stream.
