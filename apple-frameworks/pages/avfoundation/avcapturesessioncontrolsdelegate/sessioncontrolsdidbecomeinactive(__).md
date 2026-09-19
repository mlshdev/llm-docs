> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturesessioncontrolsdelegate/sessioncontrolsdidbecomeinactive(_:)

# sessionControlsDidBecomeInactive(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Tells the delegate when a capture session’s controls become inactive and unavailable for interaction.

## Declaration

```swift
func sessionControlsDidBecomeInactive(_ session: AVCaptureSession)
```

## Parameters

- `session`: The capture session with inactive controls.

## See Also

### Responding to control events

- [sessionControlsDidBecomeActive(\_:)](sessioncontrolsdidbecomeactive%28__%29.md): Tells the delegate when a capture session’s controls become active and available for interaction.
- [sessionControlsWillEnterFullscreenAppearance(\_:)](sessioncontrolswillenterfullscreenappearance%28__%29.md): Tells the delegate when a capture session’s controls are about to enter a fullscreen appearance.
- [sessionControlsWillExitFullscreenAppearance(\_:)](sessioncontrolswillexitfullscreenappearance%28__%29.md): Tells the delegate when a capture session’s controls are about to exit a fullscreen appearance.

# sessionControlsDidBecomeInactive: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Tells the delegate when a capture session’s controls become inactive and unavailable for interaction.

## Declaration

```objectivec
- (void) sessionControlsDidBecomeInactive:(AVCaptureSession *) session;
```

## Parameters

- `session`: The capture session with inactive controls.

## See Also

### Responding to control events

- [sessionControlsDidBecomeActive:](sessioncontrolsdidbecomeactive%28__%29.md): Tells the delegate when a capture session’s controls become active and available for interaction.
- [sessionControlsWillEnterFullscreenAppearance:](sessioncontrolswillenterfullscreenappearance%28__%29.md): Tells the delegate when a capture session’s controls are about to enter a fullscreen appearance.
- [sessionControlsWillExitFullscreenAppearance:](sessioncontrolswillexitfullscreenappearance%28__%29.md): Tells the delegate when a capture session’s controls are about to exit a fullscreen appearance.
