> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/oncameracaptureevent(isenabled:defaultsounddisabled:action:)](https://developer.apple.com/documentation/swiftui/view/oncameracaptureevent(isenabled:defaultsounddisabled:action:))

# onCameraCaptureEvent(isEnabled:defaultSoundDisabled:action:)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Used to register an action triggered by system capture events.

## Declaration

```swift
@MainActor @preconcurrency func onCameraCaptureEvent(isEnabled: Bool = true, defaultSoundDisabled: Bool = false, action: @escaping (AVCaptureEvent) -> Void) -> some View

```

## Parameters

- `isEnabled`: A boolean value indicating whether capture events trigger the provided action or not. Set this value to `false` when your application cannot or will not respond to the action callbacks to avoid non-interactive buttons or UI elements.
- `defaultSoundDisabled`: A boolean value indicating whether or not the default sound is disabled.
- `action`: An event handler called when either the primary or secondary events are triggered.

<a id="discussion"></a>

## Discussion

Events may or may not be sent to applications based on the current system state. Backgrounded applications will not receive events, additionally events will only be sent to applications that are actively using the camera.

If an event from one source begins, then events from other sources will be ignored until the first event ends or is cancelled.

This API is for media capture use cases only.

## See Also

### Camera

- [onCameraCaptureEvent(isEnabled:action:)](oncameracaptureevent%28isenabled_action_%29.md): Used to register an action triggered by system capture events.
- [onCameraCaptureEvent(isEnabled:defaultSoundDisabled:primaryAction:secondaryAction:)](oncameracaptureevent%28isenabled_defaultsounddisabled_primaryaction_secondaryaction_%29.md): Used to register actions triggered by system capture events.
- [onCameraCaptureEvent(isEnabled:primaryAction:secondaryAction:)](oncameracaptureevent%28isenabled_primaryaction_secondaryaction_%29.md): Used to register actions triggered by system capture events.
- [cameraAnchor(isActive:)](cameraanchor%28isactive_%29.md): Specifies the view that should act as the virtual camera for Apple Vision Pro 2D Persona stream.
