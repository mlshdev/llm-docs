> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataobject/objecttype/cinematicvideometadata](https://developer.apple.com/documentation/avfoundation/avmetadataobject/objecttype/cinematicvideometadata)

# cinematicVideoMetadata (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

A constant that identifies Cinematic video metadata for post-capture Cinematic video editing.

## Declaration

```swift
static let cinematicVideoMetadata: AVMetadataObject.ObjectType
```

<a id="discussion"></a>

## Discussion

This metadata object type is only available when the source [AVCaptureDevice](../../avcapturedevice.md)’s `activeFormat` has `AVCaptureDeviceFormat/isCinematicVideoMetadataCaptureSupported` equal to `true`. It can therefore appear and disappear from [availableMetadataObjectTypes](../../avcapturemetadataoutput/availablemetadataobjecttypes.md) as the active format changes; observers should not assume it is statically available for the lifetime of the session.

# AVMetadataObjectTypeCinematicVideoMetadata (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

A constant that identifies Cinematic video metadata for post-capture Cinematic video editing.

## Declaration

```objectivec
extern AVMetadataObjectType const AVMetadataObjectTypeCinematicVideoMetadata;
```

<a id="discussion"></a>

## Discussion

This metadata object type is only available when the source [AVCaptureDevice](../../avcapturedevice.md)’s `activeFormat` has `AVCaptureDeviceFormat/isCinematicVideoMetadataCaptureSupported` equal to `true`. It can therefore appear and disappear from [availableMetadataObjectTypes](../../avcapturemetadataoutput/availablemetadataobjecttypes.md) as the active format changes; observers should not assume it is statically available for the lifetime of the session.
