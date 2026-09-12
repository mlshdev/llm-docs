> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_maxh264slicebytes](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_maxh264slicebytes)

# kVTCompressionPropertyKey_MaxH264SliceBytes (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The maximum slice size for H.264 encoding.

## Declaration

```swift
let kVTCompressionPropertyKey_MaxH264SliceBytes: CFString
```

<a id="Discussion"></a>

## Discussion

If supported by an H.264 encoder, the value limits the size in bytes of slices produced by the encoder, where possible. By default, no limit is specified.  A value of zero implies default behavior.

## See Also

### Runtime Restrictions

- [kVTCompressionPropertyKey_MaxFrameDelayCount](kvtcompressionpropertykey_maxframedelaycount.md): The maximum number of frames that a compressor is allowed to hold before it must output a compressed frame.
- [kVTCompressionPropertyKey_MaximizePowerEfficiency](kvtcompressionpropertykey_maximizepowerefficiency.md)
- [kVTCompressionPropertyKey_RealTime](kvtcompressionpropertykey_realtime.md): A Boolean value indicating whether it’s recommended that the video encoder perform compression in real time.

# kVTCompressionPropertyKey_MaxH264SliceBytes (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The maximum slice size for H.264 encoding.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_MaxH264SliceBytes;
```

<a id="Discussion"></a>

## Discussion

If supported by an H.264 encoder, the value limits the size in bytes of slices produced by the encoder, where possible. By default, no limit is specified.  A value of zero implies default behavior.

## See Also

### Runtime Restrictions

- [kVTCompressionPropertyKey_MaxFrameDelayCount](kvtcompressionpropertykey_maxframedelaycount.md): The maximum number of frames that a compressor is allowed to hold before it must output a compressed frame.
- [kVTCompressionPropertyKey_MaximizePowerEfficiency](kvtcompressionpropertykey_maximizepowerefficiency.md)
- [kVTCompressionPropertyKey_RealTime](kvtcompressionpropertykey_realtime.md): A Boolean value indicating whether it’s recommended that the video encoder perform compression in real time.
