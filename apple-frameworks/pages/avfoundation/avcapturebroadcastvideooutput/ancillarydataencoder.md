> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturebroadcastvideooutput/ancillarydataencoder

# ancillaryDataEncoder (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

The AVCaptureAncillaryDataEncoder that sends per-frame lens/camera/user-defined acquisition data along with the video buffer.

## Declaration

```swift
var ancillaryDataEncoder: AVCaptureAncillaryDataEncoder { get }
```

<a id="discussion"></a>

## Discussion

This property provides access to the ancillary data encoder to set user-defined data or disable ancillary data encoding entirely.

# ancillaryDataEncoder (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

The AVCaptureAncillaryDataEncoder that sends per-frame lens/camera/user-defined acquisition data along with the video buffer.

## Declaration

```objectivec
@property (nonatomic, readonly) AVCaptureAncillaryDataEncoder * ancillaryDataEncoder;
```

<a id="discussion"></a>

## Discussion

This property provides access to the ancillary data encoder to set user-defined data or disable ancillary data encoding entirely.
