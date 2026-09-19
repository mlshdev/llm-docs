> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmdroppedframereason/info/cameramodeswitch

# CMDroppedFrameReason.Info.cameraModeSwitch

**Framework:** Core Media  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A discontinuity was caused by a camera mode switch.

## Declaration

```swift
case cameraModeSwitch
```

<a id="discussion"></a>

## Discussion

When the module providing sample buffers has experienced a discontinuity due to a camera mode switch. Short discontinuities of this type can occur when the session is configured for still image capture on some devices.
