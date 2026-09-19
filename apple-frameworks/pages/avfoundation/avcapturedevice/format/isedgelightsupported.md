> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/isedgelightsupported

# isEdgeLightSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+

Indicates whether the format supports the Edge Light feature.

## Declaration

```swift
var isEdgeLightSupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

This property returns YES if the device supports the Edge Light feature. See +AVCaptureDevice.edgeLightEnabled.

# edgeLightSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+

Indicates whether the format supports the Edge Light feature.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isEdgeLightSupported) BOOL edgeLightSupported;
```

<a id="discussion"></a>

## Discussion

This property returns YES if the device supports the Edge Light feature. See +AVCaptureDevice.edgeLightEnabled.
