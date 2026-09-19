> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dockkit/dockaccessorymanager/setsystemtrackingenabled(_:)

# setSystemTrackingEnabled(\_:)

**Framework:** DockKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Enable and disable system tracking for camera-enabled apps.

## Declaration

```swift
func setSystemTrackingEnabled(_ isEnabled: Bool) async throws
```

## Mentioned In

- [Modify rotation and positioning programmatically](../modify-rotation-and-positioning-behavior-programmatically.md)

<a id="discussion"></a>

## Discussion

DockKit enables system tracking by default, and any camera stream automatically generates and sends tracking events when a device docks to a compatible dock accessory.

Always set this value to `false` before performing your own custom tracking.

> **Throws**

> [DockKitError.notSupported](../dockkiterror/notsupported.md) if called on macOS.

## See Also

### Changing tracking behavior

- [isSystemTrackingEnabled](issystemtrackingenabled.md): An indication of whether system tracking is enabled.
