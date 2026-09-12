> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmstillimagelensstabilization/outofrange](https://developer.apple.com/documentation/coremedia/cmstillimagelensstabilization/outofrange)

# CMStillImageLensStabilization.outOfRange

**Framework:** Core Media  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The motion of the device or duration of the capture was outside of what the stabilization mechanism could support.

## Declaration

```swift
case outOfRange
```

<a id="discussion"></a>

## Discussion

The value of kCMSampleBufferAttachmentKey_StillImageLensStabilizationInfo if the module stabilizing the lens was unable to compensate for the movement.
