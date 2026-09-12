> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/oncameracaptureevent(isenabled:primaryaction:secondaryaction:)](https://developer.apple.com/documentation/swiftui/view/oncameracaptureevent(isenabled:primaryaction:secondaryaction:))

# onCameraCaptureEvent(isEnabled:primaryAction:secondaryAction:)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

Used to register actions triggered by system capture events.

## Declaration

```swift
@MainActor @preconcurrency func onCameraCaptureEvent(isEnabled: Bool = true, primaryAction: @escaping (AVCaptureEvent) -> Void, secondaryAction: @escaping (AVCaptureEvent) -> Void) -> some View

```

## Parameters

- `isEnabled`: A boolean value indicating whether capture events trigger the provided actions or not. Set this value to `false` when your application cannot or will not respond to the action callbacks to avoid non-interactive buttons or UI elements.
- `primaryAction`: An event handler called when a primary capture event is triggered.
- `secondaryAction`: An event handler called when a secondary capture event is triggered.

<a id="discussion"></a>

## Discussion

Events may or may not be sent to applications based on the current system state. Backgrounded applications will not receive events, additionally events will only be sent to applications that are actively using the camera.

This API is for media capture use cases only.

## See Also

### Responding to capture events

- [onCameraCaptureEvent(isEnabled:action:)](oncameracaptureevent%28isenabled_action_%29.md): Used to register an action triggered by system capture events.
