> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/iscinematicvideometadatacapturesupported](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/iscinematicvideometadatacapturesupported)

# isCinematicVideoMetadataCaptureSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Indicates whether the format supports Cinematic Video Metadata capture.

## Declaration

```swift
var isCinematicVideoMetadataCaptureSupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

This property returns `true` if the format supports capturing cinematic video metadata alongside video. The metadata enables post-capture cinematic video editing using the Cinematic framework.

# cinematicVideoMetadataCaptureSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Indicates whether the format supports Cinematic Video Metadata capture.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isCinematicVideoMetadataCaptureSupported) BOOL cinematicVideoMetadataCaptureSupported;
```

<a id="discussion"></a>

## Discussion

This property returns `true` if the format supports capturing cinematic video metadata alongside video. The metadata enables post-capture cinematic video editing using the Cinematic framework.
