> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_maxframedelaycount](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_maxframedelaycount)

# kVTCompressionPropertyKey_MaxFrameDelayCount (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The maximum number of frames that a compressor is allowed to hold before it must output a compressed frame.

## Declaration

```swift
let kVTCompressionPropertyKey_MaxFrameDelayCount: CFString
```

<a id="Discussion"></a>

## Discussion

This value limits the number of frames that may be held in the compression window. If the maximum frame delay count is M, then before the call to encode frame N returns, frame N-M must have been emitted. The default is [kVTUnlimitedFrameDelayCount](kvtunlimitedframedelaycount.md), which sets no limit on the compression window.

## Topics

### Delay Counts

- [kVTUnlimitedFrameDelayCount](kvtunlimitedframedelaycount.md): Indicates that no limit should be set on the compression window.

## See Also

### Runtime Restrictions

- [kVTCompressionPropertyKey_MaxH264SliceBytes](kvtcompressionpropertykey_maxh264slicebytes.md): The maximum slice size for H.264 encoding.
- [kVTCompressionPropertyKey_MaximizePowerEfficiency](kvtcompressionpropertykey_maximizepowerefficiency.md)
- [kVTCompressionPropertyKey_RealTime](kvtcompressionpropertykey_realtime.md): A Boolean value indicating whether it’s recommended that the video encoder perform compression in real time.

# kVTCompressionPropertyKey_MaxFrameDelayCount (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The maximum number of frames that a compressor is allowed to hold before it must output a compressed frame.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_MaxFrameDelayCount;
```

<a id="Discussion"></a>

## Discussion

This value limits the number of frames that may be held in the compression window. If the maximum frame delay count is M, then before the call to encode frame N returns, frame N-M must have been emitted. The default is [kVTUnlimitedFrameDelayCount](kvtunlimitedframedelaycount.md), which sets no limit on the compression window.

## Topics

### Delay Counts

- [kVTUnlimitedFrameDelayCount](kvtunlimitedframedelaycount.md): Indicates that no limit should be set on the compression window.

## See Also

### Runtime Restrictions

- [kVTCompressionPropertyKey_MaxH264SliceBytes](kvtcompressionpropertykey_maxh264slicebytes.md): The maximum slice size for H.264 encoding.
- [kVTCompressionPropertyKey_MaximizePowerEfficiency](kvtcompressionpropertykey_maximizepowerefficiency.md)
- [kVTCompressionPropertyKey_RealTime](kvtcompressionpropertykey_realtime.md): A Boolean value indicating whether it’s recommended that the video encoder perform compression in real time.
