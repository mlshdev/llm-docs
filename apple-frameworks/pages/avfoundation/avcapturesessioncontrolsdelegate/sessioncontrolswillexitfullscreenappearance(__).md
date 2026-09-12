> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesessioncontrolsdelegate/sessioncontrolswillexitfullscreenappearance(_:)](https://developer.apple.com/documentation/avfoundation/avcapturesessioncontrolsdelegate/sessioncontrolswillexitfullscreenappearance(_:))

# sessionControlsWillExitFullscreenAppearance(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Tells the delegate when a capture session’s controls are about to exit a fullscreen appearance.

## Declaration

```swift
func sessionControlsWillExitFullscreenAppearance(_ session: AVCaptureSession)
```

## Parameters

- `session`: The capture session with controls that are exiting a fullscreen appearance.

<a id="Discussion"></a>

## Discussion

When your app receives this callback, it should resume showing portions of the interface it hid when controls entered a fullscreen appearance.

The system calls this method before [sessionControlsDidBecomeInactive(\_:)](sessioncontrolsdidbecomeinactive%28__%29.md).

## See Also

### Responding to control events

- [sessionControlsDidBecomeActive(\_:)](sessioncontrolsdidbecomeactive%28__%29.md): Tells the delegate when a capture session’s controls become active and available for interaction.
- [sessionControlsWillEnterFullscreenAppearance(\_:)](sessioncontrolswillenterfullscreenappearance%28__%29.md): Tells the delegate when a capture session’s controls are about to enter a fullscreen appearance.
- [sessionControlsDidBecomeInactive(\_:)](sessioncontrolsdidbecomeinactive%28__%29.md): Tells the delegate when a capture session’s controls become inactive and unavailable for interaction.

# sessionControlsWillExitFullscreenAppearance: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Tells the delegate when a capture session’s controls are about to exit a fullscreen appearance.

## Declaration

```objectivec
- (void) sessionControlsWillExitFullscreenAppearance:(AVCaptureSession *) session;
```

## Parameters

- `session`: The capture session with controls that are exiting a fullscreen appearance.

<a id="Discussion"></a>

## Discussion

When your app receives this callback, it should resume showing portions of the interface it hid when controls entered a fullscreen appearance.

The system calls this method before [sessionControlsDidBecomeInactive:](sessioncontrolsdidbecomeinactive%28__%29.md).

## See Also

### Responding to control events

- [sessionControlsDidBecomeActive:](sessioncontrolsdidbecomeactive%28__%29.md): Tells the delegate when a capture session’s controls become active and available for interaction.
- [sessionControlsWillEnterFullscreenAppearance:](sessioncontrolswillenterfullscreenappearance%28__%29.md): Tells the delegate when a capture session’s controls are about to enter a fullscreen appearance.
- [sessionControlsDidBecomeInactive:](sessioncontrolsdidbecomeinactive%28__%29.md): Tells the delegate when a capture session’s controls become inactive and unavailable for interaction.
