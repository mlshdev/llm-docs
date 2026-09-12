> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/realityviewcameracontrols(_:)](https://developer.apple.com/documentation/swiftui/view/realityviewcameracontrols(_:))

# realityViewCameraControls(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

Adds gestures that control the position and direction of a virtual camera.

## Declaration

```swift
@MainActor @preconcurrency func realityViewCameraControls(_ controls: CameraControls) -> some View

```

<a id="discussion"></a>

## Discussion

You can use a drag gesture from a mouse, trackpad, or screen touches with iOS and iPadOS devices to `.tilt`, `.pan`, `.orbit`, or `.dolly` a virtual camera.

## See Also

### Configuring camera controls

- [realityViewCameraControls](../environmentvalues/realityviewcameracontrols.md): The camera controls for the reality view.
- [realityViewLayoutBehavior(\_:)](realityviewlayoutbehavior%28__%29.md): A view modifier that controls the frame sizing and content alignment behavior for `RealityView`
