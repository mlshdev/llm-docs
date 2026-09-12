> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesessioncontrolsdelegate/sessioncontrolsdidbecomeactive(_:)](https://developer.apple.com/documentation/avfoundation/avcapturesessioncontrolsdelegate/sessioncontrolsdidbecomeactive(_:))

# sessionControlsDidBecomeActive(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Tells the delegate when a capture session’s controls become active and available for interaction.

## Declaration

```swift
func sessionControlsDidBecomeActive(_ session: AVCaptureSession)
```

## Parameters

- `session`: The capture session with active controls.

## See Also

### Responding to control events

- [sessionControlsWillEnterFullscreenAppearance(\_:)](sessioncontrolswillenterfullscreenappearance%28__%29.md): Tells the delegate when a capture session’s controls are about to enter a fullscreen appearance.
- [sessionControlsWillExitFullscreenAppearance(\_:)](sessioncontrolswillexitfullscreenappearance%28__%29.md): Tells the delegate when a capture session’s controls are about to exit a fullscreen appearance.
- [sessionControlsDidBecomeInactive(\_:)](sessioncontrolsdidbecomeinactive%28__%29.md): Tells the delegate when a capture session’s controls become inactive and unavailable for interaction.

# sessionControlsDidBecomeActive: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Tells the delegate when a capture session’s controls become active and available for interaction.

## Declaration

```objectivec
- (void) sessionControlsDidBecomeActive:(AVCaptureSession *) session;
```

## Parameters

- `session`: The capture session with active controls.

## See Also

### Responding to control events

- [sessionControlsWillEnterFullscreenAppearance:](sessioncontrolswillenterfullscreenappearance%28__%29.md): Tells the delegate when a capture session’s controls are about to enter a fullscreen appearance.
- [sessionControlsWillExitFullscreenAppearance:](sessioncontrolswillexitfullscreenappearance%28__%29.md): Tells the delegate when a capture session’s controls are about to exit a fullscreen appearance.
- [sessionControlsDidBecomeInactive:](sessioncontrolsdidbecomeinactive%28__%29.md): Tells the delegate when a capture session’s controls become inactive and unavailable for interaction.
