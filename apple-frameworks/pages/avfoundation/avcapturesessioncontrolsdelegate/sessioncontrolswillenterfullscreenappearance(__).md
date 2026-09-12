> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesessioncontrolsdelegate/sessioncontrolswillenterfullscreenappearance(_:)](https://developer.apple.com/documentation/avfoundation/avcapturesessioncontrolsdelegate/sessioncontrolswillenterfullscreenappearance(_:))

# sessionControlsWillEnterFullscreenAppearance(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Tells the delegate when a capture session’s controls are about to enter a fullscreen appearance.

## Declaration

```swift
func sessionControlsWillEnterFullscreenAppearance(_ session: AVCaptureSession)
```

## Parameters

- `session`: The capture session with controls that are entering a fullscreen appearance.

<a id="Discussion"></a>

## Discussion

When controls enter a fullscreen appearance, your app should hide portions of its user interface, including duplicative or unnecessary elements. Few onscreen elements should be visible so people can focus on their control interactions while viewing the camera preview unobstructed.

## See Also

### Responding to control events

- [sessionControlsDidBecomeActive(\_:)](sessioncontrolsdidbecomeactive%28__%29.md): Tells the delegate when a capture session’s controls become active and available for interaction.
- [sessionControlsWillExitFullscreenAppearance(\_:)](sessioncontrolswillexitfullscreenappearance%28__%29.md): Tells the delegate when a capture session’s controls are about to exit a fullscreen appearance.
- [sessionControlsDidBecomeInactive(\_:)](sessioncontrolsdidbecomeinactive%28__%29.md): Tells the delegate when a capture session’s controls become inactive and unavailable for interaction.

# sessionControlsWillEnterFullscreenAppearance: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Tells the delegate when a capture session’s controls are about to enter a fullscreen appearance.

## Declaration

```objectivec
- (void) sessionControlsWillEnterFullscreenAppearance:(AVCaptureSession *) session;
```

## Parameters

- `session`: The capture session with controls that are entering a fullscreen appearance.

<a id="Discussion"></a>

## Discussion

When controls enter a fullscreen appearance, your app should hide portions of its user interface, including duplicative or unnecessary elements. Few onscreen elements should be visible so people can focus on their control interactions while viewing the camera preview unobstructed.

## See Also

### Responding to control events

- [sessionControlsDidBecomeActive:](sessioncontrolsdidbecomeactive%28__%29.md): Tells the delegate when a capture session’s controls become active and available for interaction.
- [sessionControlsWillExitFullscreenAppearance:](sessioncontrolswillexitfullscreenappearance%28__%29.md): Tells the delegate when a capture session’s controls are about to exit a fullscreen appearance.
- [sessionControlsDidBecomeInactive:](sessioncontrolsdidbecomeinactive%28__%29.md): Tells the delegate when a capture session’s controls become inactive and unavailable for interaction.
